webpackJsonp([5],{"/0UN":function(n,e,t){"use strict";function i(n){t("Fv3j")}var a={name:"checker",props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(n){this.currentValue=n},currentValue:function(n){this.$emit("input",n),this.$emit("on-change",n)}},data:function(){return{currentValue:this.value}}},s=function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"vux-checker-box"},[n._t("default")],2)},o=[],c={render:s,staticRenderFns:o},r=c,l=t("VU/8"),u=i,A=l(a,r,!1,u,null,null);e.a=A.exports},EmH9:function(n,e,t){"use strict";function i(n){t("L2EE")}var a=t("oWtu"),s={name:"check-icon",components:{Icon:a.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}},o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-check-icon",on:{click:n.updateValue}},[t("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===n.type&&n.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),n._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===n.type&&n.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),n._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:!n.value,expression:"!value"}],attrs:{type:"circle"}}),n._v(" "),t("span",[n._t("default")],2)],1)},c=[],r={render:o,staticRenderFns:c},l=r,u=t("VU/8"),A=i,d=u(s,l,!1,A,null,null);e.a=d.exports},Fv3j:function(n,e,t){var i=t("FxTj");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("3d612ee9",i,!0)},FxTj:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n.vux-checker-item {\n  display: inline-block;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/node_modules/vux/src/components/checker/checker.vue"],names:[],mappings:";AACA;EACE,sBAAsB;CACvB",file:"checker.vue",sourcesContent:["\n.vux-checker-item {\n  display: inline-block;\n}\n"],sourceRoot:""}])},L2EE:function(n,e,t){var i=t("Y8TF");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("dc97aa70",i,!0)},L46u:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,'\n.tab-wrap[data-v-2204db26] {\n  margin-bottom: 10px;\n}\n.tab[data-v-2204db26] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  background-color: #fff;\n  text-align: center;\n  position: relative;\n}\n.tab.active[data-v-2204db26]:before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 15%;\n  right: 15%;\n  border-bottom: 2px solid #58a9ff;\n}\n.tab[data-v-2204db26]:not(:last-child):after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #f2f2f2;\n  content: "";\n}\n.container[data-v-2204db26] {\n  overflow: hidden;\n}\n.container[data-v-2204db26] .bg-item {\n  display: block;\n  padding: 10px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.container[data-v-2204db26] .bg-item:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.container[data-v-2204db26] .bg-item .bg-icon img,\n.container[data-v-2204db26] .bg-item .bg-icon video {\n  display: block;\n  width: 180px;\n  height: 108px;\n}\n.scroller-bg[data-v-2204db26] {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n',"",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/BgSetting.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,WAAW;EACX,iCAAiC;CAClC;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,aAAa;EACb,gCAAgC;EAChC,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,iCAAiC;CAClC;AACD;;EAEE,eAAe;EACf,aAAa;EACb,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;CACnC",file:"BgSetting.vue",sourcesContent:['\n.tab-wrap[data-v-2204db26] {\n  margin-bottom: 10px;\n}\n.tab[data-v-2204db26] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  background-color: #fff;\n  text-align: center;\n  position: relative;\n}\n.tab.active[data-v-2204db26]:before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 15%;\n  right: 15%;\n  border-bottom: 2px solid #58a9ff;\n}\n.tab[data-v-2204db26]:not(:last-child):after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #f2f2f2;\n  content: "";\n}\n.container[data-v-2204db26] {\n  overflow: hidden;\n}\n.container[data-v-2204db26] .bg-item {\n  display: block;\n  padding: 10px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.container[data-v-2204db26] .bg-item:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.container[data-v-2204db26] .bg-item .bg-icon img,\n.container[data-v-2204db26] .bg-item .bg-icon video {\n  display: block;\n  width: 180px;\n  height: 108px;\n}\n.scroller-bg[data-v-2204db26] {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n'],sourceRoot:""}])},Vsuv:function(n,e,t){var i=t("XOnk");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("3456baab",i,!0)},XOnk:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/node_modules/vux/src/components/checker/checker-item.vue"],names:[],mappings:";AACA;EACE,sCAAsC;EACtC,0BAA0B;UAClB,kBAAkB;CAC3B;AACD;EACE,0BAA0B;CAC3B",file:"checker-item.vue",sourcesContent:["\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n"],sourceRoot:""}])},Y8TF:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-check-icon {\n  display: inline-block;\n}\n.vux-check-icon > span {\n  line-height: 23px;\n  color: #222;\n  vertical-align: middle;\n}\n.vux-check-icon > .weui-icon-success:before,\n.vux-check-icon > .weui-icon-success-circle:before {\n  color: #09BB07;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/node_modules/vux/src/components/check-icon/index.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;CACxB;AACD;;EAEE,eAAe;CAChB",file:"index.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-check-icon {\n  display: inline-block;\n}\n.vux-check-icon > span {\n  line-height: 23px;\n  color: #222;\n  vertical-align: middle;\n}\n.vux-check-icon > .weui-icon-success:before,\n.vux-check-icon > .weui-icon-success-circle:before {\n  color: #09BB07;\n}\n"],sourceRoot:""}])},cWm3:function(n,e,t){var i=t("L46u");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("12205d8c",i,!0)},hGvq:function(n,e,t){"use strict";function i(n,e){return o()(n)===o()(e)}function a(n){t("Vsuv")}var s=t("mvHQ"),o=t.n(s),c=t("pFYg"),r=t.n(c),l={name:"checker-item",props:{value:{type:[String,Number,Object],required:!0},disabled:Boolean},watch:{disabled:function(n){n&&"radio"===this.$parent.type&&this.value===this.$parent.currentValue&&(this.$parent.currentValue="")}},computed:{classNames:function(){var n=this,e="string"==typeof this.value||"number"==typeof this.value,t={"vux-tap-active":!this.disabled};if(this.$parent.defaultItemClass&&(t[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass){var a=!1;if("radio"===this.$parent.type)e&&this.$parent.currentValue===this.value?a=!0:"object"===r()(this.value)&&i(this.$parent.currentValue,this.value)&&(a=!0);else if("string"==typeof this.value)this.$parent.currentValue.indexOf(this.value)>-1&&(a=!0);else if(this.$parent.currentValue&&this.$parent.currentValue.length){var s=this.$parent.currentValue.filter(function(e){return i(e,n.value)});a=s.length>0}t[this.$parent.selectedItemClass]=a}return this.$parent.disabledItemClass&&(t[this.$parent.disabledItemClass]=this.disabled),t}},methods:{select:function(){"radio"===this.$parent.type?this.selectRadio():this.selectCheckbox()},selectRadio:function(){this.disabled||(this.$parent.currentValue===this.value?this.$parent.radioRequired||(this.$parent.currentValue=""):this.$parent.currentValue=this.value),this.$emit("on-item-click",this.value,this.disabled)},selectCheckbox:function(){this.$parent.currentValue&&null!==this.$parent.currentValue||(this.$parent.currentValue=[]);var n="string"==typeof this.value||"number"==typeof this.value;if(!this.disabled){var e=-1;e=n?this.$parent.currentValue.indexOf(this.value):this.$parent.currentValue.map(function(n){return o()(n)}).indexOf(o()(this.value)),e>-1?this.$parent.currentValue.splice(e,1):(!this.$parent.max||this.$parent.max&&null!==this.$parent.currentValue&&this.$parent.currentValue.length<this.$parent.max)&&(this.$parent.currentValue&&this.$parent.currentValue.length||(this.$parent.currentValue=[]),this.$parent.currentValue.push(this.value))}this.$emit("on-item-click",this.value,this.disabled)}}},u=function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"vux-checker-item",class:n.classNames,on:{click:n.select}},[n._t("default")],2)},A=[],d={render:u,staticRenderFns:A},p=d,h=t("VU/8"),v=a,E=h(l,p,!1,v,null,null);e.a=E.exports},kMTv:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"BgList.vue",sourceRoot:""}])},"nr+z":function(n,e,t){var i=t("kMTv");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("67d83d5a",i,!0)},rPzG:function(n,e,t){"use strict";function i(n){t("nr+z")}function a(n){t("cWm3")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("/0UN"),o=t("hGvq"),c=t("EmH9"),r={props:["selected","list","type"],data:function(){return{select:-1}},watch:{selected:function(n,e){this.select=n}},methods:{onClick:function(n,e){this.select!==n&&this.$emit("on-select",n)}},components:{Checker:s.a,CheckerItem:o.a,CheckIcon:c.a}},l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"scroller-bg"},[t("checker",{attrs:{type:"radio","default-item-class":"bg-item","selected-item-class":"bg-item-selected"},model:{value:n.select,callback:function(e){n.select=e},expression:"select"}},[n._l(n.list,function(e,i){return[t("checker-item",{key:i,attrs:{value:i},on:{"on-item-click":n.onClick}},[t("div",{staticClass:"flex flex-align-center"},[t("div",{staticClass:"bg-icon flex flex-1"},[1==n.type?t("img",{attrs:{src:n._f("prefixImageUrl")(e.url)}}):n._e(),n._v(" "),2==n.type?t("video",{attrs:{src:n._f("prefixImageUrl")(e.url),controls:"","x-webkit-airplay":"true","webkit-playsinline":"",playsinline:"",airplay:"allow","x5-video-player-type":"h5"}}):n._e()]),n._v(" "),t("div",{staticClass:"bg-check"},[t("check-icon",{attrs:{value:n.select==i,type:"plain"}})],1)])])]})],2)],1)},u=[],A={render:l,staticRenderFns:u},d=A,p=t("VU/8"),h=i,v=p(r,d,!1,h,"data-v-2726aeb2",null),E=v.exports,C=t("gyMJ"),f={name:"BgSetting",components:{BgList:E},beforeRouteEnter:function(n,e,t){document.title="背景设置",t()},data:function(){return{imageSelected:-1,images:[],activeType:2,videoSelected:-1,videos:[]}},created:function(){var n=this,e=-1;Object(C.p)({ht_id:this.$route.params.id,type:2}).then(function(t){t.result.ht_selected&&(e=t.result.default.findIndex(function(n){return n.id===t.result.ht_selected.video_id}))>-1&&(n.videoSelected=e),n.videos=t.result.default}),Object(C.p)({ht_id:this.$route.params.id,type:1}).then(function(t){t.result.ht_selected&&(e=t.result.default.findIndex(function(n){return n.id===t.result.ht_selected.pic_id}))>-1&&(n.imageSelected=e),n.images=t.result.default})},mounted:function(){},methods:{setBgCheck:function(n){var e=1===this.activeType?this.images[n].id:this.videos[n].id;Object(C.B)({ht_id:this.$route.params.id,type:this.activeType,background_id:e}).then(function(n){console.log(n)})}}},b=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container min-h"},[t("div",{staticClass:"flex tab-wrap"},[t("a",{staticClass:"flex-1 tab",class:{active:2==n.activeType},on:{click:function(e){e.preventDefault(),n.activeType=2}}},[n._v("视频背景")]),n._v(" "),t("a",{staticClass:"flex-1 tab",class:{active:1==n.activeType},on:{click:function(e){e.preventDefault(),n.activeType=1}}},[n._v("图片背景")])]),n._v(" "),t("bg-list",{directives:[{name:"show",rawName:"v-show",value:2==n.activeType,expression:"activeType== 2"}],attrs:{type:2,selected:n.videoSelected,list:n.videos},on:{"on-select":n.setBgCheck}}),n._v(" "),t("bg-list",{directives:[{name:"show",rawName:"v-show",value:1==n.activeType,expression:"activeType== 1"}],attrs:{type:1,selected:n.imageSelected,list:n.images},on:{"on-select":n.setBgCheck}})],1)},m=[],g={render:b,staticRenderFns:m},x=g,k=t("VU/8"),B=a,y=k(f,x,!1,B,"data-v-2204db26",null);e.default=y.exports}});
//# sourceMappingURL=5.6091da8855418ff7afdf.js.map