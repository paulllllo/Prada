import Page from 'classes/page.js'
import Button from '../../classes/Button.js'

import GSAP from 'gsap'

export default class Detail extends Page {
    constructor () {
        super({
            id: 'detail',
            element: '.detail',
            elements: {
                button: '.detail_button_icon'
            }
        })
        // console.log('Detail')
    }

    create () {
        super.create()

        this.button = new Button({
            element: this.elements.button
        })

        this.button.addEventListeners()
    }

    show () {
        const timeline = GSAP.timeline({
            delay: 1.5
        })

        timeline.fromTo(this.element, {
            autoAlpha: 0
        },
        {
            autoAlpha: 1
        })

        super.show(timeline)
    }

    destroy () {
        super.destroy()
        this.button.removeEventListeners()
    }
}
