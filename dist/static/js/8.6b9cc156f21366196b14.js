webpackJsonp([8],{"1HIy":function(n,t,e){"use strict";function i(n){e("KIH+")}var o={name:"group-title"},r=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"weui-cells__title"},[n._t("default")],2)},a=[],l={render:r,staticRenderFns:a},s=l,c=e("VU/8"),u=i,p=c(o,s,!1,u,null,null);t.a=p.exports},AavQ:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-label {\n  display: block;\n  width: 105px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui-input::-webkit-outer-spin-button,\n.weui-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui-textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  color: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui-textarea-counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.weui-cell_warn .weui-textarea-counter {\n  color: #E64340;\n}\n.weui-toptips {\n  display: none;\n  position: fixed;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 5000;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-toptips_warn {\n  background-color: #E64340;\n}\n.weui-cells_form .weui-cell__ft {\n  font-size: 0;\n}\n.weui-cells_form .weui-icon-warn {\n  display: none;\n}\n.weui-cells_form input,\n.weui-cells_form textarea,\n.weui-cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui-cell_warn {\n  color: #E64340;\n}\n.weui-cell_warn .weui-icon-warn {\n  display: inline-block;\n}\n.weui-cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.weui-switch {\n  -webkit-appearance: none;\n          appearance: none;\n}\n.weui-switch,\n.weui-switch-cp__box {\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background-color: #DFDFDF;\n  -webkit-transition: background-color 0.1s, border 0.1s;\n  transition: background-color 0.1s, border 0.1s;\n}\n.weui-switch:before,\n.weui-switch-cp__box:before {\n  content: " ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n}\n.weui-switch:after,\n.weui-switch-cp__box:after {\n  content: " ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n}\n.weui-switch:checked,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box {\n  /** vux **/\n  border-color: #2481d2;\n  background-color: #2481d2;\n  /** end vux **/\n}\n.weui-switch:checked:before,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.weui-switch:checked:after,\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:after {\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.weui-switch-cp__input {\n  position: absolute;\n  left: -9999px;\n}\n.weui-switch-cp__box {\n  display: block;\n}\n.weui-cell_switch .weui-cell__ft {\n  font-size: 0;\n  position: relative;\n}\ninput.weui-switch[disabled] {\n  opacity: 0.6;\n}\n.vux-x-switch.weui-cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.vux-x-switch-overlay {\n  width: 60px;\n  height: 50px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n}\n',""])},IWmn:function(n,t,e){"use strict";function i(n){e("NeRs")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("woOf"),r=e.n(o),a=e("1HIy"),l=e("rHil"),s=e("1DHf"),c=e("pDNl"),u=e("aTeQ"),p=e("2sLL"),d=e("UNGY"),f=e("/kga"),h=e("63CM"),b=e("oAV5"),m=e("gyMJ"),w={directives:{TransferDom:h.a},components:{GroupTitle:a.a,Group:l.a,Cell:s.a,XInput:c.a,XSwitch:u.a,XButton:p.a,Datetime:d.a,XDialog:f.a},data:function(){return{resultHeight:0,focus:!1,value:"",form:{ht_id:this.$route.query.id,amount:"",open_hour:"",price:"",open_time:"",is_shelves:"2",is_open:"2"}}},beforeRouteEnter:function(n,t,e){document.title="点歌霸屏",e()},beforeRouteLeave:function(n,t,e){e()},created:function(){var n=this;Object(m.V)({ht_id:this.$route.query.id}).then(function(t){t.result&&(t.result.price=t.result.price?Number(t.result.price):"",t.result.amount="0"!==t.result.amount?Number(t.result.amount):"",t.result.open_hour="0"!==t.result.open_hour?Number(t.result.open_hour):"",t.result.open_time=t.result.open_time?t.result.open_time:"",n.form=r()(n.form,t.result))})},mounted:function(){},methods:{showDate:function(){var n=this;document.body.classList.add("third-center"),this.$vux.datetime.show({cancelText:"取消",confirmText:"确定",format:"HH:mm",value:this.form.open_time,onConfirm:function(t){n.form.open_time=t},onHide:function(){setTimeout(function(){document.body.classList.remove("third-center")},350)}})},switchChange:function(n){"2"===n&&this.saveSetting()},saveSetting:function(n){var t=this;if(n){if(!this.form.price)return this.$vux.toast.show({text:"请输入价格",width:"12em"}),!1;if(!this.form.open_time)return this.$vux.toast.show({text:"请选择开始时间",width:"12em"}),!1;if(!this.form.open_hour)return this.$vux.toast.show({text:"请输入点歌持续时间",width:"12em"}),!1;if(!this.form.amount)return this.$vux.toast.show({text:"请输入可点歌数量",width:"12em"}),!1}Object(m._19)(this.form).then(function(e){n&&t.$vux.toast.show("设置成功")})},validisPrice:function(n){Object(b.l)(n)?n>9999&&(this.form.price=9999,console.log(this.form.price)):this.form.price=1},validisTime:function(n){Object(b.l)(n)?n>24&&(this.form.open_hour=24):this.form.open_hour=1},validisSong:function(n){Object(b.l)(n)?n>999&&(this.form.amount=999):this.form.amount=1}}},x=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container flex flex-v",staticStyle:{height:"100%"}},[e("div",{staticClass:"flex-1 overscroll",attrs:{id:"song-set"}},[e("div",{staticClass:"tc",staticStyle:{"background-color":"#fff",padding:"20px 10px",margin:"10px 10px 0",color:"#2481d2","border-radius":"5px","box-shadow":"1px 4px 10px rgba(0,0,0,0.03)"},on:{click:function(t){n.$router.push("/SongManage?id="+n.$route.query.id)}}},[n._v("歌曲管理")]),n._v(" "),e("group",{attrs:{"label-width":"14em","label-align":"left"}},[e("group-title",{attrs:{slot:"title"},slot:"title"},[n._v("点歌设置")]),n._v(" "),e("x-switch",{attrs:{title:"开启点歌功能","value-map":["2","1"]},on:{"on-change":n.switchChange},model:{value:n.form.is_open,callback:function(t){n.$set(n.form,"is_open",t)},expression:"form.is_open"}}),n._v(" "),e("p",{staticClass:"f12",staticStyle:{padding:"0 15px",margin:"-2px 0 10px",color:"#aaaaaa"}},[n._v("开启后在设置的点歌时间段内用户可以购买点歌霸屏")])],1),n._v(" "),1==n.form.is_open?[e("group",{attrs:{"label-width":"10em","label-align":"left"}},[e("group-title",{attrs:{slot:"title"},slot:"title"},[n._v("价格设置")]),n._v(" "),e("x-input",{attrs:{title:"每首歌单价","text-align":"right",type:"number","show-clear":!1,pattern:"[0-9]*",placeholder:"请输入"},on:{"on-blur":n.validisPrice},model:{value:n.form.price,callback:function(t){n.$set(n.form,"price",t)},expression:"form.price"}},[e("span",{staticStyle:{"margin-left":"6px"},attrs:{slot:"right"},slot:"right"},[n._v("元")])])],1),n._v(" "),e("group",{attrs:{"label-width":"10em","label-align":"left"}},[e("group-title",{attrs:{slot:"title"},slot:"title"},[n._v("设置可点歌时间段")]),n._v(" "),e("cell",{attrs:{title:"开始时间",value:n.form.open_time,"is-link":""},nativeOn:{click:function(t){n.showDate(t)}}},[n.form.open_time?e("span",{staticClass:"pr"},[e("span",{staticStyle:{position:"absolute",left:"-36px",top:"-2px"}},[n._v("每日")]),n._v(n._s(n.form.open_time))]):e("span",[n._v("请选择")])]),n._v(" "),e("x-input",{attrs:{title:"几小时后结束","text-align":"right",type:"number","show-clear":!1,pattern:"[0-9]*",placeholder:"请输入"},on:{"on-blur":n.validisTime},model:{value:n.form.open_hour,callback:function(t){n.$set(n.form,"open_hour",t)},expression:"form.open_hour"}},[e("span",{staticStyle:{"margin-left":"6px"},attrs:{slot:"right"},slot:"right"},[n._v("小时")])]),n._v(" "),e("x-input",{attrs:{title:"可点歌数量","text-align":"right",type:"number","show-clear":!1,pattern:"[0-9]*",placeholder:"请输入"},on:{"on-blur":n.validisSong},model:{value:n.form.amount,callback:function(t){n.$set(n.form,"amount",t)},expression:"form.amount"}},[e("span",{staticStyle:{"margin-left":"6px"},attrs:{slot:"right"},slot:"right"},[n._v("首")])]),n._v(" "),e("p",{staticClass:"f12",staticStyle:{padding:"0 15px",margin:"-2px 0 10px",color:"#aaaaaa"}},[n._v("请根据实际情况设置该数量以避免点歌订单过多而无法安排的情况")])],1),n._v(" "),e("group",{staticStyle:{"margin-bottom":"0.77em"},attrs:{"label-align":"left"}},[e("group-title",{attrs:{slot:"title"},slot:"title"},[n._v("其他设置")]),n._v(" "),e("x-switch",{attrs:{title:"不可重复点歌","value-map":["2","1"]},model:{value:n.form.is_shelves,callback:function(t){n.$set(n.form,"is_shelves",t)},expression:"form.is_shelves"}}),n._v(" "),e("p",{staticClass:"f12",staticStyle:{padding:"0 15px",margin:"-2px 0 10px",color:"#aaaaaa"}},[n._v("打开后，每场点歌不可重复购买同一首歌")]),n._v(" "),e("p",{staticClass:"f12",staticStyle:{padding:"0 15px",margin:"-8px 0 10px",color:"#aaaaaa"}},[n._v("下一场点歌开始时，自动下架的歌曲会自动恢复上架")])],1)]:n._e()],2),n._v(" "),"1"==n.form.is_open?e("div",{staticStyle:{"background-color":"#fff",padding:"4px 0","box-shadow":"2px 0 10px 1px rgba(0,0,0,0.2)"}},[e("x-button",{staticStyle:{width:"90%",margin:"auto"},attrs:{gradients:["#2481d2","#2481d2"]},nativeOn:{click:function(t){n.saveSetting(!0)}}},[n._v("保存")])],1):n._e()])},g=[],v={render:x,staticRenderFns:g},_=v,k=e("VU/8"),y=i,D=k(w,_,!1,y,"data-v-48aea6ba",null);t.default=D.exports},"KIH+":function(n,t,e){var i=e("vj9H");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("677ed7c0",i,!0)},NeRs:function(n,t,e){var i=e("fZzG");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("4fee8f4b",i,!0)},aTeQ:function(n,t,e){"use strict";function i(n){e("pt17")}var o=e("kbG3"),r=e("wmxo"),a={name:"x-switch",components:{InlineDesc:o.a},computed:{labelStyle:function(){var n=/<\/?[^>]*>/.test(this.title),t=Math.min(n?5:this.title.length+1,14)+"em";return Object(r.a)({display:"block",width:this.$parent.labelWidth||t,textAlign:this.$parent.labelAlign})},labelClass:function(){return{"vux-cell-justify":this.$parent&&"justify"===this.$parent.labelAlign}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)},toBoolean:function(n){if(this.valueMap){return 1===this.valueMap.indexOf(n)}return n},toRaw:function(n){return this.valueMap?this.valueMap[n?1:0]:n}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean,valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(n){var t=this.toRaw(n);this.$emit("input",t),this.$emit("on-change",t)},value:function(n){this.currentValue=this.toBoolean(n)}}},l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[e("div",{staticClass:"weui-cell__bd"},[e("label",{staticClass:"weui-label",class:n.labelClass,style:n.labelStyle,domProps:{innerHTML:n._s(n.title)}}),n._v(" "),n.inlineDesc?e("inline-desc",[n._v(n._s(n.inlineDesc))]):n._e()],1),n._v(" "),e("div",{staticClass:"weui-cell__ft"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:n.disabled},domProps:{checked:Array.isArray(n.currentValue)?n._i(n.currentValue,null)>-1:n.currentValue},on:{change:function(t){var e=n.currentValue,i=t.target,o=!!i.checked;if(Array.isArray(e)){var r=n._i(e,null);i.checked?r<0&&(n.currentValue=e.concat([null])):r>-1&&(n.currentValue=e.slice(0,r).concat(e.slice(r+1)))}else n.currentValue=o}}}),n._v(" "),n.preventDefault?e("div",{staticClass:"vux-x-switch-overlay",on:{click:n.onClick}}):n._e()])])},s=[],c={render:l,staticRenderFns:s},u=c,p=e("VU/8"),d=i,f=p(a,u,!1,d,null,null);t.a=f.exports},fZzG:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n#song-set.focus[data-v-48aea6ba] {\n  padding-top: 54px;\n}\n#song-set[data-v-48aea6ba] .weui-cells:first-child {\n  margin-top: 0;\n}\n.container[data-v-48aea6ba] .weui-cells.vux-search_show .weui-cell:last-child {\n  margin-bottom: 0;\n}\nfooter .enter-bar[data-v-48aea6ba] {\n  display: block;\n  height: 44px;\n  line-height: 44px;\n  color: #fff;\n  background-color: #2481d2;\n}\n#song-form[data-v-48aea6ba] {\n  border-radius: 3px;\n  background-color: #fff;\n  padding: 15px 0 0 0;\n}\n.song-form-group[data-v-48aea6ba] {\n  text-align: left;\n  margin-bottom: 4px;\n  padding: 0 15px;\n}\n.song-form-group label[data-v-48aea6ba] {\n  padding: 8px 0;\n  display: block;\n}\n.song-form-group[data-v-48aea6ba] .vux-x-input {\n  border: 1px solid #D9D9D9;\n  padding: 6px 15px;\n  border-radius: 5px;\n}\n.song-form-group[data-v-48aea6ba] .vux-x-input:before {\n  border: 0px;\n}\n.song-item[data-v-48aea6ba] {\n  display: block;\n}\n.song-search-item[data-v-48aea6ba] {\n  padding: 10px 15px;\n  border-top: 1px solid #f2f2f2;\n}\n",""])},pt17:function(n,t,e){var i=e("AavQ");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("4b18b728",i,!0)},vj9H:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-cell_access {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  color: inherit;\n}\n.weui-cell_access:active {\n  background-color: #ECECEC;\n}\n.weui-cell_access .weui-cell__ft {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access .weui-cell__ft:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n.weui-cell_link {\n  color: #586C94;\n  font-size: 14px;\n}\n.weui-cell_link:first-child:before {\n  display: block;\n}\n.weui-cell_access.vux-cell-box {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access.vux-cell-box:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 17px;\n}\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.weui-cell:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n.weui-cell__bd {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: ".";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n',""])}});