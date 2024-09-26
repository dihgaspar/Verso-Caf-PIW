<template>
  <div class="bg-white p-8 w-full max-w-md shadow-lg rounded-lg">
    <div class="flex justify-center mb-6">
      <img src="../assets/burger-logo.svg" alt="Logo" class="w-60 h-auto" />
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-semibold text-gray-700 mb-2"
          >Nome:</label
        >
        <input
          v-model="name"
          type="text"
          id="name"
          placeholder="Digite seu nome"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark"
          required
        />
      </div>

      <div>
        <label
          for="email"
          class="block text-sm font-semibold text-gray-700 mb-2"
          >Email:</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="exemplousuario@gmail.com"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark"
          required
        />
      </div>

      <div>
        <label
          for="password"
          class="block text-sm font-semibold text-gray-700 mb-2"
          >Senha:</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="********"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-dark"
          required
        />
      </div>

      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <input
            type="radio"
            id="role-user"
            value="user"
            v-model="role"
            class="mr-2"
          />
          <label for="role-user" class="text-gray-600">Cliente</label>
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="role-admin"
            value="admin"
            v-model="role"
            class="mr-2"
          />
          <label for="role-admin" class="text-gray-600">Administrador</label>
        </div>
      </div>

      <button
        type="submit"
        class="w-full py-3 bg-primary-dark text-white rounded-lg font-bold hover:bg-opacity-90 transition"
      >
        Cadastrar
      </button>

      <p v-if="error" class="mt-4 text-center text-red-600">{{ error }}</p>
    </form>
    <div class="text-center mt-4">
      <button
        @click="goToLogin"
        class="text-primary-dark font-bold hover:text-primary transition"
      >
        Já possui uma conta? Faça login
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    handleRegister: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const role = ref("user");
    const error = ref("");

    const router = useRouter();

    const handleSubmit = () => {
      props.handleRegister(name.value, email.value, password.value, role.value);
    };

    const goToLogin = () => {
      router.push("/login"); // Redireciona para a página de cadastro
    };

    return {
      name,
      email,
      password,
      role,
      error,
      handleSubmit,
      goToLogin,
    };
  },
});
</script>

<style scoped>
.bg-primary-dark {
  background-color: #1f2b3f;
}
</style>
