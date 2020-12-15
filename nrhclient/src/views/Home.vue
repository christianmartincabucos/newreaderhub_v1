<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="card card-wrapper">

                    <div class="card-body">
                        <div class="d-flex justify-content-center my-5 pb-2">
                            <img src="@/assets/img/nrhub1.png">
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-5">
                                <!-- <a href="/login" type="button" class="font-weight-bold btn btn-light btn-md br-half btn-block">Login</a> -->
                                <router-link :to="{name:'signin'}" type="button" class="font-weight-bold btn btn-light btn-md br-half btn-block">Login</router-link>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-5 mt-3 mb-4">
                                <!-- <router-link :to="{name:'signin'}" type="button" class="font-weight-bold btn btn-light btn-md br-half btn-block">Login</router-link> -->
                                <a href="/register" type="button" class="font-weight-bold btn btn-light btn-md br-half btn-block">Sign up</a>
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
        background-color: #ACACAC !important;
    }
</style>
<script>
// import navigation from '@/layouts/Navigation'
export default {
  name: 'HOME',
  components:{
      // navigation
  }
}
</script>