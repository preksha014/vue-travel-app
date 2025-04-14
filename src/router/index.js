import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import("@/views/DestinationShow.vue"),
        props: route => ({ id: parseInt(route.params.id) })
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router