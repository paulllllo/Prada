import { Plane, Transform } from 'ogl'
import Gallery from './Gallery.js'
import { map } from 'lodash'

export default class Home {
    constructor ({ gl, scene, sizes }) {
        this.gl = gl
        this.scene = scene
        this.sizes = sizes

        this.group = new Transform()

        this.createGeometry()
        this.createGalleries()

        this.onResize({
            sizes: this.sizes
        })

        this.group.setParent(this.scene)
        this.show()
    }

    createGeometry () {
        this.geometry = new Plane(this.gl)
    }

    createGalleries () {
        this.galleriesElements = document.querySelectorAll('.about_gallery')

        this.galleries = map(this.galleriesElements, (element, index) => {
            return new Gallery({
                element,
                geometry: this.geometry,
                gl: this.gl,
                scene: this.group,
                sizes: this.sizes,
                index
            })
        })
    }

    //          Show
    show () {
        map(this.galleries, (gallery) => {
            gallery.show()
        })
    }

    hide () {
        map(this.galleries, (gallery) => {
            gallery.hide()
        })
    }

    //                   Events

    onResize (event) {
        map(this.galleries, gallery => gallery.onResize(event))
    }

    onTouchDown (event) {
        map(this.galleries, gallery => gallery.onTouchDown(event))
    }

    onTouchMove (event) {
        map(this.galleries, gallery => gallery.onTouchMove(event))
    }

    onTouchUp (event) {
        map(this.galleries, gallery => gallery.onTouchUp(event))
    }

    onWheel ({ pixelX, pixelY }) {
    }

    //          Loop
    update (scroll) {
        map(this.galleries, gallery => {
            gallery.update(scroll)
        })
    }

    //          Destroy
    destroy () {
        this.scene.removeChild(this.group)
    }
}
