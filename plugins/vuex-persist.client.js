import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  new VuexPersistence({
    // yours options
    reducer: (state) => ({
      currentTimecode: state.currentTimecode,
      userTimeRequest: state.userTimeRequest,
      currentLine: state.currentLine,
      previousLine: state.previousLine,
      nextLine: state.nextLine,
      playback: state.playback,
      currentLoopChapterCount: state.currentLoopChapterCount,
      currentLoopVersCount: state.currentLoopVersCount,
      canPlay: state.canPlay,
      sound: state.sound,
    })
  }).plugin(store);
};
