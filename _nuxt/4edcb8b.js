(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{316:function(t,e,r){"use strict";var n=r(11),o=r(5),c=r(93),l=r(19),h=r(14),f=r(49),d=r(208),y=r(68),E=r(6),A=r(70),T=r(69).f,P=r(38).f,_=r(18).f,m=r(209).trim,N="Number",O=o.Number,C=O.prototype,w=f(A(C))==N,R=function(t){var e,r,n,o,c,l,h,code,f=y(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=m(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(c(N,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var k,U=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof U&&(w?E((function(){C.valueOf.call(r)})):f(r)!=N)?d(new O(R(e)),r,U):R(e)},D=n?T(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),v=0;D.length>v;v++)h(O,k=D[v])&&!h(U,k)&&_(U,k,P(O,k));U.prototype=C,C.constructor=U,l(o,N,U)}},323:function(t,e,r){"use strict";r.r(e);r(43),r(23),r(47),r(26),r(48);var n=r(2),o=(r(316),r(30),r(57));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:{time:{type:Number,default:40,required:!1}},data:function(){return{timecode:40}},computed:l(l({audio:function(){return this.$refs.audio}},Object(o.c)(["sound","playback","currentChapter","userTimeRequest","currentTimecode","nextChapter","currentLine","previousChapter","currentLoopVersCount","loopChapterCount","currentLoopChapterCount","playbackRate","playbackRates","canPlay"])),{},{nextLoopTime:{get:function(){return this.nextChapter.startTime},set:function(t){return t}}}),mounted:function(){var t=this;this.audio.playbackRate=this.playbackRate,this.audio.currentTime=this.userTimeRequest,this.audio.muted=!this.audio,this.audio.addEventListener("timeupdate",(function(e){t.$data.timecode=e.target.currentTime,t.UPDATE_CURRENT_LINE(),t.UPDATE_TIMECODE(e.target.currentTime),t.audio.addEventListener("canplay",(function(){t.UPDATE_CAN_PLAY(!0)}))}))},watch:{time:function(t){this.playAt(t)},playback:function(){this.playback?this.play():this.pause()},playbackRate:function(){this.audio.playbackRate=this.playbackRate},sound:function(){this.audio.muted=!this.sound}},methods:l(l({play:function(){this.audio.play()},pause:function(){this.audio.pause()},playAt:function(t){this.audio.currentTime=t,this.audio._startTime=t,this.playback&&this.play()},controlPlayback:function(t){var e=this;switch(t.srcKey){case"space":this.UPDATE_PLAYBACK(!this.playback);break;case"l":this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(this.loopChapterCount[this.currentLoopChapterCount||1]);break;case"m":this.UPDATE_SOUND(!this.sound);break;case"c":var time=this.timecode,r=new Date(1e3*time).toISOString().substr(11,12);this.copy(r),this.audio.pause(),this.notifyMe(r);break;case"pageup":var n=this.playbackRates.filter((function(t){return t>e.playbackRate}));n=n.length>0?n[0]:this.playbackRate,this.UPDATE_PLAYBACK_RATE(n);break;case"pagedown":var o=this.playbackRates.filter((function(t){return t<e.playbackRate}));o=o.length>0?o[o.length-1]:this.playbackRate,this.UPDATE_PLAYBACK_RATE(o)}}},Object(o.d)(["UPDATE_PLAYBACK","UPDATE_TIMECODE","UPDATE_LOOP_CHAPTER","UPDATE_LOOP_VERS","UPDATE_SOUND","UPDATE_CURRENT_LINE","UPDATE_CURRENT_LOOP_CHAPTER_COUNT","UPDATE_CURRENT_LOOP_VERS_COUNT","UPDATE_CAN_PLAY","UPDATE_PLAYBACK_RATE"])),{},{copy:function(text){var t=this;navigator.clipboard.writeText(text).then((function(){t.message="Code copied to clipboard."})).catch((function(e){t.message="Sorry, unable to copy to clipboard."}))},notifyMe:function(text){if(!("Notification"in window))return!1;if("granted"===Notification.permission)new Notification(text);else"denied"!==Notification.permission&&Notification.requestPermission().then((function(t){if("granted"===t)new Notification(text)}))}})},f=r(46),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{ctrlup:["ctrl","arrowup"],ctrldown:["ctrl","arrowdown"],l:["l"],m:["m"],c:["c"],pagedown:["pagedown"],pageup:["pageup"],space:["space"]},expression:"{\n    ctrlup: ['ctrl', 'arrowup'],\n    ctrldown: ['ctrl', 'arrowdown'],\n    l: ['l'],\n    m: ['m'],\n    c: ['c'],\n    pagedown: ['pagedown'],\n    pageup: ['pageup'],\n    space: ['space']\n  }"}],on:{shortkey:t.controlPlayback}},[r("audio",{ref:"audio",staticClass:"poeme",attrs:{src:"jaz.ogg",type:"audio/ogg",preload:"auto"}})])}),[],!1,null,null,null);e.default=component.exports}}]);