/*! For license information please see main.5aac31a1a437b55e3634.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateprada("main",{"./styles/index.scss":(t,e,s)=>{s.r(e);var i=s("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(t.id,{publicPath:"",locals:!1});t.hot.dispose(i),t.hot.accept(void 0,i)},"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),l=s("./app/components/Canvas/Collections/index.js"),a=s("./app/components/Canvas/transition.js"),d=s("./app/components/Canvas/Detail/index.js");class r{constructor({template:t}){this.template=t,this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0}}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antiAliasing:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null,console.log("destroy home!"))}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null,console.log("destroy about!"))}createCollections(){this.collections=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes,transition:this.transition})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetail(){this.detail=new d.default({gl:this.gl,scene:this.scene,sizes:this.sizes,transition:this.transition})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onPageChangeEnd(this.template)}onPageChangeStart(t,e){this.collections&&this.collections.hide(),this.about&&this.about.hide(),this.home&&this.home.hide(),this.detail&&this.detail.hide(),this.fromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.fromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.fromCollectionsToDetail||this.fromDetailToCollections)&&(console.log(""),this.transition=new a.default({collections:this.collections,url:e,gl:this.gl,scene:this.scene,sizes:this.sizes}),this.transition.setElement(this.collections||this.detail),console.log("Detail***",this.detail))}onPageChangeEnd(t){"collections"===t?this.createCollections():this.collections&&this.destroyCollections(),"Detail"===t?this.createDetail():this.detail&&this.destroyDetail(),"about"===t?this.createAbout():this.about&&this.destroyAbout(),"home"===t?this.createHome():this.home&&this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const i={sizes:this.sizes};this.collections&&this.collections.onResize(i),this.detail&&this.detail.onResize(i),this.about&&this.about.onResize(i),this.home&&this.home.onResize(i)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.collections&&this.collections.onTouchDown&&this.collections.onTouchDown(e),this.detail&&this.detail.onTouchDown&&this.detail.onTouchDown(e),this.about&&this.about.onTouchDown&&this.about.onTouchDown(e),this.home&&this.home.onTouchDown&&this.home.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.collections&&this.collections.onTouchMove&&this.collections.onTouchMove(i),this.detail&&this.detail.onTouchMove&&this.detail.onTouchMove(i),this.about&&this.about.onTouchMove&&this.about.onTouchMove(i),this.home&&this.home.onTouchMove&&this.home.onTouchMove(i)}onTouchUp(t){this.isDown=!1;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.collections&&this.collections.onTouchUp&&this.collections.onTouchUp(i),this.detail&&this.detail.onTouchUp&&this.detail.onTouchUp(i),this.about&&this.about.onTouchUp&&this.about.onTouchUp(i),this.home&&this.home.onTouchUp&&this.home.onTouchUp(i)}onWheel(t){this.collections&&this.collections.onWheel(t),this.home&&this.home.onWheel(t)}update(t){this.collections&&this.collections.update(t),this.detail&&this.detail.update(t),this.about&&this.about.update(t),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"e39f534eca49f77e840f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQVFDLEdBQ0EvRSxLQUFLc0MsYUFDTHRDLEtBQUtzQyxZQUFZd0MsT0FBT0MsR0FHeEIvRSxLQUFLMkMsUUFDTDNDLEtBQUsyQyxPQUFPbUMsT0FBT0MsR0FHbkIvRSxLQUFLa0MsT0FDTGxDLEtBQUtrQyxNQUFNNEMsT0FBT0MsR0FHbEIvRSxLQUFLMEIsTUFDTDFCLEtBQUswQixLQUFLb0QsU0FHZDlFLEtBQUtVLFNBQVNzRSxPQUFPLENBQ2pCN0QsT0FBUW5CLEtBQUttQixPQUNiSSxNQUFPdkIsS0FBS3VCLE9BRXBCLGtCQy9XSjBELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFkYS8uL3N0eWxlcy9pbmRleC5zY3NzP2YwZmYiLCJ3ZWJwYWNrOi8vcHJhZGEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJhZGEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE3MjM3MjAyMTY2ODVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUvaW5kZXguanMnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL0NvbGxlY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi90cmFuc2l0aW9uLmpzJ1xuaW1wb3J0IERldGFpbCBmcm9tICcuL0RldGFpbC9pbmRleC5qcydcblxuLy8gaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvciAoeyB0ZW1wbGF0ZSB9KSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgICAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuXG4gICAgICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgICAgIC8vIHRoaXMub25QYWdlQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlSG9tZSgpXG5cbiAgICAgICAgdGhpcy54ID0ge1xuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBkaXN0YW5jZTogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy55ID0ge1xuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBkaXN0YW5jZTogMCxcbiAgICAgICAgICAgIGVuZDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlUmVuZGVyZXIgKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgICAgICAgYW50aUFsaWFzaW5nOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuICAgIH1cblxuICAgIGNyZWF0ZUNhbWVyYSAoKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lICgpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICAgIH1cblxuICAgIC8vICAgICAgSG9tZVxuXG4gICAgY3JlYXRlSG9tZSAoKSB7XG4gICAgICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlIGhvbWUhJylcbiAgICB9XG5cbiAgICBkZXN0cm95SG9tZSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5ob21lKSByZXR1cm5cblxuICAgICAgICB0aGlzLmhvbWUuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuaG9tZSA9IG51bGxcbiAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3kgaG9tZSEnKVxuICAgIH1cblxuICAgIC8vICAgICAgICAgIEFib3V0XG5cbiAgICBjcmVhdGVBYm91dCAoKSB7XG4gICAgICAgIHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGUgQWJvdXQhJylcbiAgICB9XG5cbiAgICBkZXN0cm95QWJvdXQgKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWJvdXQpIHJldHVyblxuXG4gICAgICAgIHRoaXMuYWJvdXQuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuYWJvdXQgPSBudWxsXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IGFib3V0IScpXG4gICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgIENvbGxlY3Rpb25zXG5cbiAgICBjcmVhdGVDb2xsZWN0aW9ucyAoKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbnMgPSBuZXcgQ29sbGVjdGlvbnMoe1xuICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVzdHJveUNvbGxlY3Rpb25zICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxlY3Rpb25zKSByZXR1cm5cblxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25zID0gbnVsbFxuICAgIH1cblxuICAgIC8vIERldGFpbFxuICAgIGNyZWF0ZURldGFpbCAoKSB7XG4gICAgICAgIHRoaXMuZGV0YWlsID0gbmV3IERldGFpbCh7XG4gICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb25cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZXN0cm95RGV0YWlsICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRldGFpbCkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5kZXRhaWwuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuZGV0YWlsID0gbnVsbFxuICAgIH1cblxuICAgIC8vICAgICAgICAgIEV2ZW50c1xuXG4gICAgb25QcmVsb2FkZWQgKCkge1xuICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuICAgIH1cblxuICAgIG9uUGFnZUNoYW5nZVN0YXJ0ICh0ZW1wbGF0ZSwgdXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLmhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvdXQuaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUuaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsLmhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcm9tQ29sbGVjdGlvbnNUb0RldGFpbCA9IHRoaXMudGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycgJiYgdXJsLmluZGV4T2YoJ2RldGFpbCcpID4gLTFcbiAgICAgICAgdGhpcy5mcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyA9IHRoaXMudGVtcGxhdGUgPT09ICdkZXRhaWwnICYmIHVybC5pbmRleE9mKCdjb2xsZWN0aW9ucycpID4gLTFcblxuICAgICAgICBpZiAodGhpcy5mcm9tQ29sbGVjdGlvbnNUb0RldGFpbCB8fCB0aGlzLmZyb21EZXRhaWxUb0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKVxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25zOiB0aGlzLmNvbGxlY3Rpb25zLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uLnNldEVsZW1lbnQodGhpcy5jb2xsZWN0aW9ucyB8fCB0aGlzLmRldGFpbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXRhaWwqKionLCB0aGlzLmRldGFpbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGFnZUNoYW5nZUVuZCAodGVtcGxhdGUpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgICAvLyAgICAgdGhpcy50cmFuc2l0aW9uLmFuaW1hdGUodGhpcy5jb2xsZWN0aW9ucylcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gJ2NvbGxlY3Rpb25zJykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2xsZWN0aW9ucygpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSAnRGV0YWlsJykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZXRhaWwoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGV0YWlsKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lEZXRhaWwoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFib3V0KClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFib3V0KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lBYm91dCgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVIb21lKClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUhvbWUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZXNpemUgKCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuICAgICAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG4gICAgICAgICAgICBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcbiAgICAgICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgICAgICAvLyBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDEwMClcbiAgICAgICAgLy8gY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuICAgICAgICAvLyBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG4gICAgICAgIHRoaXMuc2l6ZXMgPSB7XG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uUmVzaXplKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRldGFpbCkge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWwub25SZXNpemUodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgICAgICAgdGhpcy5ob21lLm9uUmVzaXplKHZhbHVlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duIChldmVudCkge1xuICAgICAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgICAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgICAgICB0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbnMgJiYgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoRG93bikge1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZXRhaWwgJiYgdGhpcy5kZXRhaWwub25Ub3VjaERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFib3V0ICYmIHRoaXMuYWJvdXQub25Ub3VjaERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9tZSAmJiB0aGlzLmhvbWUub25Ub3VjaERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgICAgIHRoaXMueC5lbmQgPSB4XG4gICAgICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICAgICAgLy8gdGhpcy54LmRpc3RhbmNlID0gdGhpcy54LnN0YXJ0IC0gdGhpcy54LmVuZFxuICAgICAgICAvLyB0aGlzLnkuZGlzdGFuY2UgPSB0aGlzLnkuc3RhcnQgLSB0aGlzLnkuZW5kXG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0aW9ucyAmJiB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRldGFpbCAmJiB0aGlzLmRldGFpbC5vblRvdWNoTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWwub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWJvdXQgJiYgdGhpcy5hYm91dC5vblRvdWNoTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lICYmIHRoaXMuaG9tZS5vblRvdWNoTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hVcCAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgICAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgICAgICB0aGlzLnguZW5kID0geFxuICAgICAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgICAgIC8vIHRoaXMueC5kaXN0YW5jZSA9IHRoaXMueC5zdGFydCAtIHRoaXMueC5lbmRcbiAgICAgICAgLy8gdGhpcy55LmRpc3RhbmNlID0gdGhpcy55LnN0YXJ0IC0gdGhpcy55LmVuZFxuXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbnMgJiYgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoVXApIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaFVwKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRldGFpbCAmJiB0aGlzLmRldGFpbC5vblRvdWNoVXApIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsLm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm91dCAmJiB0aGlzLmFib3V0Lm9uVG91Y2hVcCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9tZSAmJiB0aGlzLmhvbWUub25Ub3VjaFVwKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uV2hlZWwgKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uV2hlZWwoZXZlbnQpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUub25XaGVlbChldmVudClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoc2Nyb2xsKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLnVwZGF0ZShzY3JvbGwpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsLnVwZGF0ZShzY3JvbGwpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgICAgICAgdGhpcy5ob21lLnVwZGF0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmVcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMzlmNTM0ZWNhNDlmNzdlODQwZlwiKSJdLCJuYW1lcyI6WyJjc3NSZWxvYWQiLCJtb2R1bGUiLCJpZCIsImhvdCIsImRpc3Bvc2UiLCJhY2NlcHQiLCJ1bmRlZmluZWQiLCJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwidGhpcyIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlBbGlhc2luZyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImNyZWF0ZUhvbWUiLCJob21lIiwiSG9tZSIsInNpemVzIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsInRyYW5zaXRpb24iLCJkZXN0cm95Q29sbGVjdGlvbnMiLCJjcmVhdGVEZXRhaWwiLCJkZXRhaWwiLCJEZXRhaWwiLCJkZXN0cm95RGV0YWlsIiwib25QcmVsb2FkZWQiLCJvblBhZ2VDaGFuZ2VFbmQiLCJvblBhZ2VDaGFuZ2VTdGFydCIsInVybCIsImhpZGUiLCJmcm9tQ29sbGVjdGlvbnNUb0RldGFpbCIsImluZGV4T2YiLCJmcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyIsIlRyYW5zaXRpb24iLCJzZXRFbGVtZW50Iiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9