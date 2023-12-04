<template>
  <div class="q-pa-md">
    <div class="image1">
      <div class="overlay"></div>
    </div>
    <div class="image2"></div>
    <div class="image3"></div>

    <div v-for="i in rows" :key="i.product_id" class="row inline">
      <q-card class="index-card" flat bordered>
      <q-img :src="i.image" class="my-image"/>

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ i.product_name }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="attach_money" />
            {{  i.price }}
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-list>
          <q-item clickable>
          <q-item-section avatar>
            <q-icon color="green" name="shopping_bag" />
          </q-item-section>

          <q-item-section>
            <q-item-label> <a class="router-link" :href="'https://wa.me/' + i.provider_phone + '?text=Hola%20¿Cómo%20estás?%20soy%20' + store.user[0] + ',%20me%20interesa%20comprar%20tu%20' + i.product_name+ '.'" target="_blank">Comprar</a></q-item-label>
            <q-item-label caption>Contactarse con el vendedor!.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="delete" />
          </q-item-section>

          <q-item-section>
            <q-item-label @click="delCart(i.product_id)">Eliminar</q-item-label>
            <q-item-label caption>Sacar del carrito.</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>
      </q-card-actions>
    </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { mainStore } from 'src/stores/example-store'

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
  const data = await store.get('cuserid/' + store.user[1])
  let index = 0
  data.forEach((row: any) => {
    const newRow = {
      index,
      user_id: row.user_id,
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

const delCart = async (id: string) => {
  const response = await store.del('cart/', id + '/')
  response >= 200 && response < 300 ? store.notify('Exito!', 'Eliminado del carrito', 'success') : store.notify('Error', 'No agregado o ya existe', 'error')
  rows.value = []
  fillRows()
}

onMounted(() => fillRows())
</script>

<style scoped lang="scss">
.my-image{
  max-height: 200px;
}
.index-card {
  width: 80%; /* Adjust width as needed */
  max-width: 300px; /* Add a max-width to limit card width */
  min-height: 350px;
  max-height: 400px;
  overflow: hidden;
}
</style>
