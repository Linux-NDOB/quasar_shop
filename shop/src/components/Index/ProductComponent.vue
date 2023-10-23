<template>
  <div class="q-pa-md lato-bold-italic">
    <q-table title="Artesanias" :rows="rows" :columns="columns" row-key="name" selection="multiple"
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
      <q-img class="my-image" :src="props.row.image_url" />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis
">
            {{props.row.name}}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="attach_money" />
            {{props.row.price}}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Descripcion
        </div>
        <div class="text-caption text-grey">
          {{ props.row.desc }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="shopping_bag" color="green" />
        <q-btn to="/cart" flat color="black">
          Agregar al carrito
        </q-btn>
      </q-card-actions>
    </q-card>
        </div>
      </template>

    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
  { name: 'Nombre', align: 'center', label: 'Nombre', field: 'name', sortable: true },
  { name: 'Precio', align: 'center', label: 'Precio', field: 'price', sortable: true },
  { name: 'Descripcion', align: 'center', label: 'Descripcion', field: 'desc', sortable: true }
]

const rows = [
  {
    code: "#123124",
    name: "Sombrero Vuelteao",
    price: "150.000",
    desc: "Sombrero hecho de...",
    image_url: "https://imgs.search.brave.com/Ai73jbX0VDvWR2kMh1OqCS-QbHK6A4EshVUE1KVuEfc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L1NvbWJyZXJv/X3Z1ZWx0aWFvLmpw/Zw"
  },
  {
    code: "#123124",
    name: "Manilla Negra",
    price: "10.000",
    desc: "Manilla hecha a ma...",
    image_url: "https://imgs.search.brave.com/9nKncJdbQH9PxporA45DkLWm4hiX1HauDm1_SeTH57s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE0RDNqdVdoMEwu/anBn"
  },
  {
    code: "#QWE45",
    name: "Pendientes de oro",
    price: "500.000",
    desc: "Pendientes...",
    image_url: "https://artesaniasdecolombia.com.co/document/banner/artesanos-12.jpg"
  },
  {
    code: "#123124",
    name: "Correa",
    price: "20.000",
    desc: "Esta correa de cuero...",
    image_url: "https://imgs.search.brave.com/qZzP2ZLRvNnEjh5AySF__PQ7avKxesno7d8fFXtyOfQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEtTzlhMks0Skwu/anBn"
  }
]

export default {
  setup () {
    return {
      filter: ref(''),
      selected: ref([]),
      columns,
      rows
    }
  }
}
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s

.my-image
  max-height: 250px

.q-table__title
  font-family: 'playfair'

</style>
