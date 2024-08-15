/*! For license information please see main.acf33ba5b58bf2501fc5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateprada("main",{"./styles/index.scss":(t,s,e)=>{e.r(s);var i=e("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(t.id,{publicPath:"",locals:!1});t.hot.dispose(i),t.hot.accept(void 0,i)},"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./app/components/Canvas/Collections/Media.js"),o=e("./node_modules/lodash/lodash.js"),n=e("./node_modules/gsap/index.js"),a=e("./node_modules/prefix/index.js");class c{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.group=new i.Transform,this.transformPrefix=a("transform"),this.mediaElements=document.querySelectorAll(".collections_gallery_media"),this.collectionArticles=document.querySelectorAll(".collections_article"),this.galleryElement=document.querySelector(".collections_gallery"),this.galleryWrapperElement=document.querySelector(".collections_gallery_wrapper"),this.titlesElement=document.querySelector(".collections_titles"),this.activeFocusClass="collections_article--active",this.scroll={current:0,target:0,start:0,velocity:.5,lerp:.1},this.createGeometry(),this.createGallery(),this.onResize({}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=(0,o.map)(this.mediaElements,((t,s)=>new r.default({element:t,geometry:this.geometry,gl:this.gl,scene:this.group,sizes:this.sizes,index:s})))}show(){(0,o.map)(this.medias,(t=>{t.show()})),this.transition&&this.transition.animate(this.medias[0].mesh,(t=>{}))}hide(){(0,o.map)(this.medias,(t=>{t.hide()}))}onResize(t){this.scroll.current=0,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.start=this.scroll.target=0,(0,o.map)(this.medias,(s=>s.onResize(t,this.scroll.current))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.start=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChangeFocus(t){this.index=t;const s=parseInt(this.mediaElements[this.index].getAttribute("data-index"));(0,o.map)(this.collectionArticles,((t,e)=>{e===s?t.classList.add(this.activeFocusClass):t.classList.remove(this.activeFocusClass)})),this.titlesElement.style[this.transformPrefix]=`translateY(${70*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){this.scroll.target=n.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.start<this.scroll.current?this.direction="right":this.scroll.start>this.scroll.current&&(this.direction="left"),this.scroll.start=this.scroll.current;const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChangeFocus(t),(0,o.map)(this.medias,((t,s)=>{t.update(this.scroll.current,this.index)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"94114118abdf546da0d3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0MsS0FBSzJCLE9BQU82QyxRQUVyRnhFLEtBQUs4QixRQUFVQSxHQUdmOUIsS0FBS3NELGNBQWN4QixJQUd2QkYsRUFBQUEsRUFBQUEsS0FBSTVCLEtBQUsyQixRQUFRLENBQUNLLEVBQU9GLEtBQ3JCRSxFQUFNK0IsT0FBTy9ELEtBQUtjLE9BQU9DLFFBQVNmLEtBQUs4QixNQUFNLEdBRXJELENBR0EyQyxPQUFBQSxHQUNJekUsS0FBS0gsTUFBTTZFLFlBQVkxRSxLQUFLQyxNQUNoQyxrQkN2S0owRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhZGEvLi9zdHlsZXMvaW5kZXguc2Nzcz9mMGZmIiwid2VicGFjazovL3ByYWRhLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL3ByYWRhL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzIzNzE3NDQxMzUwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhLmpzJ1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IgKHsgZ2wsIHNjZW5lLCBzaXplcywgdHJhbnNpdGlvbiB9KSB7XG4gICAgICAgIHRoaXMuaWQgPSAnY29sbGVjdGlvbnMnXG5cbiAgICAgICAgdGhpcy5nbCA9IGdsXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuICAgICAgICB0aGlzLm1lZGlhRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfZ2FsbGVyeV9tZWRpYScpXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX2FydGljbGUnKVxuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfZ2FsbGVyeScpXG4gICAgICAgIHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX2dhbGxlcnlfd3JhcHBlcicpXG5cbiAgICAgICAgdGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX3RpdGxlcycpXG5cbiAgICAgICAgdGhpcy5hY3RpdmVGb2N1c0NsYXNzID0gJ2NvbGxlY3Rpb25zX2FydGljbGUtLWFjdGl2ZSdcblxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLjUsXG4gICAgICAgICAgICBsZXJwOiAwLjFcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuICAgICAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG4gICAgICAgIHRoaXMub25SZXNpemUoe30pXG5cbiAgICAgICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuICAgICAgICB0aGlzLnNob3coKVxuICAgIH1cblxuICAgIGNyZWF0ZUdlb21ldHJ5ICgpIHtcbiAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIH1cblxuICAgIGNyZWF0ZUdhbGxlcnkgKCkge1xuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAgICAgICAgICBTaG93XG4gICAgc2hvdyAoKSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhKSA9PiB7XG4gICAgICAgICAgICBtZWRpYS5zaG93KClcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uLmFuaW1hdGUodGhpcy5tZWRpYXNbMF0ubWVzaCwgXyA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlICgpIHtcbiAgICAgICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLmhpZGUoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vICAgICAgICAgICAgICAgICAgIEV2ZW50c1xuXG4gICAgb25SZXNpemUgKGV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIb21lIG9uUmVzaXplKCknKVxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuc2l6ZXMud2lkdGhcblxuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcblxuICAgICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duICh7IHgsIHkgfSkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSAoeyB4LCB5IH0pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG4gICAgfVxuXG4gICAgb25Ub3VjaFVwICh7IHgsIHkgfSkge31cblxuICAgIG9uV2hlZWwgKHsgcGl4ZWxZIH0pIHtcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuICAgIH1cblxuICAgIG9uQ2hhbmdlRm9jdXMgKGluZGV4KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuICAgICAgICAvLyBtYXAgdGhyb3VnaCBhbGwgY29sbGVjdGlvbiBpbmZvcm1hdGlvblxuICAgICAgICAvLyBhZGQgc2hvdyBjbGFzcyB0byBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0ZWRDb2xsZWN0aW9uIGluZGV4XG4gICAgICAgIG1hcCh0aGlzLmNvbGxlY3Rpb25BcnRpY2xlcywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlRm9jdXNDbGFzcylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlRm9jdXNDbGFzcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoJHs3MCAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZylgXG4gICAgfVxuXG4gICAgLy8gICAgICAgICAgTG9vcFxuICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuICAgICAgICBpZiAodGhpcy5zY3JvbGwuc3RhcnQgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5zdGFydCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblxuICAgICAgICBpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxuXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm9jdXMoaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLmluZGV4KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vICAgICAgICAgIERlc3Ryb3lcbiAgICBkZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICAgIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk0MTE0MTE4YWJkZjU0NmRhMGQzXCIpIl0sIm5hbWVzIjpbImNzc1JlbG9hZCIsIm1vZHVsZSIsImlkIiwiaG90IiwiZGlzcG9zZSIsImFjY2VwdCIsInVuZGVmaW5lZCIsIkNvbGxlY3Rpb25zIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwibWVkaWFFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25BcnRpY2xlcyIsImdhbGxlcnlFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJhY3RpdmVGb2N1c0NsYXNzIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJhbmltYXRlIiwibWVzaCIsIl8iLCJoaWRlIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2VGb2N1cyIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJ1cGRhdGUiLCJHU0FQIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9