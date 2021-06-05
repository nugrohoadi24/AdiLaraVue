<template>
    <div>
    <!-- Hero Section Begin -->
    <section class="hero-section">
        <carousel class="hero-items" :autoplay="true" :items="1" :nav="false" :dots="true">
            <div class="single-hero-items set-bg" style="background-image: url('img/hero-1.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Muslimah Fashion</span>
                            <h1>Idul Fitri</h1>
                            <p>
                                Meriahkan Hari Raya Idul Fitri Kamu Dengan Pakaian Terbaik Dari Adi Store !
                            </p>
                            <a href="#" class="primary-btn">Belanja Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/hero-2.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Muslimah Fashion</span>
                            <h1>Idul Fitri</h1>
                            <p>
                                Meriahkan Hari Raya Idul Fitri Kamu Dengan Pakaian Terbaik Dari Adi Store !
                            </p>
                            <a href="#" class="primary-btn">Belanja Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/hero-3.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Muslimah Fashion</span>
                            <h1>Idul Fitri</h1>
                            <p>
                                Meriahkan Hari Raya Idul Fitri Kamu Dengan Pakaian Terbaik Dari Adi Store !
                            </p>
                            <a href="#" class="primary-btn">Belanja Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        </carousel>
    </section>
    <!-- Hero Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import eventBus from '../EventBus'

export default {
    name: 'CarouselBanner',
    components: {
        carousel
    },
    mounted() {
        eventBus.$on ('back_home', () => {

        })
    }
}
</script>

<style scoped>

</style>