webpackJsonp([18],{"2Wtv":function(t,i,e){"use strict";var s=function(t){this.startY=0,this.startTopScroll=0,this.elem=t||document.querySelector(t),this.elem&&this.elem.addEventListener("touchstart",this.func.bind(this),!1)};s.prototype.func=function(t){this.startY=t.touches[0].pageY,this.startTopScroll=this.elem.scrollTop,this.startTopScroll<=0&&(this.elem.scrollTop=1),this.startTopScroll+this.elem.offsetHeight>=this.elem.scrollHeight&&(this.elem.scrollTop=this.elem.scrollHeight-this.elem.offsetHeight-1)},s.prototype.destory=function(){this.elem.removeEventListener("touchstart",this.func,!1)},i.a=s},Nwqm:function(t,i,e){var s=e("fhPL");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("6ed51464",s,!0)},ZELv:function(t,i,e){"use strict";function s(t){e("Nwqm")}Object.defineProperty(i,"__esModule",{value:!0});var a=e("Dd8w"),n=e.n(a),o=e("NYxO"),r=e("2Wtv"),l=e("arOy"),c=e.n(l),g=e("gyMJ"),h=e("oAV5"),u={data:function(){return{scrollFix:null,code:""}},beforeDestroy:function(){this.scrollFix&&this.scrollFix.destory(),this.lazyload&&this.lazyload.destroy()},beforeRouteEnter:function(t,i,e){1===Number(t.query.type)?document.title="商户加盟":2===Number(t.query.type)&&(document.title="代理加盟"),e()},created:function(){var t=this,i="";this.$route.query.code&&(this.code=this.$route.query.code),Object(g.p)().then(function(e){var s="";e.result?s=e.result:!e.result&&t.code&&(s=t.code),i="&code="+s;var a={};1===Number(t.$route.query.type)?a={title:"商户加盟：0成本增加收益，微信注册即可免费使用",desc:"该系统适用于酒吧、庆典、餐厅、婚礼等各种场合，帮您活跃气氛的同时提升30%以上收益",link:window.location.origin+window.location.pathname+"#/BusinessJoin?type="+t.$route.query.type+i,imgUrl:"http://xnb.siweiquanjing.com/screen/images/logo1.png"}:2===Number(t.$route.query.type)&&(a={title:"代理加盟：推荐商户免费使用牛霸系统获永久收益分成",desc:"该系统适用于酒吧、庆典、餐厅、婚礼等各种场合",link:Object(h.d)(window.location.href,"version"),imgUrl:"http://xnb.siweiquanjing.com/screen/images/logo1.png"}),t.$wechat.onMenuShareTimeline(n()({},a,{success:function(){},cancel:function(){}})),t.$wechat.onMenuShareAppMessage(n()({},a,{success:function(){},cancel:function(){}}))})},mounted:function(){var t=this;this.$nextTick(function(){t.lazyload=new c.a({container:t.$refs.scrollWrapper}),t.scrollFix=new r.a(t.$refs.scrollWrapper)})},computed:n()({},Object(o.c)("user",{userInfo:"userInfo"}))},d=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container bg1 about-container borderbox flex flex-v",staticStyle:{height:"100%"}},[e("div",{ref:"scrollWrapper",staticClass:"flex-1 overscroll"},[1==t.$route.query.type?[e("img",{staticClass:"join-img",staticStyle:{height:"3.43rem"},attrs:{"data-src":"./static/join/shanghu01.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.54rem"},attrs:{"data-src":"./static/join/shanghu02.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.38rem"},attrs:{"data-src":"./static/join/shanghu03.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.71rem"},attrs:{"data-src":"./static/join/shanghu04.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.89rem"},attrs:{"data-src":"./static/join/shanghu05.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.85rem"},attrs:{"data-src":"./static/join/shanghu06.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.97rem"},attrs:{"data-src":"./static/join/shanghu07.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4rem"},attrs:{"data-src":"./static/join/shanghu08.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.27rem"},attrs:{"data-src":"./static/join/shanghu09.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.2rem"},attrs:{"data-src":"./static/join/shanghu10.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.61rem"},attrs:{"data-src":"./static/join/shanghu11.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.33rem"},attrs:{"data-src":"./static/join/shanghu12.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"5.04rem"},attrs:{"data-src":"./static/join/shanghu13.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.64rem"},attrs:{"data-src":"./static/join/shanghu14.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.73rem"},attrs:{"data-src":"./static/join/shanghu15.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.17rem"},attrs:{"data-src":"./static/join/shanghu16.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.75rem"},attrs:{"data-src":"./static/join/shanghu17.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"2.74rem"},attrs:{"data-src":"./static/join/shanghu18.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"2.92rem"},attrs:{"data-src":"./static/join/shanghu19.jpg"}})]:t._e(),t._v(" "),2==t.$route.query.type?[e("img",{staticClass:"join-img",staticStyle:{height:"3.68rem"},attrs:{"data-src":"./static/join/daili01.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.62rem"},attrs:{"data-src":"./static/join/daili02.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"1.75rem"},attrs:{"data-src":"./static/join/daili03.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.82rem"},attrs:{"data-src":"./static/join/daili04.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.3rem"},attrs:{"data-src":"./static/join/daili05.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.27rem"},attrs:{"data-src":"./static/join/daili06.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.63rem"},attrs:{"data-src":"./static/join/daili07.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.24rem"},attrs:{"data-src":"./static/join/daili08.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.18rem"},attrs:{"data-src":"./static/join/daili09.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.91rem"},attrs:{"data-src":"./static/join/daili10.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.04rem"},attrs:{"data-src":"./static/join/daili11.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.04rem"},attrs:{"data-src":"./static/join/daili12.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.76rem"},attrs:{"data-src":"./static/join/daili13.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.39rem"},attrs:{"data-src":"./static/join/daili14.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"3.79rem"},attrs:{"data-src":"./static/join/daili15.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.45rem"},attrs:{"data-src":"./static/join/daili16.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"5.19rem"},attrs:{"data-src":"./static/join/daili17.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"4.78rem"},attrs:{"data-src":"./static/join/daili18.jpg"}}),t._v(" "),e("img",{staticClass:"join-img",staticStyle:{height:"2.82rem"},attrs:{"data-src":"./static/join/daili19.jpg"}})]:t._e(),t._v(" "),e("div",{staticClass:"fixed-btn"},[t.userInfo.isMM||1!=t.$route.query.type?t._e():e("router-link",{attrs:{to:{path:"/Register?type="+t.$route.query.type+"&code="+t.code}}},[e("button",{staticClass:"turn-btn fff-bp"},[t._v("立即注册")])]),t._v(" "),t.userInfo.isAgent||2!=t.$route.query.type?t._e():e("router-link",{attrs:{to:{path:"/Register?type="+t.$route.query.type}}},[e("button",{staticClass:"turn-btn fff-bp"},[t._v("立即注册")])]),t._v(" "),t.userInfo.isMM>0&&1==t.$route.query.type?e("router-link",{attrs:{to:{path:"/MyBars"}}},[e("button",{staticClass:"turn-btn fff-bp"},[t._v("商户管理")])]):t._e(),t._v(" "),t.userInfo.isAgent>0&&2==t.$route.query.type?e("router-link",{attrs:{to:{path:"/AgentCenter"}}},[e("button",{staticClass:"turn-btn fff-bp"},[t._v("代理管理")])]):t._e()],1)],2)])},m=[],p={render:d,staticRenderFns:m},f=p,_=e("VU/8"),v=s,j=_(u,f,!1,v,"data-v-582fe274",null);i.default=j.exports},arOy:function(t,i,e){var s,a,n=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(n,r){"object"===o(i)&&void 0!==t?t.exports=r():(s=r,void 0!==(a="function"==typeof s?s.call(i,e,i,t):s)&&(t.exports=a))}(0,function(){"use strict";var t={elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null,callback_enter:null},i=!("onscroll"in window)||/glebot/.test(navigator.userAgent),e=function(t,i){t&&t(i)},s=function(t){return t.getBoundingClientRect().top+window.pageYOffset-t.ownerDocument.documentElement.clientTop},a=function(t,i,e){return(i===window?window.innerHeight+window.pageYOffset:s(i)+i.offsetHeight)<=s(t)-e},o=function(t){return t.getBoundingClientRect().left+window.pageXOffset-t.ownerDocument.documentElement.clientLeft},r=function(t,i,e){var s=window.innerWidth;return(i===window?s+window.pageXOffset:o(i)+s)<=o(t)-e},l=function(t,i,e){return(i===window?window.pageYOffset:s(i))>=s(t)+e+t.offsetHeight},c=function(t,i,e){return(i===window?window.pageXOffset:o(i))>=o(t)+e+t.offsetWidth},g=function(t,i,e){return!(a(t,i,e)||l(t,i,e)||r(t,i,e)||c(t,i,e))},h=function(t,i){var e,s=new t(i);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:s}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:s})}window.dispatchEvent(e)},u=function(t,i){return t.getAttribute("data-"+i)},d=function(t,i,e){return t.setAttribute("data-"+i,e)},m=function(t,i){var e=t.parentNode;if("PICTURE"===e.tagName)for(var s=0;s<e.children.length;s++){var a=e.children[s];if("SOURCE"===a.tagName){var n=u(a,i);n&&a.setAttribute("srcset",n)}}},p=function(t,i,e){var s=t.tagName,a=u(t,e);if("IMG"===s){m(t,i);var n=u(t,i);return n&&t.setAttribute("srcset",n),void(a&&t.setAttribute("src",a))}"IFRAME"!==s?a&&(t.style.backgroundImage='url("'+a+'")'):a&&t.setAttribute("src",a)},f="classList"in document.createElement("p"),_=function(t,i){f?t.classList.add(i):t.className+=(t.className?" ":"")+i},v=function(t,i){f?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\s+)"+i+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},j=function(i){this._settings=n({},t,i),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};j.prototype={_reveal:function(t){var i=this._settings,s=function s(){i&&(t.removeEventListener("load",a),t.removeEventListener("error",s),v(t,i.class_loading),_(t,i.class_error),e(i.callback_error,t))},a=function a(){i&&(v(t,i.class_loading),_(t,i.class_loaded),t.removeEventListener("load",a),t.removeEventListener("error",s),e(i.callback_load,t))};e(i.callback_enter,t),"IMG"!==t.tagName&&"IFRAME"!==t.tagName||(t.addEventListener("load",a),t.addEventListener("error",s),_(t,i.class_loading)),p(t,i.data_srcset,i.data_src),e(i.callback_set,t)},_loopThroughElements:function(){var t=this._settings,s=this._elements,a=s?s.length:0,n=void 0,o=[],r=this._isFirstLoop;for(n=0;n<a;n++){var l=s[n];t.skip_invisible&&null===l.offsetParent||(i||g(l,t.container,t.threshold))&&(r&&_(l,t.class_initial),this._reveal(l),o.push(n),d(l,"was-processed",!0))}for(;o.length;)s.splice(o.pop(),1),e(t.callback_processed,s.length);0===a&&this._stopScrollHandler(),r&&(this._isFirstLoop=!1)},_purgeElements:function(){var t=this._elements,i=t.length,e=void 0,s=[];for(e=0;e<i;e++){var a=t[e];u(a,"was-processed")&&s.push(e)}for(;s.length>0;)t.splice(s.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var t=this._settings.throttle;if(0!==t){var i=Date.now(),e=t-(i-this._previousLoopTime);e<=0||e>t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=i,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),e))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var y=window.lazyLoadOptions;return y&&function(t,i){var e=i.length;if(e)for(var s=0;s<e;s++)h(t,i[s]);else h(t,i)}(j,y),j})},fhPL:function(t,i,e){i=t.exports=e("FZ+f")(!0),i.push([t.i,"\n.join-img[data-v-582fe274] {\n  width: 7.5rem;\n  display: block;\n}\n.turn-btn[data-v-582fe274] {\n  width: 5.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 20px;\n  border: 0;\n  border-radius: 50px;\n  background: -webkit-linear-gradient(top, #f2628c, #9e37f5);\n  display: block;\n  margin: 0.4rem auto;\n}\n.fixed-btn[data-v-582fe274] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/BusinessJoin.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,oBAAoB;EACpB,2DAA2D;EAC3D,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,qCAAqC;CACtC",file:"BusinessJoin.vue",sourcesContent:["\n.join-img[data-v-582fe274] {\n  width: 7.5rem;\n  display: block;\n}\n.turn-btn[data-v-582fe274] {\n  width: 5.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  font-size: 20px;\n  border: 0;\n  border-radius: 50px;\n  background: -webkit-linear-gradient(top, #f2628c, #9e37f5);\n  display: block;\n  margin: 0.4rem auto;\n}\n.fixed-btn[data-v-582fe274] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=18.73251ad9fd22d70265fc.js.map