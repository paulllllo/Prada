import { map } from 'lodash'
import GSAP from 'gsap'

import { Transform } from 'ogl'

import Media from './Media.js'

export default class Gallery {
    constructor ({ element, geometry, index, gl, scene, sizes }) {
        this.elementWrapper = document.querySelector('.about_gallery_wrapper')
        this.element = element
        this.geometry = geometry
        this.index = index
        this.gl = gl
        this.scene = scene
        this.sizes = sizes

        this.group = new Transform()
        this.createMedias()

        this.scroll = {
            current: 0,
            target: 0,
            start: 0,
            velocity: 0.5,
            lerp: 0.1
        }

        this.group.setParent(this.scene)
    }

    createMedias () {
        this.mediasElements = document.querySelectorAll('.about_gallery_media')

        this.medias = map(this.mediasElements, (element, index) => {
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

    //                      Events

    onResize (event) {
        this.bounds = this.elementWrapper.getBoundingClientRect()

        this.sizes = event.sizes

        this.width = this.bounds.width / window.innerWidth * this.sizes.width

        this.scroll.current = this.scroll.target = 0

        map(this.medias, media => media.onResize(event, this.scroll.current))
    }

    onTouchDown ({ x, y }) {
        this.scroll.start = this.scroll.current
    }

    onTouchMove ({ x, y }) {
        const distance = x.start - x.end

        this.scroll.target = this.scroll.start - distance
    }

    onTouchUp ({ x, y }) {}

    //          Loop
    update (scroll) {
        if (!this.bounds) return

        const distance = (scroll.current - scroll.target) * 0.1
        const y = scroll.current / window.innerHeight

        if (this.scroll.current < this.scroll.target) {
            this.direction = 'right'
            this.scroll.velocity = -1
        } else if (this.scroll.current > this.scroll.target) {
            this.direction = 'left'
            this.scroll.velocity = 1
        }

        this.scroll.target -= this.scroll.velocity
        this.scroll.target += distance

        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

        map(this.medias, (media, index) => {
            const scaleX = media.mesh.scale.x / 2

            if (this.direction === 'left') {
                const x = media.mesh.position.x + scaleX

                if (x < -this.sizes.width / 2) {
                    media.extra += this.width
                    // media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
                }
            } else if (this.direction === 'right') {
                const x = media.mesh.position.x - scaleX

                if (x > this.sizes.width / 2) {
                    media.extra -= this.width
                    // media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
                }
            }

            media.update(this.scroll.current)
        })

        const height = y * this.sizes.height
        this.group.position.y = height
    }
}
