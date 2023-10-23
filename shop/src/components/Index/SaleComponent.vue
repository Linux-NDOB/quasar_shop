<template>
  <div class="q-pa-md">
    <q-card class="absolute-center flex flex-center q-pa-md" style="width: 40%;">
      <q-toolbar class="bg-white bottom-border">
        <q-toolbar-title class="">
          <q-img class="login-title nav-logo absolute-center"
            src="/src/assets/artesanias-low-resolution-logo-black-transparent.png" style="width: 35%;"></q-img>
        </q-toolbar-title>
      </q-toolbar>
      <q-form @submit.prevent="onSubmit">
        <div class="q-gutter-y-sm q-py-sm column" style="max-width: 500px">
          <div class="login-title text-center text-h5 q-pa-sm">Subir producto</div>
          <q-input class="login-title" filled v-model="email" type="text" hint="Nombre producto">
            <template v-slot:before>
              <q-icon color="black" name="local_mall" />
            </template>
          </q-input>
          <q-input class="login-title" filled v-model="email" type="number" hint="Precio producto">
            <template v-slot:before>
              <q-icon color="black" name="monetization_on" />
            </template>
          </q-input>
          <q-input class="login-title" v-model="text" filled autogrow hint="Descripcion" >
            <template v-slot:before>
              <q-icon name="description" color="black" />
            </template>
          </q-input>
          <q-file color="teal" filled v-model="model" label="Imagen del producto">
            <template v-slot:before>
              <q-icon name="cloud_upload" color="black" />
            </template>
          </q-file>
          <div class="flex flex-center">
            <q-btn class="q-mt-md" to="/index" color="black">Vender</q-btn>
          </div>
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      email: ref(''),
      number: ref(null),
      text: ref(''),
      pasword: ref(''),
      isPwd: ref(true)
    }
  }
}
</script>
