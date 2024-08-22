import { each, map } from 'lodash'
import GSAP from 'gsap'
import Prefix from 'prefix'
import Title from '../animations/Title.js'
import Label from '../animations/Label.js'
import Paragraph from '../animations/Paragraph.js'
import Highlight from '../animations/Highlight.js'
import { colorsChanger } from './Colors.js'
import AsyncLoad from './AsyncLoad.js'

export default class Page {
    constructor ({ id, element, elements }) {
        this.id = id
        this.selector = element
        this.selectorChildren = {
            ...elements,
            animatedTitles: '[data-animation="title"]',
            animatedHighlights: '[data-animation="highlight"]',
            animatedLabels: '[data-animation="label"]',
            animatedParagraphs: '[data-animation="paragraph"]',

            lazyLoaders: '[data-src]'
        }

        // this.onMouseWheelEvent = this.onMouseWheel.bind(this)

        this.transformPrefix = Prefix('transform')
    }

    create () {
        this.element = document.querySelector(this.selector)
        this.elements = {}

        this.scroll = {
            target: 0,
            current: 0,
            last: 0,
            limit: 0
        }

        // console.log(this.scroll)

        each(this.selectorChildren, (child, key) => {
            if (child instanceof window.HTMLElement || child instanceof window.NodeList || Array.isArray(child)) {
                this.elements[key] = child
            } else {
                this.elements[key] = document.querySelectorAll(child)

                if (this.elements[key].length === 0) {
                    this.elements[key] = null
                } else if (this.elements[key].length === 1) {
                    this.elements[key] = document.querySelector(child)
                }
                // if (this.element) {
                //     console.log('true')
                // }
            }
        })

        this.createAnimations()
        this.createAsyncLoad()
    }

    createAnimations () {
        this.animatedElements = []

        // Titles
        this.animatedTitles = map(this.elements.animatedTitles, element => {
            return new Title({ element })
        })

        this.animatedElements.push(...this.animatedTitles)

        // Labels
        this.animatedLabels = map(this.elements.animatedLabels, element => {
            return new Label({ element })
        })

        this.animatedElements.push(...this.animatedLabels)

        // Paragraphs
        this.animatedParagraphs = map(this.elements.animatedParagraphs, element => {
            return new Paragraph({ element })
        })

        this.animatedElements.push(...this.animatedParagraphs)

        // Highlighs
        this.animatedHighlights = map(this.elements.animatedHighlights, element => {
            return new Highlight({ element })
        })

        this.animatedElements.push(...this.animatedHighlights)
    }

    createAsyncLoad () {
        // if (!this.lazyLoaders) return
        this.lazyLoaders = [...this.elements.lazyLoaders].map(element => {
            // console.log('in map, About to start', element)
            return new AsyncLoad({
                element
            })
        })
        // console.log('lazyloaders after map', this.lazyLoaders)
    }

    show (animation) {
        // console.log('show')
        return new Promise(resolve => {
            if (animation) {
                this.animationIn = animation
            } else {
                this.animationIn = GSAP.timeline()
                colorsChanger.change({
                    backgroundColor: this.element.getAttribute('data-background'),
                    color: this.element.getAttribute('data-color')
                })

                this.animationIn.fromTo(this.element, {
                    autoAlpha: 0
                },
                {
                    autoAlpha: 1
                })
            }

            this.animationIn.call(_ => {
                this.addEventListeners()
                resolve()
            })
        })
    }

    hide () {
        return new Promise(resolve => {
            this.destroy()
            this.animationOut = GSAP.timeline()

            this.animationOut.to(this.element, {
                autoAlpha: 0,
                onComplete: resolve
            })
        })
    }

    // Events

    onWheel ({ pixelY }) {
        // const { deltaY } = event

        this.scroll.target += pixelY
    }

    onResize () {
        if (this.elements.wrapper) {
            this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight
        }

        each(this.animatedElements, element => {
            element.onResize()
        })
    }

    // Loop

    updateScroll () {
        // console.log('updating scroll')
        this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)

        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

        if (this.scroll.current < 0.1) {
            this.scroll.current = 0
        }

        if (this.elements.wrapper) {
            this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`
        }
    }

    // Listeners

    addEventListeners () {
        // window.addEventListener('mousewheel', this.onMouseWheelEvent)
        // console.log('listener Added')
    }

    removeEventListeners () {
        // window.removeEventListener('mousewheel', this.onMouseWheelEvent)
    }

    // Destroy

    destroy () {
        this.removeEventListeners()
    }
}
