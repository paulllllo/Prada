import Page from 'classes/page.js'

export default class About extends Page {
    constructor () {
        super({
            id: 'about',
            element: '.about',
            elements: {
                wrapper: '.about_wrapper'
            }
        })
        // console.log('About')
    }
}
