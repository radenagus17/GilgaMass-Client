import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "https://gilgamass-body-portal.herokuapp.com",
    targets: [],
    histories: [],
  },
  mutations: {
    SET_TARGETS(state, payLoad) {
      state.targets = payLoad;
    },
    SET_HISTORIES(state, payLoad) {
      state.histories = payLoad;
    },
  },
  actions: {
    getUser(_, payLoad) {
      return fetch(`${this.state.baseUrl}/user/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      }).then((resp) => {
        if (resp.status === 400) throw Error(resp.statusText);
        else if (resp.status === 401) throw Error(resp.statusText);
        return resp.json();
      });
    },

    async getHistory(context) {
      try {
        const resp = await axios({
          url: `${this.state.baseUrl}/target`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const { target } = resp.data;
        context.commit("SET_TARGETS", target);
      } catch (error) {
        console.log(error);
      }
    },

    async getDetailHistory(context) {
      try {
        const resp = await axios({
          url: `${this.state.baseUrl}/history`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const { history } = resp.data;
        context.commit("SET_HISTORIES", history);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
