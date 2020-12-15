import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'
import Dashboard from '../views/Dashboard.vue'
import Notifications from '../views/Notifications.vue'
import Feed from '../views/Feed.vue'
import Works from '../views/Works.vue'
import Articles from '../views/Article.vue'
import Games from '../views/Games.vue'
import Saved from '../views/Saved.vue'
import Register from '../views/Register.vue'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) => {
        if (store.getters["auth/authenticated"]) {
          return next({
            name: "profile",
          });
        }
        next();
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
      beforeEnter: (to, from, next) => {
        if (store.getters["auth/authenticated"]) {
          return next({
            name: "profile",
          });
        }
        next();
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/profile/:slug",
      name: "profile",
      component: Profile,
      props: true,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/notifications",
      name: "notifications",
      component: Notifications,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/works",
      name: "works",
      component: Works,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/feed",
      name: "feed",
      component: Feed,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/games",
      name: "games",
      component: Games,
      beforeEnter: (to, from, next) => {
        if (!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: (to, from, next) => {
        if (store.getters["auth/authenticated"]) {
          return next({
            name: "profile",
          });
        }
        next();
      },
    },
    {
      path: "/saved",
      name: "saved",
      component: Saved,
      beforeEnter: (to, from, next) => {
        if(!store.getters["auth/authenticated"]) {
          return next({
            name: "signin",
          });
        }
        next();
      },
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
