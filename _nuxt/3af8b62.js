(window.webpackJsonp=window.webpackJsonp||[]).push([[16,11],{317:function(t,e,n){"use strict";var r=n(12),o=n(5),c=n(94),l=n(21),d=n(15),f=n(49),h=n(209),y=n(69),C=n(7),T=n(71),_=n(70).f,m=n(38).f,E=n(20).f,O=n(210).trim,v="Number",P=o.Number,x=P.prototype,A=f(T(x))==v,k=function(t){var e,n,r,o,c,l,d,code,f=y(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=O(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(v,!P(" 0o1")||!P("0b1")||P("+0x1"))){for(var w,R=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof R&&(A?C((function(){x.valueOf.call(n)})):f(n)!=v)?h(new P(k(e)),n,R):k(e)},I=r?_(P):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;I.length>N;N++)d(P,w=I[N])&&!d(R,w)&&E(R,w,m(P,w));R.prototype=x,x.constructor=R,l(o,v,R)}},318:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("2b24fb00",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(31),n(47),n(27),n(48);var r=n(3),o=n(58);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{isVisible:!1}},computed:l(l({controls:function(){var t=this;return[{icon:"PlayIcon",ifShow:!this.playback,classes:{"text-yellow-800":this.playback,hidden:!this.canPlay,"animate-pulse text-indigo-700 shadow-xl":this.canPlay,"focus:outline-none":!0},onclick:function(){return t.UPDATE_PLAYBACK(!t.playback)}},{icon:"PauseIcon",ifShow:this.playback,classes:{"text-indigo-700 shadow-xl":this.playback,"focus:outline-none":!0},onclick:function(){return t.UPDATE_PLAYBACK(!t.playback)}},{icon:"FastForwardIcon",ifShow:!0,disabled:!this.nextChapter,classes:{"opacity-50":!this.nextChapter,"focus:outline-none":!0},onclick:function(){t.UPDATE_TIME_LINES_AND_CHAPTERS(t.nextChapter.startTime),t.$router.push("/".concat(t.nextChapter.id))}},{icon:"RewindIcon",ifShow:!0,disabled:!!this.currentChapter&&0===this.currentChapter.id,classes:{"opacity-50":!!this.currentChapter&&0===this.currentChapter.id,"focus:outline-none":!0},onclick:function(){t.UPDATE_TIME_LINES_AND_CHAPTERS(t.previousChapter.startTime),t.$router.push("/".concat(t.previousChapter.id))}},{icon:"MuteIcon",ifShow:!0,classes:{"text-yellow-800":!this.sound},onclick:function(){return t.UPDATE_SOUND(!t.sound)}},{icon:"LoopIcon",ifShow:!0,additionnalInfo:{content:1===this.currentLoopChapterCount?"OFF":this.currentLoopChapterCount,classes:[{"text-indigo-700":this.currentLoopChapterCount>1}]},classes:{"bg-indigo-200":this.currentLoopChapterCount>1,"rounded-2xl":this.currentLoopChapterCount>1,"focus:outline-none":!0,"text-indigo-700":this.currentLoopChapterCount>1,"opacity-50":1===this.currentLoopChapterCount},onclick:function(){return t.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(t.loopChapterCount[t.currentLoopChapterCount])}},{icon:"SpeedIcon",ifShow:!0,additionnalInfo:{content:this.playbackRate,classes:[{"text-indigo-700":1!==this.playbackRate}]},classes:{"bg-indigo-200":1!==this.playbackRate,"rounded-2xl":1!==this.playbackRate,"focus:outline-none":!0,"text-indigo-700":1!==this.playbackRate,"text-red-700":this.playbackRate<1,"opacity-50":1===this.playbackRate},onclick:function(){t.UPDATE_PLAYBACK_RATE(t.playbackRates[t.playbackRates.indexOf(t.playbackRate)+1]?t.playbackRates[t.playbackRates.indexOf(t.playbackRate)+1]:t.playbackRates[0])}},{icon:"MenuIcon",ifShow:!0,classes:{"focus:outline-none":!0},onclick:function(){t.$router.push("/"),t.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(0)}},{ifShow:!0,additionnalInfo:{content:this.formattedTimecode},onclick:function(){}}]}},Object(o.c)(["currentTimecode","currentChapter","previousChapter","nextChapter","currentLine","playbackRate","playbackRates","previousLine","nextLine","userTimeRequest","sound","playback","anchors","loopVersCount","currentLoopVersCount","loopChapterCount","canPlay","currentLoopChapterCount"])),{},{formattedTimecode:function(){var time=new Date(1e3*this.currentTimecode);return new Intl.DateTimeFormat("ar-EG",{nu:"arab",minute:"2-digit",second:"2-digit"}).format(time)}}),methods:l(l({},Object(o.b)(["UPDATE_TIME_LINES_AND_CHAPTERS"])),Object(o.d)(["UPDATE_SOUND","UPDATE_PLAYBACK","UPDATE_PLAYBACK_RATE","UPDATE_USER_TIME_REQUEST","UPDATE_CURRENT_LOOP_VERS_COUNT","UPDATE_CURRENT_LOOP_CHAPTER_COUNT"]))},f=n(46),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed sm:right-0 w-full bottom-0 sm:w-auto"},[n("div",{staticClass:"rounded-tl-xl bg-gray-200 p-4"},[n("div",{staticClass:"flex sm:flex-col sm:space-y-4 justify-around"},t._l(t.controls,(function(e,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.ifShow,expression:"e.ifShow"}],key:i,staticClass:"rounded-md text-gray-600 flex text-2xl font-extrabold focus:outline-none"},[n("button",{class:e.classes,attrs:{type:"button",disabled:e.disabled},on:{click:e.onclick}},[n(e.icon,{tag:"component"}),t._v(" "),e.additionnalInfo&&1!==e.additionnalInfo.content?n("span",{staticClass:"block py-0 text-xs",class:e.additionnalInfo.classes},[t._v(t._s(e.additionnalInfo.content))]):t._e()],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n(318)},321:function(t,e,n){var r=n(50)(!1);r.push([t.i,'div :not(.current-line)>.red{color:#f56565}.vers>div:after{content:"";display:inline-block;width:100%;height:2rem}@media print{.d-print-none{display:none!important}.title{page-break-after:avoid}}',""]),t.exports=r},325:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(31),n(47),n(27),n(48);var r=n(3),o=(n(317),n(58));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{chapters:{type:Array,default:null,required:!0},currentLine:{type:Object,default:null,required:!1},currentTimecode:{type:Number,default:null,required:!1},secondHalfStartTime:{type:Number,default:null,required:!1},userTimeRequest:{type:Number,default:null,required:!1}},data:function(){return{versTdClasses:{"text-gray-900":!0,"sm:text-3xl":!0,"text-lg":!0,"text-justify":!0,"hover:text-red-500":!0,"print:overflow-hidden":!0,"select-none":!0,poeme:!0},swipeLeft:!1,swipeRight:!1}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)(["UPDATE_USER_TIME_REQUEST"]))},d=(n(320),n(46)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen"},[t._l(t.chapters,(function(e,i){return n("div",{key:i,staticClass:"grid grid-cols-2 place-content-center"},[n("div",{staticClass:"col-span-2"},[n("h1",{staticClass:"font-body text-center title text-3xl text-gray-700 sm:text-5xl py-10 pb-20 print:pt-0",attrs:{"data-starttime":e.startTime}},[t._v("\n        "+t._s(e.content)+"\n      ")])]),t._v(" "),n("div",{staticClass:"col-span-2 space-y-4  mx-auto"},t._l(e.vers,(function(e){return n("div",{key:e.id,staticClass:"vers font-body cursor-pointer transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110 focus:-translate-y-1",class:{"scale-105":e.id===t.currentLine.id}},[n("div",{directives:[{name:"touch",rawName:"v-touch:longtap",value:t.longtapHandler,expression:"longtapHandler",arg:"longtap"}],class:Object.assign({},{"text-red-500 current-line":e.id===t.currentLine.id&&t.currentTimecode<t.secondHalfStartTime},t.versTdClasses),attrs:{"data-startTime":e.startTime,"data-start":e.startTime},domProps:{innerHTML:t._s(e.content.split("-")[0])},on:{click:function(n){return t.UPDATE_USER_TIME_REQUEST(e.startTime)}}}),t._v(" "),n("div",{class:Object.assign({},{"text-red-500 current-line":e.id===t.currentLine.id&&t.currentTimecode>t.secondHalfStartTime},t.versTdClasses),attrs:{"data-start":e.startTime},domProps:{innerHTML:t._s(e.content.split("-")[1])}})])})),0)])})),t._v(" "),n("PlaybackControl",{staticClass:"d-print-none",attrs:{time:t.userTimeRequest}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PlaybackControl:n(319).default})}}]);