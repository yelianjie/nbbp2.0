webpackJsonp([15],{"2LcI":function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"\n.main-income[data-v-ddc99f5a] {\n  padding: 1.2rem 0;\n}\n.container[data-v-ddc99f5a] .svg-icon {\n  fill: #f8c21a;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/Income.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB;AACD;EACE,cAAc;CACf",file:"Income.vue",sourcesContent:["\n.main-income[data-v-ddc99f5a] {\n  padding: 1.2rem 0;\n}\n.container[data-v-ddc99f5a] .svg-icon {\n  fill: #f8c21a;\n}\n"],sourceRoot:""}])},"3/R9":function(t,e,i){t.exports=i.p+"static/img/charge-bg.a616b66.png"},"6aE3":function(t,e,i){var n=i("2LcI");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("3c881bbd",n,!0)},DvPN:function(t,e,i){"use strict";function n(t){i("6aE3")}Object.defineProperty(e,"__esModule",{value:!0});var o=i("RRo+"),a=i.n(o),s=i("Dd8w"),c=i.n(s),r=i("3/R9"),l=i.n(r),d=i("ae+P"),u=i.n(d),p=i("2sLL"),f=i("63CM"),v=i("IEP8"),g=i("NYxO"),m=i("gyMJ"),x={directives:{TransferDom:f.a},components:{XButton:p.a,BpDialog:v.a},data:function(){return{exchangeVisible:!1,depositVisible:!1,exchangeBg:l.a,depositBg:u.a,toCoinValue:"",toRMBValue:""}},beforeRouteEnter:function(t,e,i){document.title="我的收益",i()},created:function(){var t=this;this.$vux.loading.show({text:"正在加载"}),this.getUserInfo().then(function(t){}).finally(function(){t.$vux.loading.hide()})},computed:c()({},Object(g.c)("user",["userInfo"])),methods:c()({},Object(g.b)("user",["getUserInfo"]),{exchange:function(){var t=this;if(!this.toCoinValue)return this.$vux.toast.show({text:"请输入兑换牛角币",width:"10em"}),!1;this.$mask(),this.$vux.loading.show({text:"正在兑换"}),Object(m.n)({money:this.toCoinValue}).then(function(e){t.getUserInfo(),t.exchangeVisible=!1,t.$vux.loading.hide(),t.$vux.toast.show({text:"兑换成功"})}).finally(function(){t.$vux.loading.hide(),t.$mask.hide()})},deposit:function(){var t=this;if(!this.toRMBValue||this.toRMBValue%100!=0)return void this.$vux.toast.show({text:"提现金额不为100的倍数",position:"bottom",width:"12em"});this.$mask(),this.$vux.loading.show({text:"正在提现"}),Object(m.m)({type:1,money:this.toRMBValue,ht_id:0}).then(function(e){t.getUserInfo(),t.depositVisible=!1,t.$vux.loading.hide(),t.$vux.toast.show({text:"提现成功"})}).finally(function(){t.$vux.loading.hide(),t.$mask.hide()})},validToCoin:function(t){a()(this.toCoinValue)||(this.toCoinValue="")},validToRMB:function(t){a()(this.toRMBValue)||(this.toRMBValue="")}})},b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container bg1"},[i("div",{staticClass:"main-income bg2 tc"},[i("h2",{staticStyle:{"font-weight":"normal",color:"#f31374"}},[t._v(t._s(t.userInfo.profit_balance))]),t._v(" "),i("span",{staticClass:"fff-bp tc f13"},[i("svg-icon",{staticStyle:{"margin-bottom":"3px","margin-right":"4px"},attrs:{"icon-class":"coin"}}),t._v("我的收益/元")],1)]),t._v(" "),i("p",{staticClass:"tc f13",staticStyle:{color:"#ddd","margin-top":"0.6rem"}},[t._v("您当前拥有牛角数："+t._s(t.userInfo.balance)+"个")]),t._v(" "),i("div",{staticStyle:{margin:"10px 15px"}},[i("x-button",{attrs:{gradients:["#2b3044","#2b3044"]},nativeOn:{click:function(e){t.exchangeVisible=!0}}},[t._v("兑换牛角")]),t._v(" "),i("x-button",{staticStyle:{"margin-top":"10px"},attrs:{gradients:["#f31374","#f31374"]},nativeOn:{click:function(e){t.depositVisible=!0}}},[t._v("我要提现")])],1),t._v(" "),t._m(0),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("bp-dialog",{attrs:{"bg-title":!0,bgSrc:t.exchangeBg},on:{onConfirm:t.exchange},model:{value:t.exchangeVisible,callback:function(e){t.exchangeVisible=e},expression:"exchangeVisible"}},[i("div",{},[i("p",{staticStyle:{"font-size":"13px",color:"#6c6a75","text-align":"left","margin-bottom":"10px"}},[t._v("当前有"+t._s(t.userInfo.profit_balance)+"元收益可兑换成牛角")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.toCoinValue,expression:"toCoinValue",modifiers:{number:!0}}],staticClass:"borderbox f14",staticStyle:{outline:"none",border:"1px solid #ccc","border-radius":"5px","text-align":"center",color:"#161a25",width:"100%","line-height":"24px",padding:"4px 8px"},attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入要兑换的牛角币"},domProps:{value:t.toCoinValue},on:{keyup:t.validToCoin,input:function(e){e.target.composing||(t.toCoinValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticStyle:{color:"#6c6a75","text-align":"left","font-size":"12px","margin-top":"10px"}},[i("svg-icon",{attrs:{"icon-class":"notice"}}),i("span",{staticStyle:{"margin-left":"6px"}},[t._v("1牛角=1元")])],1)])])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("bp-dialog",{attrs:{"bg-title":!0,bgSrc:t.depositBg},on:{onConfirm:t.deposit},model:{value:t.depositVisible,callback:function(e){t.depositVisible=e},expression:"depositVisible"}},[i("div",{},[i("p",{staticStyle:{"font-size":"13px",color:"#6c6a75","text-align":"left","margin-bottom":"10px"}},[t._v("当前收益："+t._s(t.userInfo.profit_balance)+"元")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.toRMBValue,expression:"toRMBValue",modifiers:{number:!0}}],staticClass:"borderbox f14",staticStyle:{outline:"none",border:"1px solid #ccc","border-radius":"5px","text-align":"center",color:"#161a25",width:"100%","line-height":"24px",padding:"4px 8px"},attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入要提现的金额"},domProps:{value:t.toRMBValue},on:{keyup:t.validToRMB,input:function(e){e.target.composing||(t.toRMBValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticStyle:{color:"#6c6a75","text-align":"left","font-size":"12px","margin-top":"10px"}},[i("svg-icon",{attrs:{"icon-class":"notice"}}),i("span",[t._v("目前仅支持整百数提现")])],1)])])],1)])},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"tip-ul f12",staticStyle:{color:"#ddd",margin:"40px 15px 0"}},[i("li",[t._v("说明：")]),t._v(" "),i("li",[t._v("1、兑换比例：1元=1牛角。")]),t._v(" "),i("li",[t._v("2、兑换的牛角只能用于消费，不能提现。")]),t._v(" "),i("li",[t._v("3、提现金额将直接进入您的微信零钱，请注意查收。")])])}],_={render:b,staticRenderFns:h},V=_,C=i("VU/8"),y=n,B=C(x,V,!1,y,"data-v-ddc99f5a",null);e.default=B.exports},"ae+P":function(t,e,i){t.exports=i.p+"static/img/despoit-bg.df7596a.png"}});
//# sourceMappingURL=15.5025352350b9636d8fce.js.map