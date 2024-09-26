<template>
  <div
    class="flex flex-col px-2 rounded-lg border border-solid bg-slate-800 border-slate-800 h-full w-1/12 justify-center items-start font-semibold"
  >
    <div class="flex text-x text-custom-color">Carrinho:</div>
    <div
      class="p-1 text-x text-center bg-white rounded-lg flex w-full justify-center items-center"
    >
      R$ {{ totalPrice.toFixed(2) }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CartComponent",
  props: {
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style scoped>
.bg-primary-dark {
  background-color: #1f2b3f;
}

.text-custom-color {
  color: #f3c48c;
}
</style>
