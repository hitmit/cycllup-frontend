(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{253:function(t,e,l){t.exports=l.p+"img/user.006cb1f.png"},254:function(t,e,l){"use strict";l.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"card-profile-image"},[e("img",{staticClass:"rounded-circle",attrs:{src:l(253)}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),this._v(" Clermont Ferrand, Auvergne, France")])}],o={computed:{currentUser:function(){return this.$store.state.auth.user}}},n=l(13),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-3 card-profile"},[r("img",{staticClass:"card-img-top",attrs:{src:l(257),alt:"Image placeholder"}}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"text-center mt-5"},[r("h3",[t._v(t._s(t.currentUser.name))]),t._v(" "),t._m(1)])])])}),r,!1,null,null,null);e.default=component.exports},255:function(t,e,l){"use strict";l.r(e);var r={props:["following","followers","activities"],data:function(){return{followingCount:this.following,followersCount:this.followers,activitiesCount:this.activities}}},o=l(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card mb-3"},[l("div",{staticClass:"card-header"},[t._v("Social Stats")]),t._v(" "),l("div",{staticClass:"card-body"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"card-profile-stats d-flex justify-content-center"},[l("div",[l("span",{staticClass:"heading"},[t._v(t._s(t.followingCount))]),t._v(" "),l("span",{staticClass:"description"},[t._v("Following")])]),t._v(" "),l("div",[l("span",{staticClass:"heading"},[t._v(t._s(t.followersCount))]),t._v(" "),l("span",{staticClass:"description"},[t._v("Followers")])]),t._v(" "),l("div",[l("span",{staticClass:"heading"},[t._v(t._s(t.activitiesCount))]),t._v(" "),l("span",{staticClass:"description"},[t._v("Activities")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,l){"use strict";l.r(e);var r={},o=l(13),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[this._v("\n        Clubs\n    ")]),this._v(" "),e("div",{staticClass:"card-body"},[this._v("\n        Comming Soon\n    ")])])}],!1,null,null,null);e.default=component.exports},257:function(t,e,l){t.exports=l.p+"img/img-1-1000x600.35a5254.jpg"},271:function(t,e,l){"use strict";l.r(e);l(37),l(31),l(38);var r=l(26),o=l(46),n=l(39),c=l(254),d=l(255),v=l(256);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var _={middleware:["auth-user"],components:{Profile:c.default,SocialStats:d.default,Clubs:v.default},data:function(){return{userId:"",followUser:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({currentUser:function(){return this.$store.state.auth.user}},Object(o.b)({followersCount:"user/followersCount",followingCount:"user/followingCount",followers:"user/followers",following:"user/following"})),methods:{confirmFollow:function(t){this.followUser.uid=t,$("#follow-user").modal("show")},follow:function(){var t=this;t.$nuxt.$loading.start();var e=this.currentUser,data={flag_id:[{target_id:"following"}],entity_type:[{value:"user"}],global:[{value:!1}],entity_id:[{value:this.followUser.uid}],uid:[{target_id:e.uid}]};n.a.createResource("POST","/entity/flagging",data).then((function(e){t.notifyResponse("You have started following: "+t.followUser.name),t.$nuxt.$loading.finish(),t.followUser={},t.$store.dispatch("user/getFollowers",e.uid[0].target_id),t.$store.dispatch("user/getFollowing",e.uid[0].target_id),$("#follow-user").modal("hide")})).catch((function(e){t.$nuxt.$loading.finish(),t.notifyResponse("Something went wrong, Please try again!!","error"),$("#follow-user").modal("hide")}))},checkFollowing:function(t){var e=this.following,l=!1,r=0;return e.forEach((function(element){element.uid===t.uid&&(l=!0,r=element.id)})),l?r:l},notifyResponse:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3;this.$swal({type:e,title:t,showConfirmButton:!1,timer:l})}},mounted:function(){var t=this.$route.params.id;this.userId=t,this.$store.dispatch("user/getFollowers",t),this.$store.dispatch("user/getFollowing",t)}},h=l(13),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-3"},[l("Profile")],1),t._v(" "),t._m(0)]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-9"},[l("div",{staticClass:"nav-wrapper"},[l("ul",{staticClass:"nav nav-pills nav-fill flex-column flex-md-row",attrs:{id:"myTab2",role:"tablist"}},[l("li",{staticClass:"nav-item"},[l("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"athlete-id",params:{id:t.userId}}}},[l("a",[t._v("Overview")])])],1),t._v(" "),t._m(1),t._v(" "),l("li",{staticClass:"nav-item"},[l("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"athlete-id-following",params:{id:t.userId}}}},[l("a",[t._v("Following")])])],1),t._v(" "),l("li",{staticClass:"nav-item active"},[l("nuxt-link",{staticClass:"nav-link active",attrs:{to:{name:"athlete-id-followers",params:{id:t.userId}}}},[l("a",[t._v("Followers")])])],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),l("li",{staticClass:"nav-item"},[l("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"athlete-id-posts",params:{id:t.userId}}}},[l("a",[t._v("Posts")])])],1)])]),t._v(" "),l("div",{staticClass:"card shadow"},[l("div",{staticClass:"table-responsive"},[l("table",{staticClass:"table"},[t._m(4),t._v(" "),l("tbody",[t._l(t.followers,(function(e,r){return l("tr",{key:e.uid},[l("td",[t._v(t._s(r+1))]),t._v(" "),l("td",[l("nuxt-link",{attrs:{to:{name:"athlete-id",params:{id:e.uid}}}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])],1),t._v(" "),l("td",[t.checkFollowing(e)?[l("span",[t._v(" Already Following")])]:[l("a",{attrs:{href:"#"},on:{click:function(l){return l.preventDefault(),t.confirmFollow(e.uid)}}},[t._v("Follow Back")])]],2)])})),t._v(" "),t.followers.length?t._e():l("tr",[l("td",{attrs:{colspan:"3"}},[t._v("No Followers found!!")])])],2)])])])]),t._v(" "),l("div",{staticClass:"col-md-3"},[l("SocialStats",{attrs:{following:t.followingCount,followers:t.followersCount,activities:0}}),t._v(" "),l("Clubs"),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)]),t._v(" "),l("div",{staticClass:"modal fade",attrs:{id:"follow-user",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[l("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[l("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),l("div",{staticClass:"modal-body"},[t._v("\n                    Are you sure you wanna follow the user ?\n                ")]),t._v(" "),l("div",{staticClass:"modal-footer"},[l("div",{staticClass:"form-group"},[l("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button","data-dismiss":"modal"}},[t._v("No")]),t._v(" "),l("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.follow(e)}}},[t._v("Yes")])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-9"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"activity-count"},[l("h3",{staticClass:"text-footnote"},[t._v("Last 4 Weeks")]),t._v(" "),l("div",{staticClass:"count-total"},[l("div",{staticClass:"count text-display5"},[t._v("0")]),t._v(" "),l("div",{staticClass:"count-label"},[t._v("Total Activities")])])]),t._v(" "),l("div",{staticClass:"activity-calendar"},[l("h3",{staticClass:"vh"},[t._v("Calendar")])]),t._v(" "),l("div",{staticClass:"activity-breakdown"},[l("h3",{staticClass:"vh"},[t._v("Hourly breakdown per week")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"overview-tab","data-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"false"}},[this._v("\n                            Trophy Case\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"overview-tab","data-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"false"}},[this._v("\n                            KOMs / CRs\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"overview-tab","data-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"false"}},[this._v("\n                        Local Legends\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("#")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Actions")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-wrapper"},[e("ul",{staticClass:"nav nav-pills nav-fill flex-column flex-md-row",attrs:{id:"myTab2",role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[e("i",{staticClass:"fa fa-paw",attrs:{"aria-hidden":"true"}})])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[e("i",{staticClass:"fa fa-bicycle",attrs:{"aria-hidden":"true"}})])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"contact-tab","data-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false"}},[e("i",{staticClass:"fa fa-tint",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card shadow"},[e("div",{staticClass:"card-body"},[this._v("\n                    comming soon\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("Follow Back")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[this._v("×")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Profile:l(254).default,SocialStats:l(255).default,Clubs:l(256).default})}}]);