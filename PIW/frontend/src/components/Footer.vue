<template>
  <footer
    class="flex flex-col items-center px-20 pt-36 pb-9 w-full bg-orange-custom"
  >
    <p>© 2024 - Todos os direitos reservados.</p>
  </footer>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "Footer",
  setup() {
    const router = useRouter();

    const goToComments = () => {
      router.push("/comments");
    };

    return {
      goToComments,
    };
  },
};
</script>

<style scoped>
.bg-orange-custom {
  background-color: #ebb463;
}
</style>
