import GSAP from 'gsap'
import Animation from '../classes/Animation.js'
import { calculate, split } from '../utils/text.js'

import { each } from 'lodash'

export default class Title extends Animation {
    constructor ({ element, elements }) {
        super({ element, elements })

        split({ element: this.element, append: true })
        split({ element: this.element, append: true })

        this.elementSpans = this.element.querySelectorAll('span span')
        this.onResize()
    }

    animateIn () {
        this.timelineIn = GSAP.timeline({
            delay: 0.2
        })

        this.timelineIn.set(this.element, {
            autoAlpha: 1
        })

        each(this.elementLines, (line, index) => {
            this.timelineIn.fromTo(line, {
                y: '100%'
            },
            {
                ease: 'expo.out',
                delay: index * 0.2,
                duration: 1.2,
                y: '0%'
            }, 0)
        })
    }

    animateOut () {
        GSAP.set(this.element, {
            autoAlpha: 0
        })
    }

    onResize () {
        this.elementLines = calculate(this.elementSpans)
    }
}
