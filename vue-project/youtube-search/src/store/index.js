import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // data 저장소
    userInput: "",
    videos: [],
    selectedVideo: null,
  },
  getters: {
    //data에 대한 getter(조회) ~= computed
  },
  mutations: {
    // data 변경 ~=(유사) methods(동기적)
    setUserInput() {
      console.log("userInput이 변경");
    },
    setVideos() {},
    selectedVideo() {},
  },
  actions: {
    // data 변경(mutations) + 비동기적 ~= methods
  },
  modules: {},
});
