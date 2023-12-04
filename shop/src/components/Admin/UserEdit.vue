<template lang="pug">
.q-pa-md
  q-card.flex.justify-center.absolute-center.q-pa-sm(style="width: 30%")
    q-card
      .text-h5.text-center.login-title.q-my-xl Editar Usuario
      Form(:validation-schema='userSchema')
        div.q-gutter-sm.q-p-sm.text-center.justify-center(style="max-width: 400px")
          EditableInput(:name="'product_name'" label="Nombre" v-model="fields.user_name")
            template(v-slot:prependIcon)
              q-icon(name="face" color="black")

          EditableInput(:name="'price'" label="Email"  v-model="fields.email")
            template(v-slot:prependIcon)
              q-icon(name="mail" color="black")

          EditableInput(:name="'stack'" label="Password"  v-model="fields.password")
            template(v-slot:prependIcon)
              q-icon(name="key" color="black")

        div.flex.justify-center.q-mb-md
          q-btn(label="Editar Usuario" color="black" square @click="validateUserForm()")
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mainStore } from 'src/stores/example-store'
// Form
import { Form } from 'vee-validate'
import * as yup from 'yup'
import EditableInput from 'src/components/Inputs/EditableInput.vue'

const router = useRouter()
const store = mainStore()

// User
interface UserData {
  user_name: string,
  email: string,
  password: string,
}

const fields = ref<UserData>({
  user_name: '',
  email: '',
  password: ''
})

const userSchema = yup.object().shape({
  user_name: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres')
    .max(100, 'Maximo 100 caracteres'),
  email: yup.string().required('Este campo no puede ir vacio')
    .min(8, 'Minimo 8 caracteres')
    .max(20, 'Maximo 20 caracteres'),
  password: yup.string().required('Este campo no puede ir vacio')
    .min(5, 'Minimo 5 caracteres')
    .max(100, 'Maximo 100 caracteres')
})

const editProduct = async () => {
  const response = await store.put('user/', store.userId + '/', fields.value)
  response >= 200 && response < 300 ? store.notify('Exito!', 'Usuario editado', 'success') : store.notify('Error', 'Error al editar el producto', 'error')
  cleanFields()
}

const cleanFields = () => {
  fields.value = {
    user_name: '',
    email: '',
    password: ''
  }
}

const validateUserForm = () => {
  userSchema.validate(fields.value).then((valid) => {
    editProduct()
  }).catch((err) => {
    store.notify('Error', err, 'error')
  })
}

const get = async () => {
  const product = await store.getId('user/', store.userId)
  fields.value = product
  console.log(product)
}

onMounted(() => get())
</script>
