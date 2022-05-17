import type { App } from "vue";
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory, Router } from 'vue-router';



export const baseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            hidden: true
        }
    },
]

/**
 * 初始化路由
 */
const router: Router = createRouter({
    history: createWebHistory(),
    routes: baseRoutes,
});

/**
 * 挂载路由
 * @param app
 */
export function setRouter(app: App<Element>): void {
    app.use(router);
}

export default router;