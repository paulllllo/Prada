import Page from 'classes/page.js'
import Button from '../../classes/Button.js'

export default class Home extends Page {
    constructor () {
        super({
            id: 'home',
            element: '.home',
            elements: {
                navigation: document.querySelector('.navigation'),
                link: '.home_link'
            }
        })
    }

    create () {
        super.create()

        this.link = new Button({
            element: this.elements.link
        })

        this.link.addEventListeners()
    }

    destroy () {
        super.destroy()
        this.link.removeEventListeners()
    }
}
