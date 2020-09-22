import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PlayGround from '../views/PlayGround.vue';
import Forif from "../views/forif.vue";
import ListPage from "../views/ListPage.vue";
import EventPage from "../views/Event.vue"; //파일이름을 쓰기

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Play",
    name: "Play",
    component: PlayGround,
  },
  {
    path: "/Forif",
    name: "Forif",
    component: Forif,
  },
  {
    path: "/list",
    name: "List",
    component: ListPage,
  },
  {
    path: "/EventPage",
    name: "EventPage",
    component: EventPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;