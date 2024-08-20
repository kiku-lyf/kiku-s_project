import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import TypePage from "@/components/Type.vue";
import ProductPage from "@/components/ProductPage.vue";

import RegisterPage from "@/components/RegisterPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import CartPage from "@/components/CartPage.vue";
import SearchPage from "@/components/SearchPage.vue";
import OrderConfirmPage from "@/components/OrderConfirmPage.vue";
import OrderListPage from "@/components/OrderListPage.vue";

const routes = [
    {
        path: '/front',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/',
        name: 'HomePage1',
        redirect: 'front',
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/front/product',
        name: 'Product',
        component: ProductPage,
    },
    {
        path: '/front/type',
        name: 'Type',
        component: TypePage
    },
    {
        path: '/front/cart',
        name: 'Cart',
        component: CartPage
    },
    {
        path: '/front/search',
        name: 'Search',
        component: SearchPage
    },
    {
        path: '/front/orderconfirm',
        name: 'OrderConfirm',
        component: OrderConfirmPage,
        props:true
    },
    {
        path: '/front/orderList',
        name: 'OrderList',
        component: OrderListPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
