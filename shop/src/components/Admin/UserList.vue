<template>
  <div class="q-pa-md lato-bold-italic">
    <q-table title="Usuarios" :rows="rows" :columns="columns" row-key="name" selection="multiple"
      v-model:selected="selected" :filter="filter" grid hide-header>
      <template v-slot:top-right>
        <q-input debounce="300" v-model="filter" placeholder="Buscar usuario">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''">
          <q-card class="index-card" flat bordered>
            <q-img class="my-image" src="https://i.pinimg.com/originals/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.png" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <q-icon name="fingerprint" />
                <div class="col text-h6 ellipsis">
                  {{ props.row.user_id }}
                </div>
                <q-icon name="face" />
                <div class="col-auto q-pt-md row no-wrap items-center">
                  {{ props.row.user_name }}
                </div>
              </div>
            </q-card-section>
            <q-card-section class="row alig-items-center">
              <q-icon name="mail" />
                <div class="col text-subtitle2">
                  {{ props.row.email }}
                </div>
                <div class="col-auto row no-wrap items-center">
                  <q-icon name="key" />
                  {{ props.row.password }}
                </div>
            </q-card-section>
            <q-separator />
            <q-card-actions class="justify-center">
              <q-btn flat round icon="edit" color="blue" />
              <q-btn flat color="blue" @click="editProduct(props.row.user_id)">
                Editar
              </q-btn>
              <q-btn flat round icon="delete" color="red" />
              <q-btn flat color="red" @click="delProduct(props.row.user_id)">
                Eliminar
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </template>

    </q-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { mainStore } from 'src/stores/example-store'

const router = useRouter()
const store = mainStore()

const columns = [
  { name: 'Nombre', align: 'center', label: 'Nombre', field: 'user_id', sortable: true },
  { name: 'Precio', align: 'center', label: 'Precio', field: 'email', sortable: true },
  { name: 'Categoria', align: 'center', label: 'Precio', field: 'password', sortable: true }
]

const rows = ref([])
const filter = ref('')
const selected = ref([])

const fillRows = async () => {
  const data = await store.get('user/')
  console.log(data)
  let index = 0
  data.forEach((row: any) => {
    const newRow = {
      index,
      user_id: row.user_id,
      user_name: row.user_name,
      email: row.email,
      password: row.password
    }
    rows.value.push(newRow)
    index += 1
  })
}

const delProduct = async (id: string) => {
  const response = await store.del('user/', id + '/')
  response >= 200 && response < 300 ? store.notify('Exito!', 'Eliminado', 'success') : store.notify('Error', 'No eliminado', 'error')
  rows.value = []
  fillRows()
}

const editProduct = async (id: string) => {
  store.setUserId(id)
  router.push('user-edit')
}

onMounted(() => fillRows())
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s

.my-image
  max-height: 200px

.q-table__title
  font-family: 'playfair'
</style>
