<template>
  <div>
    <Video :time="userTimeRequest" />
    <Vers
      :chapters="displayedChapter"
      :currentLine="currentLine"
      :currentTimecode="currentTimecode"
      :secondHalfStartTime="secondHalfStartTime"
      :userTimeRequest="userTimeRequest"
      v-hammer:swipe="event => onSwipe(event)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  async asyncData({ $content, params }) {
    const currentID = parseInt(params.id);
    const poeme = await $content("poeme").fetch();
    const displayedChapter = await $content("poeme")
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
      "currentTimecode",
      "currentChapter",
      "currentLoopChapterCount",
      "previousChapter",
      "nextChapter",
      "currentLine",
      "previousLine",
      "nextLine",
      "playback",
      "chapters",
      "userTimeRequest",
      "anchors"
    ]),
    secondHalfStartTime() {
      if (this.nextLine) {
        const firstDuration =
          (this.nextLine.startTime - this.currentLine.startTime) / 2;
        const secondPartStartTime = this.currentLine.startTime + firstDuration;
        return secondPartStartTime;
      }
    },
    currentChapter() {
      return this.poeme.find(e => e.id === parseInt(this.$route.params.id));
    },
    previousChapter() {
      const wantedID =
        this.anchors.indexOf(this.$route.params.id.toString()) - 1;
      return this.poeme.find(e => e.id === parseInt(this.anchors[wantedID]));
    }
  },
  watch: {
    currentTimecode() {
      const nextStartTime = this.poeme.find(
        e =>
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
      /*       DIRECTION_NONE	1
    DIRECTION_LEFT	2
    DIRECTION_RIGHT	4
    DIRECTION_UP	8
    DIRECTION_DOWN	16
    DIRECTION_HORIZONTAL	6
    DIRECTION_VERTICAL	24
    DIRECTION_ALL	30
    */

      if (event.direction === 2) {
        this.gotToNextChapter();
      } else if (event.direction === 4) {
        this.gotToPreviousChapter();
      }
    },
    gotToNextChapter() {
      const wantedID =
        this.anchors.indexOf(this.$route.params.id.toString()) + 1;
      if (!this.anchors[wantedID] || wantedID === 0) {
        this.$router.push("/");
        return;
      }
      const nextChapterStartTime = this.poeme.find(
        e => e.id === parseInt(this.$route.params.id)
      );
      this.UPDATE_TIME_LINES_AND_CHAPTERS(nextChapterStartTime.startTime);
      this.$router.push(this.anchors[wantedID]);
    },
    gotToPreviousChapter() {
      this.UPDATE_PLAYBACK(false);
      const wantedID =
        this.anchors.indexOf(this.$route.params.id.toString()) - 1;

      if (!this.anchors[wantedID] || wantedID === 0) {
        this.$router.push("/");
        return;
      }

      const previousChapterStartTime = this.poeme.find(
        e => e.id === parseInt(this.$route.params.id)
      );
      this.UPDATE_TIME_LINES_AND_CHAPTERS(previousChapterStartTime.startTime);
      this.$router.push(this.anchors[wantedID]);
    },
    ...mapActions(["UPDATE_TIME_LINES_AND_CHAPTERS"]),
    ...mapMutations([
      "UPDATE_CURRENT_LOOP_CHAPTER_COUNT",
      "UPDATE_CURRENT_LINE",
      "UPDATE_NEXT_LINE",
      "UPDATE_PREVIOUS_LINE",
      "UPDATE_TIMECODE",
      "UPDATE_PLAYBACK",
      "UPDATE_USER_TIME_REQUEST",
      "SET_POEME"
    ]),
    handleTime($event) {
      switch ($event.srcKey) {
        case "left":
          this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousLine.startTime);
          break;
        case "right":
          this.UPADTE_TIME_LINES_AND_CHAPTERS(this.nextLine.startTime);
          break;
        case "up":
          this.UPADTE_TIME_LINES_AND_CHAPTERS(this.previousChapter.startTime);
          break;
        case "down":
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
