import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter1 from './components/Counter1.vue';
import Counter2 from './components/Counter2.vue';
import Parent1 from './components/Parent1.vue';
import Parent3 from './components/Parent3.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/counter1', component: Counter1 },
    { path: '/counter2', component: Counter2 },
    { path: '/vuex1', component: Parent1 },
    { path: '/vuex3', component: Parent3 },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
