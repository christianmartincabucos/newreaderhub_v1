<template>
    <main v-cloak>
        <div class="container-fluid container-padding row">
            <div class="col-sm-7">
                <div class="card-wrapper">
                    <div class="card card-gray">
                        <div class="card-header card-darkgray h6 p-2">
                            What inspires you today?
                        </div>
                        <div class="card-body card-gray card-radius" style="height:50px;">
                            <a class="text-white mr-1" data-toggle="modal" data-target="#modalpost" data-backdrop="static" role="button" content="Upload post" v-tippy='{theme : "light", delay: [150, 400],}'><i class="far fa-plus-square"></i></a>
                            <a class="text-white" ><i class="fas fa-ellipsis-v"></i></a>
                        </div>
                    </div>
                    <div class="card-gray card mt-3">
                        <div class="card-body card-gray card-radius mx-3 py-2">
                            <div class="d-flex justify-content-center">
                                <div class="picture-box">
                                    <img class="mx-2 my-2 rounded-circle" alt="100x100" height="25" width="25" src="../assets/img/profile-pic.jpg" data-holder-rendered="true">
                                </div>
                                <div class="picture-box">
                                    <img class="mx-2 my-2 rounded-circle" alt="100x100" height="25" width="25" src="../assets/img/profile-pic.jpg" data-holder-rendered="true">
                                </div>
                                <div class="picture-box">
                                    <img class="mx-2 my-2 rounded-circle" alt="100x100" height="25" width="25" src="../assets/img/profile-pic.jpg" data-holder-rendered="true">
                                </div>
                                <div class="picture-box">
                                    <img class="mx-2 my-2 rounded-circle" alt="100x100" height="25" width="25" src="../assets/img/profile-pic.jpg" data-holder-rendered="true">
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div v-cloak>
                        <div class="card my-3" v-for="(post, index) in posts" :key="index">

                            <div class="float-right mr-2" style="position: absolute; top: 2%; right: 0%;">
                                <a role="button" class="text-white"><i class="fas fa-ellipsis-v"></i></a>
                            </div>
                            <div class="card-header rounded-top card-gray d-flex flex-row">

                                <img src="../assets/img/profile-pic.jpg" class="rounded-circle mr-3" height="45px" width="45px" alt="avatar">
                                <div>

                                    <h5 class="card-title mb-1"><router-link class="text-black" :to="{ name: 'profile', params:{slug:post.profile.slug}}">{{ post.profile.firstname+' '+post.profile.lastname }}</router-link></h5>
                                    <h6 class="card-text" style="font-size:0.7rem;"><i class="far fa-clock pr-2"></i>{{ post.created_at | moment("from", "now") }}</h6>

                                </div>

                            </div>

                            <div class="card-body p-0">
                                <div>
                                        <!-- <Lightbox class="card-img-top" :items="attach[index]"></Lightbox> -->
                                        <div class="lb" v-if="attach[index].length>0">
                                            <div class="lb-grid" :class="[css,attach[index].length>cells?'lb-grid-' + cells: 'lb-grid-' + attach[index].length]">
                                                <div class="lb-item" v-for="(src, i) in attach[index]" @click="show(i, attach[index])" :key="i" :style="bg(src)">
                                                    <span class="lb-more" v-if="i==cells-1 && attach[index].length - cells>0">{{ attach[index].length - cells}}+</span>
                                                </div>
                                            </div>
                                        
                                            
                                        </div>
                                    <a>
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="card-footer card-gray px-2 rounded py-2">
                                <div class="d-flex justify-content-between">
                                    <div class="text-center">
                                    </div>
                                </div>
                                <h5 class="text-center">{{ post.body }}</h5>
                                <div class="float-right">
                                    <a role="button" class="text-white"><i class="fas fa-ellipsis-h"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div v-if="posts.length <= 0">
                        <div class="card my-3">
                            <div class="card-body text-center">
                                <h1>Upload your first post.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 p-0">
                <!-- position:fixed;left: 64%;right: 1%; -->
                <div style="">
                    <Birthday></Birthday>
                    <div class="row">
                        <div class="col-5 mt-3 pr-0 mb-5">
                            <Advertisement></Advertisement>
                        </div>

                        <div class="col-7 mt-3 pl-2">
                            <Links></Links>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Post></Post>
        <transition enter-active-class="animated animate fadeIn" leave-active-class="animated fadeOut">
        <div class="lb-modal" v-if="index>=0">
            <a class="btn-floating btn-lg btn-email lb-modal-close" type="button" role="button" @click="close">
                <i class="fas far fa-times"></i>
            </a>
            <a class="btn-floating btn-lg btn-email lb-modal-prev" type="button" :hidden="prevbtn" role="button"  @click="prev">
                <i class="fas far fa-angle-left fa-2x"></i>
            </a>
            <a class="btn-floating btn-lg btn-email lb-modal-next" type="button" :hidden="nextbtn" role="button" @click="next">
                <i class="fas far fa-angle-right fa-2x"></i>
            </a>

            <div class="lb-modal-img" @click="close">
            <!-- <h1>{{temporary.length}}</h1>    -->
                <img :src="src" class="z-depth-3 hoverable">
                <a>
                    <div class="mask waves-effect waves-light rgba-white-slight"></div>
                </a>
                <div class="spinner spinner-dots-wave" v-if="loading">
                    <!-- <span class="badge badge-primary rounded-circle w-10 h-10">
                        <i class="sr-only">&nbsp;</i>
                    </span>
                    <span class="badge badge-primary rounded-circle w-10 h-10">
                        <i class="sr-only">&nbsp;</i>
                    </span>
                    <span class="badge badge-primary rounded-circle w-10 h-10">
                        <i class="sr-only">&nbsp;</i>
                    </span>
                    <span class="badge badge-primary rounded-circle w-10 h-10">
                        <i class="sr-only">&nbsp;</i>
                    </span>
                    <span class="badge badge-primary rounded-circle w-10 h-10">
                        <i class="sr-only">&nbsp;</i>
                    </span> -->
                </div>
            </div>
        </div>
    </transition>
    </main>
