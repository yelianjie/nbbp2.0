webpackJsonp([16],{"2Wtv":function(i,a,s){"use strict";var t=function(i){this.startY=0,this.startTopScroll=0,this.elem=i||document.querySelector(i),this.elem&&this.elem.addEventListener("touchstart",this.func.bind(this),!1)};t.prototype.func=function(i){this.startY=i.touches[0].pageY,this.startTopScroll=this.elem.scrollTop,this.startTopScroll<=0&&(this.elem.scrollTop=1),this.startTopScroll+this.elem.offsetHeight>=this.elem.scrollHeight&&(this.elem.scrollTop=this.elem.scrollHeight-this.elem.offsetHeight-1)},t.prototype.destory=function(){this.elem.removeEventListener("touchstart",this.func,!1)},a.a=t},"HJC+":function(i,a,s){a=i.exports=s("FZ+f")(!0),a.push([i.i,"\n.join-img[data-v-47f95efa] {\n  width: 7.5rem;\n  display: block;\n}\n.turn-btn[data-v-47f95efa] {\n  width: 5.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 20px;\n  border: 0;\n  border-radius: 50px;\n  background: -webkit-linear-gradient(top, #f2628c, #9e37f5);\n  display: block;\n  margin: 0.4rem auto;\n}\n.fixed-btn[data-v-47f95efa] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/BusinessJoin.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,oBAAoB;EACpB,2DAA2D;EAC3D,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,qCAAqC;CACtC",file:"BusinessJoin.vue",sourcesContent:["\n.join-img[data-v-47f95efa] {\n  width: 7.5rem;\n  display: block;\n}\n.turn-btn[data-v-47f95efa] {\n  width: 5.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 20px;\n  border: 0;\n  border-radius: 50px;\n  background: -webkit-linear-gradient(top, #f2628c, #9e37f5);\n  display: block;\n  margin: 0.4rem auto;\n}\n.fixed-btn[data-v-47f95efa] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n"],sourceRoot:""}])},QmMJ:function(i,a,s){var t=s("HJC+");"string"==typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);s("rjj0")("417b4064",t,!0)},ZELv:function(i,a,s){"use strict";function t(i){s("QmMJ")}Object.defineProperty(a,"__esModule",{value:!0});var e=s("2Wtv"),n={data:function(){return{scrollFix:null}},beforeDestroy:function(){this.scrollFix&&this.scrollFix.destory()},beforeRouteEnter:function(i,a,s){document.title="商户加盟",s()},mounted:function(){var i=this;this.$Lazyload.lazyLoadHandler(),this.$nextTick(function(){i.scrollFix=new e.a(i.$refs.scrollWrapper)})}},l=function(){var i=this,a=i.$createElement,s=i._self._c||a;return s("div",{staticClass:"container bg1 about-container borderbox flex flex-v",staticStyle:{height:"100%"}},[s("div",{ref:"scrollWrapper",staticClass:"flex-1 overscroll"},[1==i.$route.query.type?[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu01.jpg",expression:"'./static/join/shanghu01.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu02.jpg",expression:"'./static/join/shanghu02.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu03.jpg",expression:"'./static/join/shanghu03.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu04.jpg",expression:"'./static/join/shanghu04.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu05.jpg",expression:"'./static/join/shanghu05.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu06.jpg",expression:"'./static/join/shanghu06.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu07.jpg",expression:"'./static/join/shanghu07.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu08.jpg",expression:"'./static/join/shanghu08.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu09.jpg",expression:"'./static/join/shanghu09.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu10.jpg",expression:"'./static/join/shanghu10.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu11.jpg",expression:"'./static/join/shanghu11.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu12.jpg",expression:"'./static/join/shanghu12.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu13.jpg",expression:"'./static/join/shanghu13.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu14.jpg",expression:"'./static/join/shanghu14.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu15.jpg",expression:"'./static/join/shanghu15.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu16.jpg",expression:"'./static/join/shanghu16.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu17.jpg",expression:"'./static/join/shanghu17.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu18.jpg",expression:"'./static/join/shanghu18.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/shanghu19.jpg",expression:"'./static/join/shanghu19.jpg'"}],staticClass:"join-img"})]:i._e(),i._v(" "),2==i.$route.query.type?[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili01.jpg",expression:"'./static/join/daili01.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili02.jpg",expression:"'./static/join/daili02.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili03.jpg",expression:"'./static/join/daili03.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili04.jpg",expression:"'./static/join/daili04.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili05.jpg",expression:"'./static/join/daili05.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili06.jpg",expression:"'./static/join/daili06.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili07.jpg",expression:"'./static/join/daili07.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili08.jpg",expression:"'./static/join/daili08.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili09.jpg",expression:"'./static/join/daili09.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili10.jpg",expression:"'./static/join/daili10.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili11.jpg",expression:"'./static/join/daili11.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili12.jpg",expression:"'./static/join/daili12.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili13.jpg",expression:"'./static/join/daili13.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili14.jpg",expression:"'./static/join/daili14.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili15.jpg",expression:"'./static/join/daili15.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili16.jpg",expression:"'./static/join/daili16.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili17.jpg",expression:"'./static/join/daili17.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili18.jpg",expression:"'./static/join/daili18.jpg'"}],staticClass:"join-img"}),i._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"./static/join/daili19.jpg",expression:"'./static/join/daili19.jpg'"}],staticClass:"join-img"})]:i._e(),i._v(" "),s("div",{staticClass:"fixed-btn"},[s("router-link",{attrs:{to:{path:"/Register?type="+i.$route.query.type}}},[s("button",{staticClass:"turn-btn white"},[i._v("立即注册")])])],1)],2)])},o=[],r={render:l,staticRenderFns:o},c=r,g=s("VU/8"),j=t,m=g(n,c,!1,j,"data-v-47f95efa",null);a.default=m.exports}});
//# sourceMappingURL=16.3262183bbf9c8358ad52.js.map