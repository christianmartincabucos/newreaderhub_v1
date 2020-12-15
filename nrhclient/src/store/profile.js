import axios from 'axios'
export default {
    namespaced: true,

    state: {
        profile:null
    },
    getters: {
        getProfile(state){
            return state.profile
        },
    },
    mutations: {
        SET_USERPROFILE(state, response){
            state.profile = response.data.data[0]
        },
        
    },
    actions: {  
        async getProfile({commit}, slug){
            return commit('SET_USERPROFILE', await axios.get(`/profile/${slug}`))
        },
    },
}; 



