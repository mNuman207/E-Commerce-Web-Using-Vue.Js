<template>
  <div>
    <nav
      class="navbar navbar-expand-lg position-fixed w-100 bg-light"
      style="z-index: 999"
    >
      <div class="container">
        <a class="navbar-brand" href="#">Shopizy</a>
        <button class="navbar-toggler" type="button">
          <!-- <span class="navbar-toggler-icon"></span> -->
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto my-2 my-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
              <!-- <a href=""><router-link to="/">Home</router-link></a> -->
            </li>
            <li class="nav-item">
              <div class="dropdown1 dropdown">
                <a class="nav-link" href="#">CATEGORIES</a>
                <div class="dropdown-content">
                  <div v-for="category in categories" :key="category">
                    <router-link
                      :to="{
                        name: 'CategoryDetail',
                        params: { cat: category },
                      }"
                      >{{ category }}</router-link
                    >
                  </div>
                </div>
              </div>
            </li>
            
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li> -->
          </ul>
          <a>
              <input type="text" placeholder="Search"/>
              <button>
                <i class="fa-regular fa-magnifying-glass"></i>
              </button>
            </a>
        </div>
        <button class="btn btn-white border-secondary bg-white btn-md mb-2 text-decoration-none">
          <router-link to="/CartDetail">{{ cartItemCount }} Cart</router-link>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { list: undefined, categories: [] };
  },
  mounted() {
    axios.get("https://dummyjson.com/products/categories").then((resp) => {
      const list = resp.data;
      console.log(list);
      this.categories = list;
    });
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  font-size: 2rem;
  color: rgb(218, 11, 105);
  font-family: "arial black", cursive ;
}
.navbar-brand:hover {
  color: black;
}
.nav-item a {
  margin-right: 15px;
  margin-left: 15px;
  color: black;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  /* font-family: "Inter", arial rgb(143, 5, 5); */
}
.nav-item a:hover {
  color: rgb(204, 79, 135);
}
.fa-regular,
.fa-brands {
  color: rgb(11, 76, 218);
  font-size: 1.1rem;
  cursor: pointer;
  margin-left: 15px;
}

.dropdown1 {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  overflow-y: auto;
  height: 80vh;
}
.dropdown-content div {
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  /* letter-spacing: 0.1rem; */
  cursor: pointer;
}

.dropdown-content a {
  color: black;
  padding: 6px 8px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
