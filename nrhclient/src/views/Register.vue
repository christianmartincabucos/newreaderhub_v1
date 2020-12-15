<template>
    <div class="container my-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body px-4">
                        <div class="d-flex justify-content-start my-3">
                            <img src="../assets/img/nrhub1.png">
                        </div>
                        <div class="card card-lightgray">
                            <div class="card-body">
                                <p class="h3-responsive text-left py-2 font-weight-bold">Sign up</p>
                                <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }">
                                    <form>
                                        <div class="form-group row my-0">
                                            <div class="col-md-12 my-0 py-1">
                                                <ValidationProvider name="firstname" rules="required|alpha_spaces" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-firstname" type="text" class="form-control" :class="classes" v-model="register.firstname" name="in-firstname" required autocomplete="in-firstname" placeholder="Firstname" autofocus>
                                                    <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <!-- <div class="col-md-5 my-0 px-1 py-1">
                                                <ValidationProvider name="middle name" rules="required|alpha" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-middlename" type="text" class="form-control" v-model="register.middlename"  name="in-middlename" required autocomplete="in-middlename" placeholder="Middle Name" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-md-2 my-0 pl-1 py-1">
                                                <input id="in-extensionname" type="text" class="form-control" name="in-extensionname" v-model="register.extensionname" required autocomplete="in-extensionname" placeholder="Ext. Name" autofocus>
                                            </div> -->
                                        </div>
                                        <div class="form-group row my-0">
                                            <div class="col-md-12 my-0 py-1">
                                                <ValidationProvider name="lastname" rules="required|alpha" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-lastname" type="text" class="form-control" name="in-lastname" v-model="register.lastname" required autocomplete="in-lastname" placeholder="Lastname" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                        </div>
                                        <div class="form-group row my-0">

                                            <div class="col-md-12 mb-0 py-1">
                                                <ValidationProvider name="kind of artist" rules="required" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-artisttype" type="text" class="form-control" name="in-artisttype" v-model="register.artist_type" required autocomplete="in-artisttype" placeholder="What kind of artist are you?" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <!-- <div class="form-group row my-0">
                                            <div class="col-md-12 my-0 py-1">
                                                <ValidationProvider name="username" rules="required|alpha_num" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-username" type="text" class="form-control" name="in-username" v-model="register.username" required autocomplete="in-username" placeholder="Username" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                        </div> -->


                                        <div class="form-group row my-0">

                                            <div class="col-md-12 my-0 py-1">
                                                <ValidationProvider name="email" rules="required|email" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-email" type="email" @input="IsEmailExist" class="form-control" name="in-email" v-model="register.email" required autocomplete="in-email" placeholder="Email" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                        <span class="error">{{ isExist}}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row my-0">

                                            <div class="col-md-12 mb-0 py-1">
                                                <ValidationProvider name="password" rules="required|min:8" vid="confirmation" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-password" type="password" class="form-control" name="in-password" v-model="register.password" required autocomplete="in-password" placeholder="Password" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row my-0">

                                            <div class="col-md-12 mb-0 py-1">
                                                <ValidationProvider name="confirm password" rules="required|min:8|confirmed:confirmation" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-confirmpass" type="password" class="form-control" name="in-confirmpass" v-model="register.confirmpass" required autocomplete="in-confirmpass" placeholder="Confirm Password" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>

                                        <!-- <div class="form-group row my-0">
                                            <div class="col-md-12 mb-0  py-1">
                                                <ValidationProvider name="mobile" rules="required|numeric" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-mobile" type="text" class="form-control" name="in-mobile" v-model="register.mobile" required autocomplete="in-mobile" placeholder="Mobile No" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                        </div>
                                        <div class="form-group row my-0">
                                            <div class="col-md-12 mb-0  py-1">
                                                <ValidationProvider name="birthdate" rules="required" :bails="false" v-slot="{classes,errors}">
                                                    <input id="in-birthdate" type="date" class="form-control" name="in-birthdate" v-model="register.birthdate" required autocomplete="in-birthdate" placeholder="Birthdate" autofocus>
                                                        <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>

                                        </div>
                                        <div class="form-group row my-0">
                                            <div class="col-md-12 mb-4 py-1">
                                                <ValidationProvider name="gender" rules="required" :bails="false" v-slot="{classes,errors}">
                                                    <label for="in-gender" class=" col-form-label text-md-right ml-2">Gender</label><br>
                                                    <v-select class="v-select" :options="options" v-cloak :reduce="options => options.id"  v-model="register.fk_gender_type"></v-select>
                                                    <span class="error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div> -->

                                        <div class="form-group row my-3">
                                            <div class="col-md-6">
                                                <router-link type="button" :to="{ name: 'signin'}" class="btn btn-gray br-half btn-block btn-md text-white">Back to Login</router-link>
                                                <!-- <a href="/login" " class="btn btn-gray br-half btn-block btn-md">Back to Login</a> -->
                                            </div>

                                            <div class="col-md-6">
                                                <a type="button" class="btn btn-gray br-half btn-block btn-md" :disabled="true" @click="handleSubmit(SaveProfile(1, register))">Create Account</a>
                                            </div>

                                        </div>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    
    .card {
        background-color: #ACACAC;
    }

    .btn-gray {
        background-color: #A1A1A1 !important;
    }
    .card-lightgray {
        background-color: #E1E1E1 !important;
    }
    .v-select{
        background: #ccc !important;
        height: calc(1.6em + 0.75rem + 2px);
        border-radius: 0.25rem;
    }
    

