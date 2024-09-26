<template>
  <div class="book-card" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="getImageUrl(book.imagem)" class="h-3/5" loading="lazy" />

    <div class="flex flex-col items-center justify-center">
      <h3 class="text-x font-bold">{{ book.titulo }}</h3>
      <p>$ {{ price.toFixed(2) }}</p>

      <div
        :class="{
          'quantity-controls-active': hover && !isAdmin,
          'quantity-controls': !hover || isAdmin,
        }"
      >
        <button
          @click="decreaseQuantity"
          :class="{
            'quantity-button': !hover || isAdmin,
            'quantity-button-active': hover && !isAdmin,
          }"
          v-if="!isAdmin"
        >
          -
        </button>
        <span v-if="!isAdmin">{{ quantity }}</span>
        <button
          @click="increaseQuantity"
          :class="{
            'quantity-button': !hover || isAdmin,
            'quantity-button-active': hover && !isAdmin,
          }"
          v-if="!isAdmin"
        >
          +
        </button>
      </div>
    </div>

    <div :class="{ 'action-buttons-active': hover, 'action-buttons': !hover }">
      <button
        @click="navigateToFinalizeOrder"
        :class="{ 'action-button-active': hover, 'action-button': !hover }"
        v-if="!isAdmin"
      >
        <i class="pi pi-shopping-cart"></i>
      </button>
      <button
        @click="navigateToItemRegister"
        v-if="isAdmin"
        :class="{ 'action-button-active': hover, 'action-button': !hover }"
      >
        <i class="pi pi-plus"></i>
      </button>
      <button
        @click="navigateToComments"
        :class="{ 'action-button-active': hover, 'action-button': !hover }"
        v-if="!isAdmin"
      >
        <i class="pi pi-comment"></i>
      </button>
      <!-- Botão de editar (apenas para administradores) -->
      <button
        @click="showEditModal = true"
        :class="{ 'action-button-active': hover, 'action-button': !hover }"
        v-if="isAdmin"
      >
        <i class="pi pi-pencil"></i>
      </button>
      <!-- Botão de deletar (apenas para administradores) -->
      <button
        @click="showDeleteModal = true"
        :class="{ 'action-button-active': hover, 'action-button': !hover }"
        v-if="isAdmin"
      >
        <i class="pi pi-trash"></i>
      </button>
    </div>

    <!-- Modal de Edição -->
    <div v-if="showEditModal" class="modal-overlay">
      <div class="modal">
        <h3 class="form-title">Editar Livro</h3>
        <!-- Formulário para editar os campos do livro -->
        <form @submit.prevent="updateBook" class="form">
          <div class="form-line">
            <div class="form-group">
              <label for="editTitle">Título do Livro:</label>
              <input
                v-model="editForm.title"
                type="text"
                id="editTitle"
                class="input-field"
                required
              />
            </div>

            <div class="form-group">
              <label for="editPrice">Preço:</label>
              <input
                v-model="editForm.price"
                type="number"
                id="editPrice"
                class="input-field"
                required
              />
            </div>
          </div>

          <div class="form-line">
            <div class="form-group">
              <label for="editAuthor">Autor:</label>
              <input
                v-model="editForm.autor"
                type="text"
                id="editAuthor"
                class="input-field"
                required
              />
            </div>

            <div class="form-group">
              <label for="editGenre">Gênero:</label>
              <input
                v-model="editForm.genero"
                type="text"
                id="editGenre"
                class="input-field"
                required
              />
            </div>
          </div>

          <div class="form-line">
            <div class="form-group">
              <label for="editYear">Ano de Publicação:</label>
              <input
                v-model="editForm.ano"
                type="number"
                id="editYear"
                class="input-field"
                required
              />
            </div>

            <div class="form-group">
              <label for="editAvailable">Disponível:</label>
              <input
                type="checkbox"
                v-model="editForm.disponivel"
                id="editAvailable"
                class="checkbox"
              />
            </div>
          </div>
          <div class="form-line">
            <div class="form-group">
              <label for="editImage">Imagem:</label>
              <input
                type="file"
                @change="handleFileUpload"
                class="input-file"
                accept="image/*"
              />
              <!-- Mostrar a imagem atual, caso já exista uma -->
              <div v-if="editForm.imagemUrl" class="image-preview">
                <img
                  :src="editForm.imagemUrl"
                  alt="Imagem atual"
                  class="h-40"
                />
              </div>
            </div>
          </div>
          <div class="form-buttons">
            <button type="submit" class="submit-button">Salvar</button>
            <button
              @click.prevent="showEditModal = false"
              class="cancel-button"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal de Deleção -->
    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal">
        <h3>Tem certeza que deseja deletar?</h3>
        <button @click="deleteBook">Deletar</button>
        <button @click="showDeleteModal = false">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { deleteBookById, updateBookById } from "../api/books"; // Importar as funções da API
