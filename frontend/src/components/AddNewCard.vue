<template>
  <section class="mt-2 max-w-full w-[667px]">
    <div class="flex gap-5 max-md:flex-col">
      <div class="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col self-stretch my-auto w-full font-bold max-md:mt-10">
          <h2 class="text-3xl font-black leading-none text-slate-800">Adicione um novo cartão</h2>
          <p class="self-start mt-6 text-base leading-5 text-slate-500">
            É prático, seguro e você não perde nenhum<br />minuto a mais quando o seu pedido chegar
          </p>
          <button class="overflow-hidden gap-2.5 self-stretch px-2 py-3 mt-7 text-3xl text-white rounded-xl bg-slate-800 min-h-[65px]">
            Adicionar cartão
          </button>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="../assets/person-card.png" class="object-contain w-full aspect-square" alt="Credit card illustration" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddNewCard',
});
</script>