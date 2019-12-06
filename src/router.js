import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from './components/Counter.vue';
import SearchInputGroup from './components/SearchInputGroup.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/counter', component: Counter },
    { path: '/vuex', component: SearchInputGroup },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
