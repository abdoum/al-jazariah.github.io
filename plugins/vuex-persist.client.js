import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  new VuexPersistence({
    // yours options
  }).plugin(store);
};
