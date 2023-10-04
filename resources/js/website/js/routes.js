
import { createRouter, createWebHistory } from "vue-router";


const routes = [

    {
        path: '/',
        component: () => import('../pages/dashboard.vue'),
        name: 'Dashboard',
        meta: {
            title: 'Bangladesh',
        },
    },

    {
        path: '/*',
        component: () => import('../pages/common/404.vue'),
        name: 'er404',
        meta: {
            title: 'Room 404',
        },
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Run brfore every route request
router.beforeEach((to, from, next) => {

    let appName = 'SLM Medspa | ';
    let title = to.meta && to.meta.title ? to.meta.title : '';
    // set current title
    document.title = `${appName} ${title}`;

    next();
});


export default router;
