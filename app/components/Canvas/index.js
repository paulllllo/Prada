import { Camera, Renderer, Transform } from 'ogl'
import Home from './Home/index.js'
import About from './About/index.js'
import Collections from './Collections/index.js'
import Transition from './transition.js'
import Detail from './Detail/index.js'

// import GSAP from 'gsap'

export default class Canvas {
    constructor ({ template }) {
        this.template = template

        this.createRenderer()
        this.createCamera()
        this.createScene()

        this.onResize()

        // this.onPageChangeEnd(this.template)
        // this.createHome()

        this.x = {
            start: 0,
            distance: 0,
            end: 0
        }

        this.y = {
            start: 0,
            distance: 0,
            end: 0
        }
    }

    createRenderer () {
        this.renderer = new Renderer({
            alpha: true,
            antiAliasing: true
        })

        this.gl = this.renderer.gl

        document.body.appendChild(this.gl.canvas)
    }

    createCamera () {
        this.camera = new Camera(this.gl)
        this.camera.position.z = 5
    }

    createScene () {
        this.scene = new Transform()
    }

    //      Home

    createHome () {
        this.home = new Home({
            gl: this.gl,
            scene: this.scene,
            sizes: this.sizes
        })
        // console.log('create home!')
    }

    destroyHome () {
        if (!this.home) return

        this.home.destroy()
        this.home = null
        console.log('destroy home!')
    }

    //          About

    createAbout () {
        this.about = new About({
            gl: this.gl,
            scene: this.scene,
            sizes: this.sizes
        })
        // console.log('create About!')
    }

    destroyAbout () {
        if (!this.about) return

        this.about.destroy()
        this.about = null
        console.log('destroy about!')
    }

    //              Collections

    createCollections () {
        this.collections = new Collections({
            gl: this.gl,
            scene: this.scene,
            sizes: this.sizes,
            transition: this.transition
        })
    }

    destroyCollections () {
        if (!this.collections) return

        this.collections.destroy()
        this.collections = null
    }

    // Detail
    createDetail () {
        this.detail = new Detail({
            gl: this.gl,
            scene: this.scene,
            sizes: this.sizes,
            transition: this.transition
        })
    }

    destroyDetail () {
        if (!this.detail) return

        this.detail.destroy()
        this.detail = null
    }

    //          Events

    onPreloaded () {
        this.onPageChangeEnd(this.template)
    }

    onPageChangeStart (template, url) {
        if (this.collections) {
            this.collections.hide()
        }

        if (this.about) {
            this.about.hide()
        }

        if (this.home) {
            this.home.hide()
        }

        if (this.detail) {
            this.detail.hide()
        }

        this.fromCollectionsToDetail = this.template === 'collections' && url.indexOf('detail') > -1
        this.fromDetailToCollections = this.template === 'detail' && url.indexOf('collections') > -1

        if (this.fromCollectionsToDetail || this.fromDetailToCollections) {
            console.log('fromCollectionsToDetail', this.fromCollectionsToDetail)
            console.log('fromDetailToCollections', this.fromDetailToCollections)
            this.transition = new Transition({
                // collections: this.collections,
                url,
                gl: this.gl,
                scene: this.scene,
                sizes: this.sizes
            })

            this.transition.setElement(this.collections || this.detail)
            console.log('Detail***', this.detail)
        }
    }

    onPageChangeEnd (template) {
        // if (this.transition) {
        //     this.transition.animate(this.collections)
        // }

        if (template === 'collections') {
            this.createCollections()
        } else if (this.collections) {
            this.destroyCollections()
        }

        if (template === 'detail') {
            this.createDetail()
        } else if (this.detail) {
            this.destroyDetail()
        }

        if (template === 'about') {
            this.createAbout()
        } else if (this.about) {
            this.destroyAbout()
        }

        if (template === 'home') {
            this.createHome()
        } else if (this.home) {
            this.destroyHome()
        }
    }

    onResize () {
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        this.camera.perspective({
            aspect: window.innerWidth / window.innerHeight
        })

        const fov = this.camera.fov * (Math.PI / 180)
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z
        const width = height * this.camera.aspect

        // const fov = this.camera.fov * (Math.PI / 100)
        // const height = 2 * Math.tan(fov / 2) * this.camera.position.z
        // const width = height * this.camera.aspect

        this.sizes = {
            height,
            width
        }

        const values = {
            sizes: this.sizes
        }

        if (this.collections) {
            this.collections.onResize(values)
        }

        if (this.detail) {
            this.detail.onResize(values)
        }

        if (this.about) {
            this.about.onResize(values)
        }

        if (this.home) {
            this.home.onResize(values)
        }
    }

    onTouchDown (event) {
        this.isDown = true

        this.x.start = event.touches ? event.touches[0].clientX : event.clientX
        this.y.start = event.touches ? event.touches[0].clientY : event.clientY

        const values = {
            x: this.x,
            y: this.y
        }

        if (this.collections && this.collections.onTouchDown) {
            this.collections.onTouchDown(values)
        }

        if (this.detail && this.detail.onTouchDown) {
            this.detail.onTouchDown(values)
        }

        if (this.about && this.about.onTouchDown) {
            this.about.onTouchDown(values)
        }

        if (this.home && this.home.onTouchDown) {
            this.home.onTouchDown(values)
        }
    }

    onTouchMove (event) {
        if (!this.isDown) return

        const x = event.touches ? event.touches[0].clientX : event.clientX
        const y = event.touches ? event.touches[0].clientY : event.clientY

        this.x.end = x
        this.y.end = y

        // this.x.distance = this.x.start - this.x.end
        // this.y.distance = this.y.start - this.y.end

        const values = {
            x: this.x,
            y: this.y
        }

        if (this.collections && this.collections.onTouchMove) {
            this.collections.onTouchMove(values)
        }

        if (this.detail && this.detail.onTouchMove) {
            this.detail.onTouchMove(values)
        }

        if (this.about && this.about.onTouchMove) {
            this.about.onTouchMove(values)
        }

        if (this.home && this.home.onTouchMove) {
            this.home.onTouchMove(values)
        }
    }

    onTouchUp (event) {
        this.isDown = false

        const x = event.touches ? event.touches[0].clientX : event.clientX
        const y = event.touches ? event.touches[0].clientY : event.clientY

        this.x.end = x
        this.y.end = y

        // this.x.distance = this.x.start - this.x.end
        // this.y.distance = this.y.start - this.y.end

        const values = {
            x: this.x,
            y: this.y
        }

        if (this.collections && this.collections.onTouchUp) {
            this.collections.onTouchUp(values)
        }

        if (this.detail && this.detail.onTouchUp) {
            this.detail.onTouchUp(values)
        }

        if (this.about && this.about.onTouchUp) {
            this.about.onTouchUp(values)
        }

        if (this.home && this.home.onTouchUp) {
            this.home.onTouchUp(values)
        }
    }

    onWheel (event) {
        if (this.collections) {
            this.collections.onWheel(event)
        }

        if (this.home) {
            this.home.onWheel(event)
        }
    }

    update (scroll) {
        if (this.collections) {
            this.collections.update(scroll)
        }

        if (this.detail) {
            this.detail.update(scroll)
        }

        if (this.about) {
            this.about.update(scroll)
        }

        if (this.home) {
            this.home.update()
        }

        this.renderer.render({
            camera: this.camera,
            scene: this.scene
        })
    }
}
