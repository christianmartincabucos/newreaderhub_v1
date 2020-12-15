<template>
    <div id="slide-out" class="side-nav fixed" style="transform: translateX(0px)!important;width: 210px;">
        <ul class="custom-scrollbar">
            <!-- Logo -->
            <li>
                <div class="logo-wrapper waves-light">
                    <a class="ml-3" @click="updateProfile"> 
                        <img src="../assets/img/profile-pic.jpg" class="rounded-circle align-content-top">
                    </a>
                </div>
            </li>
            <li>
                <ul class="side-profile text-black">
                    <li>
                        <h5 class="font-weight-bold" style="margin-top: -55px;">{{user.name}}</h5>
                    </li>
                    <li>
                        <h6>Artist</h6>
                    </li>
                    <li>
                        <h6 class="h6-responsive text-muted">1.5m Followers</h6>
                    </li>
                    <li>
                        <h6 class="h6-responsive text-muted" style="font-size: 0.7rem">followed by Jane Doe and 45 others</h6>
                    </li>
                </ul>
            </li>
            <li>
                <ul class="collapsible collapsible-accordion">
                    <li :class="[currentPage.includes('feed') ? activeClass : '']">
                        <router-link :to="{ name: 'feed'}" class="collapsible-header waves-effect arrow-r">Feed</router-link>
                    </li>
                    <li :class="[currentPage.includes('articles') ? activeClass : '']">
                        <router-link :to="{ name: 'articles'}" class="collapsible-header waves-effect arrow-r">Articles</router-link>
                    </li>
                    <li :class="[currentPage.includes('games') ? activeClass : '']">
                        <router-link :to="{ name: 'games'}" class="collapsible-header waves-effect arrow-r">Games</router-link>
                        
                    </li>
                    <li :class="[currentPage.includes('profile') ? activeClass : '']">
                        <router-link :to="{ name: 'profile'}" class="collapsible-header waves-effect arrow-r">Profiles</router-link>
                    </li>
                    <li :class="[currentPage.includes('notifications') ? activeClass : '']">
                        <router-link :to="{ name: 'notifications'}" class="collapsible-header waves-effect arrow-r">Notifications</router-link>
                    </li>
                    <li :class="[currentPage.includes('works') ? activeClass : '']">
                        <router-link :to="{ name: 'works'}" class="collapsible-header waves-effect arrow-r">Works</router-link>

                    </li>
                    <li :class="[currentPage.includes('saved') ? activeClass : '']">
                        <router-link :to="{ name: 'saved'}" class="collapsible-header waves-effect arrow-r">Saved</router-link>

                    </li>
                    <li :class="[currentPage.includes('settings') ? activeClass : '']">
                        <router-link :to="{ name: 'settings'}" class="collapsible-header waves-effect arrow-r">Settings</router-link>
                    </li>
                    <li>
                        <a @click.prevent="signOut" class="collapsible-header waves-effect arrow-r mb-5">Logout</a>
                    </li>

                </ul>
            </li>
        </ul>
    <div class="sidenav-bg"></div>
</div>

</template>
<style scoped>

    .active{
        opacity: 1;
        visibility: visible;
        border-left-color: #4db6ac;
        margin: 10px;
        transition: all 0.25s;
        background-color: #cccccc;
    }
    .side-nav .collapsible {
        margin-top: -1rem;
    }
</style>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'sidebar',
    data(){
        return{
            'activeClass': 'active' 
        }
    },
    beforeMount() {
        this.$store.dispatch('auth/userProfile');

    },
    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            profile:'auth/profile'
        }),
        currentPage(){
            return this.$route.path;
        }
    },
    methods:{
        ...mapActions({
            signOutAction:'auth/signOut',
        }),
        updateProfile(){
            this.$store.dispatch('profile/getProfile', this.profile.slug).then(()=>{
                this.$router.replace({
                    path:`/profile/${this.profile.slug}`,
                })
            })
        },
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