<template>
    <div class="modal fade" id="modalpost" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
        aria-hidden="true" ref="modalpost">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document" >
                <div class="modal-content dimgrey rounded">
                    <div class="modal-header text-center">
                        <a type="button" @click="showTag(2)" :hidden="divprofile">
                            <i class=" fas fa-chevron-circle-left"></i>
                        </a>
                        <h4 class="modal-title w-100 font-weight-bold">{{title}}</h4>
                        <button type="button" class="close" @click="showTag(2)" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pt-2 px-2 mx-2">
                        <div :hidden="postmodal">
                            <form  id="form-post" enctype="multipart/form-data"  method="POST" @submit.prevent="savePost(1)">
                                <div class="d-flex justify-content-start mb-2">
                                
                                    <img src="../assets/img/profile-pic.jpg" class="rounded-circle mr-3" height="40px" width="40px" alt="avatar">
                                        <div>

                                            <h5 class="font-weight-bold card-title py-2">{{user.name}}</h5>

                                        </div>
                                </div>

                                <vuescroll :ops="ops">
                                    <div>
                                        <div class="form-group row my-0">
                                            <div class="col-md-12 mb-0 py-1">
                                                <ValidationProvider name="body" rules="required" :bails="false" v-slot="{errors}">
                                                    <textarea id="in-post" rows="7" type="text" class="form-control" name="in-body" v-model="body" required autocomplete="in-body" placeholder="What inspires you today?" autofocus>
                                                    </textarea>
                                                    <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group px-0 mx-0" >
                                            <!-- <div v-if="preview_list.length">    -->
                                                <!-- <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> -->

                                                <!-- <button class="btn btn-primary btn-block btn-md" data-toggle="collapse" target="#images" aria-expanded="true" aria-controls="images" v-if="toggle">Toggle</button> -->

                                                <button class="btn btn-primary btn-block btn-md" type="button" data-toggle="collapse" href="#photos" aria-expanded="true" aria-controls="images" v-if="togggle">Toggle</button>
                                                <div class="card" style="border-radius:8px!important;">
                                                    <a type="button" @click="reset" class="float-right m-2 text-warning" style="position: absolute;"></a>
                                                    <div id="photos" class="collapsed collapse show rounded">
                                                        <div  v-for="(item, index) in preview_list" :key="index" class="rounded">
                                                            <a type="button" @click="deleteItem(index)" class="float-right m-2 text-warning" style="position: absolute;" data-toggle="tooltip" data-placement="top" title="movet to trash">
                                                                <i class="far fa-trash-alt fa-2x"></i>
                                                            </a>
                                                            <img :src="item" style="height: 100%!important;border-radius:8px!important;padding:1px;">
                                                        </div> 
                                                    </div>
                                                </div>

                                            <!-- </div> -->
                                        </div> 
                                    </div>
                                </vuescroll>
                                
                                <div class="form-group row my-2">
                                    <div class="col-md-12 mb-0 py-1">
                                        <fieldset>
                                            <div class="d-flex justify-content-end mx-3 py-2">
                                                <input accept="image/*" multiple="multiple" @change.prevent="previewMultiImage" id="fileUpload" type="file" hidden>
                                                <a class="h5 mx-1"  @click="chooseFiles()" 
                                                    content="Add Photo" v-tippy='{theme : "light", delay: [150, 400],}'>
                                                    <i class="fas fa-photo-video" style="color:#07630b;"></i>
                                                </a>
                                                <a class="h5 mx-1" content="Check In" v-tippy='{theme : "light", delay: [150, 400],}'><i class="fas fa-map-marker-alt" style="color:#ff3547;"></i></a>
                                                <a class="h5 mx-1" @click="showTag(1)" content="Tag follower" v-tippy='{theme : "light", delay: [150, 400],}'><i class="fas fa-user-tag" style="color:#007bff;"></i></a>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="form-group row my-2">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-gray br-half btn-block btn-md" :disabled="disable">Post<i class="fas fa-paper-plane-o ml-1"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div :hidden="divprofile">
                            <div class="row">
                                <div class="col-md-12 my-3">
                                    <input class="form-control" style="border-radius: 20px;background-color:#b7b7b7!important;" placeholder="Search Follower">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <h6>List of Followers</h6>
                                    <ul class="list-group ">
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Ehsan Mcnally</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked1">
                                                <label class="custom-control-label" for="defaultUnchecked1"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Brittany Mansell</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked2">
                                                <label class="custom-control-label" for="defaultUnchecked2"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Jaime Salt</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked3">
                                                <label class="custom-control-label" for="defaultUnchecked3"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Malcolm Doherty</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked4">
                                                <label class="custom-control-label" for="defaultUnchecked4"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Arsalan Owens</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked5">
                                                <label class="custom-control-label" for="defaultUnchecked5"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Harley Oakley</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked6">
                                                <label class="custom-control-label" for="defaultUnchecked6"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Felicity Page</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked7">
                                                <label class="custom-control-label" for="defaultUnchecked7"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Mack Wormald</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked8">
                                                <label class="custom-control-label" for="defaultUnchecked8"></label>
                                            </div>
                                        </li>
                                        <li class="list-group-item dimgrey rounded d-flex justify-content-between align-items-center">
                                            <a>Habib Washington</a>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked9">
                                                <label class="custom-control-label" for="defaultUnchecked9"></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-12 d-flex justify-content-end">
                                    <button type="button" class="btn btn-sm btn-info btn-rounded "><i class="fas fa-user-tag"></i>&nbsp;Finish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<style scoped>
    .display{
        display: none!important;
    }
    .show{
        display: block!important;
    }
    .overlay { 
        opacity: 0;
        transition: .5s ease;
        transition: all 0.3s ease; 
        opacity: 0; 
        background-color: #9bcd9b; 
    } 
        
    .overlay { 
        opacity: 0; 
    } 
        
    .overlayFade { 
        background-color: #9bcd9b; 
    } 
    .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .thumb{
         border-radius: 3%;
         border-color: #A1A1A1!important;
    }
    
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
    #photos {
    /* Prevent vertical gaps */
    line-height: 3;
    
    -webkit-column-count: 3;
    -webkit-column-gap:   0px;
    -moz-column-count:    3;
    -moz-column-gap:      0px;
    column-count:         3;
    column-gap:           0px;  
    }

    #photos img {
        /* Just in case there are inline attributes */
        width: 100% !important;
        height: auto !important;
    }
    @media (max-width: 1200px) {
        #photos {
            -moz-column-count:    3;
            -webkit-column-count: 3;
            column-count:         3;
        }
    }
    @media (max-width: 1000px) {
    #photos {
        -moz-column-count:    3;
        -webkit-column-count: 3;
        column-count:         3;
        }
    }
    @media (max-width: 800px) {
    #photos {
        -moz-column-count:    2;
        -webkit-column-count: 2;
        column-count:         2;
        }
    }
    @media (max-width: 400px) {
    #photos {
        -moz-column-count:    1;
        -webkit-column-count: 1;
        column-count:         1;
        }
    }

