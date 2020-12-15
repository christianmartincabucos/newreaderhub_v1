import axios from 'axios'
export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
    profile: null,
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
    profile(state) {
      return state.profile;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },

    SET_USER(state, data) {
      state.user = data;
    },
    SET_PROFILE(state, data) {
      state.profile = data
    }
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      let response = await axios.post("auth/signin", credentials);

      return dispatch("attempt", response.data.token);
    },

    async attempt({ commit, state }, token) {
      if(token){ 
        commit("SET_TOKEN", token);
      }
      if(!state.token){
        return
      }
      try {
        let response = await axios.get("auth/me");
        
        commit("SET_USER", response.data);
      } catch (error) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    async userProfile({commit, state}){
        let response = await axios.get(`auth/profile/${state.user.user_id}`);
        console.log(response.data);
        commit("SET_PROFILE", response.data.data[0]);

    },
    signOut({commit}){
      return axios.post('auth/signout').then(() =>{
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      })
    }
  },
}; 
