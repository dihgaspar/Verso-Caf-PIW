<template>
  <div class="py-8">
    <div class="flex justify-center items-center space-x-2 h-16 px-8">
      <NavTabs section="Biblioteca" />
      <CartComponent :totalPrice="totalPrice" />
      <SearchComponent @search="filterBySearch" />
    </div>

    <div
      class="flex items-center justify-center gap-8 p-8 w-full"
      style="height: 70vh"
    >
      <BookCard
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
        @addToCart="updateCart"
        @book-updated="fetchBooks"
        @book-deleted="fetchBooks"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getBooks } from "../api/books";
import BookCard from "./BookCard.vue";
import CartComponent from "./CartComponent.vue";
import NavTabs from "./NavTabs.vue";
import SearchComponent from "./SearchComponent.vue";

interface Book {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  ano: number;
  disponivel: boolean;
  imagem: string;
}

export default defineComponent({
  components: {
    NavTabs,
    CartComponent,
    SearchComponent,
    BookCard,
  },
  setup() {
    const books = ref<Book[]>([]);
    const filteredBooks = ref<Book[]>([]);
    const totalPrice = ref(0);

    const fetchBooks = async () => {
      const response = await getBooks();
      const data: Book[] = await response;
      books.value = data;
      filteredBooks.value = data;
    };

    const updateCart = (price: number) => {
      totalPrice.value += price;
    };

    const filterBySearch = (searchTerm: string) => {
      filteredBooks.value = books.value.filter((book) =>
        book.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    };

    onMounted(fetchBooks);

    return {
      filteredBooks,
      totalPrice,
      filterBySearch,
      updateCart,
      fetchBooks,
    };
  },
});
</script>

<style scoped>
.header {
  margin-bottom: 2rem;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
</style>
