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
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-2 pd-right">
                            <div class="product-thumbs">
                                <carousel :dots="false" :nav="false" :items="1" :stagePadding="10" class="product-thumbs-track ps-slider">
                                    <ul class="vertical-slider h-600">
                                        <li>
                                            <div class="pt" @click="change_image(data_image[0])" :class="data_image[0] == display_image ? 'active' : ''">
                                                <img src="img/gamis1.jpg" alt="" />
                                            </div>
                                        </li>

                                        <li>
                                            <div class="pt" @click="change_image(data_image[1])" :class="data_image[1] == display_image ? 'active' : ''">
                                                <img src="img/gamis11.jpg" alt="" />
                                            </div>
                                        </li>

                                        <li>
                                            <div class="pt" @click="change_image(data_image[2])" :class="data_image[2] == display_image ? 'active' : ''">
                                                <img src="img/gamis12.jpg" alt="" />
                                            </div>
                                        </li>

                                        <li>
                                            <div class="pt" @click="change_image(data_image[3])" :class="data_image[3] == display_image ? 'active' : ''">
                                                <img src="img/gamis13.jpg" alt="" />
                                            </div>
                                        </li>

                                        <li>
                                            <div class="pt" @click="change_image(data_image[4])" :class="data_image[4] == display_image ? 'active' : ''">
                                                <img src="img/gamis14.jpg" alt="" />
                                            </div>
                                        </li>                                        
                                    </ul>
                                </carousel>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src="display_image" alt="" />
                            </div>
                            
                        </div>
                        <div class="col-lg-6 text-left">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>oranges</span>
                                    <h3>Pure Pineapple</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                                        Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                        Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                        impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                                    </p>
                                    <h4>$495.00</h4>
                                </div>
                                <div class="quantity">
                                    <router-link to="/cart" class="primary-btn pd-cart">Add To Cart</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
    <ProductRelated />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import ProductRelated from '../components/ProductRelated'
import Footer from '../components/Footer'
import carousel from 'vue-owl-carousel'

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
          display_image: "img/gamis1.jpg",
          data_image: [
              "img/gamis1.jpg",
              "img/gamis11.jpg",
              "img/gamis12.jpg",
              "img/gamis13.jpg",
              "img/gamis14.jpg"
          ]
      }
  },
  methods: {
      change_image(display_now) {
          this.display_image = display_now;
      }
  }
}
</script>

<style scoped>
.product-thumbs .pt {
    margin-right: 10px;
}
.vertical-slider {
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    overflow-y: auto;
    list-style: none;
    -webkit-overflow-scrolling: touch;
}
ul.vertical-slider.h-600 { 
    max-height: 575px !important;
}
.pd-right {
    margin-right: -33px;
}
</style>