<template>
  <div class="home">
    <Header />
    <CarouselBanner />
    <CarouselItems />
    <InstaSection />
    <PartnerLogo />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import CarouselBanner from '../components/CarouselBanner'
import CarouselItems from '../components/CarouselItems'
import InstaSection from '../components/InstaSection'
import PartnerLogo from '../components/PartnerLogo'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    CarouselBanner,
    CarouselItems,
    InstaSection,
    PartnerLogo,
    Footer
  }
}
</script>
