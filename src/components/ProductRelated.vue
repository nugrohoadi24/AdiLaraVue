<template>
    <div>
    <!-- Related Products Section End -->
    <section class="related-products spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Related Products</h2>
                    </div>
                </div>
            </div>
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
                                <a @click="productRelated(itemProduct.id)">
                                    <h5>{{ itemProduct.name }}</h5>
                                </a>
                                <div class="product-price">
                                    Rp. {{ itemProduct.price }}
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
    <!-- Related Products Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from 'axios'

export default {
    name: "ProductRelated",
    components: {
        carousel
    },
    data() {
        return {
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
            products: []
        }
    },
    methods: {
        productRelated(id) {
            this.$emit('click', id)
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