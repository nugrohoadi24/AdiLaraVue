<template>
    <div>
            <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
        <div class="container">
            <carousel class="logo-carousel text-center" :autoplay="true" :items="4" :nav="false" :dots="false">
                
                    <div class="logo-item ">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/hijup.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/rabbani.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/riamiranda.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/zoya.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/elzatta.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/kami.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">     
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/nadjani.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/nun.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/puru.jpg" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
                            <img src="img/logo-carousel/buttonscarves.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-item">
                        <div class="tablecell-inner">
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
    }
}
</script>

<style scoped>

</style>