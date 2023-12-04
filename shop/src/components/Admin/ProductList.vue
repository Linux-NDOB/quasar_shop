<template>
  <div class="q-pa-md lato-bold-italic">
    <q-table title="Productos" :rows="rows" :columns="columns" row-key="name" selection="multiple"
      v-model:selected="selected" :filter="filter" grid hide-header>
      <template v-slot:top-right>
        <q-input debounce="300" v-model="filter" placeholder="Buscar articulo">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''">
          <q-card class="index-card" flat bordered>
            <q-img class="my-image" :src="props.row.image" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  {{ props.row.product_name }}
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-icon name="attach_money" />
                  {{ props.row.price }}
                </div>
              </div>
            </q-card-section>
            <q-card-section class="row">
                <div class="col text-subtitle2">
                  Disponibles: {{ props.row.stack }}
                </div>
                <div class="col-auto row no-wrap items-center">
                  Proveido por:
                  {{ props.row.provider_name }}
                </div>
            </q-card-section>
            <q-card-section class="row">
                <div class="col text-subtitle2">
                  Categoria: {{ props.row.category }}
                </div>
                <div class="col-auto row no-wrap items-center">
                  Telefono Proveedor:
                  {{ props.row.provider_phone }}
                </div>
            </q-card-section>
            <q-separator />
            <q-card-actions class="justify-center">
              <q-btn flat round icon="edit" color="blue" />
              <q-btn flat color="blue" @click="editProduct(props.row.product_id)">
                Editar
              </q-btn>
              <q-btn flat round icon="delete" color="red" />
              <q-btn flat color="red" @click="delProduct(props.row.product_id)">
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
  { name: 'Nombre', align: 'center', label: 'Nombre', field: 'product_name', sortable: true },
  { name: 'Precio', align: 'center', label: 'Precio', field: 'price', sortable: true },
  { name: 'Categoria', align: 'center', label: 'Precio', field: 'category', sortable: true }
]

const rows = ref([])
const filter = ref('')
const selected = ref([])

const fillRows = async () => {
  const data = await store.get('product/')
  let index = 0
  data.forEach((row: any) => {
    const newRow = {
      index,
      product_id: row.product_id,
      product_name: row.product_name,
      category: row.category,
      price: row.price,
      stack: row.stack,
      provider_name: row.provider_name,
      provider_phone: row.provider_phone,
      image: row.image
    }
    rows.value.push(newRow)
    index += 1
  })
}

const delProduct = async (id: string) => {
  const response = await store.del('product/', id + '/')
  response >= 200 && response < 300 ? store.notify('Exito!', 'Eliminado', 'success') : store.notify('Error', 'No eliminado', 'error')
  rows.value = []
  fillRows()
}

const editProduct = async (id: string) => {
  store.setProduct(id)
  router.push('product-edit')
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
