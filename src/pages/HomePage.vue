<template>
  <Header />
  <HeroImg />
  <AllProduct />
  <Footer />
</template>
<script>
import Header from "../components/layouts/TheHeader.vue";
import HeroImg from "../components/HeroImg.vue";
import AllProduct from "../components/AllProduct.vue";
import Footer from "../components/layouts/TheFooter.vue";


export default {
  components: {
    Header,
    HeroImg,
    AllProduct,
    Footer,
  },
};
</script>

<style scoped></style>
