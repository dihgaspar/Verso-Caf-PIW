<template>
  <div class="modal-overlay">
    <div class="modal">
      <h3>Editar Livro</h3>
      <!-- Formulário para editar os campos do livro -->
      <input v-model="editForm.title" type="text" placeholder="Título" />
      <input v-model="editForm.price" type="number" placeholder="Preço" />
      <input v-model="editForm.autor" type="text" placeholder="Autor" />
      <input v-model="editForm.genero" type="text" placeholder="Gênero" />
      <input
        v-model="editForm.ano"
        type="number"
        placeholder="Ano de Publicação"
      />
      <div>
        <label>Disponível:</label>
        <input type="checkbox" v-model="editForm.disponivel" />
      </div>
      <input type="file" @change="handleFileUpload" />
      <button @click="updateBook">Salvar</button>
      <button @click="handleCloseModal">Cancelar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { updateBookById } from "../api/books"; // Importar função de API

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
    ano: {
      type: Number,
      required: true,
    },
    disponivel: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const editForm = ref({
      title: props.title,
      price: props.price,
      autor: props.autor,
      genero: props.genero,
      ano: props.ano,
      disponivel: props.disponivel,
      imagem: undefined as File | undefined,
    });

    const handleFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        editForm.value.imagem = target.files[0];
      }
    };

    const handleCloseModal = () => {
      props.closeModal();
    };

    const updateBook = async () => {
      try {
        await updateBookById(
          props.id,
          editForm.value.title,
          editForm.value.autor,
          editForm.value.genero,
          editForm.value.ano,
          editForm.value.disponivel,
          editForm.value.imagem,
        );
        alert("Livro atualizado com sucesso!");
        props.closeModal();
      } catch (error) {
        console.error("Erro ao atualizar livro:", error);
        alert("Erro ao atualizar livro.");
      }
    };

    return {
      editForm,
      handleFileUpload,
      updateBook,
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
