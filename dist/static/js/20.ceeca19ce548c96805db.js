webpackJsonp([20],{Dpcl:function(e,n,a){var t=a("oEXv");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a("rjj0")("5d8e15ee",t,!0)},L2GU:function(e,n,a){"use strict";function t(e){a("Dpcl")}Object.defineProperty(n,"__esModule",{value:!0});var i=a("Dd8w"),r=a.n(i),c=a("2sLL"),A=a("NYxO"),s={data:function(){return{bpValueIndex:-1}},beforeRouteEnter:function(e,n,a){document.title="我的账户",a()},created:function(){var e=this;this.getUserInfo().then(function(e){}).finally(function(){e.$vux.loading.hide()})},components:{XButton:c.a},computed:r()({},Object(A.c)("user",["userInfo"])),methods:r()({},Object(A.b)("user",["getUserInfo"]))},o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"container min-h bg2"},[a("div",{staticClass:"charge-header bg1 flex flex-align-center"},[a("div",{staticClass:"u-avatar"},[a("img",{staticClass:"circle",attrs:{src:e._f("prefixImageUrl")(e.userInfo.headimgurl)}})]),e._v(" "),a("div",{staticClass:"flex flex-v flex-pack-center flex-1 u-middle"},[a("p",{staticClass:"f16 uanme overflow white"},[e._v(e._s(e.userInfo.nickname))]),e._v(" "),a("p",{staticClass:"f12 coin-tip darker1"},[a("span",{staticClass:"ver-mid"},[e._v("已拥有的牛角币")]),a("svg-icon",{attrs:{"icon-class":"coin",className:"f14 ml4"}})],1)]),e._v(" "),a("div",{staticClass:"coin-color",staticStyle:{"font-size":"24px"}},[e._v(e._s(e.userInfo.balance))])]),e._v(" "),a("div",{staticClass:"charge-container"},[e._m(0),e._v(" "),a("div",{staticClass:"charge-price-list white"},e._l(6,function(n){return a("div",{key:n,staticClass:"charge-price-item",class:{selected:e.bpValueIndex==n},on:{click:function(a){e.bpValueIndex=n}}},[a("div",{staticClass:"value f14"},[a("svg-icon",{attrs:{"icon-class":"coin",className:"coin-color"}}),a("span",{staticClass:"ml2 ver-mid"},[e._v(e._s(10*n))]),e._m(1,!0),a("span",{staticClass:"selected-icon"},[a("svg-icon",{attrs:{"icon-class":"selected"}})],1)],1),e._v(" "),a("div",{staticClass:"value-price f14"},[e._v("¥10")])])})),e._v(" "),a("x-button",{staticStyle:{"margin-top":"25px"},attrs:{gradients:["#f31374","#f31374"]}},[e._v("确认支付")]),e._v(" "),a("p",{staticClass:"darker1 f12",staticStyle:{"margin-top":"10px"}},[e._v("充值说明：")]),e._v(" "),e._m(2)],1)])},l=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"charge-tab"},[a("span",{staticClass:"ct ncolor"},[e._v("充值购买")]),e._v(" "),a("span",{staticClass:"ct darker1"},[e._v("交易明细")])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"f12 jingyan"},[a("span",{staticClass:"jy-value"},[e._v("+800经验值")])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ul",{staticClass:"darker1 f12"},[a("li",[e._v("1、充值即拥有牛霸贵族会员尊贵身份")]),e._v(" "),a("li",[e._v("1、1牛角=1元人民币")]),e._v(" "),a("li",[e._v("2、充值的牛角只能消费，不能提现")]),e._v(" "),a("li",[e._v("4、充值赠送的经验值用于贵族等级升级")])])}],d={render:o,staticRenderFns:l},C=d,b=a("VU/8"),m=t,f=b(s,C,!1,m,"data-v-4fb744ba",null);n.default=f.exports},oEXv:function(e,n,a){n=e.exports=a("FZ+f")(!0),n.push([e.i,'\n.coin-color[data-v-4fb744ba] {\n  color: #f8c21a;\n}\n.charge-header[data-v-4fb744ba] {\n  padding: 0.36rem 0.3rem;\n}\n.charge-header .u-avatar img[data-v-4fb744ba] {\n  width: 1rem;\n  height: 1rem;\n}\n.charge-header .u-middle[data-v-4fb744ba] {\n  margin-left: 20px;\n}\n.charge-container[data-v-4fb744ba] {\n  padding: 0.5rem 0.6rem;\n}\n.charge-container .charge-tab[data-v-4fb744ba] {\n  margin-bottom: 0.6rem;\n}\n.charge-container .charge-tab .ct[data-v-4fb744ba] {\n  padding: 4px 6px;\n}\n.charge-price-item[data-v-4fb744ba] {\n  display: inline-block;\n  width: 1.5rem;\n  margin-right: 0.9rem;\n  margin-bottom: 0.4rem;\n}\n.charge-price-item[data-v-4fb744ba]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.charge-price-item .value[data-v-4fb744ba] {\n  line-height: 0.72rem;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  position: relative;\n}\n.charge-price-item .jingyan[data-v-4fb744ba] {\n  height: 0.36rem;\n  background-color: #3f414e;\n  position: relative;\n  border-radius: 0 0 10px 10px;\n}\n.charge-price-item .jy-value[data-v-4fb744ba] {\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n          transform: translate3d(-50%, -50%, 0) scale(1);\n  color: #82858e;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  line-height: 1;\n  white-space: nowrap;\n}\n.charge-price-item.selected .value[data-v-4fb744ba] {\n  border: 1px solid #f31374;\n}\n.charge-price-item.selected .selected-icon[data-v-4fb744ba] {\n  display: block;\n}\n.charge-price-item.selected .jingyan[data-v-4fb744ba] {\n  background-color: #f31374;\n}\n.charge-price-item.selected .jy-value[data-v-4fb744ba] {\n  color: #fff;\n}\n.charge-price-item .value-price[data-v-4fb744ba] {\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 4px;\n}\n@media screen and (min-width: 320px) and (max-width: 374px) {\n.charge-price-item .jy-value[data-v-4fb744ba] {\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.8);\n            transform: translate3d(-50%, -50%, 0) scale(0.8);\n}\n}\n.selected-icon[data-v-4fb744ba] {\n  color: #f31374;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translate3d(50%, -50%, 0);\n          transform: translate3d(50%, -50%, 0);\n  display: none;\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.selected-icon .svg-icon[data-v-4fb744ba] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0.3rem;\n  height: 0.3rem;\n  z-index: 2;\n  display: block;\n}\n.selected-icon[data-v-4fb744ba]:after {\n  content: "";\n  position: absolute;\n  left: 15%;\n  top: 15%;\n  width: 70%;\n  height: 70%;\n  border-radius: 50%;\n  z-index: 1;\n  background-color: #fff;\n}\n@media screen and (min-width: 768px) {\n.charge-price-item[data-v-4fb744ba]:nth-child(3n+3) {\n    margin-right: 0.9rem;\n}\n}\n',"",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/Charge.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,cAAc;EACd,qBAAqB;EACrB,sBAAsB;CACvB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,mBAAmB;EACnB,2CAA2C;EAC3C,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,mBAAmB;EACnB,6BAA6B;CAC9B;AACD;EACE,uDAAuD;UAC/C,+CAA+C;EACvD,eAAe;EACf,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,YAAY;CACb;AACD;EACE,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;AACA;IACI,yDAAyD;YACjD,iDAAiD;CAC5D;CACA;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,6CAA6C;UACrC,qCAAqC;EAC7C,cAAc;EACd,cAAc;EACd,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,cAAc;EACd,eAAe;EACf,WAAW;EACX,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,uBAAuB;CACxB;AACD;AACA;IACI,qBAAqB;CACxB;CACA",file:"Charge.vue",sourcesContent:['\n.coin-color[data-v-4fb744ba] {\n  color: #f8c21a;\n}\n.charge-header[data-v-4fb744ba] {\n  padding: 0.36rem 0.3rem;\n}\n.charge-header .u-avatar img[data-v-4fb744ba] {\n  width: 1rem;\n  height: 1rem;\n}\n.charge-header .u-middle[data-v-4fb744ba] {\n  margin-left: 20px;\n}\n.charge-container[data-v-4fb744ba] {\n  padding: 0.5rem 0.6rem;\n}\n.charge-container .charge-tab[data-v-4fb744ba] {\n  margin-bottom: 0.6rem;\n}\n.charge-container .charge-tab .ct[data-v-4fb744ba] {\n  padding: 4px 6px;\n}\n.charge-price-item[data-v-4fb744ba] {\n  display: inline-block;\n  width: 1.5rem;\n  margin-right: 0.9rem;\n  margin-bottom: 0.4rem;\n}\n.charge-price-item[data-v-4fb744ba]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.charge-price-item .value[data-v-4fb744ba] {\n  line-height: 0.72rem;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  position: relative;\n}\n.charge-price-item .jingyan[data-v-4fb744ba] {\n  height: 0.36rem;\n  background-color: #3f414e;\n  position: relative;\n  border-radius: 0 0 10px 10px;\n}\n.charge-price-item .jy-value[data-v-4fb744ba] {\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n          transform: translate3d(-50%, -50%, 0) scale(1);\n  color: #82858e;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  line-height: 1;\n  white-space: nowrap;\n}\n.charge-price-item.selected .value[data-v-4fb744ba] {\n  border: 1px solid #f31374;\n}\n.charge-price-item.selected .selected-icon[data-v-4fb744ba] {\n  display: block;\n}\n.charge-price-item.selected .jingyan[data-v-4fb744ba] {\n  background-color: #f31374;\n}\n.charge-price-item.selected .jy-value[data-v-4fb744ba] {\n  color: #fff;\n}\n.charge-price-item .value-price[data-v-4fb744ba] {\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 4px;\n}\n@media screen and (min-width: 320px) and (max-width: 374px) {\n.charge-price-item .jy-value[data-v-4fb744ba] {\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.8);\n            transform: translate3d(-50%, -50%, 0) scale(0.8);\n}\n}\n.selected-icon[data-v-4fb744ba] {\n  color: #f31374;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translate3d(50%, -50%, 0);\n          transform: translate3d(50%, -50%, 0);\n  display: none;\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.selected-icon .svg-icon[data-v-4fb744ba] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0.3rem;\n  height: 0.3rem;\n  z-index: 2;\n  display: block;\n}\n.selected-icon[data-v-4fb744ba]:after {\n  content: "";\n  position: absolute;\n  left: 15%;\n  top: 15%;\n  width: 70%;\n  height: 70%;\n  border-radius: 50%;\n  z-index: 1;\n  background-color: #fff;\n}\n@media screen and (min-width: 768px) {\n.charge-price-item[data-v-4fb744ba]:nth-child(3n+3) {\n    margin-right: 0.9rem;\n}\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=20.ceeca19ce548c96805db.js.map