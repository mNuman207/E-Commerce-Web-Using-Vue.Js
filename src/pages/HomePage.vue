<template>
  <Header />
  <HeroImg />
  <AllProduct />
  <ProductPagination
      :totalPages="10"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  <Footer />
</template>
<script>
import Header from "../components/layouts/TheHeader.vue";
import HeroImg from "../components/HeroImg.vue";
import AllProduct from "../components/AllProduct.vue";
import ProductPagination from "../components/ProductPagination.vue";
import Footer from "../components/layouts/TheFooter.vue";


export default {
  components: {
    Header,
    HeroImg,
    AllProduct,
    ProductPagination,
    Footer,
  },
  data () {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>

</style>
