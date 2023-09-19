import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: import("../components/HelloWorld"),
        },
        {
            path: '/error',
            name: 'error',
            component: import( "../components/ErrorView"),
        },
        {
            path: '/:catchAll(.*)',
            name: '404Name',
            component: import( "../components/ErrorView"),
        }
    ]
})


export default router
