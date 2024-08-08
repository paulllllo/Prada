import { each } from 'lodash'
import About from 'pages/About/index.js'
import Collections from 'pages/Collections/index.js'
import Detail from 'pages/Detail/index.js'
import Home from 'pages/Home/index.js'

import Canvas from './components/Canvas/index.js'

import Preloader from 'components/Preloader.js'
import Navigation from './components/Navigation.js'
import Normalize from 'normalize-wheel'

class App {
    constructor () {
        this.createContent()

        this.createNavigation()

        this.createCanvas()

        this.createPreloader()

        this.createPages()

        this.addLinkListeners()
        this.addEventListeners()

        this.update()
    }

    createNavigation () {
        this.navigation = new Navigation({ template: this.template })
    }

    createPreloader () {
        this.preloader = new Preloader({ canvas: this.canvas })
        this.preloader.once('completed', this.onPreloaded.bind(this))
    }

    createCanvas () {
        this.canvas = new Canvas({ template: this.template })
    }

    createContent () {
        this.content = document.querySelector('.content')
        this.template = this.content.getAttribute('data-template')
    }

    createPages () {
        this.pages = {
            about: new About(),
            collections: new Collections(),
            detail: new Detail(),
            home: new Home()
        }

        this.page = this.pages[this.template]
        this.page.create()
        // this.onResize()
    }

    // Events

    onPreloaded () {
        this.canvas.onPreloaded()
        this.preloader.destroy()
        // console.log('this.page', this.page)
        this.onResize()
        this.page.show()
    }

    onPopstate () {
        this.onPageChange({
            url: window.location.pathname,
            push: false
        })
    }

    async onPageChange ({ url, push = true }) {
        this.canvas.onPageChangeStart(this.template, url)
        await this.page.hide()

        const response = await window.fetch(url)

        if (response.status === 200) {
            const html = await response.text()
            const div = document.createElement('div')

            if (push) {
                window.history.pushState({}, '', url)
            }

            div.innerHTML = html

            const divContent = div.querySelector('.content')
            this.template = divContent.getAttribute('data-template')

            this.content.setAttribute('data-template', this.template)
            this.content.innerHTML = divContent.innerHTML

            this.canvas.onPageChangeEnd(this.template)

            this.page = this.pages[this.template]
            this.page.create()
            this.onResize()
            this.page.show()

            this.navigation.onChange(this.template)

            this.addLinkListeners()
        } else {
            console.log('Error')
        }
    }

    onResize () {
        window.requestAnimationFrame(_ => {
            if (this.canvas && this.canvas.onResize) {
                this.canvas.onResize()
            }
        })

        if (this.page && this.page.onResize) {
            this.page.onResize()
        }
    }

    onTouchDown (event) {
        if (this.canvas && this.canvas.onTouchDown) {
            this.canvas.onTouchDown(event)
        }
    }

    onTouchMove (event) {
        if (this.canvas && this.canvas.onTouchMove) {
            this.canvas.onTouchMove(event)
        }
    }

    onTouchUp (event) {
        if (this.canvas && this.canvas.onTouchUp) {
            this.canvas.onTouchUp(event)
        }
    }

    onWheel (event) {
        const normalizedWheel = Normalize(event)

        if (this.canvas && this.canvas.onWheel) {
            this.canvas.onWheel(normalizedWheel)
        }

        if (this.page && this.page.onWheel) {
            this.page.onWheel(normalizedWheel)
        }
    }

    // Loop

    update () {
        if (this.page && this.page.updateScroll) {
            this.page.updateScroll()
        }

        if (this.canvas && this.canvas.update) {
            this.canvas.update(this.page.scroll)
        }

        this.frame = window.requestAnimationFrame(this.update.bind(this))
    }

    // Listeners

    addEventListeners () {
        window.addEventListener('wheel', this.onWheel.bind(this))

        window.addEventListener('mousedown', this.onTouchDown.bind(this))
        window.addEventListener('mousemove', this.onTouchMove.bind(this))
        window.addEventListener('mouseup', this.onTouchUp.bind(this))

        window.addEventListener('touchstart', this.onTouchDown.bind(this))
        window.addEventListener('touchmove', this.onTouchMove.bind(this))
        window.addEventListener('touchend', this.onTouchUp.bind(this))

        window.addEventListener('popstate', this.onPopstate.bind(this))
        window.addEventListener('resize', this.onResize.bind(this))
    }

    addLinkListeners () {
        const links = document.querySelectorAll('a')
        // console.log(links)

        each(links, link => {
            // console.log(link)
            link.onclick = event => {
                event.preventDefault()
                const { href } = link

                this.onPageChange({ url: href })
            }
        })
    }
}

export const app = new App()
