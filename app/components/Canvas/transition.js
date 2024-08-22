import GSAP from 'gsap'
import { Mesh, Plane, Program } from 'ogl'

import vertex from '../../shaders/plane-vertex.glsl'
import fragment from '../../shaders/plane-fragment.glsl'

export default class {
    constructor ({ collections, gl, scene, sizes, url }) {
        // this.collections = collections
        this.gl = gl
        this.url = url
        this.scene = scene
        this.sizes = sizes

        this.geometry = new Plane(this.gl)
        // console.log('&& Geo **', this.geometry)

        this.extra = {
            x: 0,
            y: 0
        }
    }

    createProgram (texture) {
        this.program = new Program(this.gl, {
            fragment,
            vertex,
            uniforms: {
                uAlpha: { value: 1 },
                tMap: { value: texture }
            }
        })
    }

    createMesh (mesh) {
        this.mesh = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        })

        this.mesh.scale.x = mesh.scale.x
        this.mesh.scale.y = mesh.scale.y
        this.mesh.scale.z = mesh.scale.z

        this.mesh.position.x = mesh.position.x
        this.mesh.position.y = mesh.position.y
        this.mesh.position.z = mesh.position.z * 0.01

        this.mesh.rotation.x = mesh.rotation.x
        this.mesh.rotation.y = mesh.rotation.y
        this.mesh.rotation.z = mesh.rotation.z

        this.mesh.setParent(this.scene)
    }

    setElement (element) {
        // console.log('element***', element)
        if (element.id === 'collections') {
            const { index, medias } = element
            const media = medias[index]

            this.createProgram(media.texture)
            this.createMesh(media.mesh)

            this.transition = 'detail'
        } else {
            this.createProgram(element.texture)
            this.createMesh(element.mesh)

            this.transition = 'collections'
        }
    }

    //          Animation
    animate (mesh, onComplete) {
        const timeline = GSAP.timeline({
            onComplete
        })

        timeline.to(this.mesh.scale, {
            duration: 1.5,
            ease: 'expo.inOut',
            x: mesh.scale.x,
            y: mesh.scale.y,
            z: mesh.scale.z
        }, 0)

        timeline.to(this.mesh.position, {
            duration: 1.5,
            ease: 'expo.inOut',
            x: mesh.position.x,
            y: mesh.position.y,
            z: mesh.position.z
        }, 0)

        timeline.to(this.mesh.rotation, {
            duration: 1.5,
            ease: 'expo.inOut',
            x: mesh.rotation.x,
            y: mesh.rotation.y,
            z: mesh.rotation.z
        }, 0)

        timeline.call(_ => {
            onComplete()
        })

        timeline.call(_ => {
            this.scene.removeChild(this.mesh)
        }, null, '+=0.2')
    }
}
