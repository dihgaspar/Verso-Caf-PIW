<template>
  <section
    class="flex flex-col items-center px-20 pt-28 pb-60 w-full custom-dark-gray-bg max-md:px-5 max-md:py-24 max-md:max-w-full"
  >
    <div
      class="flex flex-col -mb-12 w-full max-w-[1561px] max-md:mb-2.5 max-md:max-w-full"
    >
      <h2
        class="self-center text-5xl font-extrabold tracking-tighter text-center leading-[51px] text-slate-800 max-md:max-w-full max-md:text-4xl max-md:leading-10"
      >
        A combinação de comida e leitura<br />criam momentos de prazer que
        nutrem a alma.
      </h2>
      <div class="mt-20 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <FeatureCard
            v-for="(feature, index) in features"
            :key="index"
            :image-src="feature.imageSrc"
            :alt-text="feature.altText"
            :description="feature.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeatureCard from "./FeatureCard.vue";

export default defineComponent({
  name: "FeaturesSection",
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          imageSrc: "src/assets/sandwich-icon.png",
          altText:
            "Ilustração de uma experiência única de leitura e gastronomia",
          description:
            "Deixe-se levar por essa experiência única e descubra como cada mordida pode contar uma nova história!",
        },
        {
          imageSrc: "src/assets/sandwich-icon.png",
          altText: "Ilustração da união entre literatura e culinária",
          description:
            "Esse casamento perfeito entre literatura e culinária é uma forma de celebrar a cultura e a criatividade.",
        },
        {
          imageSrc: "src/assets/sandwich-icon.png",
          altText:
            "Ilustração de uma página de livro acompanhada por um prato de comida",
          description:
            "Cada página lida pode ser acompanhada por um sabor que evoca emoções e memórias.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.custom-dark-gray-bg {
  background-color: #7a8595;
}
</style>
