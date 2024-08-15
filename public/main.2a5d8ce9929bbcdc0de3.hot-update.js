/*! For license information please see main.2a5d8ce9929bbcdc0de3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateprada("main",{"./styles/index.scss":(t,s,e)=>{e.r(s);var i=e("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(t.id,{publicPath:"",locals:!1});t.hot.dispose(i),t.hot.accept(void 0,i)},"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./app/components/Canvas/Collections/Media.js"),o=e("./node_modules/lodash/lodash.js"),n=e("./node_modules/gsap/index.js"),c=e("./node_modules/prefix/index.js");class a{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.group=new i.Transform,this.transformPrefix=c("transform"),this.mediaElements=document.querySelectorAll(".collections_gallery_media"),this.collectionArticles=document.querySelectorAll(".collections_article"),this.galleryElement=document.querySelector(".collections_gallery"),this.galleryWrapperElement=document.querySelector(".collections_gallery_wrapper"),this.titlesElement=document.querySelector(".collections_titles"),this.activeFocusClass="collections_article--active",this.scroll={current:0,target:0,start:0,velocity:.5,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=(0,o.map)(this.mediaElements,((t,s)=>new r.default({element:t,geometry:this.geometry,gl:this.gl,scene:this.group,sizes:this.sizes,index:s})))}show(){(0,o.map)(this.medias,(t=>{t.show()})),this.transition&&this.transition.animate(this.medias[0].mesh,(t=>{}))}hide(){(0,o.map)(this.medias,(t=>{t.hide()}))}onResize(t){this.scroll.current=0,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.start=this.scroll.target=0,(0,o.map)(this.medias,(s=>s.onResize(t,this.scroll.current))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.start=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChangeFocus(t){this.index=t;const s=parseInt(this.mediaElements[this.index].getAttribute("data-index"));(0,o.map)(this.collectionArticles,((t,e)=>{e===s?t.classList.add(this.activeFocusClass):t.classList.remove(this.activeFocusClass)})),this.titlesElement.style[this.transformPrefix]=`translateY(${70*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){if(!this.bounds)return;this.scroll.target=n.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.start<this.scroll.current?this.direction="right":this.scroll.start>this.scroll.current&&(this.direction="left"),this.scroll.start=this.scroll.current;const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChangeFocus(t),(0,o.map)(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"7c23527099fab64812e3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UzNDLEtBQUswQixPQUFPOEMsUUFFckZ4RSxLQUFLNkIsUUFBVUEsR0FHZjdCLEtBQUtzRCxjQUFjekIsSUFHdkJGLEVBQUFBLEVBQUFBLEtBQUkzQixLQUFLMEIsUUFBUSxDQUFDSyxFQUFPRixLQUNyQkUsRUFBTWdDLE9BQU8vRCxLQUFLYyxPQUFPQyxRQUFTZixLQUFLNkIsTUFBTSxHQUVyRCxDQUdBNEMsT0FBQUEsR0FDSXpFLEtBQUtILE1BQU02RSxZQUFZMUUsS0FBS0MsTUFDaEMsa0JDeEtKMEUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWRhLy4vc3R5bGVzL2luZGV4LnNjc3M/ZjBmZiIsIndlYnBhY2s6Ly9wcmFkYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFkYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcyMzcxNzA2NTQ4N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYS5qcydcbmltcG9ydCB7IG1hcCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yICh7IGdsLCBzY2VuZSwgc2l6ZXMsIHRyYW5zaXRpb24gfSkge1xuICAgICAgICB0aGlzLmlkID0gJ2NvbGxlY3Rpb25zJ1xuXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25cblxuICAgICAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICAgICAgdGhpcy5tZWRpYUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX2dhbGxlcnlfbWVkaWEnKVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25BcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19hcnRpY2xlJylcblxuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX2dhbGxlcnknKVxuICAgICAgICB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19nYWxsZXJ5X3dyYXBwZXInKVxuXG4gICAgICAgIHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc190aXRsZXMnKVxuXG4gICAgICAgIHRoaXMuYWN0aXZlRm9jdXNDbGFzcyA9ICdjb2xsZWN0aW9uc19hcnRpY2xlLS1hY3RpdmUnXG5cbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMC41LFxuICAgICAgICAgICAgbGVycDogMC4xXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICAgICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAgICAgICB0aGlzLnNob3coKVxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5ICgpIHtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIH1cblxuICAgIGNyZWF0ZUdhbGxlcnkgKCkge1xuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAgICAgICAgICBTaG93XG4gICAgc2hvdyAoKSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhKSA9PiB7XG4gICAgICAgICAgICBtZWRpYS5zaG93KClcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uLmFuaW1hdGUodGhpcy5tZWRpYXNbMF0ubWVzaCwgXyA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLmhpZGUoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vICAgICAgICAgICAgICAgICAgIEV2ZW50c1xuXG4gICAgb25SZXNpemUgKGV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIb21lIG9uUmVzaXplKCknKVxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuc2l6ZXMud2lkdGhcblxuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcblxuICAgICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duICh7IHgsIHkgfSkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSAoeyB4LCB5IH0pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG4gICAgfVxuXG4gICAgb25Ub3VjaFVwICh7IHgsIHkgfSkge31cblxuICAgIG9uV2hlZWwgKHsgcGl4ZWxZIH0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuICAgIH1cblxuICAgIG9uQ2hhbmdlRm9jdXMgKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuICAgICAgICAvLyBtYXAgdGhyb3VnaCBhbGwgY29sbGVjdGlvbiBpbmZvcm1hdGlvblxuICAgICAgICAvLyBhZGQgc2hvdyBjbGFzcyB0byBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0ZWRDb2xsZWN0aW9uIGluZGV4XG4gICAgICAgIG1hcCh0aGlzLmNvbGxlY3Rpb25BcnRpY2xlcywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlRm9jdXNDbGFzcylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlRm9jdXNDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoJHs3MCAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZylgXG4gICAgfVxuXG4gICAgLy8gICAgICAgICAgTG9vcFxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwuc3RhcnQgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5zdGFydCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblxuICAgICAgICBpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxuXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm9jdXMoaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLmluZGV4KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vICAgICAgICAgIERlc3Ryb3lcbiAgICBkZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICAgIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdjMjM1MjcwOTlmYWI2NDgxMmUzXCIpIl0sIm5hbWVzIjpbImNzc1JlbG9hZCIsIm1vZHVsZSIsImlkIiwiaG90IiwiZGlzcG9zZSIsImFjY2VwdCIsInVuZGVmaW5lZCIsIkNvbGxlY3Rpb25zIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwibWVkaWFFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25BcnRpY2xlcyIsImdhbGxlcnlFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJhY3RpdmVGb2N1c0NsYXNzIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm1lZGlhIiwiYW5pbWF0ZSIsIm1lc2giLCJfIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2VGb2N1cyIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJ1cGRhdGUiLCJHU0FQIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9