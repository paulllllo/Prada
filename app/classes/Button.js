import Component from './Component.js'
import GSAP from 'gsap'

export default class Button extends Component {
    constructor ({ element }) {
        super({ element })
        console.log('***Button***', element)

        this.path = element.querySelector('path:last-child')
        this.pathLength = this.path.getTotalLength()

        this.timeline = GSAP.timeline({ paused: true })

        this.timeline.fromTo(this.path, {
            strokeDashoffset: this.pathLength,
            strokeDasharray: `${this.pathLength} ${this.pathLength}`
        }, {
            strokeDashoffset: 0,
            strokeDasharray: `${this.pathLength} ${this.pathLength}`
        })
    }

    onMouseEnter () {
        this.timeline.play()
        // console.log('Enter')
    }

    onMouseLeave () {
        this.timeline.reverse()
        // console.log('Leave')
    }

    addEventListeners () {
        this.mouseEnterEvent = this.onMouseEnter.bind(this)
        this.mouseLeaveEvent = this.onMouseLeave.bind(this)

        this.element.addEventListener('mouseenter', this.mouseEnterEvent)
        this.element.addEventListener('mouseleave', this.mouseLeaveEvent)
    }

    removeEventListeners () {
        this.element.removeEventListener('mouseenter', this.mouseEnterEvent)
        this.element.removeEventListener('mouseleave', this.mouseLeaveEvent)
    }
}
