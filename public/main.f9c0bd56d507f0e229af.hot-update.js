/*! For license information please see main.f9c0bd56d507f0e229af.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateprada("main",{"./styles/index.scss":(s,t,e)=>{e.r(t);var i=e("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(s.id,{publicPath:"",locals:!1});s.hot.dispose(i),s.hot.accept(void 0,i)},"./app/components/Canvas/About/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>h});var i=e("./node_modules/lodash/lodash.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/ogl/src/core/Transform.js"),l=e("./app/components/Canvas/About/Media.js");class h{constructor({element:s,geometry:t,index:e,gl:i,scene:r,sizes:l}){this.elementWrapper=document.querySelector(".about_gallery_wrapper"),this.element=s,this.geometry=t,this.index=e,this.gl=i,this.scene=r,this.sizes=l,this.scroll={current:0,target:0,start:0,velocity:.5,lerp:.1},this.group=new o.Transform,this.createMedias(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene)}createMedias(){this.mediasElements=document.querySelectorAll(".about_gallery_media"),this.medias=(0,i.map)(this.mediasElements,((s,t)=>new l.default({element:s,geometry:this.geometry,gl:this.gl,scene:this.group,sizes:this.sizes,index:t})))}show(){(0,i.map)(this.medias,(s=>{s.show()}))}hide(){(0,i.map)(this.medias,(s=>{s.hide()}))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,(0,i.map)(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(s){const t=.1*(s.current-s.target),e=s.current/window.innerHeight;this.scroll.current<this.scroll.target?(this.direction="right",this.scroll.velocity=-1):this.scroll.current>this.scroll.target&&(this.direction="left",this.scroll.velocity=1),this.scroll.target-=this.scroll.velocity,this.scroll.target+=t,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),(0,i.map)(this.medias,((s,t)=>{const e=s.mesh.scale.x/2;if("left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)}));const o=e*this.sizes.height;this.group.position.y=o}}}},(function(s){s.h=()=>"f680addd9fb8300e926e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQ1IsS0FBS0ksT0FBT0UsUUFBVTJCLEVBRXRCakMsS0FBS0ksT0FBT0MsUUFBVWtDLEVBQUFBLFFBQUtDLE1BQU1DLFlBQVl6QyxLQUFLSSxPQUFPQyxRQUFTTCxLQUFLSSxPQUFPRSxPQUFRTixLQUFLSSxPQUFPSyxPQUVsR1MsRUFBQUEsRUFBQUEsS0FBSWxCLEtBQUtpQixRQUFRLENBQUNJLEVBQU96QixLQUNyQixNQUFNOEMsRUFBU3JCLEVBQU1zQixLQUFLQyxNQUFNZCxFQUFJLEVBRXBDLEdBQXVCLFNBQW5COUIsS0FBS3NDLFVBQXNCLENBQ2pCakIsRUFBTXNCLEtBQUtFLFNBQVNmLEVBQUlZLEdBRXpCMUMsS0FBS0QsTUFBTTJCLE1BQVEsSUFDeEJMLEVBQU15QixPQUFTOUMsS0FBSzBCLE1BRzVCLE1BQU8sR0FBdUIsVUFBbkIxQixLQUFLc0MsVUFBdUIsQ0FDekJqQixFQUFNc0IsS0FBS0UsU0FBU2YsRUFBSVksRUFFMUIxQyxLQUFLRCxNQUFNMkIsTUFBUSxJQUN2QkwsRUFBTXlCLE9BQVM5QyxLQUFLMEIsTUFHNUIsQ0FFQUwsRUFBTWUsT0FBT3BDLEtBQUtJLE9BQU9DLFFBQVEsSUFHckMsTUFBTTBDLEVBQVNoQixFQUFJL0IsS0FBS0QsTUFBTWdELE9BQzlCL0MsS0FBS1UsTUFBTW1DLFNBQVNkLEVBQUlnQixDQUM1QixrQkNwSUpDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFkYS8uL3N0eWxlcy9pbmRleC5zY3NzP2YwZmYiLCJ3ZWJwYWNrOi8vcHJhZGEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9wcmFkYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcyMzcxODIxNTI4NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7IG1hcCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yICh7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfZ2FsbGVyeV93cmFwcGVyJylcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgICAgIHRoaXMuZ2wgPSBnbFxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICAgICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLjUsXG4gICAgICAgICAgICBsZXJwOiAwLjFcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcbiAgICAgICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuXG4gICAgICAgIHRoaXMub25SZXNpemUoe1xuICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgfVxuXG4gICAgY3JlYXRlTWVkaWFzICgpIHtcbiAgICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9nYWxsZXJ5X21lZGlhJylcblxuICAgICAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gICAgICAgICAgU2hvd1xuICAgIHNob3cgKCkge1xuICAgICAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgbWVkaWEuc2hvdygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGlkZSAoKSB7XG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhKSA9PiB7XG4gICAgICAgICAgICBtZWRpYS5oaWRlKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICBFdmVudHNcblxuICAgIG9uUmVzaXplIChldmVudCkge1xuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudFdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCAqIHRoaXMuc2l6ZXMud2lkdGhcblxuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuICAgIH1cblxuICAgIG9uVG91Y2hEb3duICh7IHgsIHkgfSkge1xuICAgICAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZSAoeyB4LCB5IH0pIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG4gICAgfVxuXG4gICAgb25Ub3VjaFVwICh7IHgsIHkgfSkge31cblxuICAgIC8vICAgICAgICAgIExvb3BcbiAgICB1cGRhdGUgKHNjcm9sbCkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpICogMC4xXG4gICAgICAgIGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLTFcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAxXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRpc3RhbmNlXG5cbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gICAgICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICAgICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG4gICAgICAgICAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSB5ICogdGhpcy5zaXplcy5oZWlnaHRcbiAgICAgICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0gaGVpZ2h0XG4gICAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjY4MGFkZGQ5ZmI4MzAwZTkyNmVcIikiXSwibmFtZXMiOlsiY3NzUmVsb2FkIiwibW9kdWxlIiwiaWQiLCJob3QiLCJkaXNwb3NlIiwiYWNjZXB0IiwidW5kZWZpbmVkIiwiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJ2ZWxvY2l0eSIsImxlcnAiLCJncm91cCIsIlRyYW5zZm9ybSIsImNyZWF0ZU1lZGlhcyIsIm9uUmVzaXplIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwibWFwIiwiTWVkaWEiLCJzaG93IiwibWVkaWEiLCJoaWRlIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwiR1NBUCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiaGVpZ2h0IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9