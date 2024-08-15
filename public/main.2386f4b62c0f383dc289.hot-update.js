/*! For license information please see main.2386f4b62c0f383dc289.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateprada("main",{"./styles/index.scss":(s,t,e)=>{e.r(t);var i=e("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(s.id,{publicPath:"",locals:!1});s.hot.dispose(i),s.hot.accept(void 0,i)},"./app/components/Canvas/Detail/index.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>r});var i=e("./node_modules/ogl/src/extras/Plane.js"),h=e("./node_modules/ogl/src/core/Program.js"),a=e("./node_modules/ogl/src/core/Mesh.js"),o=e("./app/shaders/collections-vertex.glsl"),n=e("./app/shaders/collections-fragment.glsl");const r=class{constructor({gl:s,scene:t,sizes:e,transition:h}){this.id="detail",this.element=document.querySelector(".detail_media_image"),this.gl=s,this.scene=t,this.sizes=e,this.transition=h,this.geometry=new i.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.onResize(this.sizes),this.show()}createTexture(){const s=this.element.getAttribute("data-src");this.texture=window.TEXTURES[s]}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:s}){this.sizes=s,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){this.transition&&this.transition.animate(this.mesh,(s=>{this.program.uniforms.uAl}))}hide(){}onResize(s){this.createBounds(s),this.updateX(),this.updateY()}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(){this.y=this.bounds.top/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(){this.bounds&&(this.updateX(),this.updateY())}destroy(){}}}},(function(s){s.h=()=>"6f2da4aff5bb83d20935"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQ3BHLENBRUFVLE1BQUFBLEdBQ1MvQyxLQUFLNEIsU0FDVjVCLEtBQUsrQixVQUNML0IsS0FBS2dDLFVBQ1QsQ0FFQWdCLE9BQUFBLEdBRUEsa0JDMUhKQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhZGEvLi9zdHlsZXMvaW5kZXguc2Nzcz9mMGZmIiwid2VicGFjazovL3ByYWRhLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0RldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFkYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcyMzcxNDMzNTY0OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQbGFuZSwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi8uLi8uLi9zaGFkZXJzL2NvbGxlY3Rpb25zLXZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJy4uLy4uLy4uL3NoYWRlcnMvY29sbGVjdGlvbnMtZnJhZ21lbnQuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yICh7IGdsLCBzY2VuZSwgc2l6ZXMsIHRyYW5zaXRpb24gfSkge1xuICAgICAgICB0aGlzLmlkID0gJ2RldGFpbCdcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsX21lZGlhX2ltYWdlJylcbiAgICAgICAgdGhpcy5nbCA9IGdsXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblxuICAgICAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgICAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICB0aGlzLmNyZWF0ZU1lc2goKVxuXG4gICAgICAgIHRoaXMub25SZXNpemUodGhpcy5zaXplcylcblxuICAgICAgICB0aGlzLnNob3coKVxuICAgIH1cblxuICAgIGNyZWF0ZVRleHR1cmUgKCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblxuICAgICAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2VdXG4gICAgfVxuXG4gICAgY3JlYXRlUHJvZ3JhbSAoKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZU1lc2ggKCkge1xuICAgICAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICAgICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuICAgIH1cblxuICAgIGNyZWF0ZUJvdW5kcyAoeyBzaXplcyB9KSB7XG4gICAgICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgICAgIHRoaXMudXBkYXRlWCgpXG4gICAgICAgIHRoaXMudXBkYXRlWSgpXG4gICAgfVxuXG4gICAgLy8gICAgICAgICAgU2hvd1xuXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKHRoaXMubWVzaCwgXyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgIEV2ZW50c1xuXG4gICAgb25SZXNpemUgKHNpemVzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXG4gICAgICAgIHRoaXMudXBkYXRlWCgpXG4gICAgICAgIHRoaXMudXBkYXRlWSgpXG4gICAgfVxuXG4gICAgLy8gIExvb3BzXG5cbiAgICB1cGRhdGVTY2FsZSAoKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICAgICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgICAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgICB9XG5cbiAgICB1cGRhdGVYICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0luc2lkZSB1cGRhdGVYICoqKiogc2l6ZXMnLCB0aGlzLnNpemVzKVxuICAgICAgICAvLyBpZiAoIXRoaXMuc2l6ZXMpIHJldHVyblxuXG4gICAgICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAtKHRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpXG4gICAgfVxuXG4gICAgdXBkYXRlWSAoKSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5zaXplcykgcmV0dXJuXG5cbiAgICAgICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgICAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpXG4gICAgfVxuXG4gICAgdXBkYXRlICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgICAgIHRoaXMudXBkYXRlWCgpXG4gICAgICAgIHRoaXMudXBkYXRlWSgpXG4gICAgfVxuXG4gICAgZGVzdHJveSAoKSB7XG5cbiAgICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZjJkYTRhZmY1YmI4M2QyMDkzNVwiKSJdLCJuYW1lcyI6WyJjc3NSZWxvYWQiLCJtb2R1bGUiLCJpZCIsImhvdCIsImRpc3Bvc2UiLCJhY2NlcHQiLCJ1bmRlZmluZWQiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJvblJlc2l6ZSIsInNob3ciLCJpbWFnZSIsImdldEF0dHJpYnV0ZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsImFuaW1hdGUiLCJfIiwidUFsIiwiaGlkZSIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJ4IiwieSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsImRlc3Ryb3kiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=