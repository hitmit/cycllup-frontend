(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{262:function(t,e,n){"use strict";n.r(e);var r=n(44),l={middleware:["auth-user"],data:function(){return{edit:!1,user:{first_name:"",last_name:"",gender:"",birthday:""},loading:!1}},computed:{currentUser:function(){return this.$store.state.auth.user}},methods:{commmingSoon:function(){this.$swal({type:"success",title:"Comming Soon!!",showConfirmButton:!1,timer:3e3})},showEdit:function(){this.edit=!0},closeEdit:function(){this.edit=!1},updateUser:function(){var t=this;t.$nuxt.$loading.start();var data={field_first_name:[{value:this.user.first_name}],field_last_name:[{value:this.user.last_name}],field_gender:[{value:this.user.gender}],field_birthday:[{value:this.user.birthday}]},e=this.currentUser;r.a.updateResource("PATCH","/user",e.uid,data).then((function(e){t.notifyResponse("User Updated Sucessfully."),t.$nuxt.$loading.finish(),t.user={first_name:e.field_first_name[0].value,last_name:e.field_last_name[0].value,gender:e.field_gender[0].value,birthday:e.field_birthday[0].value},t.edit=!1})).catch((function(e){t.$nuxt.$loading.finish(),t.notifyResponse("Something went wrong, Please try again!!","error")}))},notifyResponse:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3;this.$swal({type:e,title:t,showConfirmButton:!1,timer:n})}}},o=n(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("div",{staticClass:"nav flex-column nav-pills",attrs:{id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"}},[n("a",{staticClass:"mb-2 text-center active nav-link"},[t._v("My Profle")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("My Account")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("My Performance")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("Display Perferences")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("Privacy Controls")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("Data Permissions")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("Email Notifications")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("My Gear")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("Partnet Integration")]),t._v(" "),n("a",{staticClass:"mb-2 text-center nav-link",on:{click:function(e){return e.preventDefault(),t.commmingSoon(e)}}},[t._v("My Badges")])])]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"card shadow",attrs:{id:"v-pills-tabContent"}},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"col-4 text-right"},[1==t.edit?n("a",{staticClass:"btn btn-sm btn-primary   ",attrs:{href:"#!"},on:{click:function(e){return e.preventDefault(),t.updateUser(e)}}},[n("i",{staticClass:"fa fa-pencil"}),t._v(" Update")]):t._e(),t._v(" "),1==t.edit?n("a",{staticClass:"btn btn-sm btn-danger",attrs:{href:"#!"},on:{click:function(e){return e.preventDefault(),t.closeEdit(e)}}},[n("i",{staticClass:"fa fa-ban"}),t._v(" Cancel")]):t._e(),t._v(" "),0==t.edit?n("a",{staticClass:"btn btn-sm btn-success",attrs:{href:"#!"},on:{click:function(e){return e.preventDefault(),t.showEdit(e)}}},[n("i",{staticClass:"fa fa-pencil"}),t._v(" Edit")]):t._e()])])]),t._v(" "),n("div",{staticClass:"card-body"},[0==t.edit?n("div",[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 text-right"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"col-md-8"},[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name))])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 text-right"},[t._v("Bithday")]),t._v(" "),n("div",{staticClass:"col-md-8"},[t._v(t._s(t.user.birthday))])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 text-right"},[t._v("Gender")]),t._v(" "),n("div",{staticClass:"col-md-8"},[t._v(t._s(t.user.gender))])])]):t._e(),t._v(" "),1==t.edit?n("div",[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 text-right"},[t._v("First Name")]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.first_name,expression:"user.first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.first_name},on:{input:function(e){e.target.composing||t.$set(t.user,"first_name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 text-right"},[t._v("Last Name")]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 text-right"},[t._v("Bithday")]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.birthday,expression:"user.birthday"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.user.birthday},on:{input:function(e){e.target.composing||t.$set(t.user,"birthday",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 text-right"},[t._v("Gender")]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.user.gender,expression:"user.gender"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.user,"gender",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("--Select Gender--")]),t._v(" "),n("option",{attrs:{value:"male"}},[t._v("Male")]),t._v(" "),n("option",{attrs:{value:"female"}},[t._v("Female")])])])])]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-8"},[e("h3",{staticClass:"mb-0"},[this._v("My profile ")])])}],!1,null,null,null);e.default=component.exports}}]);