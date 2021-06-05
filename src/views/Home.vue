<template>
  <div class="home">
    <Header />
    <CarouselBanner />
    <CarouselItems />
    <PartnerLogo />
    <ArticleSection />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import CarouselBanner from '../components/CarouselBanner'
import CarouselItems from '../components/CarouselItems'
import ArticleSection from '../components/ArticleSection'
import PartnerLogo from '../components/PartnerLogo'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    CarouselBanner,
    CarouselItems,
    ArticleSection,
    PartnerLogo,
    Footer
  }
}
</script>
