<template>
  <q-layout view="lHh Lpr lFf" class="main-container">
    <q-header reveal elevated class="">
      <q-toolbar class="bg-teal-9">
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="q-mr-md q-ml-md"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="absolute-center flex">
          <q-avatar class="">
            <img
              src="https://imgs.search.brave.com/Un5mw-A8LI1I78IEPRQYgCsf-5EOu4tvHV3UYAAPERo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9uYXR1cmUt/YW5kLWVudmlyb25t/ZW50L2Vjby1mcmll/bmRseS1pY29uLnN2/Zw.svg">
          </q-avatar>

          <q-toolbar-title class="text-h5 lato-bold-italic">
            Blog de plantas
          </q-toolbar-title>
           </div>
           <router-link to="/index" class="router-link"><q-btn class="absolute-bottom-right vertical-middle q-mr-sm q-mb-sm" flat round dense icon="home" /></router-link>
         </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list bordered class="rounded-borders">
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                  <router-link to="/index" class="router-link"> Inicio</router-link>
              </q-item-section>
            </q-item>
      <q-expansion-item
        expand-separator
        icon="compost"
        label="Categorias"
        caption="Busque las plantas clasificadas por su utilidad"
        default-opened
       :content-inset-level="0.5"
      >
      <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedNutrition" />
              </q-item-section>

              <q-item-section>
                <router-link to="/foods" class="router-link"> Alimenticias</router-link>
              </q-item-section>
            </q-item>
            </q-card>
      <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar class="">
                <q-icon name="medical_services" />
              </q-item-section>

              <q-item-section>
                <router-link to="/medic" class="router-link"> Medicinales</router-link>
              </q-item-section>
            </q-item>
            </q-card>
       <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedPottedPlant" />
              </q-item-section>

              <q-item-section>
                <router-link to="/ornamental" class="router-link"> Ornamentales</router-link>
              </q-item-section>
            </q-item>
            </q-card>
       <q-card>
              <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="forest" />
              </q-item-section>

              <q-item-section>
                <router-link to="/industry" class="router-link"> Industriales</router-link>
              </q-item-section>
            </q-item>
            </q-card>
      </q-expansion-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedReceiptLong" />
              </q-item-section>

              <q-item-section>
              <router-link to="/recipes" class="router-link"> Listado de recetas</router-link>
              </q-item-section>
            </q-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedArticle" />
              </q-item-section>
              <q-item-section>
              <router-link to="/article" class="router-link"> Ejemplo de articulo</router-link>
              </q-item-section>
            </q-item>
        <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedSettings" />
              </q-item-section>

              <q-item-section>
                <router-link to="/settings" class="router-link"> Ajustes</router-link>
              </q-item-section>
            </q-item>
       <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="symOutlinedLogout" />
              </q-item-section>

              <q-item-section><router-link to="/" class="router-link"> Abandonar sitio</router-link></q-item-section>
            </q-item>
    </q-list>
      </q-scroll-area>
      <q-img class="absolute-top"
             src="https://images.unsplash.com/photo-1528035015334-80868324e60e?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://imgs.search.brave.com/pQC1INSdYARH7uPgBIt5HX2mGC7NztS49kosOnHD2pc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vYThhMmY2/NjAtZjliNy00ODc4/LWI5YWMtMzE0NzRi/Zjg5Nzc1L2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4MTY4NjQx/NTY5NzcwMDAw.jpeg">
          </q-avatar>
          <div class="text-weight-bold">Smiller Perez</div>
          <div>@smiller</div>
        </div>
      </q-img>
    </q-drawer>

<q-footer elevated class="bg-teal-10">
  <q-toolbar>
      <q-avatar class="q-ml-md">
        <img src="https://imgs.search.brave.com/Un5mw-A8LI1I78IEPRQYgCsf-5EOu4tvHV3UYAAPERo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9uYXR1cmUt/YW5kLWVudmlyb25t/ZW50L2Vjby1mcmll/bmRseS1pY29uLnN2/Zw.svg">
      </q-avatar>
      <q-toolbar-title class="text-h5">
        Blog de plantas
      </q-toolbar-title>
      <div>Todos los derechos reservados</div>
  </q-toolbar>
</q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { symOutlinedPottedPlant, symOutlinedNutrition, symOutlinedMenuBook, symOutlinedReceiptLong, symOutlinedLogout, symOutlinedSettings, symOutlinedArticle } from '@quasar/extras/material-symbols-outlined'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.main-container {
  max-width: 80%; /* Adjust as needed */
  margin: 0 auto; /* This centers the container */
}
</style>
