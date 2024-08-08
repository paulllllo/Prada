// import GSAP from 'gsap'
import { Mesh, Program } from 'ogl'

import GSAP from 'gsap'

import vertex from '../../../shaders/plane-vertex.glsl'
import fragment from '../../../shaders/plane-fragment.glsl'

export default class {
    constructor ({ element, geometry, gl, scene, index, sizes }) {
        this.element = element
        this.gl = gl
        this.geometry = geometry
        this.index = index
        this.scene = scene
        this.sizes = sizes

        this.extra = 0

        this.createTexture()
        this.createProgram()
        this.createMesh()
        this.createBounds({
            sizes: this.sizes
        })
    }

    createTexture () {
        const image = this.element.querySelector('img')

        this.texture = window.TEXTURES[image.getAttribute('data-src')]
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
    }

    createBounds (event) {
        this.sizes = event.sizes

        this.bounds = this.element.getBoundingClientRect()

        this.updateScale()
        this.updateX()
        this.updateY()
    }

    //          Show
    show () {
        GSAP.fromTo(this.program.uniforms.uAlpha, {
            value: 0
        }, {
            value: 1
        })
    }

    hide () {
        GSAP.to(this.program.uniforms.uAlpha, {
            value: 0
        })
    }

    //              Events

    onResize (sizes, scroll) {
        this.extra = 0

        this.createBounds(sizes)

        this.updateX(scroll)
        this.updateY(0)
    }

    //  Loops

    updateRotation () {
        this.mesh.rotation.z = GSAP.utils.mapRange(-this.sizes.width / 2, this.sizes.width / 2, Math.PI * 0.12, -Math.PI * 0.12, this.mesh.position.x)
    }

    updateScale () {
        this.height = this.bounds.height / window.innerHeight
        this.width = this.bounds.width / window.innerWidth

        this.mesh.scale.x = this.sizes.width * this.width
        this.mesh.scale.y = this.sizes.height * this.height
    }

    updateX (x = 0) {
        // console.log('Inside updateX **** sizes', this.sizes)
        // if (!this.sizes) return

        this.x = (this.bounds.left + x) / window.innerWidth

        this.mesh.position.x = -(this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width) + this.extra
    }

    updateY (y = 0) {
        // if (!this.sizes) return

        this.y = (this.bounds.top + y) / window.innerHeight

        this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height)
        this.mesh.position.y += Math.cos((this.mesh.position.x / this.sizes.width) * Math.PI * 0.1) * 50 - 50
    }

    update (scroll) {
        if (!this.bounds) return

        this.updateRotation()
        this.updateX(scroll)
        this.updateY(0)
    }
}
