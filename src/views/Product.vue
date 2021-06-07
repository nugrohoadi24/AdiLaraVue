<template>
  <div class="product">
    <Header />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-left">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div v-if="mobile" class="col-lg-2">
                    <h3>Gambar Produk</h3>
                    <div v-if="productDetails.galleries != undefined && productDetails.galleries.length > 0">
                        <carousel :dots="false" :nav="false" :items="1" :stagePadding="10" :responsive="responsive" class="medium">                            
                            <div v-for="dataFoto in productDetails.galleries" v-bind:key="dataFoto.id" class="mr-4">
                                <img :src="dataFoto.photo" alt="" />
                            </div>
                        </carousel>
                    </div>
                    <div class="product-thumbs" v-else>
                        <h3>
                            Produk Belum Tersedia.
                        </h3>
                    </div>
                </div>
                
                <div v-else class="col-lg-2 pd-right small-left">
                    <div class="product-thumbs" v-if="productDetails.galleries != undefined && productDetails.galleries.length > 0">
                        <carousel :dots="false" :nav="false" :items="1" :stagePadding="10" class="product-thumbs-track ps-slider">                            
                            <ul class="vertical-slider h-600">
                                <li>
                                    <div 
                                    v-for="dataFoto in productDetails.galleries" v-bind:key="dataFoto.id" 
                                    class="pt" @click="change_image(dataFoto.photo)" :class="dataFoto.photo == display_image ? 'active' : ''">
                                        <img :src="dataFoto.photo" alt="" />
                                    </div>
                                </li>                                      
                            </ul>
                        </carousel>
                    </div>
                    <div class="product-thumbs" v-else>
                        <h3>
                            Produk Belum Tersedia.
                        </h3>
                    </div>
                </div>
                
                <div class="col-lg-4 absolute-flex">
                    <div class="product-pic-zoom">
                        <img class="product-big-img" :src="display_image" alt="" />
                    </div>
                </div>
                <div class="col-lg-6 text-left">
                    <div class="product-details">
                        <div class="pd-title">
                            <span>{{ productDetails.type }}</span>
                            <h3>{{ productDetails.name }}</h3>
                        </div>
                        <div class="pd-desc">
                            <p>{{ productDetails.description }}</p>
                            <h4>Rp. {{ productDetails.price }}</h4>
                        </div>
                        <div class="quantity">
                            <router-link to="/cart">
                            <a
                                @click="saveCheckout(
                                    productDetails.id, 
                                    productDetails.name, 
                                    productDetails.price, 
                                    productDetails.galleries[0].photo)"
                                class="primary-btn pd-cart">
                                Add To Cart
                            </a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
    <ProductRelated v-on:click="loadDataRelated"/>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import ProductRelated from '../components/ProductRelated'
import Footer from '../components/Footer'
import carousel from 'vue-owl-carousel'
import axios from 'axios'
import mobileDevice from '../MobileDevice'

export default {
  name: 'Product',
  components: {
    carousel,
    Header,
    ProductRelated,
    Footer
  },
  data() {
      return {
          mobile: false,
          display_image: "",
          productDetails: [],
          productCheckout: [],
          responsive: {
            0:{
                items: 1,
                nav: false,
                dots: true,
                stagePadding: 10
            },
            540: {
                items: 2,
                nav: false,
                dots: true,
                stagePadding: 10
            },
            1024:{
                items: 1,
                nav: false,
                dots: false
            }
          }
      }
  },
  methods: {
      change_image(display_now) {
          this.display_image = display_now;
      },
      setDataPicture(data){
          this.productDetails = data;
          this.display_image = data.galleries[0].photo; 
      },
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
      },
      loadDetail(id) {
          axios
            .get("https://adminadistore.renklii.com/api/products", {
                params:{
                    id: id
                }
            })
            .then(res => (this.setDataPicture(res.data.data)))
            .catch(err => console.log(err));
      },
      loadDataRelated(id){
          this.$router.push('/product/'+id)
          this.loadDetail(id)
      }
    },
    mounted() {
        this.mobile = mobileDevice.isMobile()

        if (localStorage.getItem('productCheckout')) {
            this.productCheckout = JSON.parse(localStorage.getItem('productCheckout'));
        }

        this.loadDetail(this.$route.params.id);
    }
}
</script>

<style scoped>

</style>