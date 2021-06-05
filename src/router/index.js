import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product/:id',
        // props: true,
        name: 'Product',
        component: Product
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component: () =>
            import ('../views/ShoppingCart.vue')
    },
    {
        path: '/sukses',
        name: 'Sukses',
        component: () =>
            import ('../views/Sukses.vue')
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        }

        if (to.hash) {
            return {
                selector: to.hash
            }
        }

        return {
            x: 0, y: 0
        }
    }
})

export default router