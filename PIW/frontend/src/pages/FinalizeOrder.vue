<template>
  <main class="flex w-[100vw] px-36 justify-between mt-32">
    <section class="flex flex-col w-1/2 gap-8">
      <h2 class="text-5xl font-extrabold text-slate-800">
        Finalize seu pedido
      </h2>

      <div
        class="flex justify-between items-end bg-primary-dark rounded-lg relative px-4 pt-6 h-full w-full font-semibold"
      >
        <div class="flex w-full">
          <span
            v-for="tab in tabs"
            :key="tab"
            class="text-custom-color cursor-pointer relative transition-all duration-300 h-15 w-1/4 flex justify-center items-center"
            :class="{ 'tab active': selectedTab === tab }"
            @click="selectTab(tab)"
          >
            {{ tab }}
          </span>
        </div>
      </div>

      <div
        v-if="selectedTab === 'Entrega'"
        class="flex bg-white rounded-lg px-6 py-2 justify-between items-center"
      >
        <img src="/icon/location_icon.svg" alt="Location icon" />
        <div>
          <h3 class="text-4xl font-extrabold text-slate-800">
            Rua Fictício Paulino, 0000
          </h3>
          <p class="text-lg font-extrabold text-slate-400">
            Apartamento I Quixadá /CE
          </p>
        </div>
        <button class="text-slate-800 font-thin text-4xl">Trocar</button>
      </div>

      <div
        class="flex justify-between items-end bg-primary-light rounded-lg relative px-4 pt-6 h-full w-full font-semibold"
      >
        <div class="flex w-full">
          <span
            v-for="paymentTab in paymentTabs"
            :key="paymentTab"
            class="text-custom-color cursor-pointer relative transition-all duration-300 h-15 w-1/4 flex justify-center items-center text-center"
            :class="{ 'tab active': selectedPaymentTab === paymentTab }"
            @click="selectPaymentTab(paymentTab)"
          >
            {{ paymentTab }}
          </span>
        </div>
      </div>

      <div
        v-if="selectedPaymentTab === 'Pague pelo o site'"
        class="flex bg-white rounded-lg px-6 py-2 justify-between items-center"
      >
        <img src="/icon/pix_icon.svg" alt="Pix icon" />
        <div>
          <h3 class="text-4xl font-extrabold text-slate-800">Pague com Pix</h3>
          <p class="text-lg font-extrabold text-slate-400">
            Use o QR Code ou copie e cole o código
          </p>
        </div>
        <button class="text-slate-800 font-thin text-4xl">Trocar</button>
      </div>

      <AddNewCard />

      <!-- Campo CPF/CNPJ -->
      <div class="flex flex-col gap-8 border-t border-slate-800 py-8">
        <input
          v-model="cpfCnpj"
          @input="onInputCpfCnpj"
          type="text"
          :class="[
            'w-full h-14 text-3xl rounded-lg border text-center',
            validationClass,
          ]"
          :placeholder="placeholder"
          maxlength="18"
        />
        <span v-if="errorMessage" class="text-red-500 text-lg">{{
          errorMessage
        }}</span>

        <button
          class="w-full h-14 text-3xl text-slate-200 rounded-lg bg-slate-800"
          :disabled="!!errorMessage"
        >
          Finalizar Pedido
        </button>
      </div>
    </section>

    <OrderSummary />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AddNewCard from "../components/AddNewCard.vue";
import OrderSummary from "../components/OrderSummary.vue";

export default defineComponent({
  name: "FinalizeOrder",
  components: { OrderSummary, AddNewCard },
  setup() {
    const selectedTab = ref("Entrega");
    const tabs = ["Entrega", "Retirada"];

    const selectedPaymentTab = ref("Pague pelo o site");
    const paymentTabs = ["Pague pelo o site", "Pague na entrega"];

    const cpfCnpj = ref("");
    const errorMessage = ref("");
    const validationClass = ref("border-slate-800");
    const placeholder = ref("CPF/CNPJ na nota");

    // Função para formatar automaticamente CPF ou CNPJ enquanto o usuário digita
    const formatCpfCnpj = (value: string) => {
      const digits = value.replace(/\D/g, "");
      if (digits.length <= 11) {
        // Format CPF: ###.###.###-##
        return digits
          .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
          .slice(0, 14);
      } else {
        // Format CNPJ: ##.###.###/####-##
        return digits
          .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
          .slice(0, 18);
      }
    };

    const validateCpfCnpj = (value: string) => {
      const digits = value.replace(/\D/g, "");
      if (digits.length === 11) {
        return isValidCPF(digits);
      } else if (digits.length === 14) {
        return isValidCNPJ(digits);
      }
      return false;
    };

    const onInputCpfCnpj = () => {
      cpfCnpj.value = formatCpfCnpj(cpfCnpj.value);
      const isValid = validateCpfCnpj(cpfCnpj.value);
      if (!isValid) {
        errorMessage.value = "CPF/CNPJ inválido";
        validationClass.value = "border-red-500";
      } else {
        errorMessage.value = "";
        validationClass.value = "border-green-500";
      }
    };

    const isValidCPF = (cpf: string) => {
      if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
      let sum = 0;
      let remainder;
      for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      if (remainder !== parseInt(cpf[9])) return false;
      sum = 0;
      for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      return remainder === parseInt(cpf[10]);
    };

    const isValidCNPJ = (cnpj: string) => {
      if (cnpj.length !== 14) return false;
      const weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      let sum = 0;
      let size = cnpj.length - 2;
      let numbers = cnpj.substring(0, size);
      let digits = cnpj.substring(size);
      let pos = size - 7;
      for (let i = size; i >= 1; i--) {
        sum += parseInt(numbers[size - i]) * weight[pos--];
        if (pos < 0) pos = 12;
      }
      let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
      if (result !== parseInt(digits[0])) return false;
      size++;
      numbers = cnpj.substring(0, size);
      sum = 0;
      pos = size - 7;
      for (let i = size; i >= 1; i--) {
        sum += parseInt(numbers[size - i]) * weight[pos--];
        if (pos < 0) pos = 12;
      }
      result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
      return result === parseInt(digits[1]);
    };

    return {
      cpfCnpj,
      errorMessage,
      validationClass,
      onInputCpfCnpj,
      tabs,
      selectedTab,
      selectTab: (tab: string) => (selectedTab.value = tab),
      paymentTabs,
      selectedPaymentTab,
      placeholder,
      selectPaymentTab: (tab: string) => (selectedPaymentTab.value = tab),
    };
  },
});
</script>

<style scoped>
.tab {
  color: #f3c48c;
  font-size: 16px;
  padding: 15px 30px;
  clip-path: polygon(0% 100%, 8% 6%, 10% 0%, 90% 0%, 92% 6%, 100% 100%);
  transition: all 0.4s ease;
}

.tab.active {
  background-color: #f7f7f7;
  color: #0b1d30;
  padding: 15px 50px;
  z-index: 1;
}

.bg-primary-dark {
  background-color: #1f2b3f;
}

.bg-primary-light {
  background-color: #7a8595;
}

.text-custom-color {
  color: #f3c48c;
}

.border-red-500 {
  border-color: #f87171;
}

.border-green-500 {
  border-color: #34d399;
}
</style>
