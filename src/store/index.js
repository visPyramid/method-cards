import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     thisEpisode:"setting"
 },
 getters: {
     getEpisode:state=>{
         return state.thisEpisode
     }
 },
 mutations: {
    changeEpisode (state, payload) {
        state.thisEpisode = payload
    }
 },
 actions: {}
});