<template>
  <q-layout view="lHh Lpr lFf" class="main-container">
    <q-header reveal>
      <q-toolbar class="bg-white bottom-border">
        <q-toolbar-title class="">
          <q-img class="nav-logo self-center" src="../assets/artesanias-low-resolution-logo-black-transparent.png"
            style="width: 17%;"></q-img>
        </q-toolbar-title>
        <q-btn to="/admin-main" class="q-ma-sm navbar-letter text-black" flat>Inicio</q-btn>
        <q-btn to="/product-list" class="q-ma-sm navbar-letter text-black" flat>Listar Productos</q-btn>
        <q-btn to="/product-create" class="q-ma-sm navbar-letter text-black" flat>Crear Productos</q-btn>
        <q-btn to="/user-list" class="q-ma-sm navbar-letter text-black" flat>Listar Usuarios</q-btn>
        <q-btn to="/" class="q-ma-sm navbar-letter text-black" flat>Salir</q-btn>
      </q-toolbar>
      <div>
      </div>
    </q-header>

    <q-footer elevated>
      <q-toolbar class="bg-white bottom-border">
        <q-toolbar-title class="">
          <q-img class="nav-logo self-center" src="../assets/artesanias-low-resolution-logo-black-transparent.png"
            style="width: 10%;"></q-img>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
