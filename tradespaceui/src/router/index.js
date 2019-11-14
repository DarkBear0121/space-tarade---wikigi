import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/search",
    name: "search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue")
  },
  {
    path: "/item/12345uniqueID",
    name: "item/12345uniqueID",
    component: () => import("../views/ItemView.vue")
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/Account.vue")
  },

  {
    path: "/createItem",
    name: "createItem",
    component: () => import("../views/CreateItem.vue")
  },

  {
    path: "/email",
    name: "email",
    component: () => import("../views/Email.vue")
  },

  {
    path: "/payment",
    name: "payment",
    component: () => import("../views/Payment.vue")
  },

  {
    path: "/history",
    name: "history",
    component: () => import("../views/History.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
