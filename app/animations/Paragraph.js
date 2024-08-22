import GSAP from 'gsap'
import Animation from '../classes/Animation.js'
// import { split, calculate } from '../utils/text.js'
// import { each } from 'lodash'

export default class Paragraph extends Animation {
    constructor ({ element, elements }) {
        super({ element, elements })

        this.element = element

        // this.elementSpans = split({ element: this.element, append: true })

        // this.elementSpans = this.element.querySelectorAll('span span')
        // console.log('element in paragraph ** ', this.element)
    }

    animateIn () {
        console.log('animateIn paragraph')
        GSAP.fromTo(this.element,
            {
                // y: '100%',
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                ease: 'expo.out',
                delay: 0.1,
                duration: 0.5
                // y: '0%'
            })
    }

    animateOut () {
        GSAP.set(this.element, {
            autoAlpha: 0
        })
    }

    onResize () {
        // this.elementLines = calculate(this.elementSpans)
    }
}
