<template lang="pug">
.q-pa-md
    q-card.absolute-center.flex.flex-center.q-pa-sm(style="width: 35%")
      q-toolbar.bg-white.bottom-border
        q-toolbar-title
          q-img.login-title.nav-logo.absolute-center(src="/src/assets/artesanias-low-resolution-logo-black-transparent.png", style="width: 35%")
      q-separator
      q-card
        .text-h5.text-center.login-title.q-my-md Proveedor
        Form(:validation-schema='userSchema')
          .q-gutter-y-sm.q-py-sm.text-center(style="max-width: 300px")
            EmailInput(:name="'email'" v-model="fields.email")
            PasswordInput(:name="'password'" v-model="fields.password")
            div.flex.justify-center
            q-btn(label="Proveedor" color="black" square @click="validateUserForm()")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { mainStore } from 'src/stores/example-store'
// Form
import { Form } from 'vee-validate'
import * as yup from 'yup'
import EmailInput from 'src/components/Inputs/EmailInput.vue'
import PasswordInput from 'src/components/Inputs/PasswordInput.vue'

const router = useRouter()
const store = mainStore()

// Tabs
const tab = ref('mails')

// User
interface UserData {
  email: string,
  password: string
}

const fields = ref<UserData>({
  email: '',
  password: ''
})

const userSchema = yup.object().shape({
  email: yup.string().required('Este campo no puede ir vacio')
    .email('Ingrese un email valido')
    .min(12, 'Minimo 12 caracteres')
    .max(50, 'Maximo 50 caracteres'),
  password: yup.string().required('Este campo no puede ir vacio')
    .min(8, 'Minimo 8 caracteres')
    .max(20, 'Maximo 20 caracteres')
})

const validateUser = async () => {
  const data = await store.get('provider_account/')
  const user = data.find((u: UserData) => u.email === fields.value.email && u.password === fields.value.password)
  if (user) {
    store.setProvider(user.provider_id)
    router.push('provider-main')
    return true
  }
  store.notify('Error', 'Datos incorrectos', 'error')
  cleanFields()
  return false
}

const cleanFields = () => { fields.value = { email: '', password: '' } }

const validateUserForm = () => {
  userSchema.validate(fields.value).then((valid) => {
    validateUser()
  }).catch((err) => {
    console.log(err)
  })
}
</script>
