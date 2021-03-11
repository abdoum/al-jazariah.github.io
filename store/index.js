import * as mutationTypes from "./mutation-types";
import * as actionTypes from "./action-types";

export const state = () => ({
  currentTimecode: 0,
  userTimeRequest: 0,
  currentLine: 0,
  previousLine: 0,
  nextLine: 1,
  poeme: null,
  playback: false,
  loopChapterCount: Array.from(Array(11).keys()).splice(1, 10),
  currentLoopChapterCount: 1,
  loopVersCount: Array.from(Array(11).keys()).splice(1, 10),
  currentLoopVersCount: 1,
  playbackRates: [0.75, 1, 1.25, 1.5, 1.75, 2],
  playbackRate: 1,
  canPlay: false,
  sound: true,
  index: null
});

export const mutations = {
  [mutationTypes.UPDATE_TIMECODE](state, newTimecode) {
    state.currentTimecode = newTimecode;
  },
  [mutationTypes.SET_POEME](state, payload) {
    state.poeme = payload;
  },
  [mutationTypes.UPDATE_USER_TIME_REQUEST](state, newTime) {
    state.userTimeRequest = newTime;
  },
  [mutationTypes.UPDATE_CURRENT_LINE](state, payload) {
    state.currentLine = payload;
  },
  [mutationTypes.UPDATE_NEXT_LINE](state, payload) {
    state.nextLine = payload;
  },
  [mutationTypes.UPDATE_PREVIOUS_LINE](state, payload) {
    state.previousLine = payload;
  },
  [mutationTypes.UPDATE_CURRENT_CHAPTER](state, payload) {
    state.previousLine = payload;
  },
  [mutationTypes.UPDATE_PLAYBACK](state, payload) {
    state.playback = payload;
  },
  [mutationTypes.UPDATE_CAN_PLAY](state, payload) {
    state.canPlay = payload;
  },
  [mutationTypes.UPDATE_CURRENT_LOOP_VERS_COUNT](state, payload) {
    if (payload) {
      state.currentLoopVersCount = payload;
    } else {
      state.currentLoopVersCount = 1;
    }
  },
  [mutationTypes.UPDATE_CURRENT_LOOP_CHAPTER_COUNT](state, payload) {
    if (payload) {
      state.currentLoopChapterCount = payload;
    } else {
      state.currentLoopChapterCount = 1;
    }
  },
  [mutationTypes.UPDATE_PLAYBACK_RATE](state, payload) {
    state.playbackRate = payload;
  },
  [mutationTypes.UPDATE_SOUND](state, payload) {
    state.sound = payload;
  },
  [mutationTypes.SET_INDEX](state, payload) {
    state.index = payload;
  }
};

export const actions = {
  [actionTypes.UPDATE_TIME_LINES_AND_CHAPTERS]({ commit, getters }, newTime) {
    commit("UPDATE_USER_TIME_REQUEST", newTime);
    commit("UPDATE_CURRENT_LINE", getters.currentLine);
    commit("UPDATE_NEXT_LINE", getters.nextLine);
    commit("UPDATE_PREVIOUS_LINE", getters.previousLine);
  }
};
export const getters = {
  currentLine: (state, getters) => {
    if (!state.poeme) return;
    const lines = getters.vers.filter(
      el => el.startTime <= getters.currentTimecode || el.id === 0
    );
    if (!lines) {
      return state.poeme[0];
    }
    return lines[lines.length - 1];
  },
  previousLine: (state, getters) => {
    if (!state.poeme) return 0;
    const lines = getters.vers.filter(
      el => el.id === getters.currentLine.id - 1
    );
    if (lines.length < 1) {
      return state.poeme[0];
    }
    return lines[0];
  },
  nextLine: (state, getters) => {
    if (!state.poeme) return 1;
    const lines = getters.vers.find(el => el.id === getters.currentLine.id + 1);
    if (!lines) {
      return;
    }
    return lines;
  },
  currentChapter: (state, getters) => {
    if (!state.poeme) return;
    const lines = getters.chapters.filter(
      el => el.startTime <= state.currentTimecode
    );
    return lines[lines.length - 1];
  },
  previousChapter: (state, getters) => {
    if (!getters.currentChapter) {
      return;
    }
    const lines = getters.chapters.filter(
      el => el.id < getters.currentChapter.id || el.id === 0
    );
    if (!lines) {
      return;
    }
    return lines[lines.length -1];
  },
  nextChapter: (state, getters) => {
    if (!getters.currentChapter) {
      return;
    }
    const chapter = getters.chapters.find(
      el => el.id > getters.currentChapter.id
    );
    if (!chapter) {
      return getters.currentChapter;
    }
    return chapter;
  },

  userTimeRequest: state => {
    return state.userTimeRequest;
  },
  poeme: state => {
    return state.poeme;
  },
  currentTimecode: state => {
    return state.currentTimecode;
  },
  playback: state => {
    return state.playback;
  },
  loopChapterCount: state => {
    return state.loopChapterCount;
  },
  currentLoopChapterCount: state => {
    return state.currentLoopChapterCount;
  },
  loopVersCount: state => {
    return state.loopVersCount;
  },
  currentLoopVersCount: state => {
    return state.currentLoopVersCount;
  },
  playbackRates: state => {
    return state.playbackRates;
  },
  playbackRate: state => {
    return state.playbackRate;
  },
  sound: state => {
    return state.sound;
  },
  index: state => {
    return state.index;
  },
  canPlay: state => {
    return state.canPlay;
  },
  anchors: state => {
    let sections;
    if (!state.poeme) {
      sections = null;
    } else {
      sections = state.poeme.map(e => e.id.toString());
      sections.unshift("toc");
    }
    return sections;
  },
  chapters: state => {
    let sections;
    if (!state.poeme) {
      sections = null;
    } else {
      sections = state.poeme.filter(e => e.type === "title");
    }
    return sections;
  },
  vers: (state, getters) => {
    let sections = [];
    if (!state.poeme) {
      sections = null;
    } else {
      getters.chapters.forEach(element => {
        sections.push(element.vers);
      });
      sections = sections.flat();
    }
    return sections;
  }
};
