/*! For license information please see main.6f9ccfe6fe60fcd00c9a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateprada("main",{"./styles/index.scss":(e,s,t)=>{t.r(s);var i=t("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(i),e.hot.accept(void 0,i)},"./app/components/Canvas/transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/gsap/index.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/ogl/src/core/Program.js"),l=t("./node_modules/ogl/src/core/Mesh.js"),n=t("./app/shaders/plane-vertex.glsl"),r=t("./app/shaders/plane-fragment.glsl");const c=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:a}){this.collections=e,this.gl=s,this.url=a,this.scene=t,this.sizes=i,this.geometry=new o.Plane(this.gl),this.extra={x:0,y:0}}createProgram(e){this.program=new a.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{uAlpha:{value:1},tMap:{value:e}}})}createMesh(e){this.mesh=new l.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=e.scale.x,this.mesh.scale.y=e.scale.y,this.mesh.scale.z=e.scale.z,this.mesh.position.x=e.position.x,this.mesh.position.y=e.position.y,this.mesh.position.z=.01*e.position.z,this.mesh.setParent(this.scene)}setElement(e){if(console.log("element***",e),"collections"===e.id){const{index:s,medias:t}=e,i=t[s];this.createProgram(i.texture),this.createMesh(i.mesh),this.transition="detail"}else this.createProgram(e.texture),this.createMesh(e),this.transition="collections"}animate(e,s){i.default.timeline({onComplete}).to(this.mesh.scale,{duration:1.5,ease:"expo.inOut",x:e.scale.x,x:e.scale.x,x:e.scale.x})}}}},(function(e){e.h=()=>"58a12b058bbc82c8dc7c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZjljY2ZlNmZlNjBmY2QwMGM5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dUZBSU0sSUFBSUEsRUFBWSxFQUFRLDBFQUFSLENBQW9GQyxFQUFPQyxHQUFJLENBQUMsV0FBYSxHQUFHLFFBQVMsSUFDeklELEVBQU9FLElBQUlDLFFBQVFKLEdBQ25CQyxFQUFPRSxJQUFJRSxZQUFPQyxFQUFXTixtVkNDbkMsY0FDSU8sV0FBQUEsRUFBYSxZQUFFQyxFQUFXLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLElBQUVDLElBQzFDQyxLQUFLTCxZQUFjQSxFQUNuQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0QsSUFBTUEsRUFDWEMsS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFFYkUsS0FBS0MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNRixLQUFLSixJQUcvQkksS0FBS0csTUFBUSxDQUNUQyxFQUFHLEVBQ0hDLEVBQUcsRUFFWCxDQUVBQyxhQUFBQSxDQUFlQyxHQUNYUCxLQUFLUSxRQUFVLElBQUlDLEVBQUFBLFFBQVFULEtBQUtKLEdBQUksQ0FDaENjLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ05DLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPUCxLQUczQixDQUVBUyxVQUFBQSxDQUFZQyxHQUNSakIsS0FBS2lCLEtBQU8sSUFBSUMsRUFBQUEsS0FBS2xCLEtBQUtKLEdBQUksQ0FDMUJLLFNBQVVELEtBQUtDLFNBQ2ZPLFFBQVNSLEtBQUtRLFVBR2xCUixLQUFLaUIsS0FBS0UsTUFBTWYsRUFBSWEsRUFBS0UsTUFBTWYsRUFDL0JKLEtBQUtpQixLQUFLRSxNQUFNZCxFQUFJWSxFQUFLRSxNQUFNZCxFQUMvQkwsS0FBS2lCLEtBQUtFLE1BQU1DLEVBQUlILEVBQUtFLE1BQU1DLEVBRS9CcEIsS0FBS2lCLEtBQUtJLFNBQVNqQixFQUFJYSxFQUFLSSxTQUFTakIsRUFDckNKLEtBQUtpQixLQUFLSSxTQUFTaEIsRUFBSVksRUFBS0ksU0FBU2hCLEVBQ3JDTCxLQUFLaUIsS0FBS0ksU0FBU0QsRUFBc0IsSUFBbEJILEVBQUtJLFNBQVNELEVBRXJDcEIsS0FBS2lCLEtBQUtLLFVBQVV0QixLQUFLSCxNQUM3QixDQUVBMEIsVUFBQUEsQ0FBWUMsR0FFUixHQURBQyxRQUFRQyxJQUFJLGFBQWNGLEdBQ1AsZ0JBQWZBLEVBQVFuQyxHQUFzQixDQUM5QixNQUFNLE1BQUVzQyxFQUFLLE9BQUVDLEdBQVdKLEVBQ3BCSyxFQUFRRCxFQUFPRCxHQUVyQjNCLEtBQUtNLGNBQWN1QixFQUFNdEIsU0FDekJQLEtBQUtnQixXQUFXYSxFQUFNWixNQUV0QmpCLEtBQUs4QixXQUFhLFFBQ3RCLE1BQ0k5QixLQUFLTSxjQUFja0IsRUFBUWpCLFNBQzNCUCxLQUFLZ0IsV0FBV1EsR0FFaEJ4QixLQUFLOEIsV0FBYSxhQUUxQixDQUdBQyxPQUFBQSxDQUFTZCxFQUFNZSxHQUNNQyxFQUFBQSxRQUFLQyxTQUFTLENBQzNCQyxhQUdLQyxHQUFHcEMsS0FBS2lCLEtBQUtFLE1BQU8sQ0FDekJrQixTQUFVLElBQ1ZDLEtBQU0sYUFDTmxDLEVBQUdhLEVBQUtFLE1BQU1mLEVBQ2RBLEVBQUdhLEVBQUtFLE1BQU1mLEVBQ2RBLEVBQUdhLEVBQUtFLE1BQU1mLEdBRXRCLGtCQ25GSm1DLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFkYS8uL3N0eWxlcy9pbmRleC5zY3NzP2YwZmYiLCJ3ZWJwYWNrOi8vcHJhZGEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9wcmFkYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcyMzcxODc4Njk5NFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQbGFuZSwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi8uLi9zaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJy4uLy4uL3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IgKHsgY29sbGVjdGlvbnMsIGdsLCBzY2VuZSwgc2l6ZXMsIHVybCB9KSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbnMgPSBjb2xsZWN0aW9uc1xuICAgICAgICB0aGlzLmdsID0gZ2xcbiAgICAgICAgdGhpcy51cmwgPSB1cmxcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcbiAgICAgICAgLy8gY29uc29sZS5sb2coJyYmIEdlbyAqKicsIHRoaXMuZ2VvbWV0cnkpXG5cbiAgICAgICAgdGhpcy5leHRyYSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVQcm9ncmFtICh0ZXh0dXJlKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDEgfSxcbiAgICAgICAgICAgICAgICB0TWFwOiB7IHZhbHVlOiB0ZXh0dXJlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjcmVhdGVNZXNoIChtZXNoKSB7XG4gICAgICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5tZXNoLnNjYWxlLnggPSBtZXNoLnNjYWxlLnhcbiAgICAgICAgdGhpcy5tZXNoLnNjYWxlLnkgPSBtZXNoLnNjYWxlLnlcbiAgICAgICAgdGhpcy5tZXNoLnNjYWxlLnogPSBtZXNoLnNjYWxlLnpcblxuICAgICAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9IG1lc2gucG9zaXRpb24ueFxuICAgICAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9IG1lc2gucG9zaXRpb24ueVxuICAgICAgICB0aGlzLm1lc2gucG9zaXRpb24ueiA9IG1lc2gucG9zaXRpb24ueiAqIDAuMDFcblxuICAgICAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgfVxuXG4gICAgc2V0RWxlbWVudCAoZWxlbWVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCoqKicsIGVsZW1lbnQpXG4gICAgICAgIGlmIChlbGVtZW50LmlkID09PSAnY29sbGVjdGlvbnMnKSB7XG4gICAgICAgICAgICBjb25zdCB7IGluZGV4LCBtZWRpYXMgfSA9IGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gbWVkaWFzW2luZGV4XVxuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2dyYW0obWVkaWEudGV4dHVyZSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVzaChtZWRpYS5tZXNoKVxuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSAnZGV0YWlsJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9ncmFtKGVsZW1lbnQudGV4dHVyZSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVzaChlbGVtZW50KVxuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSAnY29sbGVjdGlvbnMnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAgICAgICAgICBBbmltYXRpb25cbiAgICBhbmltYXRlIChtZXNoLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCB0aW1lbGluZSA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICAgICAgb25Db21wbGV0ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRpbWVsaW5lLnRvKHRoaXMubWVzaC5zY2FsZSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICAgIGVhc2U6ICdleHBvLmluT3V0JyxcbiAgICAgICAgICAgIHg6IG1lc2guc2NhbGUueCxcbiAgICAgICAgICAgIHg6IG1lc2guc2NhbGUueCxcbiAgICAgICAgICAgIHg6IG1lc2guc2NhbGUueCxcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1OGExMmIwNThiYmM4MmM4ZGM3Y1wiKSJdLCJuYW1lcyI6WyJjc3NSZWxvYWQiLCJtb2R1bGUiLCJpZCIsImhvdCIsImRpc3Bvc2UiLCJhY2NlcHQiLCJ1bmRlZmluZWQiLCJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlUHJvZ3JhbSIsInRleHR1cmUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJjcmVhdGVNZXNoIiwibWVzaCIsIk1lc2giLCJzY2FsZSIsInoiLCJwb3NpdGlvbiIsInNldFBhcmVudCIsInNldEVsZW1lbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImluZGV4IiwibWVkaWFzIiwibWVkaWEiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsImNhbGxiYWNrIiwiR1NBUCIsInRpbWVsaW5lIiwib25Db21wbGV0ZSIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9