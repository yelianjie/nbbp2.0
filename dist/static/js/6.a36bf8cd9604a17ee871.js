webpackJsonp([6],{"+5KU":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Income.vue",sourceRoot:""}])},"1alW":function(t,e,n){var i=n("kM2E");i(i.S,"Number",{isInteger:n("AKgy")})},"3/R9":function(t,e,n){t.exports=n.p+"static/img/charge-bg.864c7a5.png"},AKgy:function(t,e,n){var i=n("EqjI"),o=Math.floor;t.exports=function(t){return!i(t)&&isFinite(t)&&o(t)===t}},"C/Tl":function(t,e,n){"use strict";function i(t){n("xKI3")}var o={props:["color","title","iconName","isLink","linkPath"]},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.linkPath?n("li",{on:{click:function(e){t.$router.push(t.linkPath)}}},[n("div",{staticClass:"flex group-cell f14 flex-align-center",class:{link:t.isLink}},[n("span",{style:{color:t.color}},[n("svg-icon",{attrs:{"icon-class":t.iconName,className:"left-icon"}})],1),n("div",{staticClass:"flex-1 f15"},[t._v(t._s(t.title))]),t.isLink?n("svg-icon",{attrs:{"icon-class":"arrow-right",className:"arrow-right"}}):t._e(),n("div",{staticClass:"slot-content"},[t._t("default")],2)],1)]):n("li",[n("div",{staticClass:"flex group-cell f14 flex-align-center",class:{link:t.isLink}},[n("span",{style:{color:t.color}},[n("svg-icon",{attrs:{"icon-class":t.iconName,className:"left-icon"}})],1),n("div",{staticClass:"flex-1 f15"},[t._v(t._s(t.title))]),t.isLink?n("svg-icon",{attrs:{"icon-class":"arrow-right",className:"arrow-right"}}):t._e(),n("div",{staticClass:"slot-content"},[t._t("default")],2)],1)])},r=[],s={render:a,staticRenderFns:r},l=s,c=n("VU/8"),u=i,d=c(o,l,!1,u,"data-v-2cc0db54",null);e.a=d.exports},DvPN:function(t,e,n){"use strict";function i(t){n("b8Un")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("RRo+"),a=n.n(o),r=n("Dd8w"),s=n.n(r),l=n("3/R9"),c=n.n(l),u=n("ae+P"),d=n.n(u),p=n("KaAT"),f=n("C/Tl"),g=n("2sLL"),A=n("63CM"),m=n.n(A),v=n("IEP8"),b=n("NYxO"),h={directives:{TransferDom:m.a},components:{Group:p.a,Cell:f.a,XButton:g.a,BpDialog:v.a},data:function(){return{exchangeVisible:!1,depositVisible:!1,exchangeBg:c.a,depositBg:d.a,toCoinValue:"",toRMBValue:""}},beforeRouteEnter:function(t,e,n){document.title="我的收益",n()},created:function(){var t=this;this.getUserInfo().then(function(t){}).finally(function(){t.$vux.loading.hide()})},computed:s()({},Object(b.c)("user",["userInfo"])),methods:s()({},Object(b.b)("user",["getUserInfo"]),{exchange:function(){this.exchangeVisible=!1},deposit:function(){if(this.toRMBValue%100!=0)return void this.$vux.toast.text("提现金额不为100的倍数","bottom");this.depositVisible=!1},validToCoin:function(t){if(!a()(this.toCoinValue))return void(this.toCoinValue="");this.toCoinValue>parseInt(this.userInfo.profit_balance)&&(this.toCoinValue=parseInt(this.userInfo.profit_balance))},validToRMB:function(t){if(!a()(this.toRMBValue))return void(this.toRMBValue="");if(this.toRMBValue>parseInt(this.userInfo.profit_balance)){var e=parseInt(this.userInfo.profit_balance),n=100*parseInt(e/100);this.toRMBValue=n}}})},C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container bg1"},[n("div",{staticStyle:{height:"10px"}}),t._v(" "),n("group",{staticStyle:{background:"#181b2a"}},[n("cell",{attrs:{title:"我的余额/牛角",color:"#fd711a","is-link":!1,"icon-name":"money"}},[n("h2",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.userInfo.balance))])]),t._v(" "),n("cell",{attrs:{title:"我的收益/元",color:"#eccd1d","is-link":!1,"icon-name":"coin"}},[n("h2",{staticStyle:{color:"#f31374","font-weight":"normal"}},[t._v(t._s(t.userInfo.profit_balance))])])],1),t._v(" "),n("div",{staticStyle:{margin:"25px 0.48rem"}},[n("x-button",{attrs:{gradients:["#2b3044","#2b3044"]},nativeOn:{click:function(e){t.exchangeVisible=!0}}},[t._v("兑换牛角")]),t._v(" "),n("x-button",{staticStyle:{"margin-top":"10px"},attrs:{gradients:["#f31374","#f31374"]},nativeOn:{click:function(e){t.depositVisible=!0}}},[t._v("我要提现")])],1),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("bp-dialog",{attrs:{"bg-title":!0,bgSrc:t.exchangeBg},on:{onConfirm:t.exchange},model:{value:t.exchangeVisible,callback:function(e){t.exchangeVisible=e},expression:"exchangeVisible"}},[n("div",{},[n("p",{staticStyle:{"font-size":"13px",color:"#6c6a75","text-align":"left","margin-bottom":"10px"}},[t._v("当前有"+t._s(t.userInfo.balance)+"元收益可兑换成牛角")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.toCoinValue,expression:"toCoinValue",modifiers:{number:!0}}],staticClass:"borderbox",staticStyle:{outline:"none",border:"1px solid #ccc","border-radius":"5px","text-align":"center",color:"#161a25",width:"100%","line-height":"24px",padding:"4px 8px"},attrs:{type:"number",autofocus:""},domProps:{value:t.toCoinValue},on:{keyup:t.validToCoin,input:function(e){e.target.composing||(t.toCoinValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("div",{staticStyle:{color:"#6c6a75","text-align":"left","font-size":"12px","margin-top":"10px"}},[n("svg-icon",{attrs:{"icon-class":"notice"}}),n("span",{staticStyle:{"margin-left":"6px"}},[t._v("1牛角=1元")])],1)])])],1),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("bp-dialog",{attrs:{"bg-title":!0,bgSrc:t.depositBg},on:{onConfirm:t.deposit},model:{value:t.depositVisible,callback:function(e){t.depositVisible=e},expression:"depositVisible"}},[n("div",{},[n("p",{staticStyle:{"font-size":"13px",color:"#6c6a75","text-align":"left","margin-bottom":"10px"}},[t._v("当前收益："+t._s(t.userInfo.profit_balance)+"元")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.toRMBValue,expression:"toRMBValue",modifiers:{number:!0}}],staticClass:"borderbox",staticStyle:{outline:"none",border:"1px solid #ccc","border-radius":"5px","text-align":"center",color:"#161a25",width:"100%","line-height":"24px",padding:"4px 8px"},attrs:{type:"number",autofocus:"",placeholder:"请输入要提现的金额"},domProps:{value:t.toRMBValue},on:{keyup:t.validToRMB,input:function(e){e.target.composing||(t.toRMBValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("div",{staticStyle:{color:"#6c6a75","text-align":"left","font-size":"12px","margin-top":"10px"}},[n("svg-icon",{attrs:{"icon-class":"notice"}}),n("span",[t._v("目前仅支持整百数提现")])],1)])])],1)],1)},x=[],B={render:C,staticRenderFns:x},E=B,_=n("VU/8"),k=i,V=_(h,E,!1,k,"data-v-3d9e1fb4",null);e.default=V.exports},KaAT:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group"},[n("ul",[t._t("default")],2)])},o=[],a={render:i,staticRenderFns:o},r=a,s=n("VU/8"),l=s(null,r,!1,null,null,null);e.a=l.exports},"RRo+":function(t,e,n){t.exports={default:n("c45H"),__esModule:!0}},Xvig:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,'\nli[data-v-2cc0db54] {\n  display: block;\n}\n.group-cell[data-v-2cc0db54] {\n  padding: 0.35rem 0;\n  margin: 0 0.4rem;\n  color: #fff;\n  position: relative;\n}\n.group-cell .left-icon[data-v-2cc0db54] {\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.group-cell[data-v-2cc0db54]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n.group-cell > span[data-v-2cc0db54] {\n  display: block;\n  width: 0.56rem;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  text-align: center;\n  background-color: #2e313a;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.group-cell .arrow-right[data-v-2cc0db54] {\n  width: 0.4rem;\n  height: 0.4rem;\n  fill: #5d5e63;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.group-cell.link .slot-content[data-v-2cc0db54] {\n  margin-right: 0.4rem;\n}\n',"",{version:3,sources:["G:/projects/nbbp2.0.git/src/components/User/Cell.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;EAC9B,sBAAsB;EACtB,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,SAAS;EACT,SAAS;EACT,oCAAoC;UAC5B,4BAA4B;CACrC;AACD;EACE,qBAAqB;CACtB",file:"Cell.vue",sourcesContent:['\nli[data-v-2cc0db54] {\n  display: block;\n}\n.group-cell[data-v-2cc0db54] {\n  padding: 0.35rem 0;\n  margin: 0 0.4rem;\n  color: #fff;\n  position: relative;\n}\n.group-cell .left-icon[data-v-2cc0db54] {\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.group-cell[data-v-2cc0db54]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #12151e;\n  color: #12151e;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n.group-cell > span[data-v-2cc0db54] {\n  display: block;\n  width: 0.56rem;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  text-align: center;\n  background-color: #2e313a;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.group-cell .arrow-right[data-v-2cc0db54] {\n  width: 0.4rem;\n  height: 0.4rem;\n  fill: #5d5e63;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.group-cell.link .slot-content[data-v-2cc0db54] {\n  margin-right: 0.4rem;\n}\n'],sourceRoot:""}])},"ae+P":function(t,e,n){t.exports=n.p+"static/img/despoit-bg.689132c.png"},b8Un:function(t,e,n){var i=n("+5KU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("6e4a721c",i,!0)},c45H:function(t,e,n){n("1alW"),t.exports=n("FeBl").Number.isInteger},xKI3:function(t,e,n){var i=n("Xvig");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("0ba1c4f2",i,!0)}});
//# sourceMappingURL=6.a36bf8cd9604a17ee871.js.map