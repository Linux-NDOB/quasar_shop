<template>
  <q-input square filled stack-label v-model="value" type="text" :error-message="errorMessage" :error="!!errorMessage" >
    <template #prepend>
      <slot name="prependIcon"></slot>
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
