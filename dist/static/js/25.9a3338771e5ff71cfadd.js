webpackJsonp([25],{HfwB:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.container[data-v-e3e29b64] .vux-label {\n  width: 5em;\n}\n.register-top[data-v-e3e29b64] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-e3e29b64] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-e3e29b64] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-e3e29b64] {\n  margin: 30px 10px 0;\n  /* position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; */\n}\n.vux-x-input.disabled[data-v-e3e29b64] {\n  color: rgba(0, 0, 0, 0.5);\n}\n#iframe[data-v-e3e29b64] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n","",{version:3,sources:["E:/Sites/nbbp2.0.git/src/pages/Register.vue"],names:[],mappings:";AACA;EACE,WAAW;CACZ;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB;;;iBAGe;CAChB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,WAAW;CACZ",file:"Register.vue",sourcesContent:["\n.container[data-v-e3e29b64] .vux-label {\n  width: 5em;\n}\n.register-top[data-v-e3e29b64] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-e3e29b64] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-e3e29b64] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-e3e29b64] {\n  margin: 30px 10px 0;\n  /* position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; */\n}\n.vux-x-input.disabled[data-v-e3e29b64] {\n  color: rgba(0, 0, 0, 0.5);\n}\n#iframe[data-v-e3e29b64] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n"],sourceRoot:""}])},S2NW:function(e,t,n){"use strict";function i(e){n("V56W")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),s=n.n(a),o=n("Dd8w"),r=n.n(o),d=n("rHil"),l=n("pDNl"),u=n("2sLL"),c=n("1DHf"),p=n("gyMJ"),m=n("NYxO"),v={name:"Register",data:function(){return{type:0,mapVisible:!1,r_business:{name:"",phone:"",code:""},r_agent:{name:"",phone:""},loading:!1,code:""}},beforeRouteEnter:function(e,t,n){1===Number(e.query.type)?document.title="牛霸商户入驻":2===Number(e.query.type)&&(document.title="牛霸代理入驻"),n(function(t){t.type=e.query.type?e.query.type:0;var n=e.query.code?e.query.code.toString():"";n&&""!==n&&(t.code=n,t.r_business.code=n),t.$nextTick(function(){document.getElementById("iframe").style.width=window.innerWidth+"px",document.getElementById("iframe").style.height=window.innerHeight+"px",window.addEventListener("message",t.onSelectAddress,!1)})})},created:function(){},mounted:function(){},beforeDestroy:function(){window.removeEventListener("message",this.onSelectAddress,!1)},methods:r()({},Object(m.b)("user",["getUserInfo"]),{showMap:function(){var e=this;this.mapVisible=!0,this.mapLoad||setTimeout(function(){document.getElementById("iframe").src="./map/index.html",e.mapLoad=!0},300)},onSelectAddress:function(e){if(!e.data.type){var t=JSON.parse(e.data),n={address:t.addressComponents.street?t.addressComponents.street+t.addressComponents.streetNumber:t.address,locationLng:t.point.lng,locationLat:t.point.lat,province_name:t.addressComponents.province,city_name:t.addressComponents.city,area_name:t.addressComponents.district};this.r_business=s()({},this.r_business,n),this.mapVisible=!1}},SubmitRegister:function(){var e=this;this.$validator.validateAll().then(function(t){var n=e.vErrors.all();n.length>0?e.$vux.toast.show({text:n[0],width:"10em"}):(e.loading=!0,1===Number(e.type)?Object(p._1)(e.r_business).then(function(t){e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),setTimeout(function(){e.$vux.toast.hide(),e.$router.push("/MyBars")},800)})}).finally(function(){e.loading=!1}):Object(p.d)(e.r_agent).then(function(t){e.getUserInfo().then(function(t){e.$vux.toast.show({text:"注册成功"}),setTimeout(function(){e.$vux.toast.hide(),e.$router.push("/AgentCenter")},800)})}).finally(function(){e.loading=!1}))})}}),components:{Group:d.a,XInput:l.a,XButton:u.a,Cell:c.a}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container min-h"},[e._m(0),e._v(" "),1==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"商户名称",name:"name",placeholder:"",type:"text","data-vv-as":"商户名称"},model:{value:e.r_business.name,callback:function(t){e.$set(e.r_business,"name",t)},expression:"r_business.name"}}),e._v(" "),n("cell",{attrs:{title:"商户地址",value:e.r_business.address,"is-link":"","value-align":"left"},nativeOn:{click:function(t){e.showMap(t)}}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],staticStyle:{display:"none"},attrs:{title:"商户地址",name:"address",placeholder:"",type:"text","data-vv-as":"商户地址"},model:{value:e.r_business.address,callback:function(t){e.$set(e.r_business,"address",t)},expression:"r_business.address"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",pattern:"[0-9]*",name:"phone",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_business.phone,callback:function(t){e.$set(e.r_business,"phone",t)},expression:"r_business.phone"}}),e._v(" "),n("x-input",{attrs:{title:"推荐码",disabled:!!e.code,name:"code",placeholder:"",type:"text","data-vv-as":"推荐码"},model:{value:e.r_business.code,callback:function(t){e.$set(e.r_business,"code",t)},expression:"r_business.code"}})],1),e._v(" "),n("transition",{attrs:{name:"slide-fade"}},[n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.mapVisible,expression:"mapVisible"}],staticStyle:{"background-color":"#fff"},attrs:{src:"",id:"iframe",frameborder:"0",allowTransparency:"true"}})])]:e._e(),e._v(" "),2==e.type?[n("group",[n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"用户名",name:"agentname",placeholder:"",type:"text","data-vv-as":"用户名"},model:{value:e.r_agent.name,callback:function(t){e.$set(e.r_agent,"name",t)},expression:"r_agent.name"}}),e._v(" "),n("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|mobile",expression:"'required|numeric|mobile'",modifiers:{initial:!0}}],attrs:{title:"手机号码",pattern:"[0-9]*",name:"mobile",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_agent.phone,callback:function(t){e.$set(e.r_agent,"phone",t)},expression:"r_agent.phone"}})],1)]:e._e(),e._v(" "),n("div",{staticClass:"footer-btn"},[n("x-button",{attrs:{gradients:["#1D62F0","#67b8f5"],disabled:e.loading,"show-loading":e.loading},nativeOn:{click:function(t){e.SubmitRegister(t)}}},[e._v("立即注册")])],1)],2)},A=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"register-top"},[i("img",{staticClass:"logo",attrs:{src:n("7Otq")}}),e._v(" "),i("p",{staticClass:"slogan"},[e._v("牛霸，互动娱乐领导品牌")])])}],f={render:b,staticRenderFns:A},g=f,x=n("VU/8"),h=i,C=x(v,g,!1,h,"data-v-e3e29b64",null);t.default=C.exports},V56W:function(e,t,n){var i=n("HfwB");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("a4d97a54",i,!0)}});
//# sourceMappingURL=25.9a3338771e5ff71cfadd.js.map