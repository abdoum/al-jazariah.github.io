(window.webpackJsonp=window.webpackJsonp||[]).push([[24,18],{309:function(t,e,r){var content=r(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("1b7833da",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";r.r(e);var n={props:{chapters:{type:Array,default:null,required:!0},anchors:{type:Array,default:null,required:!0}}},o=r(29),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gradient-to-r from-green-100 to-teal-100 p-10 grid grid-cols-1  leading-loose place-items-center"},t._l(t.chapters,(function(p,i){return r("div",{key:i,staticClass:"font-serif text-center transform duration-200 ease-out transition"},[r("nuxt-link",{staticClass:" text-xl md:text-3xl text-green-900 hover:underline font-light",attrs:{to:"/"+p.id,"no-prefetch":""}},[t._v(t._s(Intl.NumberFormat("ar-SA").format(i+1))+" -\n      "+t._s(p.content))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r(309)},317:function(t,e,r){var n=r(30)(!1);n.push([t.i,".page-enter-active,.page-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:1s}.page-enter,.page-leave-to{opacity:0}",""]),t.exports=n},337:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(24),r(4)),c=r(39);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={data:function(){return{isOpen:!0}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("poeme").fetch();case 3:return n=e.sent,e.next=6,r("accueil").fetch();case 6:return o=e.sent,e.abrupt("return",{poeme:n,tableOfContent:o});case 8:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["anchors","chapters"])),created:function(){this.$store.commit("SET_POEME",this.poeme)}},d=(r(316),r(29)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TableOfContentStatic",{attrs:{chapters:t.chapters,anchors:t.anchors}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableOfContentStatic:r(312).default})}}]);