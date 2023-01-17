<template>
  <div>
    <div class="container" style="z-index: -999">
      <h1 class="heading my-5 text-center">New Arrival</h1>
      <div class="row">
        <div class="col-lg-3" v-for="product in products" :key="product.id">
          <div class="card border-0">
            <div class="card-body py-5 bg-light">
              <img :src="product.thumbnail" class="man-img" alt="" />
            </div>
            <div class="card-footer border-0 text-center bg-white">
              <div class="pricestyle">
                <h5>{{ product.title }}</h5>
                <p>${{ product.price }}</p>
              </div>
              <div class="des1">
                <p>{{ product.description }}</p>
              </div>
              <!-- <router-link
              :to="{ name: 'ProductDetail', params: { id: product.id } }"> -->
              <router-link
                :to="{ name: 'ProductDetail', params: { id: product.id } }"
                class="btnsm"
                ><button>See More</button></router-link>
              <!-- </router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  //   data() {
  //     return {
  //       list: undefined,
  //       products: [],
  //     };
  //   },


  computed: {
    products() {
      return this.$store.state.products;
    },

    
  },
  mounted() {
    this.$store.dispatch("getProducts");
    // axios.get("https://dummyjson.com/products").then((resp) => {
    //   const list = resp.data.products;
    //   console.log(list);
    //   this.products = list;
    // });
  },
};


</script>

<style scoped>
.heading {
  font-weight: 500;
  font-size: 2.6rem;
}
.man-img {
  width: 100%;
  height: 40vh;
  border: 2px solid gray;
}
/* .products{
    background-color: rgb(246, 243, 243);
} */
.btnsm {
  height: 30px;
  width: 50%;
  background-color: rgb(245, 151, 170);
  margin-bottom: 41px;
  border: none;
}
.pricestyle {
  height: 16vh;
}
.des1 {
  height: 20vh;
  text-align: center;
}
</style>