</template>
<style scoped>
.black_overlay {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 1001;
    -moz-opacity: 0.8;
    opacity: .80;
    filter: alpha(opacity=80);
}
.lb-grid {
    position: relative;
    display: block;
}

.lb-item {
    position: absolute;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-right: solid 2px #B7B7B7;
    cursor: pointer;
}


.lb-grid-1 .lb-item {
    width: 100%;
    height: 100%;
}

.lb-grid-2 .lb-item, .lb-grid-3 .lb-item, .lb-grid-4 .lb-item, .lb-grid-5 .lb-item {
    width: 50%;
}

.lb-grid-2 .lb-item, .lb-grid-3 .lb-item:nth-child(1), .lb-grid-4 .lb-item:nth-child(1) {
    height: 100%;
}

.lb-grid-3 .lb-item:nth-child(2), .lb-grid-3 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(1), .lb-grid-5 .lb-item:nth-child(2) {
    height: 50%;
}

.lb-item:last-child, .lb-grid-2 .lb-item:nth-child(2), .lb-grid-3 .lb-item:nth-child(2), .lb-grid-3 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(2), .lb-grid-4 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(5) {
    left: auto;
    right: 0;
    border-right: 0;
}

.lb-grid-3 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(2), .lb-grid-5 .lb-item:nth-child(5) {
    bottom: 0;
    top: auto;
}

.lb-grid-4 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4) {
    top: 33.333333333333336%;
}

.lb-grid-4 .lb-item:nth-child(2), .lb-grid-4 .lb-item:nth-child(3), .lb-grid-4 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(3), .lb-grid-5 .lb-item:nth-child(4), .lb-grid-5 .lb-item:nth-child(5) {
    height: 33.333333333333336%;
}

.lb-more {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
    font-size: 3rem;
    background-color: rgba(0, 0, 0, .4);
}

.lb-more:before {
    display: inline-block;
    content: "";
    vertical-align: middle;
    height: 100%;
}

/* 
.lb-more:after{
    position: absolute;
    top: 0;
    left: 0;
    left: 0;
    right: 0;
    z-index: -1;   
    content: "";
    background: #222;
    opacity: 0.9;
} */

.lb-modal {
    transition: opacity .2s ease;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    height: 100vh; 
    background-color: rgba(0, 0, 0, .8);
    display: block;
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -o-user-select: none;
    user-select: none; 
    overflow: auto;

}

.lb-modal-close {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
}

.lb-modal-next, .lb-modal-prev {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 20px;
    margin-top: -25px;
    z-index: 999;
}

.lb-modal-next {
    left: auto;
    right: 20px;
}

.lb-modal-img {
    position: absolute;
    pointer-events: none;
    top: 15%;
    left: 70px;
    right: 70px;
    bottom: 10px;
    text-align: center;
}

.lb-modal-img:before {
    display: inline-block;
    content: "";
    vertical-align: middle;
    height: 100%;
}

