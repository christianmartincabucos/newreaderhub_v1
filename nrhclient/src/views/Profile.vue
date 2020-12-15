<template>
        <!-- <navigation /> -->
    <main>
        <div class="container-fluid container-padding row" v-cloak>
            <div class="col-lg-6 col-md-6 col-sm-6 px-2">
                <section class="container-fluid container-padding ">
                    <div class="card-wrapper card-action">
                        <!-- Front Side -->
                        <div class="face front rounded-top">
                            <div class="float-right mr-2" style="position: absolute;top: 2%;right: 0%;">
                                <a class="text-white" role="button"><i class="far fa-plus-square"></i></a>
                            </div>
                            <div class="card-up">
                                <img class="card-img-top img-fluid" src="../assets/img/heroBackground.jpg" alt="Image with a photo of clouds.">
                            </div>
                            <!-- Avatar -->
                            <div class="box mx-4" style="width:57%!important;">
                                <h4 class="h4-responsive">{{ userprofile.firstname+' '+ userprofile.lastname}}</h4>
                                <h6 class="h6-responsive text-muted">1.5m Followers</h6>
                                <h6 class="h6-responsive text-muted" style="font-size: 0.7rem">followed by Jane Doe and 45 others</h6>
                            </div>
                            <div class="card-down card-body">
                                <div class="avatar ml-5">
                                    <img src="../assets/img/profile-pic.jpg" class="rounded-circle img-fluid" alt="Profile Picture">
                                </div>
                                <div class="card-body">
                                    <div class="card" style="width: 98%;background-color:#fff;">
                                        <div class="card-header h6">
                                            What inspires you today?
                                        </div>
                                        <div class="card-body dimgrey" style="height:100px;">
                                        </div>
                                        <div class="card-footer dimgrey">
                                            <a class="text-white mr-1" role="button"><i class="far fa-plus-square"></i></a>
                                            <a class="text-white"><i class="fas fa-ellipsis-v"></i></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 px-2">
                <notify></notify>
            </div>
        </div>
    </main>
    
</template>
<style scoped>
    i {
        font-size: 1.3rem;
    }

    .card-header{
        background-color: #FFFFFF!important;

    }

    .card-down {
        background: #B7B7B7 !important;
        border-radius: 5px;
        margin-top: 20px;
        padding-top: 10px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }

    .card-up {
        height: 250px;
        border-radius: 5px;
        margin-bottom: 10px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.54), 0 2px 10px 0 rgba(0, 0, 0, 0.39);
    }

    .card-wrapper .avatar {
        margin-top: -100px !important;
    }

    .card-wrapper {
        margin-top: 72px;
        width: 98%;
    }

    .side-nav .logo-wrapper img {
        height: 100px;
        width: 95px;
        padding: 0px;
    }

    .box {
        width: 50%;
        background-color: #fff;
        border-radius: 5px;
        margin-top: -60px;
        padding: 2%;
        float: right;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 50%;
    }
</style>
<script>
import notify from '../views/_Notifications'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    props:['slug'],
    name: 'profile',
    components:{
        notify
    },
    data() {
        return {
            ops: {
                vuescroll: {
                    mode: 'native',
                    sizeStrategy: 'percent',
                    detectResize: false
                },
                scrollPanel: {
                    initialScrollY: false,
                    initialScrollX: false,
                    scrollingX: true,
                    scrollingY: true,
                    speed: 300,
                    easing: 'easeInQuad',
                    maxHeight: 560,
                    verticalNativeBarPos: 'right'
                },
                rail: {
                    background: '#01a99a',
                    opacity: 0,
                    size: '6px',
                    specifyBorderRadius: false,
                    gutterOfEnds: null,
                    gutterOfSide: '2px',
                    keepShow: false
                },
                bar: {
                    showDelay: 500,
                    onlyShowBarOnScroll: true,
                    keepShow: false,
                    background: 'dimgrey',
                    opacity: 1,
                    specifyBorderRadius: false,
                    minSize: 0,
                    size: '10px',
                    disable: false
                }
            }
        }
    },
    computed:{
        ...mapGetters({
            userprofile:'profile/getProfile'
        })
    },
    mounted() {
        this.$store.dispatch('profile/getProfile', this.slug)
    },
    methods: {
    },
}
</script>