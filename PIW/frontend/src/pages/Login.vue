<template>
  <div
    class="h-screen w-screen flex justify-end items-center bg-primary-dark relative overflow-hidden"
  >
    <img
      src="../assets/food-background.png"
      alt="Overlay"
      class="absolute top-0 left-0 h-full w-full object-cover opacity-60"
    />

    <div class="w-[700px] rounded-lg relative z-10">
      <LoginForm :handleLogin="handleLogin" />
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { login } from "../api/user";
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
  setup() {
    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
      try {
        const data = await login(email, password);
        localStorage.setItem("token", data.token);
        router.push("/");
      } catch (err) {
        console.error("Credenciais inválidas. Tente novamente.");
      }
    };

    return {
      handleLogin,
    };
  },
};
</script>

<style scoped>
.bg-primary-dark {
  background-color: #1f2b3f;
}
</style>
