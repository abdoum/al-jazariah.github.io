<template>
  <div class="sticky sm:fixed sm:right-0 w-full bottom-0 sm:w-auto">
    <div class="rounded-tl-xl bg-gray-200 shadow-l-2xl p-4">
      <div class="flex sm:flex-col sm:space-y-4 justify-around">
        <div
          class="rounded-md text-gray-600 flex text-2xl font-extrabold focus:outline-none"
          v-for="(e, i) in controls"
          :key="i"
          v-show="e.ifShow"
          :title="e.title"
        >
          <button
            type="button"
            :class="e.classes"
            @click="e.onclick"
            :disabled="e.disabled"
          >
            <component :is="e.icon"></component>
            <span
              class="block py-0 text-xs"
              v-if="e.additionnalInfo && e.additionnalInfo.content !== 1"
              :class="e.additionnalInfo.classes"
              >{{ e.additionnalInfo.content }}</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
  export default {
    data() {
      return {
        isVisible: false
      };
    },
    computed: {
      controls() {
        const elements = [
          {
            icon: 'PlayIcon',
            ifShow: !this.playback,
            title: 'تشغيل',
            classes: {
              'text-yellow-800': this.playback,
              hidden: !this.canPlay,
              'animate-pulse text-indigo-700 shadow-xl': this.canPlay,
              'focus:outline-none': true
            },
            onclick: () => this.UPDATE_PLAYBACK(!this.playback)
          },
          {
            icon: 'PauseIcon',
            ifShow: this.playback,
            title: 'وقوف مؤقت',
            classes: {
              'text-indigo-700 shadow-xl': this.playback,
              'focus:outline-none': true
            },
            onclick: () => this.UPDATE_PLAYBACK(!this.playback)
          },
          {
            icon: 'FastForwardIcon',
            ifShow: true,
            title: this.nextChapter.content,
            disabled: !this.nextChapter,
            classes: {
              'opacity-50': !this.nextChapter,
              'focus:outline-none': true
            },
            onclick: () => {
              this.UPDATE_TIME_LINES_AND_CHAPTERS(this.nextChapter.startTime);
              this.$router.push(`/${this.nextChapter.id}`);
            }
          },
          {
            icon: 'RewindIcon',
            ifShow: true,
            title: this.previousChapter.content,
            disabled: this.currentChapter
              ? this.currentChapter.id === 0
              : false,
            classes: {
              'opacity-50': this.currentChapter
                ? this.currentChapter.id === 0
                : false,
              'focus:outline-none': true
            },
            onclick: () => {
              this.UPDATE_TIME_LINES_AND_CHAPTERS(
                this.previousChapter.startTime
              );
              this.$router.push(`/${this.previousChapter.id}`);
            }
          },
          {
            icon: 'MuteIcon',
            ifShow: true,
            title: 'كنم الصوت',
            classes: {
              'text-indigo-700': !this.sound
            },
            onclick: () => this.UPDATE_SOUND(!this.sound)
          },
          {
            icon: 'LoopIcon',
            ifShow: true,
            title: 'تكرار',
            additionnalInfo: {
              content:
                this.currentLoopChapterCount === 1
                  ? 'OFF'
                  : this.currentLoopChapterCount,
              classes: [{ 'text-indigo-700': this.currentLoopChapterCount > 1 }]
            },
            classes: {
              'bg-indigo-200': this.currentLoopChapterCount > 1,
              'rounded-2xl': this.currentLoopChapterCount > 1,
              'focus:outline-none': true,
              'text-indigo-700': this.currentLoopChapterCount > 1,
              'opacity-50': this.currentLoopChapterCount === 1
            },
            onclick: () =>
              this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(
                this.loopChapterCount[this.currentLoopChapterCount]
              )
          },
          {
            icon: 'SpeedIcon',
            ifShow: true,
            title: 'تغيير السرعة',
            additionnalInfo: {
              content: this.playbackRate,
              classes: [{ 'text-indigo-700': this.playbackRate !== 1 }]
            },
            classes: {
              'bg-indigo-200': this.playbackRate !== 1,
              'rounded-2xl': this.playbackRate !== 1,
              'focus:outline-none': true,
              'text-indigo-700': this.playbackRate !== 1,
              'opacity-50': this.playbackRate === 1
            },
            onclick: () => {
              this.UPDATE_PLAYBACK_RATE(
                this.playbackRates[
                  this.playbackRates.indexOf(this.playbackRate) + 1
                ]
                  ? this.playbackRates[
                      this.playbackRates.indexOf(this.playbackRate) + 1
                    ]
                  : this.playbackRates[0]
              );
            }
          },

          // {
          //   icon: "LoopIcon",
          //   ifShow: true,
          //   additionnalInfo: {
          //     content: this.currentLoopVersCount,
          //     classes: { "animate-pulse": this.currentLoopVersCount > 1 }
          //   },
          //   classes: {
          //     "text-red-700": this.currentLoopVersCount > 1,
          //     "bg-red-200": this.currentLoopVersCount > 1,
          //     "rounded-2xl": this.currentLoopVersCount > 1,
          //     "focus:outline-none": true,
          //     "opacity-50": this.currentLoopVersCount < 2
          //   },
          //   onclick: () =>
          //     this.UPDATE_CURRENT_LOOP_VERS_COUNT(
          //       this.loopVersCount[this.currentLoopVersCount || 0]
          //     )
          // }
          {
            icon: 'MenuIcon',
            ifShow: true,
            title: 'الفهرس',
            classes: {
              'focus:outline-none': true
            },
            onclick: () => {
            //   this.$router.push('/');
            console.log("🚀 ~ file: PlaybackControl.vue ~ line 180 ~ controls ~ this.indexModal", this.indexModal)
            this.UPDATE_INDEX_MODAL(!this.indexModal)
            console.log("🚀 ~ file: PlaybackControl.vue ~ line 180 ~ controls ~ this.indexModal", this.indexModal)
              this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(0);
            }
          },
          {
            ifShow: true,
            additionnalInfo: {
              content: this.formattedTimecode
            },
            onclick: () => {
              return;
            }
          }
        ];
        return elements;
      },
      ...mapGetters([
        'currentTimecode',
        'currentChapter',
        'previousChapter',
        'nextChapter',
        'currentLine',
        'playbackRate',
        'playbackRates',
        'previousLine',
        'nextLine',
        'userTimeRequest',
        'sound',
        'playback',
        'anchors',
        'loopVersCount',
        'currentLoopVersCount',
        'loopChapterCount',
        'canPlay',
        'indexModal',
        'currentLoopChapterCount'
      ]),
      formattedTimecode() {
        //  const time = new Date(this.currentTimecode * 1000).toISOString().substr(11, 12)
        const time = new Date(this.currentTimecode * 1000);
        const op = {
          nu: 'arab',
          minute: '2-digit',
          second: '2-digit'
        };
        return new Intl.DateTimeFormat('ar-EG', op).format(time);
      }
    },
    methods: {
      ...mapActions(['UPDATE_TIME_LINES_AND_CHAPTERS']),
      ...mapMutations([
        'UPDATE_SOUND',
        'UPDATE_PLAYBACK',
        'UPDATE_PLAYBACK_RATE',
        'UPDATE_USER_TIME_REQUEST',
        'UPDATE_CURRENT_LOOP_VERS_COUNT',
        'UPDATE_INDEX_MODAL',
        'UPDATE_CURRENT_LOOP_CHAPTER_COUNT'
      ])
    }
  };
</script>
