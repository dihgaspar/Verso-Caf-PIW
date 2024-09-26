<template>
  <div class="carousel-card">
    <h3
      class="px-3.5 py-2 text-lg font-semibold text-white bg-slate-800 rounded-t-md"
    >
      {{ title }}
    </h3>

    <div class="flex flex-col items-start px-3.5 mt-3.5 w-full">
      <p
        class="text-base font-black text-slate-800 border-b border-slate-800 w-full"
      >
        Pedido Concluído Nº {{ orderNumber }}
      </p>
      <div class="flex flex-col border-b border-slate-800 w-full p-2">
        <div class="flex items-center">
          <span
            class="z-10 px-1.5 my-auto text-xs font-black text-center text-white whitespace-nowrap rounded-sm bg-slate-500 h-[13px] w-[13px]"
          >
            1
          </span>
          <p>{{ book }}</p>
        </div>

        <span
          v-if="additionalItems"
          class="ml-2.5 text-xs font-black text-slate-800"
        >
          {{ additionalItems }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
    },
    book: {
      type: String,
      required: true,
    },
    additionalItems: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped>
.carousel-card {
  background-color: #f4f4f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  height: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel-card h3 {
  font-size: 1rem;
  font-weight: bold;
}

.carousel-card p {
  font-size: 0.9rem;
  color: #243b53;
}

.carousel-card span {
  font-size: 0.8rem;
}
</style>
