webpackJsonp([4],{"/0UN":function(e,n,t){"use strict";function i(e){t("Fv3j")}var a={name:"checker",props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)}},data:function(){return{currentValue:this.value}}},s=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"vux-checker-box"},[e._t("default")],2)},o=[],r={render:s,staticRenderFns:o},c=r,l=t("VU/8"),u=i,A=l(a,c,!1,u,null,null);n.a=A.exports},"08BX":function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.place-play-video[data-v-b07b4edc] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 180px;\n  height: 108px;\n  background-color: #000000;\n  z-index: 99;\n  color: #fff;\n}\n.place-play-video .svg-icon[data-v-b07b4edc] {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/components/BgSetting/BgList.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,aAAa;EACb,cAAc;EACd,0BAA0B;EAC1B,YAAY;EACZ,YAAY;CACb;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,kBAAkB;CACnB",file:"BgList.vue",sourcesContent:["\n.place-play-video[data-v-b07b4edc] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 180px;\n  height: 108px;\n  background-color: #000000;\n  z-index: 99;\n  color: #fff;\n}\n.place-play-video .svg-icon[data-v-b07b4edc] {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n"],sourceRoot:""}])},EmH9:function(e,n,t){"use strict";function i(e){t("L2EE")}var a=t("oWtu"),s={name:"check-icon",components:{Icon:a.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}},o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vux-check-icon",on:{click:e.updateValue}},[t("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===e.type&&e.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),e._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===e.type&&e.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),e._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:!e.value,expression:"!value"}],attrs:{type:"circle"}}),e._v(" "),t("span",[e._t("default")],2)],1)},r=[],c={render:o,staticRenderFns:r},l=c,u=t("VU/8"),A=i,p=u(s,l,!1,A,null,null);n.a=p.exports},Fv3j:function(e,n,t){var i=t("FxTj");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("3d612ee9",i,!0)},FxTj:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.vux-checker-item {\n  display: inline-block;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/node_modules/vux/src/components/checker/checker.vue"],names:[],mappings:";AACA;EACE,sBAAsB;CACvB",file:"checker.vue",sourcesContent:["\n.vux-checker-item {\n  display: inline-block;\n}\n"],sourceRoot:""}])},L2EE:function(e,n,t){var i=t("Y8TF");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("dc97aa70",i,!0)},Rr4h:function(e,n,t){var i=t("XiAh");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("3fd98a0a",i,!0)},Vsuv:function(e,n,t){var i=t("XOnk");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("3456baab",i,!0)},XOnk:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/node_modules/vux/src/components/checker/checker-item.vue"],names:[],mappings:";AACA;EACE,sCAAsC;EACtC,0BAA0B;UAClB,kBAAkB;CAC3B;AACD;EACE,0BAA0B;CAC3B",file:"checker-item.vue",sourcesContent:["\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n"],sourceRoot:""}])},XiAh:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,'\n.tab-wrap[data-v-e8073a88] {\n  margin-bottom: 10px;\n}\n.tab[data-v-e8073a88] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  background-color: #fff;\n  text-align: center;\n  position: relative;\n}\n.tab.active[data-v-e8073a88]:before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 15%;\n  right: 15%;\n  border-bottom: 2px solid #58a9ff;\n}\n.tab[data-v-e8073a88]:not(:last-child):after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #f2f2f2;\n  content: "";\n}\n.container[data-v-e8073a88] {\n  overflow: hidden;\n}\n.container[data-v-e8073a88] .bg-item {\n  padding: 10px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.container[data-v-e8073a88] .bg-item:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.container[data-v-e8073a88] .bg-icon img,\n.container[data-v-e8073a88] .bg-icon video {\n  display: block;\n  width: 180px;\n  height: 108px;\n}\n.scroller-bg[data-v-e8073a88] {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #fff;\n}\n',"",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/BgSetting.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,WAAW;EACX,iCAAiC;CAClC;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,aAAa;EACb,gCAAgC;EAChC,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,iCAAiC;CAClC;AACD;;EAEE,eAAe;EACf,aAAa;EACb,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;EAClC,uBAAuB;CACxB",file:"BgSetting.vue",sourcesContent:['\n.tab-wrap[data-v-e8073a88] {\n  margin-bottom: 10px;\n}\n.tab[data-v-e8073a88] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  background-color: #fff;\n  text-align: center;\n  position: relative;\n}\n.tab.active[data-v-e8073a88]:before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 15%;\n  right: 15%;\n  border-bottom: 2px solid #58a9ff;\n}\n.tab[data-v-e8073a88]:not(:last-child):after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #f2f2f2;\n  content: "";\n}\n.container[data-v-e8073a88] {\n  overflow: hidden;\n}\n.container[data-v-e8073a88] .bg-item {\n  padding: 10px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.container[data-v-e8073a88] .bg-item:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.container[data-v-e8073a88] .bg-icon img,\n.container[data-v-e8073a88] .bg-icon video {\n  display: block;\n  width: 180px;\n  height: 108px;\n}\n.scroller-bg[data-v-e8073a88] {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: #fff;\n}\n'],sourceRoot:""}])},Y8TF:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-check-icon {\n  display: inline-block;\n}\n.vux-check-icon > span {\n  line-height: 23px;\n  color: #222;\n  vertical-align: middle;\n}\n.vux-check-icon > .weui-icon-success:before,\n.vux-check-icon > .weui-icon-success-circle:before {\n  color: #09BB07;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/node_modules/vux/src/components/check-icon/index.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;CACxB;AACD;;EAEE,eAAe;CAChB",file:"index.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-check-icon {\n  display: inline-block;\n}\n.vux-check-icon > span {\n  line-height: 23px;\n  color: #222;\n  vertical-align: middle;\n}\n.vux-check-icon > .weui-icon-success:before,\n.vux-check-icon > .weui-icon-success-circle:before {\n  color: #09BB07;\n}\n"],sourceRoot:""}])},hGvq:function(e,n,t){"use strict";function i(e,n){return o()(e)===o()(n)}function a(e){t("Vsuv")}var s=t("mvHQ"),o=t.n(s),r=t("pFYg"),c=t.n(r),l={name:"checker-item",props:{value:{type:[String,Number,Object],required:!0},disabled:Boolean},watch:{disabled:function(e){e&&"radio"===this.$parent.type&&this.value===this.$parent.currentValue&&(this.$parent.currentValue="")}},computed:{classNames:function(){var e=this,n="string"==typeof this.value||"number"==typeof this.value,t={"vux-tap-active":!this.disabled};if(this.$parent.defaultItemClass&&(t[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass){var a=!1;if("radio"===this.$parent.type)n&&this.$parent.currentValue===this.value?a=!0:"object"===c()(this.value)&&i(this.$parent.currentValue,this.value)&&(a=!0);else if("string"==typeof this.value)this.$parent.currentValue.indexOf(this.value)>-1&&(a=!0);else if(this.$parent.currentValue&&this.$parent.currentValue.length){var s=this.$parent.currentValue.filter(function(n){return i(n,e.value)});a=s.length>0}t[this.$parent.selectedItemClass]=a}return this.$parent.disabledItemClass&&(t[this.$parent.disabledItemClass]=this.disabled),t}},methods:{select:function(){"radio"===this.$parent.type?this.selectRadio():this.selectCheckbox()},selectRadio:function(){this.disabled||(this.$parent.currentValue===this.value?this.$parent.radioRequired||(this.$parent.currentValue=""):this.$parent.currentValue=this.value),this.$emit("on-item-click",this.value,this.disabled)},selectCheckbox:function(){this.$parent.currentValue&&null!==this.$parent.currentValue||(this.$parent.currentValue=[]);var e="string"==typeof this.value||"number"==typeof this.value;if(!this.disabled){var n=-1;n=e?this.$parent.currentValue.indexOf(this.value):this.$parent.currentValue.map(function(e){return o()(e)}).indexOf(o()(this.value)),n>-1?this.$parent.currentValue.splice(n,1):(!this.$parent.max||this.$parent.max&&null!==this.$parent.currentValue&&this.$parent.currentValue.length<this.$parent.max)&&(this.$parent.currentValue&&this.$parent.currentValue.length||(this.$parent.currentValue=[]),this.$parent.currentValue.push(this.value))}this.$emit("on-item-click",this.value,this.disabled)}}},u=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"vux-checker-item",class:e.classNames,on:{click:e.select}},[e._t("default")],2)},A=[],p={render:u,staticRenderFns:A},d=p,h=t("VU/8"),v=a,f=h(l,d,!1,v,null,null);n.a=f.exports},rPzG:function(e,n,t){"use strict";function i(e){t("yw4a")}function a(e){t("Rr4h")}Object.defineProperty(n,"__esModule",{value:!0});var s=t("/0UN"),o=t("hGvq"),r=t("EmH9"),c={props:["selected","list","type"],data:function(){return{select:-1,last:-1}},watch:{selected:function(e,n){this.select=e}},methods:{onClick:function(e,n){this.select!==e&&(this.select=e,this.$emit("on-select",e))},showVideo:function(e){-1!==this.last&&this.$refs["video"+this.last][0].pause(),this.$refs["video"+e][0].play(),this.last=e},previewImage:function(e){this.$wechat.previewImage({current:e,urls:[e]})}},components:{Checker:s.a,CheckerItem:o.a,CheckIcon:r.a}},l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"scroller-bg"},[t("checker",{attrs:{"radio-required":"","selected-item-class":"bg-item-selected"},model:{value:e.select,callback:function(n){e.select=n},expression:"select"}},[e._l(e.list,function(n,i){return[t("div",{key:i,staticClass:"flex flex-align-center bg-item"},[t("div",{staticClass:"bg-icon flex flex-1 pr"},[1==e.type?t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.$options.filters.prefixImageUrl(n.url),expression:"$options.filters.prefixImageUrl(v.url)"}],on:{click:function(t){e.previewImage(e.$options.filters.prefixImageUrl(n.url))}}}):e._e(),e._v(" "),2==e.type?t("video",{ref:"video"+i,refInFor:!0,attrs:{src:e._f("prefixImageUrl")(n.url),"webkit-playsinline":"true","x-webkit-airplay":"true",playsinline:"true",controls:"true"}}):e._e(),e._v(" "),2==e.type?t("div",{directives:[{name:"show",rawName:"v-show",value:e.last!=i,expression:"last != i"}],staticClass:"place-play-video",on:{click:function(n){n.preventDefault(),e.showVideo(i)}}},[t("svg-icon",{attrs:{"icon-class":"play"}})],1):e._e()]),e._v(" "),t("checker-item",{attrs:{value:i},on:{"on-item-click":e.onClick}},[t("div",{staticClass:"bg-check"},[t("check-icon",{attrs:{value:e.select==i,type:"plain"}})],1)])],1)]})],2)],1)},u=[],A={render:l,staticRenderFns:u},p=A,d=t("VU/8"),h=i,v=d(c,p,!1,h,"data-v-b07b4edc",null),f=v.exports,C=t("gyMJ"),E={name:"BgSetting",components:{BgList:f},beforeRouteEnter:function(e,n,t){document.title="背景设置",t()},data:function(){return{imageSelected:-1,images:[],activeType:2,videoSelected:-1,videos:[]}},created:function(){var e=this,n=-1;Object(C.B)({ht_id:this.$route.query.id,type:2}).then(function(t){t.result.ht_selected&&(n=t.result.default.findIndex(function(e){return~~e.id==~~t.result.ht_selected.id}))>-1&&(e.videoSelected=n),e.videos=t.result.default}),Object(C.B)({ht_id:this.$route.query.id,type:1}).then(function(t){t.result.ht_selected&&(n=t.result.default.findIndex(function(e){return~~e.id==~~t.result.ht_selected.pic_id}))>-1&&(e.imageSelected=n),e.images=t.result.default})},mounted:function(){},methods:{setBgCheck:function(e){var n=1===this.activeType?this.images[e].id:this.videos[e].fid;Object(C._19)({ht_id:this.$route.query.id,type:this.activeType,background_id:n}).then(function(e){console.log(e)})}},watch:{activeType:function(e,n){var t=this;1===e&&this.$nextTick(function(){t.$Lazyload.lazyLoadHandler()})}}},m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container min-h"},[t("div",{staticClass:"flex tab-wrap"},[t("a",{staticClass:"flex-1 tab",class:{active:2==e.activeType},on:{click:function(n){n.preventDefault(),e.activeType=2}}},[e._v("视频背景")]),e._v(" "),t("a",{staticClass:"flex-1 tab",class:{active:1==e.activeType},on:{click:function(n){n.preventDefault(),e.activeType=1}}},[e._v("图片背景")])]),e._v(" "),t("bg-list",{directives:[{name:"show",rawName:"v-show",value:2==e.activeType,expression:"activeType== 2"}],attrs:{type:2,selected:e.videoSelected,list:e.videos},on:{"on-select":e.setBgCheck}}),e._v(" "),t("bg-list",{directives:[{name:"show",rawName:"v-show",value:1==e.activeType,expression:"activeType== 1"}],attrs:{type:1,selected:e.imageSelected,list:e.images},on:{"on-select":e.setBgCheck}})],1)},b=[],g={render:m,staticRenderFns:b},x=g,B=t("VU/8"),k=a,y=B(E,x,!1,k,"data-v-e8073a88",null);n.default=y.exports},yw4a:function(e,n,t){var i=t("08BX");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("d88e3e02",i,!0)}});
//# sourceMappingURL=4.da707f63ac393b055301.js.map