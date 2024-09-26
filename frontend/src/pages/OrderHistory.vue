<template>
  <main class="flex flex-col items-center w-[100vw] px-36">
    <section class="flex flex-col items-center w-full mt-10">
      <h1 class="text-5xl font-extrabold text-slate-800 w-full">
        Seus pedidos de livros
      </h1>

      <Carousel />
    </section>
    <section class="flex flex-col items-center w-full mt-10">
      <h1 class="text-5xl font-extrabold text-slate-800 w-full">
        Seus pedidos de itens
      </h1>
      <Carousel />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import Carousel from "../components/Carousel.vue";

export default {
  name: "OrderHistory",
  components: {
    RouterLink,
    Carousel,
  },
};
</script>

<style scoped>
.bg-custom-gray {
  background-color: #f7f7f7;
}
</style>
