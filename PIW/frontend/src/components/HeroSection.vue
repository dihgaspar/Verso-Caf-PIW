<template>
  <section id="hero" class="pt-40 pr-4 pb-24 pl-20 w-full bg-custom-color max-md:pt-24 max-md:pl-5 max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col">
      <div class="flex flex-col w-6/12">
        <h1 class="text-9xl font-bold tracking-tighter leading-[157px] max-md:text-4xl">Sabores que<br />contam histórias!</h1>
        <p class="mt-5 text-3xl">A união entre comida e leitura proporciona uma experiência sensorial única, alimentando tanto o corpo quanto a mente.
          Cada prato pode evocar emoções e memórias, tornando a leitura uma viagem gastronômica.</p>
      </div>
      <div class="flex w-6/12">
        <img src="../assets/burger-highlight.svg" alt="Ilustração" class="object-contain w-full" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.bg-custom-color {
  background-color: #F3E3CB;
}
</style>
