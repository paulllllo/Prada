import { Plane, Transform } from 'ogl'
import Media from './Media.js'
import { map } from 'lodash'
import GSAP from 'gsap'

export default class Home {
    constructor ({ gl, scene, sizes }) {
        this.gl = gl
        this.scene = scene
        this.sizes = sizes

        this.group = new Transform()

        this.mediaElements = document.querySelectorAll('.home_gallery_media_image')
        this.galleryElement = document.querySelector('.home_gallery')

        this.x = {
            current: 0,
            target: 0,
            lerp: 0.1
        }

        this.y = {
            current: 0,
            target: 0,
            lerp: 0.1
        }

        this.scroll = {
            x: 0,
            y: 0
        }

        this.scrollCurrent = {
            x: 0,
            y: 0
        }

        this.speed = {
            current: 0,
            target: 0,
            lerp: 0.1
        }

        this.createGeometry()
        this.createGallery()

        this.onResize({
            sizes: this.sizes
        })

        this.group.setParent(this.scene)

        this.show()
    }

    createGeometry () {
        this.geometry = new Plane(this.gl, {
            heightSegments: 20,
            widthSegments: 20
        })
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
        // this.group.setParent(this.scene)
        map(this.medias, (media) => {
            media.show()
        })
    }

    hide () {
        // this.group.setParent(null)
        map(this.medias, (media) => {
            media.hide()
        })
    }

    //                   Events

    onResize (event) {
        // console.log('Home onResize()')
        this.scroll = {
            x: 0,
            y: 0
        }

        this.galleryBounds = this.galleryElement.getBoundingClientRect()

        console.log('galleryBounds ', this.galleryBounds)

        this.sizes = event.sizes

        this.gallerySizes = {
            width: (this.galleryBounds.width / window.innerWidth) * this.sizes.width,
            height: (this.galleryBounds.height / window.innerHeight) * this.sizes.height
        }

        this.scroll.x = this.x.target = 0
        this.scroll.y = this.y.target = 0

        map(this.medias, media => media.onResize(event, this.scroll))
    }

    onTouchDown ({ x, y }) {
        this.scrollCurrent.x = this.scroll.x
        this.scrollCurrent.y = this.scroll.y

        this.speed.target = 1
    }

    onTouchMove ({ x, y }) {
        const xDistance = x.start - x.end
        const yDistance = y.start - y.end

        this.x.target = this.scrollCurrent.x - xDistance
        this.y.target = this.scrollCurrent.y - yDistance
    }

    onTouchUp ({ x, y }) {
        this.speed.target = 0
    }

    onWheel ({ pixelX, pixelY }) {
        this.x.target += pixelX
        this.y.target += pixelY
    }

    //          Loop
    update () {
        // if (!this.galleryBounds) return

        this.speed.current = GSAP.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp)

        this.x.current = GSAP.utils.interpolate(this.x.current, this.x.target, this.x.lerp)
        this.y.current = GSAP.utils.interpolate(this.y.current, this.y.target, this.y.lerp)

        // console.log(this.x.current, this.y.current)
        // console.log(this.gallerySizes.height)

        if (this.scroll.x < this.x.current) {
            this.x.direction = 'right'
        } else if (this.scroll.x > this.x.current) {
            this.x.direction = 'left'
        }

        if (this.scroll.y < this.y.current) {
            this.y.direction = 'up'
        } else if (this.scroll.y > this.y.current) {
            this.y.direction = 'down'
        }

        this.scroll.x = this.x.current
        this.scroll.y = this.y.current

        map(this.medias, (media, index) => {
            const scaleX = media.mesh.scale.x / 2

            if (this.x.direction === 'left') {
                const x = media.mesh.position.x + scaleX

                if (x < -this.sizes.width / 2) {
                    media.extra.x += this.gallerySizes.width
                    media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
                }
            } else if (this.x.direction === 'right') {
                const x = media.mesh.position.x - scaleX

                if (x > this.sizes.width / 2) {
                    media.extra.x -= this.gallerySizes.width
                    media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
                }
            }

            const scaleY = media.mesh.scale.y / 2

            if (this.y.direction === 'up') {
                const y = media.mesh.position.y + scaleY

                if (y < -this.sizes.height / 2) {
                    media.extra.y += this.gallerySizes.height
                    media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
                }
            } else if (this.y.direction === 'down') {
                const y = media.mesh.position.y - scaleY

                if (y > this.sizes.height / 2) {
                    media.extra.y -= this.gallerySizes.height
                    media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
                }
            }

            media.update(this.scroll, this.speed.current)
        })
    }

    //          Destroy
    destroy () {
        this.scene.removeChild(this.group)
    }
}
