<template>
  <div class="bg-white p-8 w-full max-w-md shadow-lg rounded-lg">
    <div class="flex justify-center mb-6">
      <img src="../assets/burger-logo.svg" alt="Logo" class="w-60 h-auto" />
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label
          for="email"
          class="block text-sm font-semibold text-gray-700 mb-2"
          >Usuário:</label
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

      <div class="flex items-center">
        <input type="checkbox" id="remember-me" class="mr-2" />
        <label for="remember-me" class="text-gray-600"
          >Manter-me conectado</label
        >
      </div>

      <button
        type="submit"
        class="w-full py-3 bg-primary-dark text-white rounded-lg font-bold hover:bg-opacity-90 transition"
      >
        ENTRAR
      </button>
    </form>

    <div class="text-center mt-4">
      <button
        @click="goToRegister"
        class="text-primary-dark font-bold hover:text-primary transition"
      >
        Não tem uma conta? Cadastre-se
      </button>
    </div>

    <!-- Botão para entrar como visitante -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    handleLogin: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const handleSubmit = () => {
      props.handleLogin(email.value, password.value);
    };

    const goToRegister = () => {
      router.push("/register");
    };

    const enterAsGuest = () => {
      // Navega para a página inicial ou outra rota específica para visitantes
      localStorage.setItem("role", "guest"); // Armazena como visitante
      router.push("/"); // Direciona para a home
    };

    return {
      email,
      password,
      handleSubmit,
      goToRegister,
      enterAsGuest,
    };
  },
});
</script>
