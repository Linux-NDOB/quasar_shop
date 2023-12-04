<template>
  <q-layout view="lHh Lpr lFf" class="main-container">
    <q-header reveal>
      <q-toolbar class="bg-white bottom-border">
          <q-toolbar-title class="">
             <q-img class="nav-logo self-center" src="../assets/artesanias-low-resolution-logo-black-transparent.png"  style="width: 10%;"></q-img>
          </q-toolbar-title>
          <q-btn to="/index" class="q-ma-sm navbar-letter text-black" flat>Inicio</q-btn>
          <q-btn to="/products" class="q-ma-sm navbar-letter text-black" flat>Productos</q-btn>
          <q-btn to="/cart" class="q-ma-sm navbar-letter text-black" flat>Carrito</q-btn>
          <q-btn to="/" class="q-ma-sm navbar-letter text-black" flat>Salir</q-btn>
         </q-toolbar>
         <div>
      <q-toolbar class="bg-white bottom-border justify-center">
          <q-btn to="/hats" class="q-ma-sm navbar-letter text-black" flat>Sombreros</q-btn>
          <q-btn to="/belts" class="q-ma-sm navbar-letter text-black" flat>Cinturones</q-btn>
          <q-btn to="/fabrics" class="q-ma-sm navbar-letter text-black" flat>Tejidos</q-btn>
          <q-btn to="/bags" class="q-ma-sm navbar-letter text-black" flat>Bolsos</q-btn>
          <q-btn to="/pots" class="q-ma-sm navbar-letter text-black" flat>Vasijas</q-btn>
          <q-btn to="/products" class="q-ma-sm navbar-letter text-black" flat>Todos</q-btn>
         </q-toolbar>
      </div>
    </q-header>

<q-footer elevated>
  <q-toolbar class="bg-white bottom-border">
          <q-toolbar-title class="">
             <q-img class="nav-logo self-center" src="../assets/artesanias-low-resolution-logo-black-transparent.png"  style="width: 10%;"></q-img>
          </q-toolbar-title>
          <q-btn class="q-ma-sm navbar-letter text-black" flat>Quienes somos</q-btn>

         </q-toolbar>
</q-footer>

    <q-page-container>
      <q-page-sticky class="action-btn" position="bottom-right" :offset="[18, 18]">
      <q-btn to="cart" fab icon="shopping_cart" color="black" />
    </q-page-sticky>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.action-btn {
  z-index: 9999; /* Set a high z-index value to ensure it's on top */
}
</style>