</style>
<script>
import axios from 'axios'

// import { required } from 'vuelidate/lib/validators';
export default {
    name: 'register',    
    data(){
        return{
            register:{
                firstname:'',
                middlename:'',
                extensionname:'',
                lastname:'',
                email:'',
                password:'',
                confirmpass:'',
                artist_type:'',
                mobile:'',
                birthdate:'',
                fk_gender_type:'',
            },
            isExist: '',

        }
    },
    created(){
    },
    methods:{
        IsEmailExist(){
            const $this = this;
            if($this.register.email !== ''){

                axios.get(`/auth/check/${this.register.email}`)
                .then(res => {
                    console.log(res.data.data);
                    if (res.data.data > 0) {
                        console.log(res.data, true);
                        return $this.isExist = 'The email is not available';
                        // error.push(`The email is not available`);
                    }
                    return $this.isExist = '';
                })
            }
        },
        ClearFroms(){
            this.register.firstname = '';
            this.register.lastname = '';
            this.register.username = '';
            this.register.email = '';
            this.register.artist_type = '';
            this.register.password = '';
            this.register.confirmpass = '';

        },
        SaveProfile(e, data){
            switch (e) {
                case 1:
                    this.$refs.form.validate().then(success => {
                        if (!success || this.isExist !== '') {
                            return;
                        }
                        this.CallAxios('/auth/signup',data, 1);
                        this.$nextTick(() => {
                            this.$refs.form.reset();
                        });
                    });
                break;
                case 2:
                    console.log(data.data.data);
                    console.log(data);
                    if(data.IsSuccess === 1){
                        // this.CallAxios('/login',{'email': this.register.email.trim(), 'password': this.register.password.trim()}, 2)
                        this.ClearFroms();
                        return this.$toast.success(`${data.message}`, "Success",{timeout:2000, position: "topRight"});
                    }
                    this.$toast.error('400 Bad Request', "Error",{ timeout: 2000,position: "topRight"});
                break;
                case 3:
                    console.log(data);
                break;
                default:
                    this.$toast.error('404 not found', "Error",{ timeout: 2000,position:'topRight'});
                break;
            }

        },
        CallAxios(url, data, type){
            const $this = this;
            axios({
              method: 'post',
              url: url,
              responseType: 'json',
              data: data
            })
            .then(function (response) {
                switch (type) {
                    case 1: $this.SaveProfile(2, response.data); break;
                    case 2: $this.SaveProfile(3, response); break;
                    default:break;
                }
            })
            .catch(function (error) {
                console.log(error);
            });


        }
    }
}
</script>
