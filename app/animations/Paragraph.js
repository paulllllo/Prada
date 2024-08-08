import GSAP from 'gsap'
import Animation from '../classes/Animation.js'
// import { split, calculate } from '../utils/text.js'
// import { each } from 'lodash'

export default class Paragraph extends Animation {
    constructor ({ element, elements }) {
        super({ element, elements })

        // this.elementSpans = split({ element: this.element, append: true })

        // this.elementSpans = this.element.querySelectorAll('span span')
        // console.log('elementSpans', this.elementSpans)
    }

    animateIn () {
        GSAP.fromTo(this.element,
            {
                // y: '100%',
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                ease: 'expo.out',
                delay: 0.5,
                duration: 1.2
                // y: '0%'
            }, 0)
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
