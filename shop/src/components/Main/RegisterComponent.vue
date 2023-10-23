<template>
  <div class="q-pa-md">
    <q-card class="absolute-center flex flex-center q-pa-md" style="width: 35%;">
      <q-toolbar class="bg-white bottom-border">
        <q-toolbar-title class="">
          <q-img class="login-title nav-logo absolute-center" src="/src/assets/artesanias-low-resolution-logo-black-transparent.png"
            style="width: 35%;"></q-img>
        </q-toolbar-title>
      </q-toolbar>
      <q-form @submit.prevent="onSubmit">
        <div class="q-gutter-y-sm q-py-sm column" style="max-width: 300px">
          <div class="login-title text-center text-h5 q-pa-sm">REGISTRO</div>
          <q-input class="login-title" filled v-model="email" type="text" hint="Cedula">
            <template v-slot:before>
              <q-icon color="black" name="person" />
            </template>
          </q-input>
          <q-input class="login-title" filled v-model="email" type="email" suffix="@gmail.com" hint="Email">
            <template v-slot:before>
              <q-icon color="black" name="mail" />
            </template>
          </q-input>
        <q-input class="login-title" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Contrasenia">
          <template v-slot:before>
              <q-icon color="black" name="password" />
            </template>
        <template v-slot:append>
          <q-icon
            color="black"
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="flex flex-center">
        <q-btn class="q-mt-md" to="/index" color="black" >Registrarse</q-btn>
      </div>
        </div>
        <!-- ... -->
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
