webpackJsonp([13],{"5FAP":function(e,t,i){var n=i("8Fzv");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("aab17b04",n,!0)},"8Fzv":function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,"\n.register-top[data-v-24ec9c11] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-24ec9c11] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-24ec9c11] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-24ec9c11] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n","",{version:3,sources:["G:/projects/nbbp2.0.git/src/pages/Register.vue"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,YAAY;CACb",file:"Register.vue",sourcesContent:["\n.register-top[data-v-24ec9c11] {\n  padding-top: 20px;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.register-top .logo[data-v-24ec9c11] {\n  width: 60px;\n  height: 60px;\n}\n.register-top .slogan[data-v-24ec9c11] {\n  margin-top: 10px;\n  font-size: 16px;\n}\n.footer-btn[data-v-24ec9c11] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n"],sourceRoot:""}])},S2NW:function(e,t,i){"use strict";function n(e){i("5FAP")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("rHil"),r=i("pDNl"),s=i("2sLL"),o={name:"Register",data:function(){return{type:0,r_business:{baranme:"",mobile:"",recommender:""},r_agent:{username:"",mobile:""}}},beforeRouteEnter:function(e,t,i){1===e.query.type?document.title="牛霸商户入驻":2===e.query.type&&(document.title="牛霸代理入驻"),i(function(t){t.type=e.query.type?e.query.type:0})},mounted:function(){},methods:{SubmitRegister:function(){var e=this;this.$validator.validateAll().then(function(t){console.log(t);var i=e.vErrors.all();i.length>0&&(e.$vux.toast.show({text:i[0],position:"bottom",type:"text",time:1500,width:"10em"}),console.log(i[0]))})}},components:{Group:a.a,XInput:r.a,XButton:s.a}},l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container min-h"},[e._m(0),e._v(" "),1==e.type?[i("group",[i("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"酒吧名称",name:"barname",placeholder:"",type:"text","data-vv-as":"酒吧名称"},model:{value:e.r_business.baranme,callback:function(t){e.$set(e.r_business,"baranme",t)},expression:"r_business.baranme"}}),e._v(" "),i("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric|min:11|max:11",expression:"'required|numeric|min:11|max:11'",modifiers:{initial:!0}}],attrs:{title:"手机号码",name:"mobile",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_business.mobile,callback:function(t){e.$set(e.r_business,"mobile",t)},expression:"r_business.mobile"}}),e._v(" "),i("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"推荐人",name:"mobile",placeholder:"",type:"text","data-vv-as":"推荐人"},model:{value:e.r_business.recommender,callback:function(t){e.$set(e.r_business,"recommender",t)},expression:"r_business.recommender"}})],1)]:e._e(),e._v(" "),2==e.type?[i("group",[i("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required",expression:"'required'",modifiers:{initial:!0}}],attrs:{title:"用户名",name:"agentname",placeholder:"",type:"text","data-vv-as":"用户名"},model:{value:e.r_agent.username,callback:function(t){e.$set(e.r_agent,"username",t)},expression:"r_agent.username"}}),e._v(" "),i("x-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:"required|numeric",expression:"'required|numeric'",modifiers:{initial:!0}}],attrs:{title:"手机号码",name:"mobile",placeholder:"",type:"number","data-vv-as":"手机号码"},model:{value:e.r_agent.mobile,callback:function(t){e.$set(e.r_agent,"mobile",t)},expression:"r_agent.mobile"}})],1)]:e._e(),e._v(" "),i("div",{staticClass:"footer-btn"},[i("x-button",{attrs:{gradients:["#1D62F0","#19D5FD"]},nativeOn:{click:function(t){e.SubmitRegister(t)}}},[e._v("立即注册")])],1)],2)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register-top"},[n("img",{staticClass:"logo",attrs:{src:i("7Otq")}}),e._v(" "),n("p",{staticClass:"slogan"},[e._v("牛霸，互动娱乐领导品牌")])])}],u={render:l,staticRenderFns:c},d=u,m=i("VU/8"),p=n,v=m(o,d,!1,p,"data-v-24ec9c11",null);t.default=v.exports}});
//# sourceMappingURL=13.151d319a65d71f8dcbf8.js.map