import { getImageUrl } from "../api/images";

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
  name: "BookCard",
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },

  setup(props, { emit }) {
    const quantity = ref(0);
    const hover = ref(false);
    const router = useRouter();
    const isAdmin = ref(false);

    const price = 30;
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);

    const editForm = ref({
      title: props.book.titulo,
      price: 0,
      autor: props.book.autor,
      genero: props.book.genero,
      ano: props.book.ano,
      disponivel: props.book.disponivel,
      imagem: undefined as File | undefined,
      imagemUrl: "",
    });

    onMounted(() => {
      const role = localStorage.getItem("role");
      if (role === "admin") {
        isAdmin.value = true;
      }
    });

    const increaseQuantity = () => {
      quantity.value += 1;
      emit("update-cart", price);
    };

    const decreaseQuantity = () => {
      if (quantity.value > 0) {
        quantity.value -= 1;
        emit("update-cart", -price);
      }
    };

    const navigateToFinalizeOrder = () => {
      router.push("/finalize-order");
    };

    const navigateToComments = () => {
      router.push("/comments");
    };

    const navigateToItemRegister = () => {
      router.push("/item-register");
    };

    // Função para fazer upload de imagem
    const handleFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        const file = target.files[0];
        editForm.value.imagem = file;
        console.log(file);

        editForm.value.imagemUrl = URL.createObjectURL(file);
      }
    };

    // Função para editar livro
    const updateBook = async () => {
      try {
        await updateBookById(
          props.book.id,
          editForm.value.title,
          editForm.value.autor,
          editForm.value.genero,
          editForm.value.ano,
          editForm.value.disponivel,
          editForm.value.imagem,
        );
        showEditModal.value = false;
        alert("Livro atualizado com sucesso!");

        emit("book-updated");
      } catch (error) {
        console.error("Erro ao atualizar livro:", error);
        alert("Erro ao atualizar livro.");
      }
    };

    // Função para deletar livro
    const deleteBook = async () => {
      try {
        await deleteBookById(props.book.id);
        showDeleteModal.value = false;
        alert("Livro deletado com sucesso!");

        emit("book-deleted");
      } catch (error) {
        console.error("Erro ao deletar livro:", error);
        alert("Erro ao deletar livro.");
      }
    };

    return {
      quantity,
      increaseQuantity,
      decreaseQuantity,
      navigateToFinalizeOrder,
      navigateToComments,
      navigateToItemRegister,
      hover,
      getImageUrl,
      isAdmin,
      showEditModal,
      showDeleteModal,
      editForm,
      handleFileUpload,
      updateBook,
      deleteBook,
      price,
      book: props.book,
    };
  },
});
</script>

<style scoped>
.book-card {
  background-color: rgba(51, 51, 51, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
  height: 90%;
  width: 100%;
  max-width: 25%;
}

.book-card:hover {
  height: 100%;
  background: linear-gradient(#455f8b 0%, #1f2b3f 100%);
  color: white;
}

.quantity-controls,
.quantity-controls-active {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 1rem 0;
  color: #7a8595;
  font-weight: bold;
  text-align: center;
}

.quantity-controls span,
.quantity-controls-active span {
  font-size: 2.5rem;
}

.quantity-button,
.quantity-button-active {
  background-color: #7a8595;
  color: white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity-button-active {
  background-color: #ebb463;
}

.action-buttons,
.action-buttons-active {
  position: absolute;
  bottom: -1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0 4rem;
}

.action-button,
.action-button-active {
  background-color: #1f2b3f;
  color: #7a8595;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.action-button-active {
  background-color: #ebb463;
  color: #1f2b3f;
}

.action-button i {
  font-size: 20px;
}

.action-button-active i {
  font-size: 20px;
  color: #1f2b3f;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background-color: white;
  color: #1f2b3f;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #1f2b3f;
}

.selection-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.select-input {
  padding: 0.5rem;
  background-color: #455f8b;
  border: 1px solid #7a8595;
  border-radius: 4px;
  color: #fff;
}

.form-section {
  background-color: #f7f7f7;
  padding: 2rem;
  border-radius: 0 0 8px 8px;
  margin-bottom: 2rem;
}

.form-group {
  width: 100%;
}

.form-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1f2b3f;
}

.form-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #455f8b;
  border-radius: 4px;
}

.checkbox {
  transform: scale(1.2);
}

.input-file {
  background-color: #455f8b;
  border: 1px solid #7a8595;
  padding: 0.5rem;
  border-radius: 4px;
  color: #fff;
}

.submit-button {
  padding: 0.75rem 1.5rem;
  background-color: #ebb463;
  color: #1f2b3f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

.submit-button:hover {
  background-color: #f3c48c;
}
</style>
