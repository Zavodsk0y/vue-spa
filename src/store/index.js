import { createStore } from 'vuex'
import {loginRequest, logoutRequest} from "@/utils/api";
import { signupRequest } from "@/utils/api";
import {toHandlerKey} from "vue";

export default createStore({
  state: {
    token: localStorage.getItem('myAppToken') || '',
  },
  getters: {
    isAuthenticated: state => !!state.token,
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = ''
    },
    SIGNUP_SUCCESS: (state, token) => {
      state.token = token;
    },
    SIGNUP_ERROR: (state) => {
      state.token = ''
    },
    LOGOUT_SUCCESS: (state) => {
        state.token = ''
    },
    LOGOUT_ERROR: (state, token)  => {
        state.token = token
    }
  },
  actions: {
    AUTH_REQUEST: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        loginRequest(user)
            .then((token) => {
              commit('AUTH_SUCCESS', token);
              localStorage.setItem('myAppToken', token);
              resolve();
            })
            .catch((error) => {
              commit('AUTH_ERROR');
              localStorage.removeItem('myAppToken');
              reject(error);
            })
      });
    },
    SIGNUP_REQUEST: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        signupRequest(user)
            .then((token) => {
              commit('SIGNUP_SUCCESS', token);
              localStorage.setItem('myAppToken', token);
              resolve();
            })
            .catch((error) => {
              commit('SIGNUP_ERROR');
              localStorage.removeItem('myAppToken');
              reject(error);
            })
      });
    },
    LOGOUT_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            logoutRequest()
                .then((token) => {
                    commit('LOGOUT_SUCCESS', token)
                    localStorage.removeItem('myAppToken')
                    resolve()
                })
                .catch((error) => {
                    commit('LOGOUT_ERROR')
                    reject(error)
                })
        })
    }

  },
  modules: {
  }
})
