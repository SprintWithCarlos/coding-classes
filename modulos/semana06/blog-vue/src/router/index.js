import Vue from "vue";
import VueRouter from "vue-router";

import About from '../views/About.vue';
import Posts from '../views/Posts.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import postsDetails from '../views/postsDetails.vue';
import usersDetails from '../views/usersDetails.vue';

const error404 = { template: " <div>Not Found</div>" };
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Posts
  },

  {
    path: "/posts/:id",
    props: true,
    name: "posts",
    component: postsDetails
  },
  {
    path: "/users/:id",
    props: true,
    name: "users",
    component: usersDetails
  },
  {
    path: '*',
    component: error404,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
