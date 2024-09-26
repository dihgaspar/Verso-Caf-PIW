<template>
  <div class="carousel-container">
    <div class="carousel" ref="carousel">
      <div
        class="carousel-row"
        v-for="(row, rowIndex) in cardRows"
        :key="rowIndex"
      >
        <CarouselCard
          v-for="(item, index) in row"
          :key="index"
          :title="item.title"
          :orderNumber="item.orderNumber"
          :book="item.book"
          :additionalItems="item.additionalItems"
        />
      </div>
    </div>
    <div class="carousel-controls">
      <button class="carousel-control" @click="scrollUp">
        <i class="pi pi-angle-up"></i>
      </button>

      <button class="carousel-control" @click="scrollDown">
        <i class="pi pi-angle-down"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CarouselCard from "./CarouselCard.vue";

export default defineComponent({
  components: {
    CarouselCard,
  },
  setup() {
    const carousel = ref<HTMLDivElement | null>(null);

    const items = ref([
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Cartas para John",
        additionalItems: "mais 4 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | A culpa é das estrelas",
        additionalItems: "mais 2 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Diário de um Banana",
        additionalItems: "mais 4 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Cemitério de animais",
        additionalItems: "mais 3 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Drácula",
        additionalItems: "",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Cartas para John",
        additionalItems: "mais 4 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | A culpa é das estrelas",
        additionalItems: "mais 2 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Diário de um Banana",
        additionalItems: "mais 4 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Cemitério de animais",
        additionalItems: "mais 3 itens",
      },
      {
        title: "Pedido | 20.02",
        orderNumber: "0000",
        book: "Livro | Drácula",
        additionalItems: "",
      },
    ]);
    const cardRows = ref([]);

    const createRows = () => {
      const rows = [];
      for (let i = 0; i < items.value.length; i += 5) {
        rows.push(items.value.slice(i, i + 5));
      }
      cardRows.value = rows;
    };

    const scrollUp = () => {
      if (carousel.value) {
        carousel.value.scrollTop -= 200; // Ajuste conforme necessário
      }
    };

    const scrollDown = () => {
      if (carousel.value) {
        carousel.value.scrollTop += 200; // Ajuste conforme necessário
      }
    };

    createRows();

    return {
      items,
      scrollUp,
      scrollDown,
      carousel,
      cardRows,
    };
  },
});
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.carousel {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
  gap: 30px;
  padding: 10px;
  height: 180px;
  width: 100%;
}

.carousel-row {
  display: flex;
  gap: 30px;
  width: 100%;
}

.carousel-card {
  width: calc(100% / 5 - 10px); /* Cada cartão ocupará 1/5 da largura */
  flex: 1;
}

.carousel-controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;
  width: 40px;
}

.carousel-control {
  background-color: #1f2b3f;
  color: #fff;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.carousel-control i {
  font-size: 20px;
}
</style>
