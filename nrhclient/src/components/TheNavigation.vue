<template>
    <ul>
        <li>
            <router-link :to="{ name: 'home'}">Home</router-link>
        </li>
        
        <template v-if="authenticated">
            <li>
                {{ user.name }} 
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">Dashboard</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="signOut">Sign Out</a>
            </li>
        </template>
        <template v-else>
            <li>
                <router-link :to="{ name: 'signin'}">Sign In</router-link>
            </li>   
        </template>
    </ul>
</template>
<style scoped>
        

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    methods:{
        ...mapActions({
            signOutAction:'auth/signOut'
        }),

        signOut(){
            this.signOutAction().then(() =>{
                this.$router.replace({
                    name:'home'
                })
            })
        }
    }
}
</script>