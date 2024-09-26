<template>
  <main
    class="flex w-[100vw] px-36 pt-32 flex-col bg-primary-light min-h-screen"
  >
    <h1 class="text-5xl font-extrabold text-slate-800 w-full mb-10">
      Cadastro de Itens
    </h1>

    <div>
      <SelectItemType
        defaultSelection="Cadastrar Prato"
        @selectionChanged="handleSelectionChange"
      />

      <div v-if="selectedItemType === 'dish'" class="form-section">
        <h2 class="form-title">Cadastrar Prato</h2>
        <form @submit.prevent="handleDishSubmit" class="form">
          <div class="form-line">
            <div class="form-group">
              <label for="dishName">Nome do Prato:</label>
              <input
                v-model="dishForm.nome"
                type="text"
                id="dishName"
                class="input-field"
                required
              />
            </div>

            <div class="form-group">
              <label for="dishPrice">Preço:</label>
              <input
                v-model="dishForm.preco"
                type="number"
                step="0.01"
                id="dishPrice"
                class="input-field"
                required
              />
            </div>
          </div>
          <div class="form-line">
            <div class="form-group">
              <label for="dishDescription">Descrição:</label>
              <textarea
                v-model="dishForm.descricao"
                id="dishDescription"
                class="input-field"
                required
              ></textarea>
            </div>
          </div>
          <div class="form-line">
            <div class="form-group">
              <label for="dishCategory">Categoria:</label>
              <input
                v-model="dishForm.categoria"
                type="text"
                id="dishCategory"
                class="input-field"
                required
              />
            </div>
          </div>
          <div class="form-line">
            <div class="form-group">
              <label for="dishAvailable">Disponível:</label>
              <input
                type="checkbox"
                v-model="dishForm.disponivel"
                id="dishAvailable"
                class="checkbox"
              />
            </div>

            <div class="form-group">
              <label for="dishImage">Imagem:</label>
              <input
                type="file"
                @change="handleDishFileUpload"
                class="input-file"
              />
            </div>
          </div>

          <button type="submit" class="submit-button">Cadastrar Prato</button>
        </form>
      </div>

      <!-- Formulário para cadastro de livro -->
      <div v-if="selectedItemType === 'book'" class="form-section">
        <h2 class="form-title">Cadastrar Livro</h2>
        <form @submit.prevent="handleBookSubmit" class="form">
          <div class="form-line">
            <div class="form-group">
              <label for="bookTitle">Título do Livro:</label>
              <input
                v-model="bookForm.titulo"
                type="text"
                id="bookTitle"
                class="input-field"
                required
              />
            </div>

            <div class="form-group">
              <label for="bookAuthor">Autor:</label>
              <input
                v-model="bookForm.autor"
                type="text"
                id="bookAuthor"
                class="input-field"
                required
              />
            </div>
          </div>

          <div class="form-line">
            <div class="form-group">
              <label for="bookGenre">Gênero:</label>
              <input
                v-model="bookForm.genero"
                type="text"
                id="bookGenre"
                class="input-field"
                required
              />
            </div>

            <div class="form-group">
              <label for="bookYear">Ano de Publicação:</label>
              <input
                v-model="bookForm.ano"
                type="number"
                id="bookYear"
                class="input-field"
                required
              />
            </div>
          </div>

          <div class="form-line">
            <div class="form-group">
              <label for="bookImage">Imagem:</label>
              <input
                type="file"
                @change="handleBookFileUpload"
                class="input-file"
              />
            </div>
            <div class="form-group">
              <label for="bookAvailable">Disponível:</label>
              <input
                type="checkbox"
                v-model="bookForm.disponivel"
                id="bookAvailable"
                class="checkbox"
              />
            </div>
          </div>

          <button type="submit" class="submit-button">Cadastrar Livro</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { createBook } from "../api/books";
import { createDish } from "../api/dishes";
import SelectItemType from "../components/SelectItemType.vue";

export default defineComponent({
  name: "ItemRegister",
  components: {
    SelectItemType,
  },
  setup() {
    const selectedItemType = ref("dish"); // Controla o tipo de item selecionado ("dish" ou "book")

    const handleSelectionChange = (tab: string) => {
      // Atualiza o tipo de item com base na aba selecionada
      selectedItemType.value = tab === "Cadastrar Prato" ? "dish" : "book";
    };

    const dishForm = ref({
      nome: "",
      preco: 0,
      descricao: "",
      categoria: "",
      disponivel: false,
      imagem: undefined as File | undefined,
    });

    const bookForm = ref({
      titulo: "",
      autor: "",
      genero: "",
      ano: 2024,
      disponivel: false,
      imagem: undefined as File | undefined,
    });

    const resetForm = () => {
      if (selectedItemType.value === "dish") {
        dishForm.value = {
          nome: "",
          preco: 0,
          descricao: "",
          categoria: "",
          disponivel: false,
          imagem: undefined,
        };
      } else if (selectedItemType.value === "book") {
        bookForm.value = {
          titulo: "",
          autor: "",
          genero: "",
          ano: 2024,
          disponivel: false,
          imagem: undefined,
        };
      }
    };

    const handleDishFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        dishForm.value.imagem = target.files[0];
      }
    };

    const handleBookFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        bookForm.value.imagem = target.files[0];
      }
    };

    const handleDishSubmit = async () => {
      try {
        await createDish(
          dishForm.value.nome,
          dishForm.value.preco,
          dishForm.value.descricao,
          dishForm.value.categoria,
          dishForm.value.imagem,
        );
        alert("Prato cadastrado com sucesso!");
        resetForm();
      } catch (error) {
        console.error("Erro ao cadastrar prato:", error);
        alert("Erro ao cadastrar prato.");
      }
    };

    const handleBookSubmit = async () => {
      try {
        await createBook(
          bookForm.value.titulo,
          bookForm.value.autor,
          bookForm.value.genero,
          bookForm.value.ano,
          bookForm.value.disponivel,
          bookForm.value.imagem,
        );
        alert("Livro cadastrado com sucesso!");
        resetForm();
      } catch (error) {
        console.error("Erro ao cadastrar livro:", error);
        alert("Erro ao cadastrar livro.");
      }
    };

    return {
      selectedItemType,
      dishForm,
      bookForm,
      handleDishSubmit,
      handleBookSubmit,
      handleDishFileUpload,
      handleBookFileUpload,
      resetForm,
      handleSelectionChange,
    };
  },
});
</script>

<style scoped>
.bg-primary-light {
  background-color: #7a8595;
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
