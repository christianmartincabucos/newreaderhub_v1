// import 'morioh/dist/css/morioh.min.css'
import 'animate.css'
// import '@morioh/v-lightbox/dist/lightbox.css';
// import '@morioh/v-lightbox/dist/lightbox';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "mdbootstrap/css/mdb.min.css"
import 'mdbvue/lib/mdbvue.css'
import '../public/style.css'
import '@/assets/Montserrat/montserrat.css'
        /* tippy.js */
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import Vue from 'vue'
import router from './router'
import store from './store'
import axios from "axios"
import vuescroll from "vuescroll/dist/vuescroll-native"
import VueIziToast from "vue-izitoast"
import "izitoast/dist/css/iziToast.min.css";
import { ValidationObserver,ValidationProvider,extend,localize } from "vee-validate"
import en from "vee-validate/dist/locale/en.json"
import * as rules from "vee-validate/dist/rules"
import vSelect from "vue-select"
import VueTippy, { TippyComponent } from "vue-tippy"
// import lightbox from '@morioh/v-lightbox'


import VueMoment from 'vue-moment'
import App from './App.vue'

require("@/store/subscriber") 
Vue.component("v-select", vSelect)
Vue.use(vuescroll)
Vue.use(VueIziToast)
Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
});
Vue.component("tippy", TippyComponent);
Vue.component("ValidationProvider", ValidationProvider)
Vue.use(VueMoment);
// Vue.use(lightbox);

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

localize('en', en)

// Install components globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

axios.defaults.baseURL = "http://127.0.0.1:8000/api"
Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