</style>
<script>
import vuescroll from 'vuescroll';
import { mapGetters, mapActions } from 'vuex'
import axios from "axios"

export default {
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
            },  
            title: 'Create Post',
            postmodal:false,
            divprofile: true,
            disable:false,
            body:'',
            preview: null,
            image: null,
            data: [],
            preview_list: [],
            image_list: [],
            togggle: false,
            
        }
    },
    components: {
        // vuescroll

    },   
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            profile: 'auth/profile',
        }),
    }, 
    watch(){
        this.image_list.length > 4 ? this.togggle = true:false;
       
   },
    methods: {
        showTag(e){
            switch (e) {
                case 1:
                    this.title = 'Tag Follower'
                    this.divprofile = false
                    this.postmodal = true
                    
                break;
                case 2:
                    this.title = 'Create Post'
                    this.divprofile = true
                    this.postmodal = false
                break;
                default:
                    break;
            }
        },
        savePost(e, data){
            let form = new FormData;
            switch (e) {
                case 1:
                    this.image_list.forEach(element => {
                        console.log(element.name)
                    });
                    Object.entries(this.image_list).forEach(([key, image]) => {
                        form.append(`items[${key}]`, image);
                        console.log(key);
                    });
                    form.append('body', this.body);
                    form.append('user_id', this.profile.profile_id);
                    form.append('email', this.profile.email);

                    this.callAxios('/post/upload', form, 1)
                break;
                case 2:
                    if(data.IsSuccess == true){
                        this.togggle = false
                        this.disable = false;
                        this.body = ''
                        this.reset()
                        this.$toast.success('Successfully posted', "Success",{ timeout: 2000,position:'topRight'});
                        this.$store.dispatch('post/getAllPosts');
                        this.$store.dispatch('post/getAllAttachements');
                    }
                    else{
                        this.disable = false;
                    }
                    console.log(data)
                break;
                default:
                    this.$toast.error('404 not found', "Error",{ timeout: 2000,position:'topRight'});
                break;
            }

        },
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        deleteItem(e) {
            this.preview_list.splice(e, 1)
            this.image_list.splice(e, 1)
            this.image_list.length > 4 ? this.togggle = true: this.togggle = false;

        },
        previewMultiImage(event) {
            var input = event.target;
            var count = input.files.length;
            var index = 0;
            if (input.files) {
                while(count --) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview_list.push(e.target.result);
                }
                this.image_list.push(input.files[index]);
                reader.readAsDataURL(input.files[index]);
                index ++;
                }
            }
            this.image_list.length > 4 ? this.togggle = true:false;
           
        },
        reset() {
            this.image = null;
            this.preview = null;
            this.image_list = [];
            this.preview_list = [];
        },
        callAxios(url, data, type){
            const $this = this;
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            $this.disable = true;
            axios({
              method: 'post',
              url: url,
              responseType: 'json',
              data: data,
              config:config
            })
            .then(function (response) {
                switch (type) {
                    case 1: $this.savePost(2, response.data); break;
                }
            })
            .catch(function (error) {
                console.log(error);
            });


        }
    },
   
}
</script>