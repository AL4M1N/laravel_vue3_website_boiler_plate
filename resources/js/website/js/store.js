// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

import { createStore } from 'vuex'

export default createStore({

    state: {
        languages: "",
        crntLanguages: "",
        webinfo: "",
    },

    getters: {

        getLanguages(state) {
            return state.languages;
        },

        getCrntLanguages(state) {
            return state.crntLanguages;
        },

        getWebsiteInfo(state) {
            return state.webinfo;
        },

    },

    mutations: {

        // set Languages
        setLanguages(state, data) {
            state.languages = data;
        },

        setCrntLanguages(state, data) {
            state.crntLanguages = data;
        },

        setWebInfo(state, data) {
            state.webinfo = data;
        }

    },

    actions: {

    },

});
