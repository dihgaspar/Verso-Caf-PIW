<template>
  <div class="modal-overlay">
    <div class="modal">
      <h3>Tem certeza que deseja deletar o livro?</h3>
      <button @click="deleteBook">Deletar</button>
      <button @click="handleCloseModal">Cancelar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { deleteBookById } from "../api/books"; // Importar função de API

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const handleCloseModal = () => {
      props.closeModal();
    };

    const deleteBook = async () => {
      try {
        await deleteBookById(props.id);
        alert("Livro deletado com sucesso!");
        props.closeModal();
      } catch (error) {
        console.error("Erro ao deletar livro:", error);
        alert("Erro ao deletar livro.");
      }
    };

    return {
      deleteBook,
      handleCloseModal,
    };
  },
});
</script>

<style scoped>
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
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}
</style>
