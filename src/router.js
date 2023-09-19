import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "flowbuilder" */ "@/views/Home.vue"),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "flowbuilder" */ "@/views/About.vue"),
    },
    {
        path: '/coin/:id',
        name: 'coin-detail',
        component: () => import(/* webpackChunkName: "flowbuilder" */ "@/views/CoinDetail.vue"),
    },
    {
        path: '*',
        name: 'error',
        component: () => import(/* webpackChunkName: "flowbuilder" */ "@/views/Error.vue"),
    }
]


export default routes

export const router = new VueRouter({
        mode: 'history',
        routes
    }
)
