webpackJsonp([2],{"0Dt3":function(e,t,a){"use strict";var n=a("phSB"),i=a("Axzb"),s=!1;var o=function(e){s||a("pPMm")},r=a("K60R")(n.a,i.a,!1,o,null,null);r.options.__file="src/navbar.vue",t.a=r.exports},"1dmX":function(e,t,a){"use strict";var n=a("Zrlr"),i=a.n(n),s=a("wxAW"),o=a.n(s),r=function(){function e(t,a,n,s){i()(this,e),this.deadline=t.toString().substring(4,10),this.label=a,this.isMine=n,this.uploaded=s,this.reviewed=!1,this.canBeReviewed=!1,this.canBeUploaded=!1}return o()(e,[{key:"switchReviewed",value:function(){this.reviewed=!this.reviewed}},{key:"switchUploaded",value:function(){this.uploaded=!0}},{key:"switchCanBeReviewed",value:function(){this.canBeReviewed=!0}},{key:"switchCanBeUploaded",value:function(){this.canBeUploaded=!0}},{key:"done",value:function(){return this.uploaded&&this.reviewed}}]),e}();t.a=r},"8mr8":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"a:hover{text-decoration:none;color:inherit}nav{background-color:#008ba2}nav .nav-title{padding-left:1%}",""])},AoGW:function(e,t,a){"use strict";var n=a("s86m"),i=a("0Dt3");t.a={components:{navbar:i.a},head:{title:"Tasks",script:[{src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js"},{src:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"}],link:[{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"},{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}]},data:function(){return{params:this.$route.params,members:n.a.members}},mounted:function(){$(this.$refs.reviewedBox).tooltip()},computed:{memberTasks:function(){for(var e=n.a.members,t=0;t<e.length;t++)if(e[t].name===this.$route.params.name)return e[t].tasks}}}},Axzb:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown1"}},e._l(e.members,function(t){return a("li",[a("nuxt-link",{attrs:{to:{path:t.name}}},[e._v(e._s(t.name))])],1)})),a("nav",{staticClass:"nav-extended"},[e._m(0),a("div",{staticClass:"nav-wrapper"},[a("ul",{},[a("li",[a("nuxt-link",{attrs:{to:"/"}},[e._v("Timeline")])],1),a("li",[a("nuxt-link",{attrs:{to:"information"}},[e._v("Information")])],1),a("li",[a("a",{ref:"dropdown",staticClass:"dropdown-trigger",attrs:{href:"#!","data-target":"dropdown1"}},[e._v("Tasks"),a("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])])])])])])])};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav-content"},[t("span",{staticClass:"nav-title"},[this._v("Some sort of project")])])}]};t.a=i},GBHQ:function(e,t,a){var n=a("s+C1");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("e12b0d5c",n,!1,{sourceMap:!1})},Se6T:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("AoGW"),i=a("XR/+"),s=!1;var o=function(e){s||a("GBHQ")},r=a("K60R")(n.a,i.a,!1,o,null,null);r.options.__file="pages/_name.vue",t.default=r.exports},"T8/W":function(e,t,a){"use strict";var n=a("Zrlr"),i=a.n(n),s=a("wxAW"),o=a.n(s),r=function(){function e(t,a){i()(this,e),this.name=t,this.tasks=a,this.amountOfSlackingDone=0}return o()(e,[{key:"addSlack",value:function(){this.amountOfSlackingDone++}}]),e}();t.a=r},"XR/+":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("navbar"),a("div",{staticClass:"container"},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.params.name))])]),e._l(e.memberTasks,function(t){return a("li",{staticClass:"collection-item",class:[{taskDone:t.done()},{taskUploaded:t.uploaded&&!t.reviewed},{taskNotDone:!t.uploaded}]},[e._v("\n\t        "+e._s(t.deadline)+" - "+e._s(t.label)+"\n\t        "),a("div",{staticClass:"secondary-content taskCheck"},[a("label",[a("input",{staticClass:"filled-in",attrs:{type:"checkbox",disabled:"disabled"},domProps:{checked:t.uploaded}}),a("span",[e._v("Uploaded")])])]),a("div",{staticClass:"secondary-content taskCheck"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reviewed,expression:"task.reviewed"}],staticClass:"filled-in",attrs:{disabled:!t.canBeReviewed,type:"checkbox"},domProps:{checked:Array.isArray(t.reviewed)?e._i(t.reviewed,null)>-1:t.reviewed},on:{change:function(a){var n=t.reviewed,i=a.target,s=!!i.checked;if(Array.isArray(n)){var o=e._i(n,null);i.checked?o<0&&e.$set(t,"reviewed",n.concat([null])):o>-1&&e.$set(t,"reviewed",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(t,"reviewed",s)}}}),t.canBeReviewed||t.isMine?e._e():a("span",{ref:"reviewedBox",refInFor:!0,attrs:{"data-position":"top","data-tooltip":"Download the document first before checking the reviewed-box!"}},[e._v("Reviewed")]),!t.canBeReviewed&&t.isMine?a("span",{ref:"reviewedBox",refInFor:!0,attrs:{"data-position":"top","data-tooltip":"You cannot review your own tasks"}},[e._v("Reviewed")]):e._e(),t.canBeReviewed?a("span",[e._v("Reviewed")]):e._e()])]),t.isMine?a("div",{staticStyle:{"text-align":"right"}},[a("div",{staticClass:"file-field input-field",on:{click:function(e){t.switchCanBeUploaded()}}},[e._m(0,!0),e._m(1,!0)]),a("button",{staticClass:"btn niceBlue",staticStyle:{float:"none"},attrs:{disabled:!t.canBeUploaded,type:"submit",name:"action"},on:{click:function(e){t.switchUploaded()}}},[e._v("Submit\n\t\t            "),a("i",{staticClass:"material-icons right"},[e._v("send")])])]):e._e(),!t.isMine&&t.uploaded?a("div",{staticClass:"secondary-content"},[a("a",{attrs:{href:"sample-1.jpg",download:""}},[a("i",{staticClass:"material-icons blackIcon",on:{click:function(e){t.switchCanBeReviewed()}}},[e._v("file_download")])])]):e._e()])})],2)])],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"btn niceBlue"},[t("span",[this._v("File")]),t("input",{attrs:{type:"file"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"file-path-wrapper"},[t("input",{staticClass:"file-path validate",attrs:{type:"text"}})])}]};t.a=i},Zrlr:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},pPMm:function(e,t,a){var n=a("8mr8");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("e1a70618",n,!1,{sourceMap:!1})},phSB:function(e,t,a){"use strict";var n=a("s86m");t.a={data:function(){return{members:n.a.members}},mounted:function(){$(this.$refs.dropdown).dropdown()}}},"s+C1":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".image-upload>.submitTheEvidence{visibility:hidden;width:0;height:0}.invis{visibility:hidden}.blackIcon{color:#000;border:1px solid #000;border-radius:5px}.blackIcon:hover{background-color:#aaa}.blackColor{color:#000}.taskCheck{margin:0 10px}.taskDone{background-color:#c5ffcb!important}.taskNotDone{background-color:#ffc5c5!important}.taskUploaded{background-color:#ffebc5!important}.niceBlue{background-color:#008ba2}.collection .collection-item{margin-bottom:5px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.collection.with-header .collection-header{border:none}.collection.with-header{border-bottom:none}",""])},s86m:function(e,t,a){"use strict";var n=a("1dmX"),i=a("T8/W");t.a={members:[new i.a("Tommy",[new n.a(new Date("5 may 2018 23:00"),"Write code for login-form",!0,!0),new n.a(new Date("6 may 2018 23:00"),"Review related work section 3 and 4 by Denny",!0,!1),new n.a(new Date("12 may 2018 23:00"),"Write related work, section 1 and 2",!0,!1),new n.a(new Date("12 may 2018 23:00"),"Write related work, section 7 and 8",!0,!1),new n.a(new Date("19 may 2018 23:00"),"Finish prototype",!0,!1),new n.a(new Date("24 may 2018 23:00"),"Write conclusion and abstract for paper",!0,!1),new n.a(new Date("4 june 2018 23:00"),"Finish the paper",!0,!1)]),new i.a("Lisa",[new n.a(new Date("5 may 2018 23:00"),"Write introduction of paper",!1,!1),new n.a(new Date("5 may 2018 23:00"),"Write part 1 of methods of paper",!1,!1),new n.a(new Date("12 may 2018 23:00"),"Review code for login-form",!1,!1),new n.a(new Date("12 may 2018 23:00"),"Review code for webshop",!1,!1),new n.a(new Date("19 may 2018 23:00"),"Write part 2 and 3 of methods of paper",!1,!1),new n.a(new Date("4 june 2018 23:00"),"Finish the paper",!1,!1)]),new i.a("Denny",[new n.a(new Date("5 may 2018 23:00"),"Write Related Work section 3 and 4",!1,!0),new n.a(new Date("12 may 2018 23:00"),"Write  Related Work section 5 and 6",!1,!1),new n.a(new Date("19 may 2018 23:00"),"Start writing results",!1,!1),new n.a(new Date("19 may 2018 23:00"),"Finish up results and analysis",!1,!1),new n.a(new Date("4 june 2018 23:00"),"Finish the paper",!1,!1)])]}},wxAW:function(e,t,a){"use strict";t.__esModule=!0;var n,i=a("C4MV"),s=(n=i)&&n.__esModule?n:{default:n};t.default=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()}});