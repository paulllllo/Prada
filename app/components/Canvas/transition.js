// import GSAP from 'gsap'
import { Mesh, Plane, Program } from 'ogl'

import vertex from '../../shaders/plane-vertex.glsl'
import fragment from '../../shaders/plane-fragment.glsl'

export default class {
    constructor ({ collections, gl, scene, sizes, url }) {
        this.collections = collections
        this.gl = gl
        this.url = url
        this.scene = scene
        this.sizes = sizes

        this.geometry = new Plane(this.gl)
        console.log('&& Geo **', this.geometry)

        this.extra = {
            x: 0,
            y: 0
        }

        this.createTexture()
        this.createProgram()
        this.createMesh()
    }

    createTexture () {
        const { index, medias } = this.collections
        this.media = medias[index]

        this.texture = this.media.texture
    }

    createProgram () {
        this.program = new Program(this.gl, {
            fragment,
            vertex,
            uniforms: {
                uAlpha: { value: 1 },
                tMap: { value: this.texture }
            }
        })
    }

    createMesh () {
        this.mesh = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        })

        this.mesh.scale.x = this.media.mesh.scale.x
        this.mesh.scale.y = this.media.mesh.scale.y
        this.mesh.scale.z = this.media.mesh.scale.z

        this.mesh.position.z = this.media.mesh.position.z * 0.01

        this.mesh.setParent(this.scene)
        // this.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
    }

    //          Animation
    animateDetail () {

    }
}
