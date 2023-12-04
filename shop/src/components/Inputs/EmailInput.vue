<template>
  <q-input square filled label="Email" stack-label v-model="value" type="email" :error-message="errorMessage" :error="!!errorMessage">
    <template v-slot:prepend>
      <q-icon name="alternate_email" color="black" />
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
