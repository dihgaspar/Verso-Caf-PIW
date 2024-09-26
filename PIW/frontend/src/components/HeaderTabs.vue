<template>
  <header
    class="flex items-center justify-end bg-primary-dark fixed w-full z-20 px-4 pt-4"
  >
    <!-- Exibir abas dinamicamente com base nas condições -->
    <a
      v-for="tab in visibleTabs"
      :key="tab"
      href="#"
      class="font-semibold py-2 px-4 transition-all duration-300"
      :class="{ 'tab active': selectedTab === tab, tab: selectedTab !== tab }"
      @click.prevent="selectTab(tab)"
    >
      {{ tab }}
    </a>

    <!-- Botão de Logout -->
    <a
      v-if="showLogout"
      href="#"
      class="ml-6 cursor-pointer"
      @click.prevent="handleLogout"
    >
      <img
        src="../assets/logout-icon.png"
        alt="Logout"
        class="w-12 h-12 transition-opacity duration-300 hover:opacity-70"
      />
    </a>
  </header>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// Defina um tipo para os valores das abas
type TabType =
  | "Seus Itens"
  | "Cardápios"
  | "Finalizar pedido"
  | "Comentários"
  | "Cadastro"
  | "Voltar"
  | "Login"
  | "Cadastro Item";

export default {
  name: "HeaderTabs",
  setup() {
    const selectedTab = ref<TabType | "">(""); // Aba atualmente ativa
    const visibleTabs = ref<TabType[]>([]); // Abas visíveis
    const router = useRouter();
    const route = useRoute();
    const showLogout = ref(false);

    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    // Função para atualizar as abas visíveis e a aba ativa com base na rota atual
    const updateVisibleTabsAndActiveTab = (path: string) => {
      if (!token) {
        // Visitante, mostrar apenas 'Cardápios' e 'Login'
        visibleTabs.value = ["Cardápios", "Login"];
        showLogout.value = false;
        setActiveTab(path === "/login" ? "Login" : "Cardápios");
        setActiveTabColor("#f3e3cb");
      } else if (role === "admin") {
        visibleTabs.value = ["Cadastro Item", "Cardápios"];
        showLogout.value = true;
        if (path === "/item-register") {
          setActiveTab("Cadastro Item");
        } else if (path === "/") {
          setActiveTab("Cardápios");
        }
      } else if (path === "/comments") {
        visibleTabs.value = ["Comentários", "Voltar"];
        showLogout.value = true;
        setActiveTab("Comentários");
        setActiveTabColor("#7A8595");
      } else if (path === "/finalize-order" || path === "/order-status") {
        visibleTabs.value = ["Finalizar pedido", "Cardápios"];
        showLogout.value = true;
        setActiveTab("Finalizar pedido");
        setActiveTabColor("#F7F7F7");
      } else if (path === "/order-history") {
        visibleTabs.value = ["Seus Itens", "Cardápios"];
        showLogout.value = true;
        setActiveTab("Seus Itens");
        setActiveTabColor("#F7F7F7");
      } else {
        visibleTabs.value = ["Seus Itens", "Cardápios"];
        showLogout.value = true;
        setActiveTab("Cardápios");
        setActiveTabColor("#f3e3cb");
      }
    };

    // Função para definir a aba ativa
    const setActiveTab = (tab: TabType) => {
      selectedTab.value = tab;
    };

    // Função para alterar a cor do fundo da aba ativa
    const setActiveTabColor = (color: string) => {
      document.documentElement.style.setProperty("--tab-bg-color", color);
    };

    // Função para selecionar aba e navegar
    const selectTab = (tab: TabType) => {
      setActiveTab(tab); // Atualiza o estado da aba ativa
      switch (tab) {
        case "Seus Itens":
          router.push("/order-history");
          break;
        case "Cardápios":
          router.push("/");
          break;
        case "Finalizar pedido":
          router.push("/finalize-order");
          break;
        case "Comentários":
          router.push("/comments");
          break;
        case "Cadastro":
          router.push("/register");
          break;
        case "Voltar":
          router.go(-1);
          break;
        case "Login":
          router.push("/login");
          break;
        case "Cadastro Item":
          router.push("/item-register");
          break;
      }
    };

    // Watch para monitorar mudanças de rota e atualizar abas e aba ativa
    watch(
      route,
      (newRoute) => {
        updateVisibleTabsAndActiveTab(newRoute.path);
      },
      { immediate: true }, // Aplica imediatamente ao montar o componente
    );

    // Função para logout
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      router.push("/login");
    };

    return {
      selectedTab,
      visibleTabs,
      showLogout,
      selectTab,
      handleLogout,
    };
  },
};
</script>

<style scoped>
.bg-primary-dark {
  background-color: #1f2b3f;
}

.tab {
  color: #f3c48c;
  font-size: 16px;
  padding: 15px 30px;
  transition:
    background-color 0.4s ease,
    color 0.4s ease,
    padding 0.4s ease;
  clip-path: polygon(
    0% 100%,
    8% 6%,
    9% 2%,
    10% 0%,
    90% 0%,
    91% 2%,
    92% 6%,
    100% 100%
  );
}

.tab.active {
  background-color: var(--tab-bg-color);
  color: #0b1d30;
  padding: 15px 50px;
  clip-path: polygon(
    0% 100%,
    8% 6%,
    9% 2%,
    10% 0%,
    90% 0%,
    91% 2%,
    92% 6%,
    100% 100%
  );
  z-index: 1;
  transition:
    background-color 0.4s ease,
    color 0.4s ease,
    padding 0.4s ease;
}
</style>
