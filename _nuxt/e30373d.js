(window.webpackJsonp=window.webpackJsonp||[]).push([[18,11,16,17],{314:function(t,e,r){"use strict";var n=r(11),o=r(5),c=r(93),l=r(19),h=r(14),d=r(49),f=r(206),T=r(68),E=r(6),m=r(70),C=r(69).f,_=r(38).f,y=r(18).f,P=r(207).trim,A="Number",v=o.Number,O=v.prototype,R=d(m(O))==A,w=function(t){var e,r,n,o,c,l,h,code,d=T(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=P(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(A,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var N,I=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof I&&(R?E((function(){O.valueOf.call(r)})):d(r)!=A)?f(new v(w(e)),r,I):w(e)},D=n?C(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;D.length>L;L++)h(v,N=D[L])&&!h(I,N)&&y(I,N,_(v,N));I.prototype=O,O.constructor=I,l(o,A,I)}},315:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("2b24fb00",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(30),r(47),r(26),r(48);var n=r(3),o=r(57);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{isVisible:!1}},computed:l(l({controls:function(){var t=this;return[{icon:"PlayIcon",ifShow:!this.playback,classes:{"text-yellow-800":this.playback,hidden:this.canPlay<3,"focus:outline-none":!0},onclick:function(){return t.UPDATE_PLAYBACK(!t.playback)}},{icon:"PauseIcon",ifShow:this.playback,classes:{"text-yellow-800":this.playback,"focus:outline-none":!0},onclick:function(){return t.UPDATE_PLAYBACK(!t.playback)}},{icon:"FastForwardIcon",ifShow:!0,disabled:!this.nextChapter,classes:{"opacity-50":!this.nextChapter,"focus:outline-none":!0},onclick:function(){t.UPDATE_TIME_LINES_AND_CHAPTERS(t.nextChapter.startTime),t.$router.push("/".concat(t.nextChapter.id))}},{icon:"RewindIcon",ifShow:!0,disabled:!!this.currentChapter&&0===this.currentChapter.id,classes:{"opacity-50":!!this.currentChapter&&0===this.currentChapter.id,"focus:outline-none":!0},onclick:function(){t.UPDATE_TIME_LINES_AND_CHAPTERS(t.previousChapter.startTime),t.$router.push("/".concat(t.previousChapter.id))}},{icon:"MuteIcon",ifShow:!0,classes:{"text-yellow-800":!this.sound},onclick:function(){return t.UPDATE_SOUND(!t.sound)}},{icon:"LoopIcon",ifShow:!0,additionnalInfo:{content:1===this.currentLoopChapterCount?"OFF":this.currentLoopChapterCount,classes:[{"text-indigo-700":this.currentLoopChapterCount>1}]},classes:{"bg-indigo-200":this.currentLoopChapterCount>1,"rounded-2xl":this.currentLoopChapterCount>1,"focus:outline-none":!0,"text-indigo-700":this.currentLoopChapterCount>1,"opacity-50":1===this.currentLoopChapterCount},onclick:function(){return t.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(t.loopChapterCount[t.currentLoopChapterCount])}},{icon:"SpeedIcon",ifShow:!0,additionnalInfo:{content:this.playbackRate,classes:[{"text-indigo-700":1!==this.playbackRate}]},classes:{"bg-indigo-200":1!==this.playbackRate,"rounded-2xl":1!==this.playbackRate,"focus:outline-none":!0,"text-indigo-700":1!==this.playbackRate,"text-red-700":this.playbackRate<1,"opacity-50":1===this.playbackRate},onclick:function(){t.UPDATE_PLAYBACK_RATE(t.playbackRates[t.playbackRates.indexOf(t.playbackRate)+1]?t.playbackRates[t.playbackRates.indexOf(t.playbackRate)+1]:t.playbackRates[0])}},{icon:"MenuIcon",ifShow:!0,classes:{"focus:outline-none":!0},onclick:function(){t.$router.push("/"),t.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(0)}},{ifShow:!0,additionnalInfo:{content:this.formattedTimecode},onclick:function(){}}]}},Object(o.c)(["currentTimecode","currentChapter","previousChapter","nextChapter","currentLine","playbackRate","playbackRates","previousLine","nextLine","userTimeRequest","sound","playback","anchors","loopVersCount","currentLoopVersCount","loopChapterCount","canPlay","currentLoopChapterCount"])),{},{formattedTimecode:function(){var time=new Date(1e3*this.currentTimecode);return new Intl.DateTimeFormat("ar-EG",{nu:"arab",minute:"2-digit",second:"2-digit"}).format(time)}}),methods:l(l({},Object(o.b)(["UPDATE_TIME_LINES_AND_CHAPTERS"])),Object(o.d)(["UPDATE_SOUND","UPDATE_PLAYBACK","UPDATE_PLAYBACK_RATE","UPDATE_USER_TIME_REQUEST","UPDATE_CURRENT_LOOP_VERS_COUNT","UPDATE_CURRENT_LOOP_CHAPTER_COUNT"]))},d=r(46),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed sm:right-0 w-full bottom-0 sm:w-auto"},[r("div",{staticClass:"rounded-tl-xl bg-gray-200 p-4"},[r("div",{staticClass:"flex sm:flex-col sm:space-y-4 justify-between"},t._l(t.controls,(function(e,i){return r("div",{key:i,staticClass:"rounded-md text-gray-600 flex text-2xl font-extrabold focus:outline-none"},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.ifShow,expression:"e.ifShow"}],class:e.classes,attrs:{type:"button",disabled:e.disabled},on:{click:e.onclick}},[r(e.icon,{tag:"component"}),t._v(" "),e.additionnalInfo&&1!==e.additionnalInfo.content?r("span",{staticClass:"block py-0 text-xs",class:e.additionnalInfo.classes},[t._v(t._s(e.additionnalInfo.content))]):t._e()],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,r){"use strict";r(315)},318:function(t,e,r){var n=r(50)(!1);n.push([t.i,'.red{color:#840032}.vers>div:after{content:"";display:inline-block;width:100%;height:2rem}@media print{.d-print-none{display:none!important}.title{page-break-after:avoid}}',""]),t.exports=n},321:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(47),r(26),r(48);var n=r(3),o=(r(314),r(30),r(57));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:{time:{type:Number,default:40,required:!1}},data:function(){return{timecode:40}},computed:l(l({audio:function(){return this.$refs.audio}},Object(o.c)(["sound","playback","currentChapter","userTimeRequest","currentTimecode","nextChapter","currentLine","previousChapter","currentLoopVersCount","loopChapterCount","currentLoopChapterCount","playbackRate","playbackRates","canPlay"])),{},{nextLoopTime:{get:function(){return this.nextChapter.startTime},set:function(t){return t}}}),mounted:function(){var t=this;this.audio.playbackRate=this.playbackRate,this.audio.currentTime=this.userTimeRequest,this.audio.muted=!this.audio,this.audio.addEventListener("timeupdate",(function(e){t.$data.timecode=e.target.currentTime,t.UPDATE_CURRENT_LINE(),t.UPDATE_TIMECODE(e.target.currentTime),t.audio.addEventListener("loadeddata",(function(){t.UPDATE_CAN_PLAY(t.audio.readyState)}))}))},watch:{time:function(t){this.playAt(t)},playback:function(){this.playback?this.play():this.pause()},playbackRate:function(){this.audio.playbackRate=this.playbackRate},sound:function(){this.audio.muted=!this.sound}},methods:l(l({play:function(){this.audio.play()},pause:function(){this.audio.pause()},playAt:function(t){this.audio.currentTime=t,this.audio._startTime=t,this.playback&&this.play()},controlPlayback:function(t){var e=this;switch(t.srcKey){case"space":this.UPDATE_PLAYBACK(!this.playback);break;case"l":this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(this.loopChapterCount[this.currentLoopChapterCount||1]);break;case"m":this.UPDATE_SOUND(!this.sound);break;case"c":var time=this.timecode,r=new Date(1e3*time).toISOString().substr(11,12);this.copy(r),this.audio.pause(),this.notifyMe(r);break;case"pageup":var n=this.playbackRates.filter((function(t){return t>e.playbackRate}));n=n.length>0?n[0]:this.playbackRate,this.UPDATE_PLAYBACK_RATE(n);break;case"pagedown":var o=this.playbackRates.filter((function(t){return t<e.playbackRate}));o=o.length>0?o[o.length-1]:this.playbackRate,this.UPDATE_PLAYBACK_RATE(o)}}},Object(o.d)(["UPDATE_PLAYBACK","UPDATE_TIMECODE","UPDATE_LOOP_CHAPTER","UPDATE_LOOP_VERS","UPDATE_SOUND","UPDATE_CURRENT_LINE","UPDATE_CURRENT_LOOP_CHAPTER_COUNT","UPDATE_CURRENT_LOOP_VERS_COUNT","UPDATE_CAN_PLAY","UPDATE_PLAYBACK_RATE"])),{},{copy:function(text){var t=this;navigator.clipboard.writeText(text).then((function(){t.message="Code copied to clipboard."})).catch((function(e){t.message="Sorry, unable to copy to clipboard."}))},notifyMe:function(text){if(!("Notification"in window))return!1;if("granted"===Notification.permission)new Notification(text);else"denied"!==Notification.permission&&Notification.requestPermission().then((function(t){if("granted"===t)new Notification(text)}))}})},d=r(46),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{ctrlup:["ctrl","arrowup"],ctrldown:["ctrl","arrowdown"],l:["l"],m:["m"],c:["c"],pagedown:["pagedown"],pageup:["pageup"],space:["space"]},expression:"{\n    ctrlup: ['ctrl', 'arrowup'],\n    ctrldown: ['ctrl', 'arrowdown'],\n    l: ['l'],\n    m: ['m'],\n    c: ['c'],\n    pagedown: ['pagedown'],\n    pageup: ['pageup'],\n    space: ['space']\n  }"}],on:{shortkey:t.controlPlayback}},[r("audio",{ref:"audio",staticClass:"poeme",attrs:{src:"jaz.ogg",type:"audio/ogg",crossorigin:"anonymous","data-keepplaying":""}})])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,r){"use strict";r.r(e);r(314);var n={props:{chapters:{type:Array,default:null,required:!0},currentLine:{type:Object,default:null,required:!1},currentTimecode:{type:Number,default:null,required:!1},secondHalfStartTime:{type:Number,default:null,required:!1},userTimeRequest:{type:Number,default:null,required:!1}},data:function(){return{versTdClasses:{"text-gray-900":!0,"sm:text-3xl":!0,"text-lg":!0,"text-justify":!0,"print:overflow-hidden":!0,"select-all":!0,poeme:!0}}}},o=(r(317),r(46)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[t._l(t.chapters,(function(e,i){return r("div",{key:i,staticClass:"grid grid-cols-2 place-content-center"},[r("div",{staticClass:"col-span-2"},[r("h1",{staticClass:"font-body text-center title text-3xl text-gray-700 sm:text-5xl py-10 pb-20 print:pt-0",attrs:{"data-starttime":e.startTime}},[t._v("\n        "+t._s(e.content)+"\n      ")])]),t._v(" "),r("div",{staticClass:"col-span-2 space-y-4  mx-auto"},t._l(e.vers,(function(e){return r("div",{key:e.id,staticClass:"vers font-body cursor-pointer transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-110 focus:-translate-y-1",class:{"scale-105":e.id===t.currentLine.id}},[r("div",{class:Object.assign({},{"text-blue-600":e.id===t.currentLine.id&&t.currentTimecode<t.secondHalfStartTime},t.versTdClasses),attrs:{"data-startTime":e.startTime,"data-start":e.startTime},domProps:{innerHTML:t._s(e.content.split("-")[0])}}),t._v(" "),r("div",{class:Object.assign({},{"text-blue-600":e.id===t.currentLine.id&&t.currentTimecode>t.secondHalfStartTime},t.versTdClasses),attrs:{"data-start":e.startTime},domProps:{innerHTML:t._s(e.content.split("-")[1])}})])})),0)])})),t._v(" "),r("PlaybackControl",{staticClass:"d-print-none",attrs:{time:t.userTimeRequest}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PlaybackControl:r(316).default})},325:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTAgMTlsLTctN20wIDBsNy03bS03IDdoMTgiIC8+Cjwvc3ZnPg=="},341:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(30),r(47),r(26),r(48);var n=r(3),o=r(7),c=(r(94),r(9),r(71),r(37),r(57));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{left:r(325)}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=parseInt(n.id),e.next=4,r("poeme").fetch();case 4:return c=e.sent,e.next=7,r("poeme").where({id:o}).fetch();case 7:return l=e.sent,e.abrupt("return",{displayedChapter:l,poeme:c});case 9:case"end":return e.stop()}}),e)})))()},computed:h(h({},Object(c.c)(["currentTimecode","currentChapter","currentLoopChapterCount","previousChapter","nextChapter","currentLine","previousLine","nextLine","playback","chapters","userTimeRequest","anchors"])),{},{secondHalfStartTime:function(){if(this.nextLine){var t=(this.nextLine.startTime-this.currentLine.startTime)/2;return this.currentLine.startTime+t}},currentChapter:function(){var t=this;return this.poeme.find((function(e){return e.id===parseInt(t.$route.params.id)}))},previousChapter:function(){var t=this,e=this.anchors.indexOf(this.$route.params.id.toString())-1;return this.poeme.find((function(r){return r.id===parseInt(t.anchors[e])}))}}),watch:{currentTimecode:function(){var t=this,e=this.poeme.find((function(e){return e.id===parseInt(t.anchors[t.anchors.indexOf(t.$route.params.id.toString())+1])}));e&&this.playback&&(this.currentTimecode>e.startTime&&1===this.currentLoopChapterCount?this.gotToNextChapter():this.currentTimecode>e.startTime&&this.currentLoopChapterCount>1&&(this.UPDATE_TIME_LINES_AND_CHAPTERS(this.currentChapter.startTime),this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(this.currentLoopChapterCount-1)))}},methods:h(h(h({onSwipe:function(t){2===t.direction?(this.$refs.left.classList.remove("hidden"),this.gotToNextChapter()):4===t.direction&&(this.$refs.right.classList.remove("hidden"),this.gotToPreviousChapter())},gotToNextChapter:function(){var t=this,e=this.anchors.indexOf(this.$route.params.id.toString())+1;if(this.anchors[e]&&0!==e){var r=this.poeme.find((function(e){return e.id===parseInt(t.$route.params.id)}));this.UPDATE_TIME_LINES_AND_CHAPTERS(r.startTime),this.$router.push(this.anchors[e])}else this.$router.push("/")},gotToPreviousChapter:function(){var t=this;this.UPDATE_PLAYBACK(!1);var e=this.anchors.indexOf(this.$route.params.id.toString())-1;if(this.anchors[e]&&0!==e){var r=this.poeme.find((function(e){return e.id===parseInt(t.$route.params.id)}));this.UPDATE_TIME_LINES_AND_CHAPTERS(r.startTime),this.$router.push(this.anchors[e])}else this.$router.push("/")}},Object(c.b)(["UPDATE_TIME_LINES_AND_CHAPTERS"])),Object(c.d)(["UPDATE_CURRENT_LOOP_CHAPTER_COUNT","UPDATE_CURRENT_LINE","UPDATE_NEXT_LINE","UPDATE_PREVIOUS_LINE","UPDATE_TIMECODE","UPDATE_PLAYBACK","UPDATE_USER_TIME_REQUEST","SET_POEME"])),{},{handleTime:function(t){switch(t.srcKey){case"left":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousLine.startTime);break;case"right":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.nextLine.startTime);break;case"up":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousChapter.startTime);break;case"down":this.UPADTE_TIME_LINES_AND_CHAPTERS(this.nextChapter.startTime)}}}),created:function(){this.SET_POEME(this.poeme)},mounted:function(){this.UPDATE_TIME_LINES_AND_CHAPTERS(this.currentChapter.startTime),this.nextRunningChapterStart=this.nextChapter.startTime,this.UPDATE_CURRENT_LINE(this.currentChapter.vers[0]),this.UPDATE_NEXT_LINE(this.currentChapter.vers[1]),this.previousChapter&&this.UPDATE_PREVIOUS_LINE(this.previousChapter.vers[this.previousChapter.vers.length-1]),this.UPDATE_TIMECODE(this.currentChapter.vers[0].startTime),this.UPDATE_USER_TIME_REQUEST(this.currentChapter.vers[0].startTime)}},f=r(46),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-screen overflow-auto"},[r("Video",{attrs:{time:t.userTimeRequest}}),t._v(" "),r("Vers",{directives:[{name:"hammer",rawName:"v-hammer:swipe",value:function(e){return t.onSwipe(e)},expression:"(event) => onSwipe(event)",arg:"swipe"}],attrs:{chapters:t.displayedChapter,currentLine:t.currentLine,currentTimecode:t.currentTimecode,secondHalfStartTime:t.secondHalfStartTime,userTimeRequest:t.userTimeRequest}}),t._v(" "),r("div",{ref:"left",staticClass:"absolute left-50 top-0\n  w-1/2 hidden"},[r("svg",{staticClass:"text-gray-200",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"}})])]),t._v(" "),r("div",{ref:"right",staticClass:"absolute left-0 top-0\n  w-1/2 h-screen hidden"},[r("svg",{staticClass:"text-gray-200",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Video:r(321).default,Vers:r(322).default})}}]);