webpackJsonp([1],{"1dmX":function(e,n,t){"use strict";var a=t("Zrlr"),i=t.n(a),r=t("wxAW"),s=t.n(r),o=function(){function e(n,t){i()(this,e),this.deadline=n.toString().substring(0,10),this.label=t,this.uploaded=0,this.reviewed=0}return s()(e,[{key:"switchDone",value:function(){this.done=!this.done}},{key:"switchReviewed",value:function(){this.reviewed=!this.reviewed}},{key:"switchUploaded",value:function(){this.uploaded=1,console.log("taak "+this.label+" uploaded = "+this.uploaded)}}]),e}();n.a=o},LDxc:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("l+qh"),i=t("bKmi"),r=t("K60R")(a.a,i.a,!1,null,null,null);r.options.__file="pages/tasks/_name.vue",n.default=r.exports},"T8/W":function(e,n,t){"use strict";var a=t("Zrlr"),i=t.n(a),r=t("wxAW"),s=t.n(r),o=function(){function e(n,t){i()(this,e),this.name=n,this.tasks=t,this.amountOfSlackingDone=0}return s()(e,[{key:"addSlack",value:function(){this.amountOfSlackingDone++}}]),e}();n.a=o},Zrlr:function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},bKmi:function(e,n,t){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n\tHello "+this._s(this.params.name)+"\n")])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};n.a=i},"l+qh":function(e,n,t){"use strict";var a=t("s86m");n.a={data:function(){return{params:this.$route.params,members:a.a.members}}}},s86m:function(e,n,t){"use strict";var a=t("1dmX"),i=t("T8/W");n.a={members:[new i.a("Tommy",[new a.a(new Date("5 april 2018"),"Code schrijven"),new a.a(new Date("6 april 2018"),"Nog meer code schrijven"),new a.a(new Date("12 april 2018"),"Paper schrijven")]),new i.a("Lisa",[new a.a(new Date("7 april 2018"),"Tommy's Code reviewen"),new a.a(new Date("5 april 2018"),"Introduction paper schrijven")]),new i.a("Denny",[new a.a(new Date("5 april 2018"),"Start Related Work"),new a.a(new Date("12 april 2018"),"Finish Related Work")])]}},wxAW:function(e,n,t){"use strict";n.__esModule=!0;var a,i=t("C4MV"),r=(a=i)&&a.__esModule?a:{default:a};n.default=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()}});