<!-- OrderItem.vue -->
<template>
  <div class="mt-6 border-b border-slate-800 pb-4">
    <div class="flex justify-between text-base text-slate-800">
      <div>{{ title }}</div>
      <div>{{ price }}</div>
    </div>
    <div class="flex mt-2 text-xs font-black text-slate-500 gap-4">
      <button class="text-slate-800">Editar</button>
      <button class="text-slate-300">Remover</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderItem",
  props: {
    title: { type: String, required: true },
    price: { type: String, required: true },
  },
});
</script>

<style scoped>
/* Adicione estilos conforme necessário */
</style>
