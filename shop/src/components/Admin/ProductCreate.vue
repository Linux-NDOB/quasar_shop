<template lang="pug">
.q-pa-md
  q-card.absolute-center.q-pa-sm(style="width: 40%")
    q-card
      .text-h5.text-center.login-title.q-my-md Crear Producto
      Form(:validation-schema='userSchema')
        div.row.q-gutter-sm.q-p-sm.text-center.justify-center(style="max-width: 600px")
          EditableInput(:name="'product_name'" label="Nombre" v-model="fields.product_name")
            template(v-slot:prependIcon)
              q-icon(name="inventory_2" color="black")

          EditableInput(:name="'price'" label="Precio"  v-model="fields.price")
            template(v-slot:prependIcon)
              q-icon(name="payments" color="black")

          EditableInput(:name="'stack'" label="Cantidad"  v-model="fields.stack")
            template(v-slot:prependIcon)
              q-icon(name="layers" color="black")

          EditableInput(:name="'provider_name'" label="Proveedor"  v-model="fields.provider_name")
            template(v-slot:prependIcon)
              q-icon(name="person" color="black")

          EditableInput(:name="'provider_phone'" label="Tel. Proveedor"  v-model="fields.provider_phone")
            template(v-slot:prependIcon)
              q-icon(name="call" color="black")

          q-file( filled bottom-slots v-model="fields.image" label="Imagen" counter)
            template(v-slot:prepend)
              q-icon(name="cloud_upload" @click.stop.prevent)

          q-select.col-10(clearable filled color="purple-12" v-model="fields.category" :options="options" label="Categoria" class="q-mb-md" :name="'category'")

        div.flex.justify-center.q-mb-md
          q-btn(label="Crear Producto" color="black" square @click="validateUserForm()")
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
  category: string,
  product_name: string,
  price: string,
  stack: string,
  provider_name: string,
  provider_phone: string,
  image: string
}

const fields = ref<UserData>({
  category: 'sombreros',
  product_name: '',
  price: '',
  stack: '',
  provider_name: '',
  provider_phone: '',
  image: null
})

const userSchema = yup.object().shape({
  category: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 1 caracteres')
    .max(100, 'Maximo 100 caracteres'),
  product_name: yup.string().required('Este campo no puede ir vacio')
    .min(8, 'Minimo 8 caracteres')
    .max(20, 'Maximo 20 caracteres'),
  price: yup.number().required('Este campo no puede ir vacio'),
  stack: yup.number().required('Este campo no puede ir vacio'),
  provider_name: yup.string().required('Este campo no puede ir vacio')
    .min(5, 'Minimo 5 caracteres')
    .max(100, 'Maximo 100 caracteres'),
  provider_phone: yup.string().required('Este campo no puede ir vacio')
    .min(1, 'Minimo 10 caracteres')
    .max(10, 'Maximo 10 caracteres'),
  image: yup.string().required('Este campo no puede ir vacio')
})

const createProduct = async () => {
  const formData = new FormData()

  // Append other fields
  formData.append('category', fields.value.category)
  formData.append('product_name', fields.value.product_name)
  formData.append('price', fields.value.price)
  formData.append('stack', fields.value.stack)
  formData.append('provider_name', fields.value.provider_name)
  formData.append('provider_phone', fields.value.provider_phone)

  // Append image file
  formData.append('image', fields.value.image)

  const response = await store.post('product/', formData)
  response >= 200 && response < 300 ? store.notify('Exito!', 'Producto creado', 'success') : store.notify('Error', 'Error al crear el producto', 'error')
  cleanFields()
}

const cleanFields = () => {
  fields.value = {
    category: 'sombreros',
    product_name: '',
    price: '',
    stack: '',
    provider_name: '',
    provider_phone: '',
    image: ''
  }
}

const validateUserForm = () => {
  userSchema.validate(fields.value).then((valid) => {
    createProduct()
  }).catch((err) => {
    store.notify('Error', err, 'error')
  })
}
</script>
