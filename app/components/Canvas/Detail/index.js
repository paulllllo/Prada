// import GSAP from 'gsap'
import { Mesh, Plane, Program } from 'ogl'

import vertex from '../../../shaders/collections-vertex.glsl'
import fragment from '../../../shaders/collections-fragment.glsl'

export default class {
    constructor ({ gl, scene, sizes }) {
        this.element = document.querySelector('.detail_media_image')
        this.gl = gl
        this.scene = scene
        this.sizes = sizes

        this.geometry = new Plane(this.gl)

        this.createTexture()
        this.createProgram()
        this.createMesh()
    }

    createTexture () {
        const image = this.element.getAttribute('data-src')

        this.texture = window.TEXTURES[image]
    }

    createProgram () {
        this.program = new Program(this.gl, {
            fragment,
            vertex,
            uniforms: {
                uAlpha: { value: 0 },
                tMap: { value: this.texture }
            }
        })
    }

    createMesh () {
        this.mesh = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        })

        this.mesh.setParent(this.scene)
        // this.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
    }

    createBounds ({ sizes }) {
        this.sizes = sizes

        this.bounds = this.element.getBoundingClientRect()

        this.updateScale()
        this.updateX()
        this.updateY()
    }

    //          Show

    show () {

    }

    hide () {

    }

    //              Events

    onResize (sizes) {
        this.createBounds(sizes)

        this.updateX()
        this.updateY()
    }

    //  Loops

    updateScale () {
        this.height = this.bounds.height / window.innerHeight
        this.width = this.bounds.width / window.innerWidth

        this.mesh.scale.x = this.sizes.width * this.width
        this.mesh.scale.y = this.sizes.height * this.height
    }

    updateX () {
        // console.log('Inside updateX **** sizes', this.sizes)
        // if (!this.sizes) return

        this.x = (this.bounds.left) / window.innerWidth

        this.mesh.position.x = -(this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width)
    }

    updateY () {
        // if (!this.sizes) return

        this.y = (this.bounds.top) / window.innerHeight

        this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height)
    }

    update () {
        if (!this.bounds) return
        this.updateX()
        this.updateY()
    }

    destroy () {

    }
}
