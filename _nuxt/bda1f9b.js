(window.webpackJsonp=window.webpackJsonp||[]).push([[19,2,3,12,17,18],{316:function(t,e,r){"use strict";var n=r(11),o=r(5),c=r(93),l=r(19),d=r(14),h=r(49),f=r(208),m=r(68),E=r(6),y=r(70),_=r(69).f,T=r(38).f,v=r(18).f,O=r(209).trim,P="Number",C=o.Number,A=C.prototype,w=h(y(A))==P,D=function(t){var e,r,n,o,c,l,d,code,h=m(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=O(h)).charCodeAt(0))||45===e){if(88===(r=h.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+h}for(l=(c=h.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,n)}return+h};if(c(P,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(w?E((function(){A.valueOf.call(r)})):h(r)!=P)?f(new C(D(e)),r,N):D(e)},k=n?_(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;k.length>I;I++)d(C,x=k[I])&&!d(N,x)&&v(N,x,T(C,x));N.prototype=A,A.constructor=N,l(o,P,N)}},317:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("2b24fb00",content,!0,{sourceMap:!1})},318:function(t,e,r){"use strict";r(317)},319:function(t,e,r){var n=r(50)(!1);n.push([t.i,'div :not(.current-line)>.red{color:#4a5568}div .current-line>.red{color:#3182ce}.vers>div:after{content:"";display:inline-block;width:100%;height:2rem}@media print{.d-print-none{display:none!important}.title{page-break-after:avoid}}',""]),t.exports=n},322:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(47),r(26),r(48);var n=r(2),o=(r(316),r(30),r(57));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{time:{type:Number,default:40,required:!1}},data:function(){return{timecode:40}},computed:l(l({audio:function(){return this.$refs.audio}},Object(o.c)(["sound","playback","currentChapter","userTimeRequest","currentTimecode","nextChapter","currentLine","previousChapter","currentLoopVersCount","loopChapterCount","currentLoopChapterCount","playbackRate","playbackRates","canPlay"])),{},{nextLoopTime:{get:function(){return this.nextChapter.startTime},set:function(t){return t}}}),mounted:function(){var t=this;this.audio.playbackRate=this.playbackRate,this.audio.currentTime=this.userTimeRequest,this.audio.muted=!this.audio,this.audio.addEventListener("timeupdate",(function(e){t.$data.timecode=e.target.currentTime,t.UPDATE_CURRENT_LINE(),t.UPDATE_TIMECODE(e.target.currentTime),t.audio.addEventListener("canplay",(function(){t.UPDATE_CAN_PLAY(!0)}))}))},watch:{time:function(t){this.playAt(t)},playback:function(){this.playback?this.play():this.pause()},playbackRate:function(){this.audio.playbackRate=this.playbackRate},sound:function(){this.audio.muted=!this.sound}},methods:l(l({play:function(){this.audio.play()},pause:function(){this.audio.pause()},playAt:function(t){this.audio.currentTime=t,this.audio._startTime=t,this.playback&&this.play()},controlPlayback:function(t){var e=this;switch(t.srcKey){case"space":this.UPDATE_PLAYBACK(!this.playback);break;case"l":this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(this.loopChapterCount[this.currentLoopChapterCount||1]);break;case"m":this.UPDATE_SOUND(!this.sound);break;case"c":var time=this.timecode,r=new Date(1e3*time).toISOString().substr(11,12);this.copy(r),this.audio.pause(),this.notifyMe(r);break;case"pageup":var n=this.playbackRates.filter((function(t){return t>e.playbackRate}));n=n.length>0?n[0]:this.playbackRate,this.UPDATE_PLAYBACK_RATE(n);break;case"pagedown":var o=this.playbackRates.filter((function(t){return t<e.playbackRate}));o=o.length>0?o[o.length-1]:this.playbackRate,this.UPDATE_PLAYBACK_RATE(o)}}},Object(o.d)(["UPDATE_PLAYBACK","UPDATE_TIMECODE","UPDATE_LOOP_CHAPTER","UPDATE_LOOP_VERS","UPDATE_SOUND","UPDATE_CURRENT_LINE","UPDATE_CURRENT_LOOP_CHAPTER_COUNT","UPDATE_CURRENT_LOOP_VERS_COUNT","UPDATE_CAN_PLAY","UPDATE_PLAYBACK_RATE"])),{},{copy:function(text){var t=this;navigator.clipboard.writeText(text).then((function(){t.message="Code copied to clipboard."})).catch((function(e){t.message="Sorry, unable to copy to clipboard."}))},notifyMe:function(text){if(!("Notification"in window))return!1;if("granted"===Notification.permission)new Notification(text);else"denied"!==Notification.permission&&Notification.requestPermission().then((function(t){if("granted"===t)new Notification(text)}))}})},h=r(46),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{ctrlup:["ctrl","arrowup"],ctrldown:["ctrl","arrowdown"],l:["l"],m:["m"],c:["c"],pagedown:["pagedown"],pageup:["pageup"],space:["space"]},expression:"{\n    ctrlup: ['ctrl', 'arrowup'],\n    ctrldown: ['ctrl', 'arrowdown'],\n    l: ['l'],\n    m: ['m'],\n    c: ['c'],\n    pagedown: ['pagedown'],\n    pageup: ['pageup'],\n    space: ['space']\n  }"}],on:{shortkey:t.controlPlayback}},[r("audio",{ref:"audio",staticClass:"poeme",attrs:{type:"audio/ogg",preload:"auto"}},[r("source",{attrs:{src:"jaz.ogg",type:"audio/ogg"}}),t._v(" "),r("source",{attrs:{src:"jaz.mp3",type:"audio/mpeg"}}),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("المتصفح لا يتحمل قراءة الصوت لتحميل الملف\n   "),r("a",{attrs:{href:"jaz.mp3"}},[t._v("انقر هنا")]),t._v(".")])}],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(30),r(47),r(26),r(48);var n=r(2),o=(r(316),r(57));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{chapter:{type:Object,default:null,required:!0},currentLine:{type:Object,default:null,required:!1},currentTimecode:{type:Number,default:null,required:!1},secondHalfStartTime:{type:Number,default:null,required:!1},userTimeRequest:{type:Number,default:null,required:!1},playback:{type:Boolean,default:null,required:!1}},data:function(){return{versTdClasses:{"sm:text-3xl":!0,"text-lg":!0,"text-justify":!0,"hover:text-red-500":!0,"print:overflow-hidden":!0,"select-none":!0,poeme:!0},swipeLeft:!1,swipeRight:!1,accentColorPlayback:"#4a5568",accentColorNoPlayback:"#cbd5e0"}},methods:l(l({},Object(o.d)(["UPDATE_USER_TIME_REQUEST","UPDATE_DEFINITION_MODAL"])),{},{longtapHandler:function(t){var e=parseFloat(t.target.getAttribute("data-start-time"))||parseFloat(t.target.parentElement.getAttribute("data-start-time"));this.UPDATE_USER_TIME_REQUEST(e)},touchHoldHandler:function(){this.UPDATE_DEFINITION_MODAL(!0),console.log("touch hold")}})},h=(r(318),r(46)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen"},[r("div",{staticClass:"grid grid-cols-2 place-content-center",class:{"bg-gray-800 text-gray-700 transition duration-500":t.playback}},[r("div",{staticClass:"col-span-2"},[r("h1",{staticClass:"font-body text-center title text-3xl sm:text-5xl py-10 pb-20  text-gray-600 select-none print:pt-0",class:{"transition duration-300 text-gray-700":t.playback},attrs:{"data-starttime":t.chapter.startTime}},[t._v("\n        "+t._s(t.chapter.content)+"\n      ")])]),t._v(" "),r("div",{staticClass:"col-span-2 space-y-4 mx-16 sm:mx-32 md:mx-auto"},t._l(t.chapter.vers,(function(e){return r("div",{directives:[{name:"touch",rawName:"v-touch:touchhold",value:t.touchHoldHandler,expression:"touchHoldHandler",arg:"touchhold"}],key:e.id,staticClass:"vers font-body cursor-pointer ",class:{"scale-105":e.id===t.currentLine.id,"opacity-100":e.id===t.currentLine.id}},[r("div",{directives:[{name:"touch",rawName:"v-touch:longtap",value:t.longtapHandler,expression:"longtapHandler",arg:"longtap"}],staticClass:"transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110 text-gray-700 focus:-translate-y-1",class:Object.assign({},{"transition duration-500 text-red-500 current-line scale-110":e.id===t.currentLine.id&&t.currentTimecode<t.secondHalfStartTime,"text-gray-700 playback":t.playback},t.versTdClasses),attrs:{"data-startTime":e.startTime,"data-start":e.startTime,"data-start-time":e.startTime},domProps:{innerHTML:t._s(e.content.split("-")[0])},on:{click:function(r){return t.UPDATE_USER_TIME_REQUEST(e.startTime)}}}),t._v(" "),r("div",{staticClass:"transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110 text-gray-700 focus:-translate-y-1",class:Object.assign({},{"transition duration-500 text-red-500 current-line scale-110":e.id===t.currentLine.id&&t.currentTimecode>t.secondHalfStartTime,"text-gray-700 playback":t.playback},t.versTdClasses),attrs:{"data-start":e.startTime},domProps:{innerHTML:t._s(e.content.split("-")[1])}})])})),0)])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(30),r(47),r(26),r(48);var n=r(2),o=r(57);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{chapters:{type:Array,default:null,required:!0}},data:function(){return{}},computed:l({},Object(o.c)(["indexModal","playback"])),methods:l(l({},Object(o.d)(["UPDATE_INDEX_MODAL"])),{},{handleClick:function(t){this.UPDATE_INDEX_MODAL(!1),this.$router.push("/".concat(t))},drawer:function(){this.UPDATE_INDEX_MODAL(!1)}}),watch:{indexModal:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27==e.keyCode&&t.indexModal&&t.UPDATE_INDEX_MODAL(!1)}))}},h=r(46),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:t.drawer,expression:"drawer",arg:"swipe",modifiers:{right:!0}}],staticClass:"flex fixed w-full items-center justify-between px-6 h-16 bg-gray-800 text-gray-400 border-b border-gray-200 z-10",class:{"bg-white":!t.playback}},[r("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.indexModal,expression:"indexModal"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.UPDATE_INDEX_MODAL(!1)}}},[r("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(e){return t.UPDATE_INDEX_MODAL(!1)}}})])]),t._v(" "),r("aside",{staticClass:"transform top-0 right-0 w-64 bg-gray-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",class:t.indexModal?"translate-x-0":"translate-x-full"},t._l(t.chapters,(function(e,i){return r("nuxt-link",{key:i,staticClass:"mr-2 flex items-center p-4 hover:bg-red-400 hover:text-white cursor-pointer font-body",attrs:{to:"/"+e.id,"no-prefetch":""},nativeOn:{click:function(e){return t.UPDATE_INDEX_MODAL(!1)}}},[r("span",[t._v(t._s(Intl.NumberFormat("ar-SA").format(i+1))+" - ")]),t._v("\n      "+t._s(e.content)+"\n    ")])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(30),r(47),r(26),r(48);var n=r(2),o=r(57);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{}},computed:l({},Object(o.c)(["definitionModal"])),methods:l(l({},Object(o.d)(["UPDATE_DEFINITION_MODAL"])),{},{drawer:function(){this.UPDATE_DEFINITION_MODAL(!1)}}),watch:{definitionModal:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27==e.keyCode&&t.definitionModal&&t.UPDATE_DEFINITION_MODAL(!1)}))}},h=r(46),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:t.drawer,expression:"drawer",arg:"swipe",modifiers:{left:!0}}],staticClass:"flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10",attrs:{dir:"ltr"}},[r("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.definitionModal,expression:"definitionModal"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.UPDATE_DEFINITION_MODAL(!1)}}},[r("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(e){return t.UPDATE_DEFINITION_MODAL(!1)}}})])]),t._v(" "),r("aside",{staticClass:"transform top-0 left-0 w-3/4 bg-white fixed h-full overflow-auto  select-none ease-in-out transition-all duration-300 z-30",class:t.definitionModal?"translate-x-0":"-translate-x-full"},[r("p",{staticClass:"p-10"},[t._v("\n        "+t._s(t.definitionModal)+" "),r("br"),t._v("\n        blanditiis. Facere dolores inventore, laudantium quibusdam dolor itaque\n        similique qui rerum placeat harum. Qui nobis magnam architecto numquam\n        recusandae, amet totam temporibus eligendi, minima laboriosam commodi\n        sequi tempora ipsum cupiditate voluptatum! Repellendus nam unde quidem,\n        recusandae totam ex expedita, saepe id in est itaque, cumque error? Iure\n        nobis enim a culpa ex rem fugiat. Deserunt sequi porro ducimus? Maxime,\n        dolores! Blanditiis! Vitae corrupti, facere cum minima neque iusto eaque\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(30),r(47),r(26),r(48);var n=r(2),o=r(57);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{isVisible:!1}},computed:l(l({controls:function(){var t=this;return[{icon:"PlayIcon",ifShow:!this.playback,title:"تشغيل",classes:{hidden:!this.canPlay,"animate-pulse text-red-500 shadow-xl":this.canPlay,"focus:outline-none focus:text-red-500":!0},onclick:function(){return t.UPDATE_PLAYBACK(!t.playback)}},{icon:"PauseIcon",ifShow:this.playback,title:"وقوف مؤقت",classes:{"text-red-500 shadow-xl":this.playback,"focus:outline-none focus:text-red-500":!0},onclick:function(){return t.UPDATE_PLAYBACK(!t.playback)}},{icon:"FastForwardIcon",ifShow:!0,title:this.nextChapter.content,disabled:!this.nextChapter,classes:{"opacity-50":!this.nextChapter,"focus:outline-none focus:text-red-500":!0},onclick:function(){t.UPDATE_TIME_LINES_AND_CHAPTERS(t.nextChapter.startTime),t.$router.push("/".concat(t.nextChapter.id))}},{icon:"RewindIcon",ifShow:!0,title:this.previousChapter.content,disabled:!!this.currentChapter&&0===this.currentChapter.id,classes:{"opacity-50":!!this.currentChapter&&0===this.currentChapter.id,"focus:outline-none focus:text-red-500":!0},onclick:function(){t.UPDATE_TIME_LINES_AND_CHAPTERS(t.previousChapter.startTime),t.$router.push("/".concat(t.previousChapter.id))}},{icon:"MuteIcon",ifShow:!0,title:"كنم الصوت",classes:{"text-red-500":!this.sound,"focus:outline-none":!0},onclick:function(){return t.UPDATE_SOUND(!t.sound)}},{icon:"LoopIcon",ifShow:!0,title:"تكرار",additionnalInfo:{content:1===this.currentLoopChapterCount?"OFF":this.currentLoopChapterCount,classes:[{"text-red-500":this.currentLoopChapterCount>1}]},classes:{"rounded-2xl":this.currentLoopChapterCount>1,"focus:outline-none":!0,"text-red-500":this.currentLoopChapterCount>1,"opacity-50":1===this.currentLoopChapterCount},onclick:function(){return t.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(t.loopChapterCount[t.currentLoopChapterCount])},longtapHandler:function(){t.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(t.loopChapterCount[0])}},{icon:"SpeedIcon",ifShow:!0,title:"تغيير السرعة",additionnalInfo:{content:1===this.playbackRate?"OFF":this.playbackRate},classes:{"rounded-2xl text-red-500":1!==this.playbackRate,"focus:outline-none":!0,"opacity-50":1===this.playbackRate},onclick:function(){t.UPDATE_PLAYBACK_RATE(t.playbackRates[t.playbackRates.indexOf(t.playbackRate)+1]?t.playbackRates[t.playbackRates.indexOf(t.playbackRate)+1]:t.playbackRates[0])},longtapHandler:function(){t.UPDATE_PLAYBACK_RATE(t.playbackRates[1])}},{icon:"MenuIcon",ifShow:!0,title:"الفهرس",classes:{"focus:outline-none focus:text-red-500":!0},onclick:function(){t.UPDATE_INDEX_MODAL(!t.indexModal)}},{ifShow:!0,classes:{"focus:outline-none select-none cursor-not-allowed:":!0},additionnalInfo:{content:this.formattedTimecode},onclick:function(){}}]}},Object(o.c)(["currentTimecode","currentChapter","previousChapter","nextChapter","currentLine","playbackRate","playbackRates","previousLine","nextLine","userTimeRequest","sound","playback","anchors","loopVersCount","currentLoopVersCount","loopChapterCount","canPlay","indexModal","currentLoopChapterCount"])),{},{formattedTimecode:function(){var time=new Date(1e3*this.currentTimecode);return new Intl.DateTimeFormat("ar-EG",{nu:"arab",minute:"2-digit",second:"2-digit"}).format(time)}}),methods:l(l({},Object(o.b)(["UPDATE_TIME_LINES_AND_CHAPTERS"])),Object(o.d)(["UPDATE_SOUND","UPDATE_PLAYBACK","UPDATE_PLAYBACK_RATE","UPDATE_USER_TIME_REQUEST","UPDATE_CURRENT_LOOP_VERS_COUNT","UPDATE_INDEX_MODAL","UPDATE_CURRENT_LOOP_CHAPTER_COUNT"]))},h=r(46),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sticky sm:fixed sm:right-0 w-full bottom-0 sm:w-auto"},[r("div",{staticClass:"rounded-tl-xl bg-gray-200 shadow-l-2xl p-4"},[r("div",{staticClass:"flex sm:flex-col sm:space-y-4 justify-around"},t._l(t.controls,(function(e,i){return r("div",{directives:[{name:"show",rawName:"v-show",value:e.ifShow,expression:"e.ifShow"}],key:i,staticClass:"rounded-md text-gray-600 flex text-2xl font-extrabold focus:outline-none",attrs:{title:e.title}},[r("button",{directives:[{name:"touch",rawName:"v-touch:longtap",value:e.longtapHandler,expression:"e.longtapHandler",arg:"longtap"},{name:"touch-options",rawName:"v-touch-options",value:{disableClick:!0},expression:"{ disableClick: true }"}],class:e.classes,attrs:{type:"button",disabled:e.disabled},on:{click:e.onclick}},[r(e.icon,{tag:"component"}),t._v(" "),e.additionnalInfo&&1!==e.additionnalInfo.content?r("span",{staticClass:"block py-0 text-xs",class:e.additionnalInfo.classes},[t._v(t._s(e.additionnalInfo.content))]):t._e()],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(30),r(47),r(26),r(48);var n=r(2),o=r(7),c=(r(94),r(9),r(71),r(37),r(57));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{swipeLeft:!1,swipeRight:!1}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=parseInt(n.id),e.next=4,r("poeme").fetch();case 4:return c=e.sent,e.next=7,r("poeme").where({id:o}).fetch();case 7:return l=e.sent,e.abrupt("return",{displayedChapter:l[0],poeme:c});case 9:case"end":return e.stop()}}),e)})))()},computed:d(d({},Object(c.c)(["currentTimecode","currentChapter","currentLoopChapterCount","previousChapter","nextChapter","currentLine","previousLine","nextLine","playback","chapters","userTimeRequest","anchors"])),{},{secondHalfStartTime:function(){if(this.nextLine){var t=(this.nextLine.startTime-this.currentLine.startTime)/2;return this.currentLine.startTime+t}},currentChapter:function(){var t=this;return this.poeme.find((function(e){return e.id===parseInt(t.$route.params.id)}))},previousChapter:function(){var t=this,e=this.anchors.indexOf(this.$route.params.id.toString())-1;return this.poeme.find((function(r){return r.id===parseInt(t.anchors[e])}))}}),watch:{currentTimecode:function(){var t=this,e=this.poeme.find((function(e){return e.id===parseInt(t.anchors[t.anchors.indexOf(t.$route.params.id.toString())+1])}));e&&this.playback&&(this.currentTimecode>e.startTime&&1===this.currentLoopChapterCount?this.gotToNextChapter():this.currentTimecode>e.startTime&&this.currentLoopChapterCount>1&&(this.UPDATE_TIME_LINES_AND_CHAPTERS(this.currentChapter.startTime),this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(this.currentLoopChapterCount-1)))}},methods:d(d(d({onSwipe:function(t){"left"===t?(this.swipeLeft=!0,this.$refs.left.classList.remove("hidden"),this.gotToNextChapter()):"right"===t&&(this.$refs.right.classList.remove("hidden"),this.gotToPreviousChapter())},gotToNextChapter:function(){var t=this,e=this.anchors.indexOf(this.$route.params.id.toString())+1;if(this.anchors[e]&&0!==e){var r=this.poeme.find((function(e){return e.id===parseInt(t.$route.params.id)}));this.UPDATE_TIME_LINES_AND_CHAPTERS(r.startTime),this.$router.push(this.anchors[e])}else this.$router.push("/")},gotToPreviousChapter:function(){var t=this;this.UPDATE_PLAYBACK(!1);var e=this.anchors.indexOf(this.$route.params.id.toString())-1;if(this.anchors[e]&&0!==e){var r=this.poeme.find((function(e){return e.id===parseInt(t.$route.params.id)}));this.UPDATE_TIME_LINES_AND_CHAPTERS(r.startTime),this.$router.push(this.anchors[e])}else this.$router.push("/")}},Object(c.b)(["UPDATE_TIME_LINES_AND_CHAPTERS"])),Object(c.d)(["UPDATE_CURRENT_LOOP_CHAPTER_COUNT","UPDATE_CURRENT_LINE","UPDATE_NEXT_LINE","UPDATE_PREVIOUS_LINE","UPDATE_TIMECODE","UPDATE_PLAYBACK","UPDATE_USER_TIME_REQUEST","SET_POEME"])),{},{handleTime:function(t){switch(t.srcKey){case"left":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousLine.startTime);break;case"right":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.nextLine.startTime);break;case"up":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousChapter.startTime);break;case"down":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.nextChapter.startTime)}}}),created:function(){this.SET_POEME(this.poeme)},mounted:function(){this.UPDATE_TIME_LINES_AND_CHAPTERS(this.currentChapter.startTime),this.nextRunningChapterStart=this.nextChapter.startTime,this.UPDATE_CURRENT_LINE(this.currentChapter.vers[0]),this.UPDATE_NEXT_LINE(this.currentChapter.vers[1]),this.previousChapter&&this.UPDATE_PREVIOUS_LINE(this.previousChapter.vers[this.previousChapter.vers.length-1]),this.UPDATE_TIMECODE(this.currentChapter.vers[0].startTime),this.UPDATE_USER_TIME_REQUEST(this.currentChapter.vers[0].startTime)}},f=r(46),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("Video",{attrs:{time:t.userTimeRequest}}),t._v(" "),r("Vers",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.onSwipe,expression:"onSwipe",arg:"swipe"}],attrs:{chapter:t.displayedChapter,currentLine:t.currentLine,currentTimecode:t.currentTimecode,secondHalfStartTime:t.secondHalfStartTime,userTimeRequest:t.userTimeRequest,playback:t.playback}}),t._v(" "),r("Drawer",{attrs:{chapters:t.chapters}}),t._v(" "),r("DefinitionPanel"),t._v(" "),r("PlaybackControl",{staticClass:"d-print-none",attrs:{time:t.userTimeRequest}}),t._v(" "),r("div",{ref:"left",staticClass:"absolute left-50 top-0\n  w-1/2 hidden"},[r("svg",{staticClass:"text-gray-200",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"}})])]),t._v(" "),r("div",{ref:"right",staticClass:"absolute left-0 top-0\n  w-1/2 h-screen hidden"},[r("svg",{staticClass:"text-gray-200",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Video:r(322).default,Vers:r(323).default,Drawer:r(324).default,DefinitionPanel:r(325).default,PlaybackControl:r(326).default})}}]);