<template>
    <div>
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="small text-left mb-4">
                        <h2>Our Partner</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <carousel class="logo-carousel text-center" :autoplay="false" :items="4" :nav="false" :dots="false" :responsive="responsive">
                    <div class="logo-item ">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/hijup.png" class="partner-logo" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/rabbani.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/riamiranda.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/zoya.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/elzatta.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/kami.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">     
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/nadjani.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/nun.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/puru.jpg" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/buttonscarves.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner small">
                            <img src="img/logo-carousel/wardah.png" alt="" />
                        </div>
                    </div>

            </carousel>
        </div>
    </div>
    <!-- Partner Logo Section End -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name: 'PartnerLogo',
    components: {
        carousel
    },
    data() {
        return {
            responsive:{
                0:{
                    items: 2,
                    nav: false,
                    dots: false
                },
                1024:{
                    items: 4,
                    nav: false,
                    dots: false
                }
            }
        }
    }
}
</script>

<style scoped>

.logo-item .tablecell-inner img {
    margin-left: 4rem !important;

}

@media only screen and (max-width: 479px) {
    .logo-item .tablecell-inner img {
        margin-left: 2rem !important;
    }
}
</style>