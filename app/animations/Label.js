import GSAP from 'gsap'
import Animation from '../classes/Animation.js'
import { split, calculate } from '../utils/text.js'
import { each } from 'lodash'

export default class Label extends Animation {
    constructor ({ element, elements }) {
        super({ element, elements })

        this.elementSpans = split({ element: this.element, append: true })
    }

    animateIn () {
        this.timelineIn = GSAP.timeline({
            delay: 0.5
        })

        this.timelineIn.set(this.element, {
            autoAlpha: 1
        })

        each(this.elementLines, (line, index) => {
            this.timelineIn.fromTo(line, {
                y: '100%',
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                ease: 'expo.out',
                delay: 0.2 * index,
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