.lb-modal-img img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    object-fit: contain;
}

.lb-modal-img .spinner {
    width: 150px;
    position: absolute;
    margin-left: -75px;
    top: 50%;
    left: 50%;
    z-index: 1;
}
.h-250{
    height: 20rem!important;
}

/* 
.lightbox {
	display: block;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, .5);
	visibility: hidden;
	opacity: 0;
}

.animate {
	-webkit-transition: .25s ease-in-out;
	-moz-transition: .25s ease-in-out;
	-ms-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;
}


.lightbox img, .lightbox iframe {
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	max-width: 40%;
	max-height: 40%;
	border: 2px solid white;
	box-sizing: border-box;
}


.lightbox:target {
	visibility: visible;
	opacity: 1;
}

.lightbox:target img, .lightbox:target iframe {
	max-width: 95%;
	max-height: 95%;
}
 */
.form-control {
    background-color: #e1e1e1 !important;
}
fieldset {
    border: 2px solid #eeeeee;
    border-radius: 5px;
}
legend {
    background-color: gray;
    color: white;
}
.modal-header {
    padding: 0.5rem 0.5rem;
    border-bottom: 0.5px solid #f8f9fa;
}
.btn-gray {
    background-color: #A1A1A1 !important;
}
.card{
    background-color: #B7B7B7 !important;
    
}
.card-lightgray {
    background-color: #CCCCCC !important;
}

.mt-72 {
    margin-top: 72px !important;
}

.box {
    width: 250px;
    height: 62px;
    margin-right: 2px;
    background-color: #fff;
}

.link-box {
    width: 300px;
    height: 93px;
    margin-right: 2px;
    background-color: #fff;
}

.picture-box {
    width: 110px;
    height: 170px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: #fff;
    border-radius: 0.50rem;
}

.card-lightgray {
    border: 0px !important;
    box-shadow: none !important;
}

.br-0 {
    border-radius: 0px !important;
}

.h6-bday {
    font-size: 0.5rem !important;
    line-height: 0.5 !important;
}
</style>
<script>

import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import Birthday from '../views/_Birthday'
import Advertisement from '../views/_Advertisement'
import Links from '../views/_Links'
import Post from '../components/_PostModal'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name:'feed',
    components:{
        Birthday,
        Advertisement,
        Links,
        Post,
        // Lightbox
        // carousel
    },
    data() {
        return {
            css: 'h-250 h-md-400 h-lg-600',
            cells: 5,
            nextbtn: false,
            prevbtn: false,
            src: '',
            index: -1,
            loading: false,
            temporary:[],
            events: [],
            currentPost : '',
            imagespost:[],
        }
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            posts: 'post/allposts',
            attach:'post/allattachments'
        }),
        
    },
    beforeMount() {
        this.$store.dispatch('post/getAllPosts');
        this.$store.dispatch('post/getAllAttachements');
        this.$store.dispatch('auth/userProfile');
    },
    methods: {
        truncateText(text){
            if(text.length >24){
                return `${text.substr(0, 24)}...`;
            }
            return text;
        },
        viewPost(postIndex){
            const post = this.posts[postIndex];
            this.currentPost = post;
        },
        bind() {

            if (this.events.length > 0) return;

            this.events.push(['keydown', e => {
                if (this.index < 0) return;
                if (e.keyCode === 37) {
                    this.prev();
                } else if (e.keyCode === 39) {
                    this.next();
                } else if (e.keyCode === 27) {
                    this.close();
                }
            }]);
            this.events.forEach(e => { window.addEventListener(e[0], e[1]); });
        },

        show(i, data) {
            data === undefined ? this.temporary : this.temporary = data;
            i == this.temporary.length - 1  ? this.nextbtn = true : this.nextbtn = false;
            i == 0 ? this.prevbtn = true: this.prevbtn = false;
            this.loading = true;
            this.bind();
            this.index = i;
            var src = this.temporary[i];
            var img = new Image();
            img.src = src;
            img.onload = () => {
                this.loading = false;
                this.src = src;
            }
        },
        next() {
            this.show(this.index + 1);
        },

        prev() {

            this.show(this.index - 1);
        },
        close() {
            this.display = true
            this.index = -1;
            this.events.forEach(e => { window.removeEventListener(e[0], e[1]); });
            this.events = [];
            this.temporary = [];
        },
        bg(i) {
            return i && i.length > 0 ? `background-image: url('${i}')` : '';
        }

        
    },

}
</script>