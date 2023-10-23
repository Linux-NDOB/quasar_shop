<template>
  <div class="q-pa-md">
    <div class="image1"></div>
    <div class="image2"></div>
    <div class="image3"></div>
    <div class="clear"></div> <!-- Add this clearing element -->
    <q-card class="index-card" flat square>
      <q-card-section>
        <div class="text-overline lato-bold-italic">Bienvenido</div>
        <div class="text-h5 q-mt-sm q-mb-sm login-title">Tienda de artesanias</div>
        <div class="text-grey text-h6 navbar-letter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        <q-btn to="/products" class="q-mt-xl" color="black" square outline>Comenzar a comprar</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>

.image1 {
  width: 60%;
  height: 80vh;
  background-image: url('https://images.pexels.com/photos/4792079/pexels-photo-4792079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
  background-size: cover;
  float: left;
}

.image2,
.image3 {
  width: 40%;
  height: 40vh;
  background-size: cover;
  background-position: center;
  float: left;
}

.image2 {
  background-image: url('https://images.pexels.com/photos/6850579/pexels-photo-6850579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image3 {
  background-image: url('https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.index-card {
  position: absolute;
  margin-left: 15%;
  margin-top: 10%;
  width: 40%;
}</style>
