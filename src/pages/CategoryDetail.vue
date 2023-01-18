<template>
  <Header />
  <div class="container d-flex flex-wrap justify-content-between gap-1 mt-5">
    <!-- <div class="d-flex flex-row"> -->
    <!-- <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"> -->
    <div class="my-card col-lg-3" v-for="product in item" :key="product">
      <img class="my-card-img" :src="product.thumbnail" />
      <div class="my-card-body trainer-card-body">
        <h5>{{ product.title }}</h5>
        <p>{{ product.category }}</p>
        <p>{{ product.description }}</p>
        <div class="d-flex mt-3">
          <router-link
            :to="{ name: 'ProductDetail', params: { id: product.id } }"
            class="btnsm"
            ><button class="my-card-btn">See More</button></router-link
          >
          <h3 class="mx-3">${{ product.price }}</h3>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import Header from "../components/layouts/TheHeader.vue"; 
export default{
  components: {Header},
  name: "CategoryDetail",
  data() {
    
    return {
      item: [],
      
    };
  },

  mounted() {
    axios
      .get(`https://dummyjson.com/products/category/${this.$route.params.cat}`)
      .then((resp) => {
        console.log(resp.data.products);
        this.item = resp.data.products;
      });
  },
};

</script>

<style scoped>
body {
  background-color: rgb(131, 105, 105);
}
.my-card {
  min-width: 0;
  background-color: rgb(151, 91, 91);
  background-clip: border-box;
  box-shadow: 0px 0px 12px;
  margin-bottom: 28px;
  border-radius: 35px ;
  overflow: hidden;
  transition: 0.5s;
}
.my-card:hover {
  box-shadow: 0px 0px 8px #868585;
}
.my-card img {
  height: 250px;
  width: 100%;
}
.my-card-body {
  padding: 10px;
  margin-bottom: 40px;
}
.my-card-body h5 {
  text-transform: capitalize;
  font-size: 25px;
}
.my-card-body p {
  margin: 5px 0;
  color: #070605;
}

.my-card-btn {
  color: rgb(231, 231, 231);
  background-color: #be2944;
  padding: 10px 28px;
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 10px 0;
  transition: 0.5s;
}
.my-card-btn:hover {
  color: rgb(15, 15, 15);
}
</style>
