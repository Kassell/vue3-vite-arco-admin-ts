import { createApp } from 'vue'
import App from './App.vue'
import router, { setRouter } from './router';

// 初始化vue
console.log("------初始化vue------")
const app = createApp(App);
console.log("------初始化路由------")
setRouter(app);

// 路由初始化完成，挂载APP
router.isReady().then(() => {
    console.log("------路由初始化完成，挂载APP------")
    app.mount('#app');
});