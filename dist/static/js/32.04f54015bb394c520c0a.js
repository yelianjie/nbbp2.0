webpackJsonp([32],{RGMv:function(t,i,a){i=t.exports=a("FZ+f")(!1),i.push([t.i,"\n.join-img[data-v-582fe274] {\n  width: 7.5rem;\n  display: block;\n}\n.turn-btn[data-v-582fe274] {\n  width: 5.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 20px;\n  border: 0;\n  border-radius: 50px;\n  background: -webkit-linear-gradient(top, #f2628c, #9e37f5);\n  display: block;\n  margin: 0.4rem auto;\n}\n.fixed-btn[data-v-582fe274] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n",""])},ZELv:function(t,i,a){"use strict";function s(t){a("jCEP")}Object.defineProperty(i,"__esModule",{value:!0});var e=a("Dd8w"),r=a.n(e),n=a("NYxO"),c=a("2Wtv"),o=a("arOy"),g=a.n(o),l=a("gyMJ"),h=a("oAV5"),m={data:function(){return{scrollFix:null,code:""}},beforeDestroy:function(){this.scrollFix&&this.scrollFix.destory(),this.lazyload&&this.lazyload.destroy()},beforeRouteEnter:function(t,i,a){1===Number(t.query.type)?document.title="商户加盟":2===Number(t.query.type)&&(document.title="代理加盟"),a()},created:function(){var t=this,i="";this.$route.query.code&&(this.code=this.$route.query.code),Object(l.u)().then(function(a){var s="";a.result?s=a.result:!a.result&&t.code&&(s=t.code),i="&code="+s;var e={};1===Number(t.$route.query.type)?e={title:"商户加盟：0成本增加收益，微信注册即可免费使用",desc:"该系统适用于酒吧、庆典、餐厅、婚礼等各种场合，帮您活跃气氛的同时提升30%以上收益",link:window.location.origin+window.location.pathname+"#/BusinessJoin?type="+t.$route.query.type+i,imgUrl:"http://xnb.siweiquanjing.com/screen/images/logo1.png"}:2===Number(t.$route.query.type)&&(e={title:"代理加盟：推荐商户免费使用牛霸系统获永久收益分成",desc:"该系统适用于酒吧、庆典、餐厅、婚礼等各种场合",link:Object(h.d)(window.location.href,"version"),imgUrl:"http://xnb.siweiquanjing.com/screen/images/logo1.png"}),t.$wechat.onMenuShareTimeline(r()({},e,{success:function(){},cancel:function(){}})),t.$wechat.onMenuShareAppMessage(r()({},e,{success:function(){},cancel:function(){}}))})},mounted:function(){var t=this;this.$nextTick(function(){t.lazyload=new g.a({container:t.$refs.scrollWrapper}),t.scrollFix=new c.a(t.$refs.scrollWrapper)})},computed:r()({},Object(n.c)("user",{userInfo:"userInfo"}))},j=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container bg1 about-container borderbox flex flex-v",staticStyle:{height:"100%"}},[a("div",{ref:"scrollWrapper",staticClass:"flex-1 overscroll"},[1==t.$route.query.type?[a("img",{staticClass:"join-img",staticStyle:{height:"3.43rem"},attrs:{"data-src":"./static/join/shanghu01.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.54rem"},attrs:{"data-src":"./static/join/shanghu02.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.38rem"},attrs:{"data-src":"./static/join/shanghu03.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.71rem"},attrs:{"data-src":"./static/join/shanghu04.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.89rem"},attrs:{"data-src":"./static/join/shanghu05.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.85rem"},attrs:{"data-src":"./static/join/shanghu06.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.97rem"},attrs:{"data-src":"./static/join/shanghu07.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4rem"},attrs:{"data-src":"./static/join/shanghu08.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.27rem"},attrs:{"data-src":"./static/join/shanghu09.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.2rem"},attrs:{"data-src":"./static/join/shanghu10.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.61rem"},attrs:{"data-src":"./static/join/shanghu11.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.33rem"},attrs:{"data-src":"./static/join/shanghu12.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"5.04rem"},attrs:{"data-src":"./static/join/shanghu13.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.64rem"},attrs:{"data-src":"./static/join/shanghu14.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.73rem"},attrs:{"data-src":"./static/join/shanghu15.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.17rem"},attrs:{"data-src":"./static/join/shanghu16.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.75rem"},attrs:{"data-src":"./static/join/shanghu17.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"2.74rem"},attrs:{"data-src":"./static/join/shanghu18.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"2.92rem"},attrs:{"data-src":"./static/join/shanghu19.jpg"}})]:t._e(),t._v(" "),2==t.$route.query.type?[a("img",{staticClass:"join-img",staticStyle:{height:"3.68rem"},attrs:{"data-src":"./static/join/daili01.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.62rem"},attrs:{"data-src":"./static/join/daili02.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"1.75rem"},attrs:{"data-src":"./static/join/daili03.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.82rem"},attrs:{"data-src":"./static/join/daili04.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.3rem"},attrs:{"data-src":"./static/join/daili05.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.27rem"},attrs:{"data-src":"./static/join/daili06.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.63rem"},attrs:{"data-src":"./static/join/daili07.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.24rem"},attrs:{"data-src":"./static/join/daili08.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.18rem"},attrs:{"data-src":"./static/join/daili09.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.91rem"},attrs:{"data-src":"./static/join/daili10.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.04rem"},attrs:{"data-src":"./static/join/daili11.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.04rem"},attrs:{"data-src":"./static/join/daili12.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.76rem"},attrs:{"data-src":"./static/join/daili13.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.39rem"},attrs:{"data-src":"./static/join/daili14.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"3.79rem"},attrs:{"data-src":"./static/join/daili15.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.45rem"},attrs:{"data-src":"./static/join/daili16.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"5.19rem"},attrs:{"data-src":"./static/join/daili17.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"4.78rem"},attrs:{"data-src":"./static/join/daili18.jpg"}}),t._v(" "),a("img",{staticClass:"join-img",staticStyle:{height:"2.82rem"},attrs:{"data-src":"./static/join/daili19.jpg"}})]:t._e(),t._v(" "),a("div",{staticClass:"fixed-btn"},[t.userInfo.isMM||1!=t.$route.query.type?t._e():a("router-link",{attrs:{to:{path:"/Register?type="+t.$route.query.type+"&code="+t.code}}},[a("button",{staticClass:"turn-btn fff-bp"},[t._v("立即注册")])]),t._v(" "),t.userInfo.isAgent||2!=t.$route.query.type?t._e():a("router-link",{attrs:{to:{path:"/Register?type="+t.$route.query.type}}},[a("button",{staticClass:"turn-btn fff-bp"},[t._v("立即注册")])]),t._v(" "),t.userInfo.isMM>0&&1==t.$route.query.type?a("router-link",{attrs:{to:{path:"/MyBars"}}},[a("button",{staticClass:"turn-btn fff-bp"},[t._v("商户管理")])]):t._e(),t._v(" "),t.userInfo.isAgent>0&&2==t.$route.query.type?a("router-link",{attrs:{to:{path:"/AgentCenter"}}},[a("button",{staticClass:"turn-btn fff-bp"},[t._v("代理管理")])]):t._e()],1)],2)])},u=[],d={render:j,staticRenderFns:u},p=d,y=a("VU/8"),v=s,f=y(m,p,!1,v,"data-v-582fe274",null);i.default=f.exports},jCEP:function(t,i,a){var s=a("RGMv");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("9969dd7c",s,!0)}});