webpackJsonp([16],{"2Wtv":function(t,i,s){"use strict";var a=function(t){this.startY=0,this.startTopScroll=0,this.elem=t||document.querySelector(t),this.elem&&this.elem.addEventListener("touchstart",this.func.bind(this),!1)};a.prototype.func=function(t){this.startY=t.touches[0].pageY,this.startTopScroll=this.elem.scrollTop,this.startTopScroll<=0&&(this.elem.scrollTop=1),this.startTopScroll+this.elem.offsetHeight>=this.elem.scrollHeight&&(this.elem.scrollTop=this.elem.scrollHeight-this.elem.offsetHeight-1)},a.prototype.destory=function(){this.elem.removeEventListener("touchstart",this.func,!1)},i.a=a},"2oOc":function(t,i,s){var a=s("68sZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("8685fd82",a,!0)},"68sZ":function(t,i,s){i=t.exports=s("FZ+f")(!0),i.push([t.i,"\n.join-img[data-v-5f5e4fdc] {\n  width: 7.5rem;\n  display: block;\n}\n.turn-btn[data-v-5f5e4fdc] {\n  width: 5.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 20px;\n  border: 0;\n  border-radius: 50px;\n  background: -webkit-linear-gradient(top, #f2628c, #9e37f5);\n  display: block;\n  margin: 0.4rem auto;\n}\n.fixed-btn[data-v-5f5e4fdc] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/BusinessJoin.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,oBAAoB;EACpB,2DAA2D;EAC3D,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,qCAAqC;CACtC",file:"BusinessJoin.vue",sourcesContent:["\n.join-img[data-v-5f5e4fdc] {\n  width: 7.5rem;\n  display: block;\n}\n.turn-btn[data-v-5f5e4fdc] {\n  width: 5.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 20px;\n  border: 0;\n  border-radius: 50px;\n  background: -webkit-linear-gradient(top, #f2628c, #9e37f5);\n  display: block;\n  margin: 0.4rem auto;\n}\n.fixed-btn[data-v-5f5e4fdc] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n"],sourceRoot:""}])},ZELv:function(t,i,s){"use strict";function a(t){s("2oOc")}Object.defineProperty(i,"__esModule",{value:!0});var n=s("2Wtv"),o={data:function(){return{scrollFix:null}},beforeDestroy:function(){this.scrollFix&&this.scrollFix.destory()},beforeRouteEnter:function(t,i,s){document.title="商户加盟",s()},mounted:function(){var t=this;this.$Lazyload.lazyLoadHandler(),this.$nextTick(function(){t.scrollFix=new n.a(t.$refs.scrollWrapper)})}},r=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container bg1 about-container borderbox flex flex-v",staticStyle:{height:"100%"}},[s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],ref:"scrollWrapper",staticClass:"flex-1 overscroll"},[1==t.$route.query.type?[s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu01.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu02.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu03.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu04.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu05.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu06.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu07.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu08.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu09.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu10.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu11.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu12.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu13.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu14.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu15.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu16.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu17.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu18.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/shanghu19.jpg"}})]:t._e(),t._v(" "),2==t.$route.query.type?[s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili01.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili02.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili03.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili04.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili05.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili06.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili07.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili08.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili09.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili10.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili11.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili12.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili13.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili14.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili15.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili16.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili17.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili18.jpg"}}),t._v(" "),s("img",{staticClass:"join-img",attrs:{"data-src":"./static/join/daili19.jpg"}})]:t._e(),t._v(" "),s("div",{staticClass:"fixed-btn"},[s("router-link",{attrs:{to:{path:"/Register?type="+t.$route.query.type}}},[s("button",{staticClass:"turn-btn white"},[t._v("立即注册")])])],1)],2)])},c=[],e={render:r,staticRenderFns:c},g=e,l=s("VU/8"),d=a,j=l(o,g,!1,d,"data-v-5f5e4fdc",null);i.default=j.exports}});
//# sourceMappingURL=16.35dd95a3237cb43456cd.js.map