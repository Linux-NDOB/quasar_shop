<template lang="pug">
.q-pa-md
    q-card.flex.justify-center.absolute-center.q-pa-sm(style="width: 40%")
      q-card
        .text-h5.text-center.login-title.q-my-xl Informacion del Negocio
        Form(:validation-schema='userSchema')
          div.q-gutter-sm.q-p-sm.text-center.justify-center(style="max-width: 300px")
            EditableInput(:name="'provider_name'" label="Nombre" v-model="fields.provider_name" disabled)
              template(v-slot:prependIcon)
                q-icon(name="face" color="black")

            EditableInput(:name="'provider_phone'" label="Telefono"  v-model="fields.provider_phone" disabled)
              template(v-slot:prependIcon)
                q-icon(name="call" color="black")
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mainStore } from 'src/stores/example-store'
// Form
import { Form } from 'vee-validate'
import * as yup from 'yup'
import EditableInput from 'src/components/Inputs/EditableInput.vue'

const options = ['sombreros', 'cinturones', 'tejidos', 'bolsos', 'vasijas']
const router = useRouter()
const store = mainStore()

// User
interface UserData {
  provider_id: string,
  provider_name: string,
  provider_phone: string
}

const fields = ref<UserData>({
  provider_id: '',
  provider_phone: '',
  provider_name: ''
})

const userSchema = yup.object().shape({
  provider_name: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres')
    .max(100, 'Maximo 100 caracteres'),
  provider_phone: yup.string().required('Este campo no puede ir vacio')
    .min(10, 'Minimo 10 caracteres')
    .max(10, 'Maximo 10 caracteres')
})

const editProduct = async () => {
  const response = await store.put('provider/', store.provider + '/', fields.value)
  response >= 200 && response < 300 ? store.notify('Exito!', 'Modificado', 'success') : store.notify('Error', 'Error al modificar', 'error')
  cleanFields()
  get()
}

const cleanFields = () => {
  fields.value = {
    provider_id: '',
    provider_name: '',
    provider_phone: ''
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
  const product = await store.getId('provider/', store.provider)
  fields.value = product
}

onMounted(() => get())
</script>
