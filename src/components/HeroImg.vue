<template>
  <div>
     <section class="main bg-light">
      <div class="container py-5">
        <div class="row pt-5">
          <div class="main-pic col-lg-6"></div>
          <div class="col-lg-6 pt-5">
            <p>New Arrival</p>
            <h1>Unique Collection</h1>
            <button class="btn2 mt-3">SHOP NOW</button>
          </div>
          
        </div>
      </div>
    </section>
    <!-- <router-link to="/mancate" >alpha</router-link> -->
  </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
.main-pic{
    background: url(../assets/main1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
/* .row{
    height: 70vh;
} */
.main p{
    font-size: 1.5rem;
    text-transform: uppercase;
}
.main h1{
    font-size: 5rem;
    font-weight: 900;
}
.btn2{
    height: 45px;
    width: 40%;
    color: white;
    outline: none;
    border: none;
    background-color: rgb(209, 79, 137);
    font-weight: bold;
    /* transition: all 0.4s; */
    cursor: pointer;
}
.btn2:hover{
    border: 1px solid rgb(218, 11, 105);
    background: transparent;
    color: rgb(218, 11, 105);
    transition: all 0.9s; 
}
</style>