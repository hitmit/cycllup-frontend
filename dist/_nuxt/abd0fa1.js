(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{253:function(t,e,r){t.exports=r.p+"img/user.006cb1f.png"},261:function(t,e,r){"use strict";r.r(e);var l=r(31),n=r(51);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={middleware:["auth"],name:"AthleteIndex",data:function(){return{userId:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({currentUser:function(){var t=localStorage.getItem("currentUser");return JSON.parse(t)}},Object(n.b)({followersCount:"user/followersCount",followingCount:"user/followingCount"})),mounted:function(){var t=this.$route.params.id;this.userId=t,this.$store.dispatch("user/getFollowers",t),this.$store.dispatch("user/getFollowing",t)}},v=r(13),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-3"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"text-center"},[l("img",{staticClass:"rounded-circle",attrs:{src:r(253),height:"150",width:"150"}}),t._v(" "),l("h3",[t._v(t._s(t.currentUser.name))]),t._v(" "),t._m(0)])])])]),t._v(" "),t._m(1)]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-8"},[l("div",{staticClass:"card"},[l("ul",{staticClass:"nav nav-tabs m-2",attrs:{id:"myTab2",role:"tablist"}},[l("li",{staticClass:"nav-item active"},[l("nuxt-link",{staticClass:"nav-link active",attrs:{to:{name:"athlete-id",params:{id:t.userId}}}},[l("a",[t._v("Overview")])])],1),t._v(" "),t._m(2),t._v(" "),l("li",{staticClass:"nav-item"},[l("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"athlete-id-following",params:{id:t.userId}}}},[l("a",[t._v("Following")])])],1),t._v(" "),l("li",{staticClass:"nav-item"},[l("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"athlete-id-followers",params:{id:t.userId}}}},[l("a",[t._v("Followers")])])],1),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),t._m(5)])]),t._v(" "),l("div",{staticClass:"col-md-4"},[l("div",{staticClass:"card mb-3 card-profile"},[l("div",{staticClass:"card-body"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col text-center"},[t._v("\n                            "+t._s(t.currentUser.name)+"\n                        ")])]),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col"},[l("div",{staticClass:"card-profile-stats d-flex justify-content-center"},[l("div",[l("span",{staticClass:"heading"},[t._v(t._s(t.followingCount))]),t._v(" "),l("span",{staticClass:"description"},[t._v("Following")])]),t._v(" "),l("div",[l("span",{staticClass:"heading"},[t._v(t._s(t.followersCount))]),t._v(" "),l("span",{staticClass:"description"},[t._v("Followers")])]),t._v(" "),t._m(6)])])])])]),t._v(" "),t._m(7),t._v(" "),t._m(8)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),this._v(" Clermont Ferrand, Auvergne, France")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"activity-count"},[r("h3",{staticClass:"text-footnote"},[t._v("Last 4 Weeks")]),t._v(" "),r("div",{staticClass:"count-total"},[r("div",{staticClass:"count text-display5"},[t._v("0")]),t._v(" "),r("div",{staticClass:"count-label"},[t._v("Total Activities")])])]),t._v(" "),r("div",{staticClass:"activity-calendar"},[r("h3",{staticClass:"vh"},[t._v("Calendar")])]),t._v(" "),r("div",{staticClass:"activity-breakdown"},[r("h3",{staticClass:"vh"},[t._v("Hourly breakdown per week")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"overview-tab","data-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"false"}},[this._v("\n                            Trophy Case\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"overview-tab","data-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"false"}},[this._v("\n                            KOMs / CRs\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"overview-tab","data-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"false"}},[this._v("\n                        Local Legends\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"overview",role:"tabpanel","aria-labelledby":"overview-tab"}},[e("div",{staticClass:"card-body"},[e("p",[this._v("comming soon")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"heading"},[this._v("0")]),this._v(" "),e("span",{staticClass:"description"},[this._v("Activities")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[this._v("\n                    Clubs\n                ")]),this._v(" "),e("div",{staticClass:"card-body"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-3"},[r("ul",{staticClass:"nav nav-tabs m-2",attrs:{id:"myTab",role:"tablist"}},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[r("i",{staticClass:"fa fa-paw",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[r("i",{staticClass:"fa fa-bicycle",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"contact-tab","data-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false"}},[r("i",{staticClass:"fa fa-tint",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),r("div",{staticClass:"tab-content m-3",attrs:{id:"myTabContent"}},[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[r("p",[t._v("comming soon")])]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[t._v("\n                        comming soon\n                    ")]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"}},[t._v("\n                        comming soon\n                    ")])])])}],!1,null,null,null);e.default=component.exports}}]);