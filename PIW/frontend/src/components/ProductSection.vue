<template>
  <div class="py-8">
    <div class="flex justify-center items-center space-x-2 h-16 px-8">
      <NavTabs section="Cardápio" @tabSelected="filterByCategory" />
      <CartComponent :totalPrice="totalPrice" />
      <SearchComponent @search="filterBySearch" />
    </div>

    <div
      class="flex items-center justify-center gap-8 p-8 w-full"
      style="height: 70vh"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @update-cart="updateCart"
        @product-updated="fetchProducts"
        @product-deleted="fetchProducts"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getDishes } from "../api/dishes"; // Substitua pelo caminho correto
import CartComponent from "./CartComponent.vue";
import NavTabs from "./NavTabs.vue";
import ProductCard from "./ProductCard.vue";
import SearchComponent from "./SearchComponent.vue";

interface Product {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  descricao: string;
  imagem: string;
}

export default defineComponent({
  components: {
    NavTabs,
    CartComponent,
    SearchComponent,
    ProductCard,
  },
  setup() {
    const products = ref<Product[]>([]);
    const filteredProducts = ref<Product[]>([]);
    const totalPrice = ref(0);

    // Função para buscar os produtos
    const fetchProducts = async () => {
      const response = await getDishes(); // Função de busca da API
      products.value = response;
      filteredProducts.value = response;
    };

    // Atualiza o valor total do carrinho
    const updateCart = (price: number) => {
      totalPrice.value += price;
    };

    // Filtrar produtos por categoria
    const filterByCategory = (category: string) => {
      filteredProducts.value = products.value.filter(
        (product) => product.categoria === category,
      );
    };

    // Filtrar produtos pela barra de pesquisa
    const filterBySearch = (searchTerm: string) => {
      filteredProducts.value = products.value.filter((product) =>
        product.nome.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    };

    // Buscar produtos ao montar o componente
    onMounted(fetchProducts);

    return {
      filteredProducts,
      totalPrice,
      filterByCategory,
      filterBySearch,
      updateCart,
      fetchProducts,
    };
  },
});
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
</style>
