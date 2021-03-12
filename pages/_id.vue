<template>
  <div class="">
    <Video :time="userTimeRequest" />
    <Vers
      :chapters="displayedChapter"
      :currentLine="currentLine"
      :currentTimecode="currentTimecode"
      :secondHalfStartTime="secondHalfStartTime"
      :userTimeRequest="userTimeRequest"
      v-touch:swipe="onSwipe"
    />
    <div
      ref="left"
      class="absolute left-50 top-0
    w-1/2 hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="text-gray-200"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
    <div
      ref="right"
      class="absolute left-0 top-0
    w-1/2 h-screen hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="text-gray-200"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex';
  export default {
    data() {
      return {
        swipeLeft: false,
        swipeRight: false
      };
    },
    async asyncData({ $content, params }) {
      const currentID = parseInt(params.id);
      const poeme = await $content('poeme').fetch();
      const displayedChapter = await $content('poeme')
        .where({
          id: currentID
        })
        .fetch();

      return {
        displayedChapter,
        poeme
      };
    },
    computed: {
      ...mapGetters([
        'currentTimecode',
        'currentChapter',
        'currentLoopChapterCount',
        'previousChapter',
        'nextChapter',
        'currentLine',
        'previousLine',
        'nextLine',
        'playback',
        'chapters',
        'userTimeRequest',
        'anchors'
      ]),
      secondHalfStartTime() {
        if (this.nextLine) {
          const firstDuration =
            (this.nextLine.startTime - this.currentLine.startTime) / 2;
          const secondPartStartTime =
            this.currentLine.startTime + firstDuration;
          return secondPartStartTime;
        }
      },
      currentChapter() {
        return this.poeme.find((e) => e.id === parseInt(this.$route.params.id));
      },
      previousChapter() {
        const wantedID =
          this.anchors.indexOf(this.$route.params.id.toString()) - 1;
        return this.poeme.find(
          (e) => e.id === parseInt(this.anchors[wantedID])
        );
      }
    },
    watch: {
      currentTimecode() {
        const nextStartTime = this.poeme.find(
          (e) =>
            e.id ===
            parseInt(
              this.anchors[
                this.anchors.indexOf(this.$route.params.id.toString()) + 1
              ]
            )
        );
        if (nextStartTime && this.playback) {
          if (
            this.currentTimecode > nextStartTime.startTime &&
            this.currentLoopChapterCount === 1
          ) {
            this.gotToNextChapter();
          } else if (
            this.currentTimecode > nextStartTime.startTime &&
            this.currentLoopChapterCount > 1
          ) {
            this.UPDATE_TIME_LINES_AND_CHAPTERS(this.currentChapter.startTime);
            this.UPDATE_CURRENT_LOOP_CHAPTER_COUNT(
              this.currentLoopChapterCount - 1
            );
          }
        }
      }
    },
    methods: {
      onSwipe(event) {
        if (event === 'left') {
          this.swipeLeft = true;
          this.$refs.left.classList.remove('hidden');
          this.gotToNextChapter();
        } else if (event === 'right') {
          this.$refs.right.classList.remove('hidden');
          this.gotToPreviousChapter();
        }
      },
      gotToNextChapter() {
        const wantedID =
          this.anchors.indexOf(this.$route.params.id.toString()) + 1;
        if (!this.anchors[wantedID] || wantedID === 0) {
          this.$router.push('/');
          return;
        }
        const nextChapterStartTime = this.poeme.find(
          (e) => e.id === parseInt(this.$route.params.id)
        );
        this.UPDATE_TIME_LINES_AND_CHAPTERS(nextChapterStartTime.startTime);
        this.$router.push(this.anchors[wantedID]);
      },
      gotToPreviousChapter() {
        this.UPDATE_PLAYBACK(false);
        const wantedID =
          this.anchors.indexOf(this.$route.params.id.toString()) - 1;

        if (!this.anchors[wantedID] || wantedID === 0) {
          this.$router.push('/');
          return;
        }

        const previousChapterStartTime = this.poeme.find(
          (e) => e.id === parseInt(this.$route.params.id)
        );
        this.UPDATE_TIME_LINES_AND_CHAPTERS(previousChapterStartTime.startTime);
        this.$router.push(this.anchors[wantedID]);
      },
      ...mapActions(['UPDATE_TIME_LINES_AND_CHAPTERS']),
      ...mapMutations([
        'UPDATE_CURRENT_LOOP_CHAPTER_COUNT',
        'UPDATE_CURRENT_LINE',
        'UPDATE_NEXT_LINE',
        'UPDATE_PREVIOUS_LINE',
        'UPDATE_TIMECODE',
        'UPDATE_PLAYBACK',
        'UPDATE_USER_TIME_REQUEST',
        'SET_POEME'
      ]),
      handleTime($event) {
        switch ($event.srcKey) {
          case 'left':
            this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousLine.startTime);
            break;
          case 'right':
            this.UPADTE_TIME_LINES_AND_CHAPTERS(this.nextLine.startTime);
            break;
          case 'up':
            this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousChapter.startTime);
            break;
          case 'down':
            this.UPADTE_TIME_LINES_AND_CHAPTERS(this.nextChapter.startTime);
            break;
        }
      }
    },
    created() {
      this.SET_POEME(this.poeme);
    },
    mounted() {
      this.UPDATE_TIME_LINES_AND_CHAPTERS(this.currentChapter.startTime);
      this.nextRunningChapterStart = this.nextChapter.startTime;
      this.UPDATE_CURRENT_LINE(this.currentChapter.vers[0]);
      this.UPDATE_NEXT_LINE(this.currentChapter.vers[1]);
      if (this.previousChapter) {
        this.UPDATE_PREVIOUS_LINE(
          this.previousChapter.vers[this.previousChapter.vers.length - 1]
        );
      }
      this.UPDATE_TIMECODE(this.currentChapter.vers[0].startTime);
      this.UPDATE_USER_TIME_REQUEST(this.currentChapter.vers[0].startTime);
    }
  };
</script>
