<template>
  <div
    class="flex justify-between items-end bg-primary-dark rounded-t-lg relative px-4 pt-6 h-full w-full font-semibold"
  >
    <div class="flex justify-center w-1/2">
      <span
        v-for="tab in tabs"
        :key="tab"
        href="#"
        class="text-custom-color cursor-pointer relative transition-all duration-300 h-15 w-full flex justify-center items-center"
        :class="{ 'tab active': selectedTab === tab, tab: selectedTab !== tab }"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SelectItemType",
  props: {
    defaultSelection: {
      type: String,
      required: true,
    },
  },
  emits: ["selectionChanged"],

  setup(props, { emit }) {
    const selectedTab = ref(props.defaultSelection);

    const tabs = ["Cadastrar Livro", "Cadastrar Prato"];

    const selectTab = (tab: string) => {
      selectedTab.value = tab;
      emit("selectionChanged", tab); // Emite o evento com o tab selecionado
    };

    return {
      selectedTab,
      tabs,
      selectTab,
    };
  },
});
</script>

<style scoped>
.bg-primary-dark {
  background-color: #1f2b3f;
}

.text-custom-color {
  color: #f3c48c;
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
  background-color: #f7f7f7;
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
