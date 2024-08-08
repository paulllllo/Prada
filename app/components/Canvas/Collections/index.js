import { Plane, Transform } from 'ogl'
import Media from './Media.js'
import { map } from 'lodash'
import GSAP from 'gsap'
import Prefix from 'prefix'

export default class Collections {
    constructor ({ gl, scene, sizes }) {
        this.gl = gl
        this.scene = scene
        this.sizes = sizes

        this.group = new Transform()

        this.transformPrefix = Prefix('transform')

        this.mediaElements = document.querySelectorAll('.collections_gallery_media')
        this.collectionArticles = document.querySelectorAll('.collections_article')

        this.galleryElement = document.querySelector('.collections_gallery')
        this.galleryWrapperElement = document.querySelector('.collections_gallery_wrapper')

        this.titlesElement = document.querySelector('.collections_titles')

        this.activeFocusClass = 'collections_article--active'

        this.scroll = {
            current: 0,
            target: 0,
            start: 0,
            velocity: 0.5,
            lerp: 0.1
        }

        this.createGeometry()
        this.createGallery()

        this.group.setParent(this.scene)

        this.show()
    }

    createGeometry () {
        this.geometry = new Plane(this.gl)
    }

    createGallery () {
        this.medias = map(this.mediaElements, (element, index) => {
            return new Media({
                element,
                geometry: this.geometry,
                gl: this.gl,
                scene: this.group,
                sizes: this.sizes,
                index
            })
        })
    }

    //          Show
    show () {
        map(this.medias, (media) => {
            media.show()
        })
    }

    hide () {
        map(this.medias, (media) => {
            media.hide()
        })
    }

    //                   Events

    onResize (event) {
        // console.log('Home onResize()')
        this.scroll.current = 0

        this.bounds = this.galleryWrapperElement.getBoundingClientRect()

        this.sizes = event.sizes

        this.width = this.bounds.width / window.innerWidth * this.sizes.width

        this.scroll.start = this.scroll.target = 0

        map(this.medias, media => media.onResize(event, this.scroll.current))

        this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
    }

    onTouchDown ({ x, y }) {
        this.scroll.start = this.scroll.current
    }

    onTouchMove ({ x, y }) {
        const distance = x.start - x.end

        this.scroll.target = this.scroll.start - distance
    }

    onTouchUp ({ x, y }) {}

    onWheel ({ pixelY }) {
        this.scroll.target += pixelY
    }

    onChangeFocus (index) {
        this.index = index

        const selectedCollection = parseInt(this.mediaElements[this.index].getAttribute('data-index'))

        // map through all collection information
        // add show class to element that matches the selectedCollection index
        map(this.collectionArticles, (element, elementIndex) => {
            if (elementIndex === selectedCollection) {
                element.classList.add(this.activeFocusClass)
            } else {
                element.classList.remove(this.activeFocusClass)
            }
        })

        this.titlesElement.style[this.transformPrefix] = `translateY(${70 * selectedCollection}%) translate(-50%, -50%) rotate(-90deg)`
    }

    //          Loop
    update () {
        if (!this.bounds) return

        this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target)

        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

        this.galleryElement.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`

        if (this.scroll.start < this.scroll.current) {
            this.direction = 'right'
        } else if (this.scroll.start > this.scroll.current) {
            this.direction = 'left'
        }

        this.scroll.start = this.scroll.current

        const index = Math.floor(Math.abs(this.scroll.current / this.scroll.limit) * this.medias.length)

        if (this.index !== index) {
            // console.log(index)

            this.onChangeFocus(index)
        }

        map(this.medias, (media, index) => {
            media.update(this.scroll.current, this.index)
        })
    }

    //          Destroy
    destroy () {
        this.scene.removeChild(this.group)
    }
}
