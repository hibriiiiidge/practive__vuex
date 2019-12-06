import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter1 from './components/Counter1.vue';
import Counter2 from './components/Counter2.vue';
import SearchInputGroup from './components/SearchInputGroup.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/counter1', component: Counter1 },
    { path: '/counter2', component: Counter2 },
    { path: '/vuex', component: SearchInputGroup },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
