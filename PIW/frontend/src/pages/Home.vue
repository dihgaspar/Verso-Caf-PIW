<template>
  <div>
    <HeroSection />

    <FeaturesSection />

    <section>
      <img src="/img/menu_hero.png" alt="Menu Hero" class="w-full h-auto" />
      <div class="text-center my-8">
        <h2 class="text-6xl font-bold text-primary-dark">Cardápio</h2>
      </div>

      <ProductSection />
    </section>

    <section>
      <img src="/img/lib_hero.png" alt="Library Hero" class="w-full" />
      <div class="text-center my-8">
        <h2 class="text-6xl font-bold text-primary-dark">Biblioteca</h2>
      </div>

      <BookSection />
    </section>

    <section
      class="flex flex-col items-center px-20 pt-64 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full custom-dark-gray-bg"
    >
      <div
        class="flex z-10 flex-col mb-0 w-full max-w-[1670px] max-md:mb-2.5 max-md:max-w-full"
      >
        <div class="max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="../assets/burger.svg"
                alt="Experimentar"
                class="w-full h-auto max-md:max-w-full"
              />
            </div>
            <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col mt-6 text-slate-800 max-md:mt-10 max-md:max-w-full"
              >
                <h2
                  class="mr-14 text-9xl font-bold tracking-tighter leading-[101px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10"
                >
                  Vamos,<br /><span class="text-orange-300">experimentar?</span>
                </h2>
                <p
                  class="mt-8 text-3xl tracking-tighter leading-9 max-md:max-w-full"
                >
                  Ao saborear uma refeição inspirada em histórias, <br />como um
                  prato mencionado em um romance ou <br />um lanche típico de
                  uma época retratada em um <br />clássico, você não apenas se
                  alimenta, mas também <br />amplia sua conexão com a narrativa.
                  Esse casamento <br />perfeito entre literatura e culinária é
                  uma forma de <br />celebrar a cultura e a criatividade,
                  proporcionando <br />momentos de prazer que nutrem a alma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CommentSection />

    <Footer />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import CartComponent from "../components/CartComponent.vue";
import CommentSection from "../components/CommentSection.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import NavTabs from "../components/NavTabs.vue";
import ProductCard from "../components/ProductCard.vue";
import SearchComponent from "../components/SearchComponent.vue";

import FeaturesSection from "../components/FeaturesSection.vue";

import BookSection from "../components/BookSection.vue";
import ProductSection from "../components/ProductSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    FeaturesSection,
    NavTabs,
    CartComponent,
    SearchComponent,
    ProductCard,
    CommentSection,
    Footer,
    ProductSection,
    BookSection,
  },
  setup() {
    const totalCartPrice = ref(0);

    const updateTotalCartPrice = (newPrice: number) => {
      totalCartPrice.value += newPrice;
    };

    return {
      totalCartPrice,
      updateTotalCartPrice,
    };
  },
};
</script>

<style scoped>
.bg-primary-dark {
  background-color: #1f2b3f;
}
.custom-dark-gray-bg {
  background-color: #7a8595;
}
</style>
