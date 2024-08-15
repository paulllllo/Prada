/*! For license information please see main.e8e23730b9434819fe77.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateprada("main",{"./styles/index.scss":(t,e,s)=>{s.r(e);var o=s("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(t.id,{publicPath:"",locals:!1});t.hot.dispose(o),t.hot.accept(void 0,o)},"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var o=s("./node_modules/ogl/src/core/Renderer.js"),i=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),l=s("./app/components/Canvas/Collections/index.js"),a=s("./app/components/Canvas/transition.js"),r=s("./app/components/Canvas/Detail/index.js");class d{constructor({template:t}){this.template=t,this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0}}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antiAliasing:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null,console.log("destroy home!"))}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null,console.log("destroy about!"))}createCollections(){this.collections=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes,transition:this.transition})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetail(){this.detail=new r.default({gl:this.gl,scene:this.scene,sizes:this.sizes,transition:this.transition})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onPageChangeEnd(this.template)}onPageChangeStart(t,e){this.collections&&this.collections.hide(),this.about&&this.about.hide(),this.home&&this.home.hide(),this.detail&&this.detail.hide(),this.fromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.fromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.fromCollectionsToDetail||this.fromDetailToCollections)&&(console.log("fromCollectionsToDetail",fromCollectionsToDetail),console.log("fromDetailToCollections"),fromDetailToCollections,this.transition=new a.default({collections:this.collections,url:e,gl:this.gl,scene:this.scene,sizes:this.sizes}),this.transition.setElement(this.collections||this.detail),console.log("Detail***",this.detail))}onPageChangeEnd(t){"collections"===t?this.createCollections():this.collections&&this.destroyCollections(),"Detail"===t?this.createDetail():this.detail&&this.destroyDetail(),"about"===t?this.createAbout():this.about&&this.destroyAbout(),"home"===t?this.createHome():this.home&&this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const o={sizes:this.sizes};this.collections&&this.collections.onResize(o),this.detail&&this.detail.onResize(o),this.about&&this.about.onResize(o),this.home&&this.home.onResize(o)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.collections&&this.collections.onTouchDown&&this.collections.onTouchDown(e),this.detail&&this.detail.onTouchDown&&this.detail.onTouchDown(e),this.about&&this.about.onTouchDown&&this.about.onTouchDown(e),this.home&&this.home.onTouchDown&&this.home.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const o={x:this.x,y:this.y};this.collections&&this.collections.onTouchMove&&this.collections.onTouchMove(o),this.detail&&this.detail.onTouchMove&&this.detail.onTouchMove(o),this.about&&this.about.onTouchMove&&this.about.onTouchMove(o),this.home&&this.home.onTouchMove&&this.home.onTouchMove(o)}onTouchUp(t){this.isDown=!1;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const o={x:this.x,y:this.y};this.collections&&this.collections.onTouchUp&&this.collections.onTouchUp(o),this.detail&&this.detail.onTouchUp&&this.detail.onTouchUp(o),this.about&&this.about.onTouchUp&&this.about.onTouchUp(o),this.home&&this.home.onTouchUp&&this.home.onTouchUp(o)}onWheel(t){this.collections&&this.collections.onWheel(t),this.home&&this.home.onWheel(t)}update(t){this.collections&&this.collections.update(t),this.detail&&this.detail.update(t),this.about&&this.about.update(t),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"9b3c106c8fb51094a0ed"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMMUIsS0FBSzBCLEtBQUttRCxRQUFRUCxFQUUxQixDQUVBUSxNQUFBQSxDQUFRQyxHQUNBL0UsS0FBS3NDLGFBQ0x0QyxLQUFLc0MsWUFBWXdDLE9BQU9DLEdBR3hCL0UsS0FBSzJDLFFBQ0wzQyxLQUFLMkMsT0FBT21DLE9BQU9DLEdBR25CL0UsS0FBS2tDLE9BQ0xsQyxLQUFLa0MsTUFBTTRDLE9BQU9DLEdBR2xCL0UsS0FBSzBCLE1BQ0wxQixLQUFLMEIsS0FBS29ELFNBR2Q5RSxLQUFLVSxTQUFTc0UsT0FBTyxDQUNqQjdELE9BQVFuQixLQUFLbUIsT0FDYkksTUFBT3ZCLEtBQUt1QixPQUVwQixrQkNoWEowRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhZGEvLi9zdHlsZXMvaW5kZXguc2Nzcz9mMGZmIiwid2VicGFjazovL3ByYWRhLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL3ByYWRhL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzIzNzIwMjYwNDg4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lL2luZGV4LmpzJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQvaW5kZXguanMnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vdHJhbnNpdGlvbi5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9EZXRhaWwvaW5kZXguanMnXG5cbi8vIGltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gICAgY29uc3RydWN0b3IgKHsgdGVtcGxhdGUgfSkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKClcbiAgICAgICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKClcblxuICAgICAgICB0aGlzLm9uUmVzaXplKClcblxuICAgICAgICAvLyB0aGlzLm9uUGFnZUNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuICAgICAgICAvLyB0aGlzLmNyZWF0ZUhvbWUoKVxuXG4gICAgICAgIHRoaXMueCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueSA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVJlbmRlcmVyICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG4gICAgICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgICAgIGFudGlBbGlhc2luZzogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcbiAgICB9XG5cbiAgICBjcmVhdGVDYW1lcmEgKCkge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuZSAoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgICB9XG5cbiAgICAvLyAgICAgIEhvbWVcblxuICAgIGNyZWF0ZUhvbWUgKCkge1xuICAgICAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG4gICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NyZWF0ZSBob21lIScpXG4gICAgfVxuXG4gICAgZGVzdHJveUhvbWUgKCkge1xuICAgICAgICBpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5ob21lLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmhvbWUgPSBudWxsXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IGhvbWUhJylcbiAgICB9XG5cbiAgICAvLyAgICAgICAgICBBYm91dFxuXG4gICAgY3JlYXRlQWJvdXQgKCkge1xuICAgICAgICB0aGlzLmFib3V0ID0gbmV3IEFib3V0KHtcbiAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlIEFib3V0IScpXG4gICAgfVxuXG4gICAgZGVzdHJveUFib3V0ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuICAgICAgICB0aGlzLmFib3V0LmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmFib3V0ID0gbnVsbFxuICAgICAgICBjb25zb2xlLmxvZygnZGVzdHJveSBhYm91dCEnKVxuICAgIH1cblxuICAgIC8vICAgICAgICAgICAgICBDb2xsZWN0aW9uc1xuXG4gICAgY3JlYXRlQ29sbGVjdGlvbnMgKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25zID0gbmV3IENvbGxlY3Rpb25zKHtcbiAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlc3Ryb3lDb2xsZWN0aW9ucyAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb2xsZWN0aW9ucykgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9ucy5kZXN0cm95KClcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9ucyA9IG51bGxcbiAgICB9XG5cbiAgICAvLyBEZXRhaWxcbiAgICBjcmVhdGVEZXRhaWwgKCkge1xuICAgICAgICB0aGlzLmRldGFpbCA9IG5ldyBEZXRhaWwoe1xuICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy50cmFuc2l0aW9uXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVzdHJveURldGFpbCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5kZXRhaWwpIHJldHVyblxuXG4gICAgICAgIHRoaXMuZGV0YWlsLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLmRldGFpbCA9IG51bGxcbiAgICB9XG5cbiAgICAvLyAgICAgICAgICBFdmVudHNcblxuICAgIG9uUHJlbG9hZGVkICgpIHtcbiAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcbiAgICB9XG5cbiAgICBvblBhZ2VDaGFuZ2VTdGFydCAodGVtcGxhdGUsIHVybCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9ucy5oaWRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFib3V0KSB7XG4gICAgICAgICAgICB0aGlzLmFib3V0LmhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgICAgICAgdGhpcy5ob21lLmhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGV0YWlsKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFpbC5oaWRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgPSB0aGlzLnRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xXG4gICAgICAgIHRoaXMuZnJvbURldGFpbFRvQ29sbGVjdGlvbnMgPSB0aGlzLnRlbXBsYXRlID09PSAnZGV0YWlsJyAmJiB1cmwuaW5kZXhPZignY29sbGVjdGlvbnMnKSA+IC0xXG5cbiAgICAgICAgaWYgKHRoaXMuZnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgfHwgdGhpcy5mcm9tRGV0YWlsVG9Db2xsZWN0aW9ucykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmcm9tQ29sbGVjdGlvbnNUb0RldGFpbFwiLCBmcm9tQ29sbGVjdGlvbnNUb0RldGFpbClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJvbURldGFpbFRvQ29sbGVjdGlvbnNcIiksIGZyb21EZXRhaWxUb0NvbGxlY3Rpb25zXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbnM6IHRoaXMuY29sbGVjdGlvbnMsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24uc2V0RWxlbWVudCh0aGlzLmNvbGxlY3Rpb25zIHx8IHRoaXMuZGV0YWlsKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RldGFpbCoqKicsIHRoaXMuZGV0YWlsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYWdlQ2hhbmdlRW5kICh0ZW1wbGF0ZSkge1xuICAgICAgICAvLyBpZiAodGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZSh0aGlzLmNvbGxlY3Rpb25zKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbGxlY3Rpb25zKClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lDb2xsZWN0aW9ucygpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUgPT09ICdEZXRhaWwnKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURldGFpbCgpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveURldGFpbCgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUgPT09ICdhYm91dCcpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWJvdXQoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUFib3V0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95SG9tZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc2l6ZSAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcbiAgICAgICAgICAgIGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuICAgICAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG4gICAgICAgIC8vIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTAwKVxuICAgICAgICAvLyBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgICAgIC8vIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cbiAgICAgICAgdGhpcy5zaXplcyA9IHtcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnMub25SZXNpemUodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGV0YWlsKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFpbC5vblJlc2l6ZSh2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblJlc2l6ZSh2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaERvd24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0aW9ucyAmJiB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRldGFpbCAmJiB0aGlzLmRldGFpbC5vblRvdWNoRG93bikge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWwub25Ub3VjaERvd24odmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWJvdXQgJiYgdGhpcy5hYm91dC5vblRvdWNoRG93bikge1xuICAgICAgICAgICAgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lICYmIHRoaXMuaG9tZS5vblRvdWNoRG93bikge1xuICAgICAgICAgICAgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgICAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICAgICAgdGhpcy54LmVuZCA9IHhcbiAgICAgICAgdGhpcy55LmVuZCA9IHlcblxuICAgICAgICAvLyB0aGlzLnguZGlzdGFuY2UgPSB0aGlzLnguc3RhcnQgLSB0aGlzLnguZW5kXG4gICAgICAgIC8vIHRoaXMueS5kaXN0YW5jZSA9IHRoaXMueS5zdGFydCAtIHRoaXMueS5lbmRcblxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zICYmIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaE1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGV0YWlsICYmIHRoaXMuZGV0YWlsLm9uVG91Y2hNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFpbC5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm91dCAmJiB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhvbWUgJiYgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaFVwIChldmVudCkge1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlXG5cbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgICAgIHRoaXMueC5lbmQgPSB4XG4gICAgICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICAgICAgLy8gdGhpcy54LmRpc3RhbmNlID0gdGhpcy54LnN0YXJ0IC0gdGhpcy54LmVuZFxuICAgICAgICAvLyB0aGlzLnkuZGlzdGFuY2UgPSB0aGlzLnkuc3RhcnQgLSB0aGlzLnkuZW5kXG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgeTogdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0aW9ucyAmJiB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hVcCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoVXAodmFsdWVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGV0YWlsICYmIHRoaXMuZGV0YWlsLm9uVG91Y2hVcCkge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWwub25Ub3VjaFVwKHZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFib3V0ICYmIHRoaXMuYWJvdXQub25Ub3VjaFVwKSB7XG4gICAgICAgICAgICB0aGlzLmFib3V0Lm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lICYmIHRoaXMuaG9tZS5vblRvdWNoVXApIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25XaGVlbCAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnMub25XaGVlbChldmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlIChzY3JvbGwpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbnMudXBkYXRlKHNjcm9sbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRldGFpbCkge1xuICAgICAgICAgICAgdGhpcy5kZXRhaWwudXBkYXRlKHNjcm9sbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFib3V0KSB7XG4gICAgICAgICAgICB0aGlzLmFib3V0LnVwZGF0ZShzY3JvbGwpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjliM2MxMDZjOGZiNTEwOTRhMGVkXCIpIl0sIm5hbWVzIjpbImNzc1JlbG9hZCIsIm1vZHVsZSIsImlkIiwiaG90IiwiZGlzcG9zZSIsImFjY2VwdCIsInVuZGVmaW5lZCIsIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImFscGhhIiwiYW50aUFsaWFzaW5nIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiVHJhbnNmb3JtIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJIb21lIiwic2l6ZXMiLCJkZXN0cm95SG9tZSIsImRlc3Ryb3kiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQWJvdXQiLCJhYm91dCIsIkFib3V0IiwiZGVzdHJveUFib3V0IiwiY3JlYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwidHJhbnNpdGlvbiIsImRlc3Ryb3lDb2xsZWN0aW9ucyIsImNyZWF0ZURldGFpbCIsImRldGFpbCIsIkRldGFpbCIsImRlc3Ryb3lEZXRhaWwiLCJvblByZWxvYWRlZCIsIm9uUGFnZUNoYW5nZUVuZCIsIm9uUGFnZUNoYW5nZVN0YXJ0IiwidXJsIiwiaGlkZSIsImZyb21Db2xsZWN0aW9uc1RvRGV0YWlsIiwiaW5kZXhPZiIsImZyb21EZXRhaWxUb0NvbGxlY3Rpb25zIiwiVHJhbnNpdGlvbiIsInNldEVsZW1lbnQiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=