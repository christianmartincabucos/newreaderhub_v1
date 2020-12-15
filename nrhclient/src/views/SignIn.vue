<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="card card-wrapper">

                    <div class="card-body">
                        <div class="d-flex justify-content-center mt-4">
                            <img src="../assets/img/nrhub1.png">
                        </div>
                        <form class="my-5" @submit.prevent="submit">
                            <div class="form-group offset-md-2">

                                <div class="col-md-10">
                                    <label for="email" class=" col-form-label text-md-right ml-2">E-Mail or Username</label>
                                    <input id="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus v-model="form.email">
                                </div>
                            </div>

                            <div class="form-group offset-md-2">

                                <div class="col-md-10">
                                    <label for="password" class=" col-form-label text-md-right ml-2">Password</label>
                                    <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password" v-model="form.password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-4 offset-md-2 pl-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-4 offset-sm-1 pl-3">
                                    <a href="/forgot" class="text-black">forgot password?</a>
                                </div>

                            </div>

                            <div class="form-group row my-4 offset-md-2">
                                <div class="col-md-10">
                                    <button type="submit" class="btn btn-light br-half btn-block btn-md">
                                        Login
                                    </button>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .card {
        background-color: #ACACAC !important;
    }
</style>
<script>
    import {mapActions} from 'vuex'
     export default {
        name: 'sign-in',
        data(){
            return{
                form:{
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            ...mapActions({
                signIn:'auth/signIn',
            }),
            submit(){
                this.signIn(this.form).then(()=>{
                    this.$toast.success('Successfully sign in', "Success",{timeout:2000, position: "topRight"});
                    this.$router.replace({
                        name:'feed'
                    })
                }).catch(()=>{
                    this.$toast.error('Invalid Credential', "Error",{timeout:2000, position: "topRight"});
                    console.log('failed');
                })
            }
        }
    } 
</script>
