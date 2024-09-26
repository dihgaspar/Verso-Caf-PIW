<template>
  <div id="app">
    <HeaderTabs v-if="showHeader" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router"; // Importa o hook para acessar a rota atual
import HeaderTabs from "./components/HeaderTabs.vue";

import "primeicons/primeicons.css";
import "./style.css";

export default {
  name: "App",
  components: {
    HeaderTabs,
  },
  setup() {
    const route = useRoute();

    const showHeader = computed(() => {
      const publicRoutes = ["/login", "/register"];
      return !publicRoutes.includes(route.path);
    });

    return {
      showHeader,
    };
  },
};
</script>

<style></style>
