webpackJsonp([31],{VOUv:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.bar[data-v-0fc16dc3] {\n  position: absolute;\n  left: 2.6rem;\n  top: 4.8rem;\n  width: 4rem;\n  word-break: break-all;\n  color: #696969;\n}\n.qrcode[data-v-0fc16dc3] {\n  position: absolute;\n  top: 12.3rem;\n  left: 0.8rem;\n  width: 2.4rem;\n  height: 2.4rem;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/HelpBusinessSet.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,cAAc;EACd,eAAe;CAChB",file:"HelpBusinessSet.vue",sourcesContent:["\n.bar[data-v-0fc16dc3] {\n  position: absolute;\n  left: 2.6rem;\n  top: 4.8rem;\n  width: 4rem;\n  word-break: break-all;\n  color: #696969;\n}\n.qrcode[data-v-0fc16dc3] {\n  position: absolute;\n  top: 12.3rem;\n  left: 0.8rem;\n  width: 2.4rem;\n  height: 2.4rem;\n}\n"],sourceRoot:""}])},tf1Y:function(e,t,n){var r=n("VOUv");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("781e744c",r,!0)},x6OU:function(e,t,n){"use strict";function r(e){n("tf1Y")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("rBKV"),a={data:function(){return{info:{qrcode:"",name:"",id:""}}},beforeRouteEnter:function(e,t,n){document.title="使用帮助";var r=JSON.parse(localStorage.getItem("businessNeed"));n(function(e){e.info=r})},filters:{screenUrl:function(e){return s.BASE_API+"/screen/?ht_id="+e}}},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container pr"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"./static/help/b-end.jpg"}}),e._v(" "),n("div",{staticClass:"bar f12"},[n("p",{staticClass:"p1",staticStyle:{"margin-bottom":"0.1rem"}},[e._v(e._s(e.info.name))]),e._v(" "),n("p",{staticClass:"p1",staticStyle:{"-webkit-user-select":"text","user-select":"text"}},[e._v(e._s(e._f("screenUrl")(e.info.id)))])]),e._v(" "),e.info.qrcode?n("img",{staticClass:"qrcode",attrs:{src:e.info.qrcode}}):e._e()])},i=[],c={render:o,staticRenderFns:i},l=c,A=n("VU/8"),d=r,f=A(a,l,!1,d,"data-v-0fc16dc3",null);t.default=f.exports}});
//# sourceMappingURL=31.c08ed098f25ee9e22aff.js.map