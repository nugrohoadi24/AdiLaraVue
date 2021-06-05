<template>
    <!-- Header Section Begin -->
    <header class="header-section">
        <nav class="navbar">
            <div class="inner-header">
                <a @click="backHome()" href="">
                    <img class="logo" src="img/adi-store.png" alt="adi-store">
                </a>
                <ul class="nav-right text-right">
                        <li class="cart-icon">
                            Keranjang &nbsp;
                            <a href="#">
                                <i class="icon_bag_alt"></i>
                                <span>{{ productCheckout.length }}</span>
                            </a>
                            <div class="cart-hover">
                                <div class="select-items">
                                    <table>
                                        <tbody v-if="productCheckout.length > 0">
                                            <tr v-for="checkout in productCheckout" v-bind:key="checkout.id">
                                                <td class="si-pic">
                                                    <img class="photo-checkout" :src="checkout.photo" alt="" />
                                                </td>
                                                <td class="si-text">
                                                    <div class="product-selected">
                                                        <p>Rp. {{ checkout.price }}</p>
                                                        <h6>{{ checkout.name }}</h6>
                                                    </div>
                                                </td>
                                                <td @click="removeItem(checkout.id)" class="si-close">
                                                    <i class="ti-close"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr>
                                                <td><h5>Keranjang Masih Kosong</h5></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="select-total">
                                    <span>total:</span>
                                    <h5>Rp. {{ subtotalPrice }}</h5>
                                </div>
                                <div class="select-button">
                                    <router-link to="/cart" class="primary-btn view-card">CHECK OUT</router-link>
                                </div>
                            </div>
                        </li>
                </ul>
                </div>
        </nav>
    </header>
    <!-- Header End -->
</template>

<script>
import eventBus from '../EventBus'

export default {
    name: 'Header',
    data() {
      return {
          productCheckout: [],
      }
    },
    methods: {
        backHome() {
            eventBus.$emit('back_home')
        },
        removeItem(idItemStorage) {
            let cheackoutUserStorage = JSON.parse(localStorage.getItem("productCheckout"));
            let itemCheckoutUserStorage = cheackoutUserStorage.map(itemCheckoutUserStorage => itemCheckoutUserStorage.id);
            let index = itemCheckoutUserStorage.findIndex(id => id == idItemStorage);
            this.productCheckout.splice(index, 1);
            
            const parsed = JSON.stringify(this.productCheckout);
            localStorage.setItem('productCheckout', parsed);
            
            eventBus.$emit('change_cart')
        }
    },
    mounted() {
        eventBus.$on('change_cart', ()=> {
            this.productCheckout = JSON.parse(localStorage.getItem('productCheckout'));
        })
           
        if (localStorage.getItem('productCheckout')) {
            this.productCheckout = JSON.parse(localStorage.getItem('productCheckout'));
        }
    },
    computed: {
        subtotalPrice() {
            return this.productCheckout.reduce(function(items, data){
                return items + data.price;
            }, 0);
        }
    }
}
</script>

<style scoped>

.photo-checkout {
    width: 70px;
    height: 100px;
}

.nav-right {
    position: absolute;
    display: inline-flex;
    right: 10%;
}

</style>