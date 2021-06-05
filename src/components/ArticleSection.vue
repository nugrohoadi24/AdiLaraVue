<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="small text-left">
                        <h2>Article</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <carousel class="article-slider small" :autoplay="false" :items="4" :nav="false" :dots="false" :responsive="responsive">
                        <div class="article-item space">
                            <div class="pi-pic">
                                <img src="img/insta/article1.png" class="">
                            </div>
                            <div class="pi-text text-left">
                                <div class="article-name">FASHION</div>
                                <h5>Tips menjaga hijab tetap berkualitas</h5>
                                <h6>Oleh Ayunda Sita - 20 April 2021</h6>
                            </div>              
                        </div>
                        <div class="article-item space">
                            <div class="pi-pic">
                                <img src="img/insta/article2.jpg" class="">
                            </div>
                            <div class="pi-text text-left">
                                <div class="article-name">Fashion</div>
                                <h5>Hijab yang cocok untuk baju berwarna orange</h5>
                                <h6>Oleh Aliya - 15 April 2021</h6>
                            </div>              
                        </div>
                        <div class="article-item space">
                            <div class="pi-pic">
                                <img src="img/insta/article3.png" class="">
                            </div>
                            <div class="pi-text text-left">
                                <div class="article-name">Fashion</div>
                                <h5>Bergaya casual syari dengan denim favorit</h5>
                                <h6>Oleh Ria Miranda - 14 April 2021</h6>
                            </div>              
                        </div>
                        <div class="article-item space">
                            <div class="pi-pic">
                                <img src="img/insta/article4.jpg" class="">
                            </div>
                            <div class="pi-text text-left">
                                <div class="article-name">Faith</div>
                                <h5>Dzikir dan doa untuk di mudahkan segala urusan</h5>
                                <h6>Oleh Oki Setiana Dewi - 10 April 2021</h6>
                            </div>              
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name: 'ArticleSection',
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
                stagePadding: 50
            },
            1024:{
                items: 4,
                nav: false,
                dots: false
            }
            },
        }
    }
}
</script>

<style>

</style>