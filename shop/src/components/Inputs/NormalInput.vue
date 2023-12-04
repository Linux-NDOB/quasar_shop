<template>
  <q-input square filled label="Nombre" stack-label v-model="value" type="text" :error-message="errorMessage" :error="!!errorMessage">
    <template v-slot:prepend>
      <q-icon name="face" color="black" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { errorMessage, value } = useField(toRef(props, 'name'))
</script>
