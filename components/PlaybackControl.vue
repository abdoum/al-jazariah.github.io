<template>
  <div>
    <div
      class="sticky sm:fixed bottom-0 right-0 w-full sm:w-auto bg-gray-800 overflow-auto"
      v-show="isVisible"
    >
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
              v-touch:longtap="e.longtapHandler"
              v-touch-options="{ disableClick: true }"
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
              hidden: !this.canPlay,
              'animate-pulse text-red-500 shadow-xl': this.canPlay,

              'focus:outline-none focus:text-red-500': true
            },
            onclick: () => this.UPDATE_PLAYBACK(!this.playback)
          },
          {
            icon: 'PauseIcon',
            ifShow: this.playback,

            title: 'وقوف مؤقت',
            classes: {
              'text-red-500 shadow-xl': this.playback,

              'focus:outline-none focus:text-red-500': true
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
              'focus:outline-none focus:text-red-500': true
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
              'focus:outline-none focus:text-red-500': true
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
              'text-red-500': !this.sound,
              'focus:outline-none': true
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
              classes: [
                { 'text-red-500 select-none': this.currentLoopChapterCount > 1 }
              ]
            },
            classes: {
              'rounded-2xl': this.currentLoopChapterCount > 1,
              'focus:outline-none': true,
              'text-red-500': this.currentLoopChapterCount > 1,
              'opacity-50': this.currentLoopChapterCount === 1
            },
            onclick: () =>
              this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(
                this.loopChapterCount[this.currentLoopChapterCount]
              ),
            longtapHandler: () => {
              this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(this.loopChapterCount[0]);
            }
          },
          {
            icon: 'SpeedIcon',
            ifShow: true,
            title: 'تغيير السرعة',
            additionnalInfo: {
              content: this.playbackRate === 1 ? 'OFF' : this.playbackRate
            },
            classes: {
              'rounded-2xl text-red-500 select-none': this.playbackRate !== 1,
              'focus:outline-none': true,
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
            },
            longtapHandler: () => {
              this.UPDATE_PLAYBACK_RATE(this.playbackRates[1]);
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
              'focus:outline-none focus:text-red-500': true
            },
            onclick: () => {
              this.UPDATE_INDEX_MODAL(!this.indexModal);
            }
          },
          {
            ifShow: true,
            classes: {
              'focus:outline-none select-none cursor-not-allowed:': true
            },
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
    },
    mounted() {
      this.isVisible = true;
    }
  };
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    translate: translateX(0px);
  }
</style>
