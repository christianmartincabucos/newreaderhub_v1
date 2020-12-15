import axios from 'axios'
export default {
    namespaced: true,

    state: {
        posts:[],
        attachments:[]
    },
    getters: {
        allposts(state){
            return state.posts
        },
        allattachments(state){
            return state.attachments
        }
    },
    mutations: {
        setPosts(state, response){
            state.posts = response.data.data
        },
        
        set_attachments(state, response){
            var attach = [];
            response.data.data.forEach(e => {
               e.attachment.forEach( a =>{
                  attach.push(a.attachment_name.split(','))
               })
            });
            // console.log(attac);
            state.attachments = attach
        },

    },
    actions: {
        async getAllPosts({commit}){
            return commit('setPosts', await axios.get('/get_all'))
        },
        async getAllAttachements({commit}){
            return commit('set_attachments', await axios.get('/get_all'))
        },
    },
}; 



