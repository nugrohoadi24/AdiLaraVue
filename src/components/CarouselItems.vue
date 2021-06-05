<template>
    <div>
    <!-- Item Store Section -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="products.length > 0">
                    <carousel class="product-slider medium" :autoplay="true" :items="4" :nav="false" :dots="false" :responsive="responsive">
                        <div class="product-item" v-for="itemProduct in products" v-bind:key="itemProduct.id">
                            <div class="pi-pic">
                                <img v-bind:src="itemProduct.galleries[0].photo" alt="" />
                                <ul>
                                    <li 
                                        @click="saveCheckout(
                                        itemProduct.id, 
                                        itemProduct.name, 
                                        itemProduct.price, 
                                        itemProduct.galleries[0].photo)"
                                        class="w-icon active">
                                        <a href="#">
                                            <i class="icon_bag_alt"></i>
                                        </a>
                                    </li>
                                    <li class="quick-view"><router-link v-bind:to="'/product/'+itemProduct.id">+ Quick View</router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">{{ itemProduct.type }}</div>
                                <router-link v-bind:to="'/product/'+itemProduct.id">
                                    <h5>{{ itemProduct.name }}</h5>
                                </router-link>
                                <div class="product-price">
                                    Rp. {{ itemProduct.price }}
                                    <!-- <span>$35.00</span> -->
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>

                <div class="col-lg-12 mt-5" v-else>
                    <h3>
                        Produk Belum Tersedia.
                    </h3>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
    </div>
</template>

<script>
import eventBus from '../EventBus'
import carousel from 'vue-owl-carousel'
import axios from 'axios'

export default {
    name: 'CarouselItems',
    components: {
        carousel
    },
    data() {
        return{
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: false,
                    stagePadding: 10
                },
                768: {
                    items: 2,
                    nav: false,
                    dots: false,
                    stagePadding: 10
                },
                1024:{
                    items: 4,
                    nav: false,
                    dots: false
                }
            },
            products: [],
            productCheckout: []
        };
    },
    methods: {
        saveCheckout(idProduct, nameProduct, priceProduct, photoProduct) {
          var productStored = {
              "id": idProduct,
              "name": nameProduct,
              "price": priceProduct,
              "photo": photoProduct
          }

          this.productCheckout.push(productStored);
          const parsed = JSON.stringify(this.productCheckout);
          localStorage.setItem('productCheckout', parsed);
          
          eventBus.$emit('change_cart', '')
        }
    },
    mounted() {
        axios
            .get("http://localhost:8000/api/products")
            .then(res => (this.products = res.data.data.data))
            .catch(err => console.log(err));

        if (localStorage.getItem('productCheckout')) {
              this.productCheckout = JSON.parse(localStorage.getItem('productCheckout'));
        }
    }
}
</script>

<style scoped>

</style>