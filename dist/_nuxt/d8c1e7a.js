(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(t,e,n){"use strict";n.r(e);n(78);var r={data:function(){return{loading:!1,user:{name:"",pass:""}}},computed:{},methods:{login:function(){var t=this;t.$nuxt.$loading.start(),this.$auth.loginWith("local",{data:this.user}).then((function(e){t.$nuxt.$loading.finish(),t.$store.commit("user/loginSuccess",e.data),localStorage.setItem("currentUser",JSON.stringify(e.data.current_user)),t.$router.push("/dashboard")})).catch((function(e){t.$nuxt.$loading.finish()}))}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("Login")]),t._v(" "),n("form",{staticClass:"form-horizontal",attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"control-label"},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.pass,expression:"user.pass"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.user.pass},on:{input:function(e){e.target.composing||t.$set(t.user,"pass",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-link",attrs:{to:"/register"}},[t._v("Register")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);