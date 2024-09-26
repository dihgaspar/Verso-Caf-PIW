<template>
  <div class="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
    <div
      class="flex flex-col px-14 py-11 mx-auto w-full bg-white rounded-md shadow-md max-md:px-5 max-md:mt-10"
    >
      <div
        class="flex flex-col justify-between items-start gap-5 border-b border-slate-800 pb-4"
      >
        <h2 class="text-5xl font-bold">Lista de pedidos</h2>
        <div class="text-slate-800 font-semibold flex justify-between w-full">
          <div class="text-slate-800">Itens selecionados</div>
          <button class="text-slate-500">Ver cardápio</button>
        </div>
      </div>

      <OrderItem title="Livro I Cemitério de animais" price="R$ 60,00" />
      <OrderItem title="Suco I Acerola - 300ml" price="R$ 4,00" />
      <OrderItem title="Hambúrguer I X-Tudo" price="R$ 17,00" />

      <div
        class="flex gap-2.5 items-center mt-2 ml-8 leading-none max-md:ml-2.5"
      >
        <img loading="lazy" src="/icon/present_icon.svg" alt="Cupom" />

        <div class="flex flex-col">
          <button class="text-base text-slate-800">Adicionar Cupom</button>
          <div class="text-xs font-black text-slate-800">
            Cupons disponíveis
          </div>
        </div>
      </div>

      <!-- Total -->
      <div
        class="flex justify-between items-start mt-8 text-base font-bold text-slate-500"
      >
        <div>
          <div>Subtotal:</div>
          <div class="mt-4">Taxa de entrega:</div>
          <div class="mt-4 text-xl font-black text-slate-800">Total:</div>
        </div>
        <div class="text-right text-slate-800">
          <div>R$ 81,00</div>
          <div class="mt-4">R$ 3,00</div>
          <div class="mt-5">R$ 84,00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrderItem from "./OrderItem.vue"; // Importa o OrderItem

export default defineComponent({
  name: "OrderSummary",
  components: {
    OrderItem, // Registra o componente
  },
});
</script>
