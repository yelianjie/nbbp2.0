webpackJsonp([6],{"+qyL":function(n,t,e){var a=e("zTJT");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("f21f3112",a,!0)},"1Y3+":function(n,t,e){var a=e("kxFB");t=n.exports=e("FZ+f")(!0),t.push([n.i,'\n.container[data-v-351c4216] .bar-item {\n  position: relative;\n}\n.container[data-v-351c4216] .bar-item:before {\n  position: absolute;\n  top: 0;\n  left: 0.3rem;\n  right: 0.3rem;\n  height: 1px;\n  background-color: #f2f2f2;\n  content: "";\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.top[data-v-351c4216] {\n  padding: 10px 15px;\n}\n.logo-img[data-v-351c4216] {\n  width: 30px;\n  height: 30px;\n  vertical-align: middle;\n}\n.u-name[data-v-351c4216] {\n  display: inline-block;\n  vertical-align: middle;\n}\nfooter[data-v-351c4216] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  background-color: #f7f7f7;\n}\nfooter .enter-bar[data-v-351c4216] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  color: #fff;\n  background-color: #2481d2;\n}\n.qrcode-info[data-v-351c4216] {\n  width: 4.75rem;\n  padding: 0.3rem 0 0.6rem;\n  background: #fff url('+a(e("TW96"))+") no-repeat top;\n  background-size: contain;\n  border-radius: 15px;\n  margin: 0 auto;\n}\n.qrcode-info .qrcode[data-v-351c4216] {\n  width: 2.2rem;\n  height: 2.2rem;\n  margin-bottom: 0.4rem;\n}\n.qrcode-info p[data-v-351c4216] {\n  line-height: 0.4rem;\n  color: #3d404f;\n  padding: 0 10px;\n  word-break: break-all;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/AgentCenter.vue"],names:[],mappings:";AACA;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,aAAa;EACb,cAAc;EACd,YAAY;EACZ,0BAA0B;EAC1B,YAAY;EACZ,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,yBAAyB;EACzB,6DAA8D;EAC9D,yBAAyB;EACzB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,cAAc;EACd,eAAe;EACf,sBAAsB;CACvB;AACD;EACE,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;CACvB",file:"AgentCenter.vue",sourcesContent:["\n.container[data-v-351c4216] .bar-item {\n  position: relative;\n}\n.container[data-v-351c4216] .bar-item:before {\n  position: absolute;\n  top: 0;\n  left: 0.3rem;\n  right: 0.3rem;\n  height: 1px;\n  background-color: #f2f2f2;\n  content: \"\";\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.top[data-v-351c4216] {\n  padding: 10px 15px;\n}\n.logo-img[data-v-351c4216] {\n  width: 30px;\n  height: 30px;\n  vertical-align: middle;\n}\n.u-name[data-v-351c4216] {\n  display: inline-block;\n  vertical-align: middle;\n}\nfooter[data-v-351c4216] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  background-color: #f7f7f7;\n}\nfooter .enter-bar[data-v-351c4216] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  color: #fff;\n  background-color: #2481d2;\n}\n.qrcode-info[data-v-351c4216] {\n  width: 4.75rem;\n  padding: 0.3rem 0 0.6rem;\n  background: #fff url('../assets/qrcode-bg.png') no-repeat top;\n  background-size: contain;\n  border-radius: 15px;\n  margin: 0 auto;\n}\n.qrcode-info .qrcode[data-v-351c4216] {\n  width: 2.2rem;\n  height: 2.2rem;\n  margin-bottom: 0.4rem;\n}\n.qrcode-info p[data-v-351c4216] {\n  line-height: 0.4rem;\n  color: #3d404f;\n  padding: 0 10px;\n  word-break: break-all;\n}\n"],sourceRoot:""}])},HpKq:function(n,t,e){var a=e("YZ7j");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("abbfcf38",a,!0)},Q6pl:function(n,t,e){"use strict";function a(n){e("HpKq")}var i={props:["barsList","enter"],components:{},data:function(){return{}},mounted:function(){},computed:{list:function(){return this.barsList?this.barsList:[]}},methods:{pageToBarInfo:function(n,t){"home"===this.enter?this.$router.push({path:"/Main/"+n}):this.$router.push({path:"/AgentBarInfo",query:{id:n,type:3}})}},filters:{distance:function(n){return"string"==typeof n?n:Number(n/1e3).toFixed(2)+"km"}}},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"bar-list",class:{home:"home"==n.enter}},[e("ul",n._l(n.list,function(t,a){return e("li",{key:a,staticClass:"bar-item flex",on:{click:function(e){n.pageToBarInfo(t.id,t.name)}}},[e("div",{staticClass:"bar-img"},[e("img",{staticClass:"circle",attrs:{src:n._f("prefixImageUrl")(t.logo),alt:""}})]),n._v(" "),e("div",{staticClass:"bar-info flex flex-1 flex-v flex-pack-center"},[e("h2",{staticClass:"bar-name"},[n._v(n._s(t.name))]),n._v(" "),e("div",{staticClass:"bar-address"},[n._v(n._s(t.area_name)+n._s(t.address))])]),n._v(" "),"home"==n.enter?e("div",{staticClass:"bar-distance flex flex flex-align-center"},[e("svg-icon",{attrs:{"icon-class":"position"}}),e("span",[n._v(n._s(n._f("distance")(t.distance)))])],1):n._e(),n._v(" "),"home"!=n.enter?e("div",{staticClass:"tc bar-money pr flex flex-v flex-pack-center"},[e("p",{staticClass:"f16",staticStyle:{color:"red"}},[n._v(n._s(t.agent_balance))]),n._v(" "),e("p",{staticClass:"f13",staticStyle:{color:"#818181"}},[n._v("可提现收益")])]):n._e()])}))])},r=[],s={render:o,staticRenderFns:r},c=s,A=e("VU/8"),l=a,d=A(i,c,!1,l,"data-v-6c99bb84",null);t.a=d.exports},YZ7j:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,'\n.bar-item[data-v-6c99bb84] {\n  padding: 0.36rem 0.3rem;\n}\n.home .bar-item[data-v-6c99bb84] {\n  margin-bottom: 1px;\n  background-color: #181b2a;\n}\n.bar-img[data-v-6c99bb84] {\n  width: 1rem;\n  margin-right: 0.4rem;\n}\n.bar-img img[data-v-6c99bb84] {\n  width: 1rem;\n  height: 1rem;\n}\n.bar-name[data-v-6c99bb84] {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-name[data-v-6c99bb84] {\n  color: #fff;\n}\n.bar-address[data-v-6c99bb84] {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #ccc;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-address[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance[data-v-6c99bb84] {\n  margin-left: 0.1rem;\n}\n.home .bar-distance[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance span[data-v-6c99bb84] {\n  font-size: 13px;\n}\n.bar-distance .svg-icon[data-v-6c99bb84] {\n  width: 0.32rem;\n  height: 0.32rem;\n}\n.bar-money[data-v-6c99bb84] {\n  padding: 0 10px;\n  margin-left: 10px;\n}\n.bar-money[data-v-6c99bb84]:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: #ddd;\n  content: "";\n}\n',"",{version:3,sources:["E:/Sites/nbbp2.0.git/src/components/Center/BarsList.vue"],names:[],mappings:";AACA;EACE,wBAAwB;CACzB;AACD;EACE,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,6BAA6B;EAC7B,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,YAAY;CACb",file:"BarsList.vue",sourcesContent:['\n.bar-item[data-v-6c99bb84] {\n  padding: 0.36rem 0.3rem;\n}\n.home .bar-item[data-v-6c99bb84] {\n  margin-bottom: 1px;\n  background-color: #181b2a;\n}\n.bar-img[data-v-6c99bb84] {\n  width: 1rem;\n  margin-right: 0.4rem;\n}\n.bar-img img[data-v-6c99bb84] {\n  width: 1rem;\n  height: 1rem;\n}\n.bar-name[data-v-6c99bb84] {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-name[data-v-6c99bb84] {\n  color: #fff;\n}\n.bar-address[data-v-6c99bb84] {\n  font-size: 12px;\n  line-height: 1.5;\n  color: #ccc;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n}\n.home .bar-address[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance[data-v-6c99bb84] {\n  margin-left: 0.1rem;\n}\n.home .bar-distance[data-v-6c99bb84] {\n  color: #61667a;\n}\n.bar-distance span[data-v-6c99bb84] {\n  font-size: 13px;\n}\n.bar-distance .svg-icon[data-v-6c99bb84] {\n  width: 0.32rem;\n  height: 0.32rem;\n}\n.bar-money[data-v-6c99bb84] {\n  padding: 0 10px;\n  margin-left: 10px;\n}\n.bar-money[data-v-6c99bb84]:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: #ddd;\n  content: "";\n}\n'],sourceRoot:""}])},anb5:function(n,t,e){"use strict";function a(n){e("+qyL")}var i={props:["data"]},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"menu-item flex"},[e("div",{staticClass:"menu-icon flex flex-align-center"},[e("svg-icon",{attrs:{"icon-class":n.data.icon}})],1),n._v(" "),e("div",{staticClass:"menu-info flex flex-1 flex-v flex-pack-center"},[e("span",{staticClass:"mname"},[n._v(n._s(n.data.name))]),n._v(" "),e("span",{staticClass:"mtip"},[n._v(n._s(n.data.tip))])])])},r=[],s={render:o,staticRenderFns:r},c=s,A=e("VU/8"),l=a,d=A(i,c,!1,l,"data-v-2c46ac50",null);t.a=d.exports},brux:function(n,t,e){"use strict";function a(n){e("zDPt")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("mvHQ"),o=e.n(i),r=e("Q6pl"),s=e("/kga"),c=e("7Otq"),A=e.n(c),l=e("gyMJ"),d=e("anb5"),f=e("6xed"),C={name:"AgentCenter",data:function(){return{logo:A.a,loading:!0,noMore:!1,info:{money:{},agent:{},hotel:[]},horizontalMenus:[{name:"帮助说明",icon:"business-help-icon",tip:"设置帮助",route:{path:"/HelpAgent"}}],concernVisible:!1,ticket:""}},beforeRouteEnter:function(n,t,e){document.title="代理管理",e()},created:function(){var n=this;Object(l.X)({ht_id:0,type:3,url:window.location.hash.substring(1)}).then(function(t){"已关注"===t.result?n.concernVisible=!1:(n.ticket=t.result,n.concernVisible=!0)}),Object(l.q)().then(function(t){n.info=t.result,localStorage.setItem("agentNeed",o()({code:t.result.agent.invitation_code})),n.loading=!1,0===t.result.hotel.length&&(n.noMore=!0)})},mounted:function(){},components:{BarsList:r.a,MenuItem:d.a,InlineLoading:f.a,XDialog:s.a},methods:{route:function(n){this.$router.push(this.horizontalMenus[n].route)}}},b=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container padding-bar",staticStyle:{"backgournd-color":"#f7f7f7"}},[e("div",{staticClass:"top bg3"},[e("div",{staticClass:"logo-line"},[n.info.agent?e("img",{staticClass:"logo-img circle",attrs:{src:n._f("prefixImageUrl")(n.info.agent.headimgurl)}}):n._e(),n._v(" "),e("span",{staticClass:"u-name fff-bp f13"},[n._v(n._s(n.info.agent.name))])])]),n._v(" "),e("div",{staticClass:"middle tc fff-bp bg3",staticStyle:{padding:"0.36rem 0","margin-bottom":"10px"},attrs:{"data-v-7de79557":""}},[e("p",{staticClass:"f14",attrs:{"data-v-7de79557":""}},[n._v("当前累计未提现收益")]),n._v(" "),n.info.money.agent_balance?e("p",{staticClass:"benefit-account",attrs:{"data-v-7de79557":""}},[n._v(n._s(n.info.money.agent_balance))]):e("p",{staticClass:"benefit-account",attrs:{"data-v-7de79557":""}},[n._v("0")]),n._v(" "),n.info.money.agent_income?e("p",{staticClass:"f16",attrs:{"data-v-7de79557":""}},[n._v("累计总收益："+n._s(n.info.money.agent_income)+" 元")]):e("p",{staticClass:"f16",attrs:{"data-v-7de79557":""}},[n._v("累计总收益：0 元")])]),n._v(" "),e("div",{staticClass:"fff flex flex-h flex-align-center",staticStyle:{margin:"10px 0",height:"44px",padding:"0 15px"}},[e("div",{staticClass:"f15"},[n._v("您的代理推荐码")]),n._v(" "),e("div",{staticClass:"flex-1 f15",staticStyle:{"text-align":"right"}},[n._v(n._s(n.info.agent.invitation_code))])]),n._v(" "),e("div",{staticClass:"fff"},[e("p",{staticClass:"f18",staticStyle:{padding:"0.2rem 0.3rem"}},[n._v("代理酒吧列表")]),n._v(" "),n.loading?e("inline-loading",{attrs:{color:"#2481d2",bgColor:"rgba(0, 0, 0, 0.2)"}}):n._e(),n._v(" "),n.noMore?e("div",{staticClass:"f13 tc",staticStyle:{color:"#a0a0a0",padding:"10px 0"}},[n._v("当前还没有代理的商户")]):n._e(),n._v(" "),e("BarsList",{staticClass:"fff",attrs:{barsList:n.info.hotel}})],1),n._v(" "),e("div",{staticClass:"menus-horizontal fff",staticStyle:{"margin-top":"10px",padding:"0 10px"}},[n._l(n.horizontalMenus,function(t,a){return[e("menu-item",{key:a,attrs:{data:t},nativeOn:{click:function(t){n.route(a)}}})]})],2),n._v(" "),e("footer",{staticClass:"footer flex"},[e("div",{staticClass:"flex-1 flex-v tc flex-pack-center flex-align-center"},[e("router-link",{staticClass:"enter-bar",attrs:{to:{path:"/BusinessJoin",query:{type:1}}}},[n._v("立即推荐商户注册")])],1)]),n._v(" "),e("x-dialog",{attrs:{"dialog-style":{"max-width":"100%",width:"100%","background-color":"transparent"}},model:{value:n.concernVisible,callback:function(t){n.concernVisible=t},expression:"concernVisible"}},[e("div",{staticClass:"qrcode-box"},[e("div",{staticClass:"qrcode-info flex flex-v flex-align-center"},[e("p",{staticClass:"f15",staticStyle:{color:"#fff","font-weight":"bold"}},[n._v("注册成功")]),n._v(" "),e("p",{staticClass:"f15",staticStyle:{color:"#fff","margin-bottom":"0.3rem","font-weight":"bold"}},[n._v("欢迎成为牛霸代理")]),n._v(" "),n.ticket?e("img",{staticClass:"qrcode",attrs:{src:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+n.ticket}}):n._e(),n._v(" "),e("p",{staticClass:"f14"},[n._v("请"),e("span",{staticStyle:{color:"red"}},[n._v("长按")]),n._v("二维码")]),n._v(" "),e("p",{staticClass:"f14"},[n._v("关注牛霸霸屏官方公众号")]),n._v(" "),e("p",{staticClass:"f14"},[n._v("进入"),e("span",{staticStyle:{color:"red"}},[n._v("代理管理后台")])])])])])],1)},m=[],p={render:b,staticRenderFns:m},v=p,g=e("VU/8"),B=a,h=g(C,v,!1,B,"data-v-351c4216",null);t.default=h.exports},zDPt:function(n,t,e){var a=e("1Y3+");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("18631ce8",a,!0)},zTJT:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n.menu-item[data-v-2c46ac50] {\n  width: 100%;\n  padding: 10px 4px;\n  box-sizing: border-box;\n  position: relative;\n}\n.menu-icon[data-v-2c46ac50] {\n  width: 1rem;\n  color: #717171;\n}\n.menu-icon .svg-icon[data-v-2c46ac50] {\n  width: 0.6rem;\n  height: 0.6rem;\n  display: block;\n  margin: 0 auto;\n}\n.menu-info[data-v-2c46ac50] {\n  line-height: 1;\n}\n.mname[data-v-2c46ac50] {\n  font-size: 16px;\n  color: #000;\n  height: 16px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.mtip[data-v-2c46ac50] {\n  font-size: 14px;\n  height: 14px;\n  color: #ccc;\n  overflow: hidden;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/components/Center/MenuItem.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,cAAc;EACd,eAAe;EACf,eAAe;EACf,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,iBAAiB;CAClB",file:"MenuItem.vue",sourcesContent:["\n.menu-item[data-v-2c46ac50] {\n  width: 100%;\n  padding: 10px 4px;\n  box-sizing: border-box;\n  position: relative;\n}\n.menu-icon[data-v-2c46ac50] {\n  width: 1rem;\n  color: #717171;\n}\n.menu-icon .svg-icon[data-v-2c46ac50] {\n  width: 0.6rem;\n  height: 0.6rem;\n  display: block;\n  margin: 0 auto;\n}\n.menu-info[data-v-2c46ac50] {\n  line-height: 1;\n}\n.mname[data-v-2c46ac50] {\n  font-size: 16px;\n  color: #000;\n  height: 16px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.mtip[data-v-2c46ac50] {\n  font-size: 14px;\n  height: 14px;\n  color: #ccc;\n  overflow: hidden;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=6.465a61fbbaee1a8151b5.js.map