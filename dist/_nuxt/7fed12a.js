(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{262:function(t,e,r){"use strict";r.r(e);r(81);var n=r(111),o={middleware:["guest-user"],data:function(){return{user:{},loading:!1}},methods:{register:function(){var t=this;t.$nuxt.$loading.start();var data={name:[{value:this.user.email}],pass:[{value:this.user.password}],mail:[{value:this.user.email}],roles:[{target_id:"cyclist"}]};n.a.register("POST","/cycllup/user/register",data).then((function(e){console.log(e),t.$nuxt.$loading.finish()})).catch((function(e){t.$nuxt.$loading.finish()}))},notifyResponse:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3;this.$swal({type:e,title:t,showConfirmButton:!1,timer:r})}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))}},l=r(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t._v("Register")]),t._v(" "),r("form",{staticClass:"form-horizontal",attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label"},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"control-label"},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-link",attrs:{to:"/login"}},[t._v("Login")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);