<template>
  <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div class="flex flex-col grow px-11 py-20 w-full text-2xl tracking-tighter leading-6 text-center rounded-3xl bg-slate-800 text-neutral-100 max-md:px-5 max-md:mt-10">
      <img :src="imageSrc" :alt="altText" class="object-contain w-full aspect-[1.28]" />
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeatureCard',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>