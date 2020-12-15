<template>
    <header>
        <sidebar></sidebar>
        <navbar></navbar>
    </header>
</template>
<style scoped>
</style>
<script>
import sidebar from '@/layouts/_Sidebar'
import navbar from '@/layouts/_Navbar'
import { mapGetters, mapActions } from 'vuex'

export default {
    components:{
        sidebar,
        navbar,
    },
    data(){
        return{
            'activeClass': 'active' 
        }
    },
    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        }),
        currentPage(){
            return this.$route.path;
        }
    },
    methods:{
        ...mapActions({
            signOutAction:'auth/signOut'
        }),

        signOut(){
            this.signOutAction().then(() =>{
                this.$toast.success('Successfully sign out', "Success",{timeout:2000, position: "topRight"});
                this.$router.replace({
                    name:'home'
                })
            })
        }
    }
}
</script>
