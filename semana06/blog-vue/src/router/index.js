import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Posts from '../views/Posts.vue';
import postsDetails from '../views/postsDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/posts/',

    name: 'posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    props: true,
    name: 'posts',
    component: postsDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
