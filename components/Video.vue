<template>
  <div
    v-shortkey="{
      ctrlup: ['ctrl', 'arrowup'],
      ctrldown: ['ctrl', 'arrowdown'],
      l: ['l'],
      m: ['m'],
      c: ['c'],
      pagedown: ['pagedown'],
      pageup: ['pageup'],
      space: ['space']
    }"
    @shortkey="controlPlayback"
  >
    <audio class="poeme" ref="audio" preload="auto">
      <!-- <source src="jaz.mp4" type="video/mp4" /> -->
      <source src="jaz.ogg" type="audio/ogg" codecs="vorbis" />
      >
      <source src="jaz.m4a" type="audio/mpeg" codecs="aac" />
      <source src="jaz.aac" type="audio/mpeg" codecs="aac" />
      <source src="jaz.mp3" type="audio/mpeg" codecs="mp3" />
      <p>
        المتصفح لا يتحمل قراءة الصوت لتحميل الملف
        <a href="jaz.mp3">انقر هنا</a>.
      </p>
    </audio>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    props: {
      time: {
        type: Number,
        default: 40,
        required: false
      }
    },
    data() {
      return {
        timecode: 40
      };
    },
    computed: {
      audio() {
        return this.$refs.audio;
      },
      ...mapGetters([
        'sound',
        'playback',
        'currentChapter',
        'userTimeRequest',
        'currentTimecode',
        'nextChapter',
        'currentLine',
        'previousChapter',
        'currentLoopVersCount',
        'loopChapterCount',
        'currentLoopChapterCount',
        'playbackRate',
        'playbackRates',
        'canPlay'
      ]),
      nextLoopTime: {
        get() {
          return this.nextChapter.startTime;
        },
        set(newValue) {
          return newValue;
        }
      }
    },
    mounted() {
      // if (this.playback) this.play();
      this.audio.playbackRate = this.playbackRate;
      this.audio.currentTime = this.userTimeRequest;
      this.audio.muted = !this.audio;
      // this.nextLoopTime = this.nextChapter.startTime;
      this.audio.addEventListener('timeupdate', ($event) => {
        this.$data.timecode = $event.target.currentTime;

        this.UPDATE_CURRENT_LINE();
        this.UPDATE_TIMECODE($event.target.currentTime);

        this.audio.addEventListener('canplay', () => {
          this.UPDATE_CAN_PLAY(true);
        });
        //   if (this.currentLoopChapterCount > 1) {
        //     if (
        //       this.$data.timecode >= this.nextLoopTime &&
        //       this.currentLoopChapterCount > 1
        //     ) {
        //       this.playAt(this.previousChapter.startTime);
        //       this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(
        //         this.currentLoopChapterCount - 1
        //       );
        //     }
        //   }
      });
    },
    watch: {
      time(newTime) {
        this.playAt(newTime);
      },
      playback() {
        if (this.playback) {
          this.play();
        } else {
          this.pause();
        }
      },
      // currentChapter() {
      //   if (
      //     this.currentLoopChapterCount < 2 ||
      //     this.currentChapter.startTime === 0
      //   ) {
      //     this.nextLoopTime = this.nextChapter.startTime;
      //   } else {
      //     this.nextLoopTime = this.currentChapter.startTime;
      //   }
      // },
      playbackRate() {
        this.audio.playbackRate = this.playbackRate;
      },
      sound() {
        this.audio.muted = !this.sound;
      }
    },
    methods: {
      play() {
        this.audio.play();
      },
      pause() {
        this.audio.pause();
      },
      playAt(newTime) {
        this.audio.currentTime = newTime;
        this.audio._startTime = newTime;
        if (this.playback) {
          this.play();
        }
      },
      // togglePlayback() {
      //   if (this.audio.paused) {
      //     this.UPDATE_PLAYBACK(true);
      //     this.play();
      //   } else {
      //     this.UPDATE_PLAYBACK(false);
      //     this.pause();
      //   }
      // },
      controlPlayback($event) {
        switch ($event.srcKey) {
          case 'space':
            this.UPDATE_PLAYBACK(!this.playback);
            break;
          case 'l':
            this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(
              this.loopChapterCount[this.currentLoopChapterCount || 1]
            );
            break;
          case 'm':
            this.UPDATE_SOUND(!this.sound);
            break;
          case 'c':
            const time = this.timecode;
            let clipContent = new Date(time * 1000)
              .toISOString()
              .substr(11, 12);
            this.copy(clipContent);
            this.audio.pause();
            this.notifyMe(clipContent);
            break;
          case 'pageup':
            let nextRate = this.playbackRates.filter(
              (e) => e > this.playbackRate
            );
            if (nextRate.length > 0) {
              nextRate = nextRate[0];
            } else {
              nextRate = this.playbackRate;
            }
            this.UPDATE_PLAYBACK_RATE(nextRate);
            break;
          case 'pagedown':
            let previousRate = this.playbackRates.filter(
              (e) => e < this.playbackRate
            );
            if (previousRate.length > 0) {
              previousRate = previousRate[previousRate.length - 1];
            } else {
              previousRate = this.playbackRate;
            }
            this.UPDATE_PLAYBACK_RATE(previousRate);
            break;
        }
      },
      ...mapMutations([
        'UPDATE_PLAYBACK',
        'UPDATE_TIMECODE',
        'UPDATE_LOOP_CHAPTER',
        'UPDATE_LOOP_VERS',
        'UPDATE_SOUND',
        'UPDATE_CURRENT_LINE',
        'UPDATE_CURRENT_LOOP_CHAPTER_COUNT',
        'UPDATE_CURRENT_LOOP_VERS_COUNT',
        'UPDATE_CAN_PLAY',
        'UPDATE_PLAYBACK_RATE'
      ]),
      copy(text) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            this.message = 'Code copied to clipboard.';
          })
          .catch((e) => {
            this.message = 'Sorry, unable to copy to clipboard.';
          });
      },
      notifyMe(text) {
        if (!('Notification' in window)) {
          return false;
        }
        if (Notification.permission === 'granted') {
          const notification = new Notification(text);
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              const notification = new Notification(text);
            }
          });
        }
      }
    }
  };
</script>
