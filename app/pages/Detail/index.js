import Page from 'classes/page.js'
import Button from '../../classes/Button.js'

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

    destroy () {
        super.destroy()
        this.button.removeEventListeners()
    }
}
