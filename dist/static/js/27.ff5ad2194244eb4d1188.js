webpackJsonp([27],{L2GU:function(e,n,a){"use strict";function t(e){a("ivUE")}Object.defineProperty(n,"__esModule",{value:!0});var i=a("mvHQ"),r=a.n(i),d=a("Dd8w"),c=a.n(d),s=a("2sLL"),A=a("gyMJ"),o=a("NYxO"),l={data:function(){return{bpValueIndex:-1,userInfo:{},exps:[],loading:!1}},beforeRouteEnter:function(e,n,a){document.title="我的账户",a()},created:function(){1!==(1*window.sessionStorage.getItem("count")||0)?window.location.reload():this.getData()},components:{XButton:s.a},methods:c()({},Object(o.b)("user",["getUserInfo"]),{getData:function(){var e=this;Object(A.y)().then(function(n){e.userInfo=n.result.user,e.exps=n.result.exp}).finally(function(){e.$vux.loading.hide()})},requestPay:function(){var e=this,n=this;if(-1===this.bpValueIndex)return this.$vux.toast.show({text:"请选择金额支付"}),!1;this.loading=!0,Object(A.L)({eid:this.exps[this.bpValueIndex].id,money:this.exps[this.bpValueIndex].money}).then(function(e){window.WeixinJSBridge&&window.WeixinJSBridge.invoke("getBrandWCPayRequest",e.result,function(e){switch(e.err_msg){case"get_brand_wcpay_request:cancel":break;case"get_brand_wcpay_request:fail":n.$vux.toast.show({text:"支付失败！（"+e.err_desc+"）",width:"10em"});break;case"get_brand_wcpay_request:ok":n.$vux.toast.show({text:"支付成功"}),setTimeout(function(){"1"===localStorage.getItem("payBack")?(localStorage.removeItem("payBack"),n.getUserInfo().then(function(e){window.history.go(-1)})):n.getData()},500);break;default:alert(r()(e))}})}).finally(function(){e.loading=!1})}})},C=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"container min-h bg2"},[a("div",{staticClass:"charge-header bg1 flex flex-align-center"},[a("div",{staticClass:"u-avatar"},[a("img",{staticClass:"circle",attrs:{src:e._f("prefixImageUrl")(e.userInfo.headimgurl)}})]),e._v(" "),a("div",{staticClass:"flex flex-v flex-pack-center flex-1 u-middle"},[a("p",{staticClass:"f16 uanme overflow fff-bp"},[e._v(e._s(e.userInfo.nickname))]),e._v(" "),a("p",{staticClass:"f12 coin-tip darker1"},[a("span",{staticClass:"ver-mid"},[e._v("已拥有的牛角币")]),a("svg-icon",{attrs:{"icon-class":"coin",className:"f14 ml4"}})],1)]),e._v(" "),a("div",{staticClass:"coin-color",staticStyle:{"font-size":"24px"}},[e._v(e._s(e.userInfo.balance))])]),e._v(" "),a("div",{staticClass:"charge-container"},[e._m(0),e._v(" "),a("div",{staticClass:"charge-price-list fff-bp"},e._l(e.exps,function(n,t){return a("div",{key:t,staticClass:"charge-price-item",class:{selected:e.bpValueIndex==t},on:{click:function(n){e.bpValueIndex==t?e.bpValueIndex=-1:e.bpValueIndex=t}}},[a("div",{staticClass:"value f14"},[a("svg-icon",{attrs:{"icon-class":"coin",className:"coin-color"}}),a("span",{staticClass:"ml2 ver-mid"},[e._v(e._s(n.money))]),a("div",{staticClass:"f12 jingyan"},[a("span",{staticClass:"jy-value"},[e._v("+"+e._s(n.experience)+"经验值")])]),a("span",{staticClass:"selected-icon"},[a("svg-icon",{attrs:{"icon-class":"selected"}})],1)],1),e._v(" "),a("div",{staticClass:"value-price f14"},[e._v("¥"+e._s(n.money))])])})),e._v(" "),a("x-button",{staticStyle:{"margin-top":"25px"},attrs:{"show-loading":e.loading,disabled:e.loading,gradients:["#f31374","#f31374"]},nativeOn:{click:function(n){e.requestPay(n)}}},[e._v("确认支付")]),e._v(" "),a("p",{staticClass:"darker1 f12",staticStyle:{"margin-top":"10px"}},[e._v("充值说明：")]),e._v(" "),e._m(1)],1)])},m=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"charge-tab"},[a("span",{staticClass:"ct ncolor"},[e._v("充值购买")])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ul",{staticClass:"darker1 f12"},[a("li",[e._v("1、充值即拥有牛霸贵族会员尊贵身份")]),e._v(" "),a("li",[e._v("1、1牛角=1元人民币")]),e._v(" "),a("li",[e._v("2、充值的牛角只能消费，不能提现")]),e._v(" "),a("li",[e._v("4、充值赠送的经验值用于贵族等级升级")])])}],g={render:C,staticRenderFns:m},h=g,p=a("VU/8"),v=t,u=p(l,h,!1,v,"data-v-0d9730d4",null);n.default=u.exports},dbFD:function(e,n,a){n=e.exports=a("FZ+f")(!0),n.push([e.i,'\n.coin-color[data-v-0d9730d4] {\n  color: #f8c21a;\n}\n.charge-header[data-v-0d9730d4] {\n  padding: 0.36rem 0.3rem;\n}\n.charge-header .u-avatar img[data-v-0d9730d4] {\n  width: 1rem;\n  height: 1rem;\n}\n.charge-header .u-middle[data-v-0d9730d4] {\n  margin-left: 20px;\n}\n.charge-container[data-v-0d9730d4] {\n  padding: 0.5rem 0.6rem;\n}\n.charge-container .charge-tab[data-v-0d9730d4] {\n  margin-bottom: 0.6rem;\n}\n.charge-container .charge-tab .ct[data-v-0d9730d4] {\n  padding: 4px 6px;\n}\n.charge-price-item[data-v-0d9730d4] {\n  display: inline-block;\n  width: 1.5rem;\n  margin-right: 0.9rem;\n  margin-bottom: 0.4rem;\n}\n.charge-price-item[data-v-0d9730d4]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.charge-price-item .value[data-v-0d9730d4] {\n  line-height: 0.72rem;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  position: relative;\n}\n.charge-price-item .jingyan[data-v-0d9730d4] {\n  height: 0.36rem;\n  background-color: #3f414e;\n  position: relative;\n  border-radius: 0 0 10px 10px;\n}\n.charge-price-item .jy-value[data-v-0d9730d4] {\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n          transform: translate3d(-50%, -50%, 0) scale(1);\n  color: #82858e;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  line-height: 1;\n  white-space: nowrap;\n}\n.charge-price-item.selected .value[data-v-0d9730d4] {\n  border: 1px solid #f31374;\n}\n.charge-price-item.selected .selected-icon[data-v-0d9730d4] {\n  display: block;\n}\n.charge-price-item.selected .jingyan[data-v-0d9730d4] {\n  background-color: #f31374;\n}\n.charge-price-item.selected .jy-value[data-v-0d9730d4] {\n  color: #fff;\n}\n.charge-price-item .value-price[data-v-0d9730d4] {\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 4px;\n}\n@media screen and (min-width: 320px) and (max-width: 374px) {\n.charge-price-item .jy-value[data-v-0d9730d4] {\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.8);\n            transform: translate3d(-50%, -50%, 0) scale(0.8);\n}\n}\n@media screen and (min-width: 375px) and (max-width: 413px) {\n.charge-price-item .jy-value[data-v-0d9730d4] {\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.85);\n            transform: translate3d(-50%, -50%, 0) scale(0.85);\n}\n}\n.selected-icon[data-v-0d9730d4] {\n  color: #f31374;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translate3d(50%, -50%, 0);\n          transform: translate3d(50%, -50%, 0);\n  display: none;\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.selected-icon .svg-icon[data-v-0d9730d4] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0.3rem;\n  height: 0.3rem;\n  z-index: 2;\n  display: block;\n}\n.selected-icon[data-v-0d9730d4]:after {\n  content: "";\n  position: absolute;\n  left: 15%;\n  top: 15%;\n  width: 70%;\n  height: 70%;\n  border-radius: 50%;\n  z-index: 1;\n  background-color: #fff;\n}\n@media screen and (min-width: 768px) {\n.charge-price-item[data-v-0d9730d4]:nth-child(3n+3) {\n    margin-right: 0.9rem;\n}\n}\n',"",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/Charge.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,cAAc;EACd,qBAAqB;EACrB,sBAAsB;CACvB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,mBAAmB;EACnB,2CAA2C;EAC3C,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,mBAAmB;EACnB,6BAA6B;CAC9B;AACD;EACE,uDAAuD;UAC/C,+CAA+C;EACvD,eAAe;EACf,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,YAAY;CACb;AACD;EACE,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;AACA;IACI,yDAAyD;YACjD,iDAAiD;CAC5D;CACA;AACD;AACA;IACI,0DAA0D;YAClD,kDAAkD;CAC7D;CACA;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,6CAA6C;UACrC,qCAAqC;EAC7C,cAAc;EACd,cAAc;EACd,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,cAAc;EACd,eAAe;EACf,WAAW;EACX,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,uBAAuB;CACxB;AACD;AACA;IACI,qBAAqB;CACxB;CACA",file:"Charge.vue",sourcesContent:['\n.coin-color[data-v-0d9730d4] {\n  color: #f8c21a;\n}\n.charge-header[data-v-0d9730d4] {\n  padding: 0.36rem 0.3rem;\n}\n.charge-header .u-avatar img[data-v-0d9730d4] {\n  width: 1rem;\n  height: 1rem;\n}\n.charge-header .u-middle[data-v-0d9730d4] {\n  margin-left: 20px;\n}\n.charge-container[data-v-0d9730d4] {\n  padding: 0.5rem 0.6rem;\n}\n.charge-container .charge-tab[data-v-0d9730d4] {\n  margin-bottom: 0.6rem;\n}\n.charge-container .charge-tab .ct[data-v-0d9730d4] {\n  padding: 4px 6px;\n}\n.charge-price-item[data-v-0d9730d4] {\n  display: inline-block;\n  width: 1.5rem;\n  margin-right: 0.9rem;\n  margin-bottom: 0.4rem;\n}\n.charge-price-item[data-v-0d9730d4]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.charge-price-item .value[data-v-0d9730d4] {\n  line-height: 0.72rem;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  position: relative;\n}\n.charge-price-item .jingyan[data-v-0d9730d4] {\n  height: 0.36rem;\n  background-color: #3f414e;\n  position: relative;\n  border-radius: 0 0 10px 10px;\n}\n.charge-price-item .jy-value[data-v-0d9730d4] {\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n          transform: translate3d(-50%, -50%, 0) scale(1);\n  color: #82858e;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  line-height: 1;\n  white-space: nowrap;\n}\n.charge-price-item.selected .value[data-v-0d9730d4] {\n  border: 1px solid #f31374;\n}\n.charge-price-item.selected .selected-icon[data-v-0d9730d4] {\n  display: block;\n}\n.charge-price-item.selected .jingyan[data-v-0d9730d4] {\n  background-color: #f31374;\n}\n.charge-price-item.selected .jy-value[data-v-0d9730d4] {\n  color: #fff;\n}\n.charge-price-item .value-price[data-v-0d9730d4] {\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 4px;\n}\n@media screen and (min-width: 320px) and (max-width: 374px) {\n.charge-price-item .jy-value[data-v-0d9730d4] {\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.8);\n            transform: translate3d(-50%, -50%, 0) scale(0.8);\n}\n}\n@media screen and (min-width: 375px) and (max-width: 413px) {\n.charge-price-item .jy-value[data-v-0d9730d4] {\n    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.85);\n            transform: translate3d(-50%, -50%, 0) scale(0.85);\n}\n}\n.selected-icon[data-v-0d9730d4] {\n  color: #f31374;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translate3d(50%, -50%, 0);\n          transform: translate3d(50%, -50%, 0);\n  display: none;\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.selected-icon .svg-icon[data-v-0d9730d4] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0.3rem;\n  height: 0.3rem;\n  z-index: 2;\n  display: block;\n}\n.selected-icon[data-v-0d9730d4]:after {\n  content: "";\n  position: absolute;\n  left: 15%;\n  top: 15%;\n  width: 70%;\n  height: 70%;\n  border-radius: 50%;\n  z-index: 1;\n  background-color: #fff;\n}\n@media screen and (min-width: 768px) {\n.charge-price-item[data-v-0d9730d4]:nth-child(3n+3) {\n    margin-right: 0.9rem;\n}\n}\n'],sourceRoot:""}])},ivUE:function(e,n,a){var t=a("dbFD");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a("rjj0")("225a7bc2",t,!0)}});
//# sourceMappingURL=27.ff5ad2194244eb4d1188.js.map