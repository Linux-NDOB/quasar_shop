<template>
  <q-layout view="lHh Lpr lFf" class="main-container">
    <q-header reveal>
      <q-toolbar class="bg-white bottom-border">
        <q-toolbar-title class="">
          <q-img class="self-center" src="../assets/artesanias-low-resolution-logo-black-transparent.png"
            style="width: 10%;"></q-img>
        </q-toolbar-title>
        <q-btn to="/" class="q-ma-sm navbar-letter text-black" flat>Principal</q-btn>
        <q-btn to="/login" class="q-ma-sm navbar-letter text-black" flat>Usuario</q-btn>
        <q-btn to="/provider" class="q-ma-sm navbar-letter text-black" flat>Proveedor</q-btn>
        <q-btn to="/admin" class="q-ma-sm navbar-letter text-black" flat>Administrador</q-btn>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="bg-white">
      <q-toolbar class="bg-white bottom-border q-mt-sm">
        <q-toolbar-title class="">
          <q-img class="nav-logo self-center" src="../assets/artesanias-low-resolution-logo-black-transparent.png"
            style="width: 10%;"></q-img>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <div class="image1"></div>
      <div class="image2"></div>
      <div class="image3"></div>
      <div class="image4"></div>
      <div class="image5"></div>
      <div class="image6"></div>
      <div class="image7"></div>
      <div class="image8"></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.image1,
.image2,
.image3,
.image4,
.image5,
.image6,
.image7,
.image8 {
  width: 25%;
  height: 40vh;
  background-size: cover;
  background-position: center;
  float: left;
}

.image1 {
  background-image: url('https://images.pexels.com/photos/13808386/pexels-photo-13808386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image2 {
  background-image: url('https://images.pexels.com/photos/16041155/pexels-photo-16041155/free-photo-of-woman-making-traditional-handicraft.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image3 {
  background-image: url('https://images.pexels.com/photos/6354079/pexels-photo-6354079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image4 {
  background-image: url('https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image5 {
  background-image: url('https://images.pexels.com/photos/11130921/pexels-photo-11130921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image6 {
  background-image: url('https://images.pexels.com/photos/16041156/pexels-photo-16041156/free-photo-of-boy-in-traditional-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image7 {
  background-image: url('https://images.pexels.com/photos/10464182/pexels-photo-10464182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}

.image8 {
  background-image: url('https://images.pexels.com/photos/6263143/pexels-photo-6263143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  /* Replace with your image URL */
}
</style>
