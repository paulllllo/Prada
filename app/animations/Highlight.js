import GSAP from 'gsap'
import Animation from '../classes/Animation.js'
// import { split, calculate } from '../utils/text.js'
// import { each } from 'lodash'

export default class Highlight extends Animation {
    constructor ({ element, elements }) {
        super({ element, elements })
    }

    animateIn () {
        this.timelineIn = GSAP.timeline({
            delay: 0.5
        })

        this.timelineIn.fromTo(this.element, {
            autoAlpha: 0,
            scale: 1.2
        },
        {
            autoAlpha: 1,
            scale: 1,
            ease: 'expo.out',
            delay: 0.2,
            duration: 1.5
        })
    }

    animateOut () {
        GSAP.set(this.element, {
            autoAlpha: 0
        })
    }

    onResize () {}
}
