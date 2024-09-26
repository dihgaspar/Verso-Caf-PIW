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
      <RegisterForm :handleRegister="registerUser" />
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { register } from "../api/user";
import RegisterForm from "../components/RegisterForm.vue";

export default {
  components: {
    RegisterForm,
  },
  setup() {
    const router = useRouter(); // Para redirecionamento

    const registerUser = async (
      name: string,
      email: string,
      password: string,
      role: string,
    ) => {
      try {
        await register(name, email, password, role);
        router.push("/login");
      } catch (error) {
        console.error("Erro ao registrar:", error);
      }
    };

    return {
      registerUser,
    };
  },
};
</script>
<style scoped>
.bg-primary-dark {
  background-color: #1f2b3f;
}
</style>
