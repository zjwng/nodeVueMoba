import Vue from 'vue';
import vueRouter from 'vue-router';
import Main from '../view/Main'
import Login from '../view/Login'

import CategoryEdit from '../view/CategoryEdit'
import CategoryList from '../view/CategoryList'

import ItemEdit from '../view/ItemEdit'
import ItemList from '../view/ItemList'

Vue.use(vueRouter);
const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: "/categories/create",
                component:CategoryEdit
            },
            {
                path: "/categories/edit/:id",
                component: CategoryEdit,
                props: true
            },
            {
                path: "/categories/list",
                component:CategoryList
            },
            {
                path: "/items/create",
                component:ItemEdit
            },
            {
                path: "/items/edit/:id",
                component: ItemEdit,
                props: true
            },
            {
                path: "/items/list",
                component:ItemList
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
]
const router = new vueRouter({
    routes
});


export default router