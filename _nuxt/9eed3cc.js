(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{342:function(e,t,r){"use strict";r.r(t);r(29),r(124),r(25);var n=r(6),c={data:function(){return{searchQuery:"الراءات",searchResults:[]}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("accueil").fetch();case 3:return n=t.sent,t.abrupt("return",{index:n});case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){this.$store.commit("SET_INDEX",this.index)},watch:{searchQuery:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return t.searchResults=[],r.abrupt("return");case 3:return r.next=5,t.$content("poeme").limit(6).search("content",e).fetch();case 5:t.searchResults=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}},o=r(34),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container m-auto",attrs:{dir:"rtl"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"border border-emerald-300 focus:border-emerald-500 bg-white text-green-900 appearance-none inline-block w-full focus:text-red-600 rounded py-3 px-4 focus:outline-none",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.searchResults.length?r("ul",e._l(e.searchResults,(function(t){return r("li",{key:t.id},[r("NuxtLink",{attrs:{to:{name:"/",params:{slug:t.slug}}}},[e._v("\n        "+e._s(t.content)+"\n      ")])],1)})),0):e._e(),e._v(" "),r("pre",{attrs:{dir:"auto"}},[e._v(e._s(e.searchResults))])])}),[],!1,null,null,null);t.default=component.exports}}]);