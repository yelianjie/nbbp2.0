webpackJsonp([2],{"/0UN":function(e,n,t){"use strict";function i(e){t("Fv3j")}var a={name:"checker",props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)}},data:function(){return{currentValue:this.value}}},c=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"vux-checker-box"},[e._t("default")],2)},s=[],o={render:c,staticRenderFns:s},r=o,l=t("VU/8"),u=i,p=l(a,r,!1,u,null,null);n.a=p.exports},EmH9:function(e,n,t){"use strict";function i(e){t("L2EE")}var a=t("oWtu"),c={name:"check-icon",components:{Icon:a.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}},s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vux-check-icon",on:{click:e.updateValue}},[t("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===e.type&&e.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),e._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===e.type&&e.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),e._v(" "),t("icon",{directives:[{name:"show",rawName:"v-show",value:!e.value,expression:"!value"}],attrs:{type:"circle"}}),e._v(" "),t("span",[e._t("default")],2)],1)},o=[],r={render:s,staticRenderFns:o},l=r,u=t("VU/8"),p=i,d=u(c,l,!1,p,null,null);n.a=d.exports},Fv3j:function(e,n,t){var i=t("FxTj");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("3d612ee9",i,!0)},FxTj:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.vux-checker-item {\n  display: inline-block;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/node_modules/vux/src/components/checker/checker.vue"],names:[],mappings:";AACA;EACE,sBAAsB;CACvB",file:"checker.vue",sourcesContent:["\n.vux-checker-item {\n  display: inline-block;\n}\n"],sourceRoot:""}])},L2EE:function(e,n,t){var i=t("Y8TF");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("dc97aa70",i,!0)},QQdJ:function(e,n,t){var i=t("RgLF");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("1f96d7b1",i,!0)},RgLF:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"BapingTime.vue",sourceRoot:""}])},UB8M:function(e,n,t){var i=t("oMzR");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("47729748",i,!0)},Vsuv:function(e,n,t){var i=t("XOnk");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("3456baab",i,!0)},XOnk:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/node_modules/vux/src/components/checker/checker-item.vue"],names:[],mappings:";AACA;EACE,sCAAsC;EACtC,0BAA0B;UAClB,kBAAkB;CAC3B;AACD;EACE,0BAA0B;CAC3B",file:"checker-item.vue",sourcesContent:["\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n"],sourceRoot:""}])},Y8TF:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-check-icon {\n  display: inline-block;\n}\n.vux-check-icon > span {\n  line-height: 23px;\n  color: #222;\n  vertical-align: middle;\n}\n.vux-check-icon > .weui-icon-success:before,\n.vux-check-icon > .weui-icon-success-circle:before {\n  color: #09BB07;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/node_modules/vux/src/components/check-icon/index.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;CACxB;AACD;;EAEE,eAAe;CAChB",file:"index.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-check-icon {\n  display: inline-block;\n}\n.vux-check-icon > span {\n  line-height: 23px;\n  color: #222;\n  vertical-align: middle;\n}\n.vux-check-icon > .weui-icon-success:before,\n.vux-check-icon > .weui-icon-success-circle:before {\n  color: #09BB07;\n}\n"],sourceRoot:""}])},chta:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,'\n.tab-wrap[data-v-4571c436] {\n  margin-bottom: 10px;\n}\n.tab[data-v-4571c436] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  background-color: #fff;\n  text-align: center;\n  position: relative;\n}\n.tab.active[data-v-4571c436]:before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 15%;\n  right: 15%;\n  border-bottom: 2px solid #58a9ff;\n}\n.tab[data-v-4571c436]:not(:last-child):after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #f2f2f2;\n  content: "";\n}\n.container[data-v-4571c436] {\n  overflow: hidden;\n}\n.container[data-v-4571c436] .baping-item {\n  display: block;\n  padding: 10px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.container[data-v-4571c436] .baping-item:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.container[data-v-4571c436] .baping-item .baping-icon {\n  width: 60px;\n}\n.container[data-v-4571c436] .baping-item .baping-icon img {\n  display: block;\n  width: 40px;\n  height: 40px;\n}\n.container[data-v-4571c436] .baping-item .baping-edit {\n  font-size: 12px;\n  padding: 4px 6px;\n  background-color: #58a9ff;\n  color: #fff;\n  border-radius: 4px;\n  margin-left: 10px;\n}\n.scroller-bp[data-v-4571c436] {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n',"",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/BapingSetting.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,WAAW;EACX,iCAAiC;CAClC;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,aAAa;EACb,gCAAgC;EAChC,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,iCAAiC;CAClC;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;CACnC",file:"BapingSetting.vue",sourcesContent:['\n.tab-wrap[data-v-4571c436] {\n  margin-bottom: 10px;\n}\n.tab[data-v-4571c436] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  background-color: #fff;\n  text-align: center;\n  position: relative;\n}\n.tab.active[data-v-4571c436]:before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 15%;\n  right: 15%;\n  border-bottom: 2px solid #58a9ff;\n}\n.tab[data-v-4571c436]:not(:last-child):after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #f2f2f2;\n  content: "";\n}\n.container[data-v-4571c436] {\n  overflow: hidden;\n}\n.container[data-v-4571c436] .baping-item {\n  display: block;\n  padding: 10px 15px;\n  background-color: #fff;\n  position: relative;\n}\n.container[data-v-4571c436] .baping-item:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.container[data-v-4571c436] .baping-item .baping-icon {\n  width: 60px;\n}\n.container[data-v-4571c436] .baping-item .baping-icon img {\n  display: block;\n  width: 40px;\n  height: 40px;\n}\n.container[data-v-4571c436] .baping-item .baping-edit {\n  font-size: 12px;\n  padding: 4px 6px;\n  background-color: #58a9ff;\n  color: #fff;\n  border-radius: 4px;\n  margin-left: 10px;\n}\n.scroller-bp[data-v-4571c436] {\n  position: absolute;\n  top: 54px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n'],sourceRoot:""}])},cwlu:function(e,n,t){var i=t("chta");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("2549be22",i,!0)},hGvq:function(e,n,t){"use strict";function i(e,n){return s()(e)===s()(n)}function a(e){t("Vsuv")}var c=t("mvHQ"),s=t.n(c),o=t("pFYg"),r=t.n(o),l={name:"checker-item",props:{value:{type:[String,Number,Object],required:!0},disabled:Boolean},watch:{disabled:function(e){e&&"radio"===this.$parent.type&&this.value===this.$parent.currentValue&&(this.$parent.currentValue="")}},computed:{classNames:function(){var e=this,n="string"==typeof this.value||"number"==typeof this.value,t={"vux-tap-active":!this.disabled};if(this.$parent.defaultItemClass&&(t[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass){var a=!1;if("radio"===this.$parent.type)n&&this.$parent.currentValue===this.value?a=!0:"object"===r()(this.value)&&i(this.$parent.currentValue,this.value)&&(a=!0);else if("string"==typeof this.value)this.$parent.currentValue.indexOf(this.value)>-1&&(a=!0);else if(this.$parent.currentValue&&this.$parent.currentValue.length){var c=this.$parent.currentValue.filter(function(n){return i(n,e.value)});a=c.length>0}t[this.$parent.selectedItemClass]=a}return this.$parent.disabledItemClass&&(t[this.$parent.disabledItemClass]=this.disabled),t}},methods:{select:function(){"radio"===this.$parent.type?this.selectRadio():this.selectCheckbox()},selectRadio:function(){this.disabled||(this.$parent.currentValue===this.value?this.$parent.radioRequired||(this.$parent.currentValue=""):this.$parent.currentValue=this.value),this.$emit("on-item-click",this.value,this.disabled)},selectCheckbox:function(){this.$parent.currentValue&&null!==this.$parent.currentValue||(this.$parent.currentValue=[]);var e="string"==typeof this.value||"number"==typeof this.value;if(!this.disabled){var n=-1;n=e?this.$parent.currentValue.indexOf(this.value):this.$parent.currentValue.map(function(e){return s()(e)}).indexOf(s()(this.value)),n>-1?this.$parent.currentValue.splice(n,1):(!this.$parent.max||this.$parent.max&&null!==this.$parent.currentValue&&this.$parent.currentValue.length<this.$parent.max)&&(this.$parent.currentValue&&this.$parent.currentValue.length||(this.$parent.currentValue=[]),this.$parent.currentValue.push(this.value))}this.$emit("on-item-click",this.value,this.disabled)}}},u=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"vux-checker-item",class:e.classNames,on:{click:e.select}},[e._t("default")],2)},p=[],d={render:u,staticRenderFns:p},A=d,f=t("VU/8"),h=a,v=f(l,A,!1,h,null,null);n.a=v.exports},oMzR:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"BapingGift.vue",sourceRoot:""}])},qk8N:function(e,n,t){"use strict";function i(e){t("zu5i")}function a(e){t("UB8M")}function c(e){t("QQdJ")}function s(e){t("cwlu")}Object.defineProperty(n,"__esModule",{value:!0});var o=t("RRo+"),r=t.n(o),l=t("/0UN"),u=t("hGvq"),p=t("EmH9"),d=t("gyMJ"),A={props:["list"],data:function(){return{themeSelected:[],themes:[],editIndex:-1}},created:function(){var e=this;Object(d.z)({ht_id:this.$route.query.id,type:2}).then(function(n){var t=[];n.result.forEach(function(e,n){1===Number(e.selected)&&t.push(n)}),e.themeSelected=t,e.themes=n.result})},mounted:function(){},methods:{bpfilterList:function(e){return e.filter(function(e){return"重金霸屏"!==e.title})},onClick:function(e,n){this.themes[e].selected=1===Number(this.themes[e].selected)?0:1;var t={id:this.themes[e].id,selected:this.themes[e].selected,ht_id:this.$route.query.id};Object(d._9)(t),console.log(t)},edit:function(e){var n=this;this.editIndex=e,this.$vux.confirm.prompt("价格",{title:"请输入价格",closeOnConfirm:!1,onShow:function(){console.log("promt show"),n.$vux.confirm.setInputValue(n.themes[e].price)},onHide:function(){console.log("prompt hide")},onCancel:function(){console.log("prompt cancel")},onConfirm:function(e){if(e="number"==typeof e?e:Number(e),!r()(e))return n.$vux.toast.show({text:"请输入整数"}),!1;var t={price:e,id:n.themes[n.editIndex].id,ht_id:n.$route.query.id};Object(d._8)(t).then(function(t){n.themes[n.editIndex].price=Number(e),n.$vux.confirm.hide()})}})}},components:{Checker:l.a,CheckerItem:u.a,CheckIcon:p.a}},f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"scroller-bp"},[t("checker",{attrs:{type:"checkbox","default-item-class":"baping-item","selected-item-class":"baping-item-selected"},model:{value:e.themeSelected,callback:function(n){e.themeSelected=n},expression:"themeSelected"}},[e._l(e.bpfilterList(e.themes),function(n,i){return[t("checker-item",{key:i,attrs:{value:i},on:{"on-item-click":e.onClick}},[t("div",{staticClass:"flex flex-align-center"},[t("div",{staticClass:"baping-icon flex flex-pack-center"},[t("img",{attrs:{src:e._f("prefixImageUrl")(n.icon)}})]),e._v(" "),t("div",{staticClass:"baping-info flex flex-v flex-pack-center flex-1"},[t("p",{staticClass:"baping-title"},[e._v(e._s(n.title))]),e._v(" "),t("div",{staticClass:"baping-price flex flex-align-center"},[t("div",{staticClass:"flex1 baping-price-tip"},[e._v("价格："+e._s(n.price)+"元")]),e._v(" "),t("div",[t("a",{staticClass:"baping-edit",on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.edit(i)}}},[e._v("编辑")])])])]),e._v(" "),t("div",{staticClass:"baping-check"},[t("check-icon",{attrs:{value:e.themeSelected.some(function(e,n){return e==i}),type:"plain"}})],1)])])]})],2)],1)},h=[],v={render:f,staticRenderFns:h},m=v,C=t("VU/8"),E=i,b=C(A,m,!1,E,"data-v-7377833e",null),g=b.exports,x={data:function(){return{giftSelected:[],gifts:[],editIndex:-1}},created:function(){var e=this;Object(d.z)({ht_id:this.$route.query.id,type:1}).then(function(n){var t=[];n.result.forEach(function(e,n){1===Number(e.selected)&&t.push(n)}),e.giftSelected=t,e.gifts=n.result})},methods:{onClick:function(e,n){this.gifts[e].selected=1===Number(this.gifts[e].selected)?0:1;var t={id:this.gifts[e].id,selected:this.gifts[e].selected,ht_id:this.$route.query.id};Object(d._9)(t),console.log(t)},change:function(e){console.log(e)},edit:function(e){var n=this;this.editIndex=e,this.$vux.confirm.prompt("价格",{title:"请输入价格",closeOnConfirm:!1,onShow:function(){console.log("promt show"),n.$vux.confirm.setInputValue(n.gifts[e].price)},onHide:function(){console.log("prompt hide")},onCancel:function(){console.log("prompt cancel")},onConfirm:function(e){if(e="number"==typeof e?e:Number(e),!r()(e))return n.$vux.toast.show({text:"请输入整数"}),!1;var t={price:e,id:n.gifts[n.editIndex].id,ht_id:n.$route.query.id};Object(d._8)(t).then(function(t){n.gifts[n.editIndex].price=Number(e),n.$vux.confirm.hide()})}})}},components:{Checker:l.a,CheckerItem:u.a,CheckIcon:p.a}},k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"scroller-bp"},[t("checker",{attrs:{type:"checkbox","default-item-class":"baping-item","selected-item-class":"baping-item-selected"},model:{value:e.giftSelected,callback:function(n){e.giftSelected=n},expression:"giftSelected"}},[e._l(e.gifts,function(n,i){return[t("checker-item",{key:i,attrs:{value:i},on:{"on-item-click":e.onClick}},[t("div",{staticClass:"flex flex-align-center"},[t("div",{staticClass:"baping-icon flex flex-pack-center"},[t("img",{attrs:{src:e._f("prefixImageUrl")(n.icon)}})]),e._v(" "),t("div",{staticClass:"baping-info flex flex-v flex-pack-center flex-1"},[t("p",{staticClass:"baping-title"},[e._v(e._s(n.title))]),e._v(" "),t("div",{staticClass:"baping-price flex flex-align-center"},[t("div",{staticClass:"flex1 baping-price-tip"},[e._v("价格："+e._s(n.price)+"元")]),e._v(" "),t("div",[t("a",{staticClass:"baping-edit",on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.edit(i)}}},[e._v("编辑")])])])]),e._v(" "),t("div",{staticClass:"baping-check"},[t("check-icon",{attrs:{value:e.giftSelected.some(function(e,n){return e==i}),type:"plain"}})],1)])])]})],2)],1)},B=[],_={render:k,staticRenderFns:B},y=_,$=t("VU/8"),F=a,w=$(x,y,!1,F,"data-v-599a37d8",null),S=w.exports,V={data:function(){return{timeSelected:[],times:[],editIndex:-1}},created:function(){var e=this;Object(d.z)({ht_id:this.$route.query.id,type:3}).then(function(n){var t=[];n.result.forEach(function(e,n){1===Number(e.selected)&&t.push(n)}),e.timeSelected=t,n.result.sort(function(e,n){return e.time-n.time}),e.times=n.result})},mounted:function(){},methods:{onClick:function(e,n){this.times[e].selected=1===Number(this.times[e].selected)?0:1;var t={id:this.times[e].id,selected:this.times[e].selected,ht_id:this.$route.query.id};Object(d._9)(t)},change:function(e){console.log(e)},edit:function(e){var n=this;this.editIndex=e,this.$vux.confirm.prompt("价格",{title:"请输入价格",closeOnConfirm:!1,onShow:function(){console.log("promt show"),n.$vux.confirm.setInputValue(n.times[e].price)},onHide:function(){console.log("prompt hide")},onCancel:function(){console.log("prompt cancel")},onConfirm:function(e){if(e="number"==typeof e?e:Number(e),!r()(e))return n.$vux.toast.show({text:"请输入整数"}),!1;var t={price:e,id:n.times[n.editIndex].id,ht_id:n.$route.query.id};Object(d._8)(t).then(function(t){n.times[n.editIndex].price=Number(e),n.$vux.confirm.hide()})}})}},components:{Checker:l.a,CheckerItem:u.a,CheckIcon:p.a}},j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"scroller-bp"},[t("checker",{attrs:{type:"checkbox","default-item-class":"baping-item","selected-item-class":"baping-item-selected"},model:{value:e.timeSelected,callback:function(n){e.timeSelected=n},expression:"timeSelected"}},[e._l(e.times,function(n,i){return[t("checker-item",{key:i,attrs:{value:i},on:{"on-item-click":e.onClick}},[t("div",{staticClass:"flex flex-align-center"},[t("div",{staticClass:"baping-info flex flex-v flex-pack-center flex-1"},[t("p",{staticClass:"baping-title"},[e._v(e._s(n.time)+"秒")]),e._v(" "),t("div",{staticClass:"baping-price flex flex-align-center"},[t("div",{staticClass:"flex1 baping-price-tip"},[e._v("价格："+e._s(n.price)+"元")]),e._v(" "),t("div",[t("a",{staticClass:"baping-edit",on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.edit(i)}}},[e._v("编辑")])])])]),e._v(" "),t("div",{staticClass:"baping-check"},[t("check-icon",{attrs:{value:e.timeSelected.some(function(e,n){return e==i}),type:"plain"}})],1)])])]})],2)],1)},I=[],N={render:j,staticRenderFns:I},R=N,U=t("VU/8"),O=c,Y=U(V,R,!1,O,"data-v-77e92ae8",null),D=Y.exports,T={name:"BapingSetting",components:{BapingTheme:g,BapingGift:S,BapingTime:D},beforeRouteEnter:function(e,n,t){document.title="霸屏设置",t()},data:function(){return{activeName:"BapingTheme"}},mounted:function(){}},q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container min-h"},[t("div",{staticClass:"flex tab-wrap"},[t("a",{staticClass:"flex-1 tab",class:{active:"BapingTheme"==e.activeName},on:{click:function(n){n.preventDefault(),e.activeName="BapingTheme"}}},[e._v("主题霸屏")]),e._v(" "),t("a",{staticClass:"flex-1 tab",class:{active:"BapingGift"==e.activeName},on:{click:function(n){n.preventDefault(),e.activeName="BapingGift"}}},[e._v("礼物霸屏")]),e._v(" "),t("a",{staticClass:"flex-1 tab",class:{active:"BapingTime"==e.activeName},on:{click:function(n){n.preventDefault(),e.activeName="BapingTime"}}},[e._v("霸屏时间")])]),e._v(" "),t(e.activeName,{tag:"component"})],1)},Z=[],z={render:q,staticRenderFns:Z},Q=z,H=t("VU/8"),M=s,P=H(T,Q,!1,M,"data-v-4571c436",null);n.default=P.exports},sYaS:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"BapingTheme.vue",sourceRoot:""}])},zu5i:function(e,n,t){var i=t("sYaS");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("5f91b5da",i,!0)}});
//# sourceMappingURL=2.bedb7eef9beedb93296e.js.map