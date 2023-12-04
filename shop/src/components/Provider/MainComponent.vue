<template>
  <div class="q-pa-md">
    <div class="image1"></div>
    <div class="image2"></div>
    <div class="image3"></div>
    <div class="clear"></div> <!-- Add this clearing element -->
    <q-card class="index-card" flat square>
      <q-card-section>
        <div class="text-overline lato-bold-italic">Bienvenido</div>
        <div class="text-h5 q-mt-sm q-mb-sm login-title">Proveedor</div>
        <div class="text-grey text-h6 navbar-letter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        <q-btn to="/products" class="q-mt-xl" color="black" square outline>Gestionar productos</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>

.image1 {
  width: 60%;
  height: 80vh;
  background-image: url('https://images.pexels.com/photos/4440908/pexels-photo-4440908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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
  background-image: url('https://images.pexels.com/photos/4440883/pexels-photo-4440883.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
  /* Replace with your image URL */
}

.image3 {
  background-image: url('https://images.pexels.com/photos/9594421/pexels-photo-9594421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.index-card {
  position: absolute;
  margin-left: 15%;
  margin-top: 10%;
  width: 40%;
}</style>
