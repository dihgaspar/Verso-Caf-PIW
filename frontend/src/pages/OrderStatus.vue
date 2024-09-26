<template>
  <div class="flex overflow-hidden flex-col bg-neutral-100">
    <header
      class="flex flex-wrap gap-10 pt-5 pr-8 pl-20 text-xl font-semibold text-center whitespace-nowrap bg-slate-800 max-md:px-5"
    >
      <nav class="flex flex-wrap flex-auto gap-5">
        <a
          @click="navigateToHome"
          class="flex relative flex-col px-16 pt-5 pb-3 leading-6 rounded-none aspect-[2.988] text-slate-800 w-[242px] max-md:px-5"
        >
          Finalizar<br />pedido
        </a>
        <a
          @click="navigateToHome"
          class="flex relative flex-col px-16 py-7 leading-none text-orange-300 rounded-none aspect-[2.988] max-md:px-5"
        >
          Cardápios
        </a>
      </nav>
      <img
        loading="lazy"
        src="../assets/logout-icon.png"
        class="object-contain shrink-0 self-start aspect-square w-[68px]"
        alt="Company logo"
      />
    </header>
    <main
      class="flex flex-col items-center px-16 pt-24 pb-80 w-full bg-neutral-100 max-md:px-5 max-md:pb-24 max-md:max-w-full"
    >
      <section
        class="mb-0 ml-3 w-full max-w-[1566px] max-md:mb-2.5 max-md:max-w-full"
      >
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <h1
                class="self-start text-5xl font-extrabold tracking-tighter leading-none text-slate-800 max-md:text-4xl"
              >
                Pedido Aceito!
              </h1>
              <div class="mt-11 max-md:mt-10 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                  <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col w-full font-bold max-md:mt-10">
                      <div
                        class="flex gap-5 justify-between self-end max-w-full text-xl font-semibold text-center text-slate-800 w-[373px]"
                      >
                        <div class="flex flex-col self-start leading-none">
                          <div
                            class="flex shrink-0 self-center rounded-full bg-slate-800 h-[54px] w-[54px]"
                            role="img"
                            aria-label="Order accepted icon"
                          ></div>
                          <div class="mt-2.5">Pedido Aceito</div>
                        </div>
                        <div class="flex flex-col leading-6">
                          <div
                            class="flex shrink-0 self-center rounded-full bg-slate-800 h-[54px] w-[54px]"
                            role="img"
                            aria-label="Order being prepared icon"
                          ></div>
                          <div class="mt-2.5">Pedido está sendo preparado</div>
                        </div>
                      </div>
                      <h2
                        class="mt-16 mr-9 text-3xl font-black leading-10 text-slate-800 max-md:mt-10 max-md:mr-2.5"
                      >
                        Seu pedido será entregue<br />no prazo de 40 min
                      </h2>
                      <p
                        class="self-start mt-4 text-base leading-5 text-slate-500"
                      >
                        Caso você tenha pedido errado ou deseje<br />cancelar
                        seu pedido, cancele aqui:
                      </p>
                      <button
                        @click="navigateToHome"
                        class="overflow-hidden gap-2.5 self-start px-2 py-3 mt-5 text-3xl text-white whitespace-nowrap rounded-xl bg-slate-800 min-h-[65px]"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                  <div
                    class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                  >
                    <div
                      class="flex flex-col w-full text-xl font-semibold leading-6 text-center text-slate-800 max-md:mt-10"
                    >
                      <div
                        class="flex gap-5 justify-between ml-7 max-w-full w-[308px] max-md:ml-2.5"
                      >
                        <div class="flex flex-col">
                          <div
                            class="flex shrink-0 self-center rounded-full bg-zinc-300 h-[54px] w-[54px]"
                            role="img"
                            aria-label="Order out for delivery icon"
                          ></div>
                          <div class="mt-2.5">
                            Pedido saiu<br />para entrega
                          </div>
                        </div>
                        <div class="flex flex-col">
                          <div
                            class="flex shrink-0 self-center rounded-full bg-zinc-300 h-[54px] w-[54px]"
                            role="img"
                            aria-label="Order received icon"
                          ></div>
                          <div class="mt-2.5">Pedido recebido</div>
                        </div>
                      </div>
                      <div class="flex shrink-0 mt-8 h-[268px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col px-14 py-12 mx-auto w-full bg-white rounded-md shadow-[6px_4px_15px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full"
            >
              <h2
                class="self-start text-5xl font-black leading-none text-slate-800 max-md:text-4xl"
              >
                Pedidos
              </h2>
              <h3
                class="self-start mt-6 text-base font-black leading-none text-slate-800"
              >
                Itens selecionados
              </h3>
              <img
                loading="lazy"
                src="../assets/space.svg"
                class="object-contain mt-6 w-full aspect-[500] max-md:max-w-full"
                alt=""
              />
              <div
                class="flex gap-5 justify-between self-end mt-4 max-w-full text-base leading-none text-slate-800 w-[473px]"
              >
                <div>1x Livro I Cemitério de animais</div>
                <div class="text-right">R$ 60,00</div>
              </div>
              <div
                class="flex gap-5 justify-between mt-2 ml-6 max-w-full text-xs font-black leading-none whitespace-nowrap w-[143px] max-md:ml-2.5"
              >
                <button class="text-slate-800">Editar</button>
                <button class="text-slate-500">Remover</button>
              </div>
              <div
                class="flex relative flex-col mt-5 min-h-[1px] max-md:max-w-full"
              >
                <img
                  loading="lazy"
                  src="../assets/space.svg"
                  class="object-cover absolute inset-0 size-full"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="../assets/space.svg"
                  class="object-contain w-full aspect-[500] max-md:max-w-full"
                  alt=""
                />
              </div>
              <div
                class="flex gap-5 justify-between self-end mt-4 max-w-full text-base leading-none text-slate-800 w-[473px]"
              >
                <div>1x Suco I Acerola - 300ml</div>
                <div class="text-right">R$ 4,00</div>
              </div>
              <div
                class="flex gap-5 justify-between mt-2 ml-6 max-w-full text-xs font-black leading-none whitespace-nowrap w-[143px] max-md:ml-2.5"
              >
                <button class="text-slate-800">Editar</button>
                <button class="text-slate-500">Remover</button>
              </div>
              <div
                class="flex relative flex-col mt-5 min-h-[1px] max-md:max-w-full"
              >
                <img
                  loading="lazy"
                  src="../assets/space.svg"
                  class="object-cover absolute inset-0 size-full"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="../assets/space.svg"
                  class="object-contain w-full aspect-[500] max-md:max-w-full"
                  alt=""
                />
              </div>
              <div
                class="flex gap-5 justify-between self-end mt-4 max-w-full text-base leading-none text-slate-800 w-[473px]"
              >
                <div>1x Hambúrguer I X-Tudo</div>
                <div class="text-right">R$ 17,00</div>
              </div>
              <div
                class="flex gap-5 justify-between mt-2 ml-6 max-w-full text-xs font-black leading-none whitespace-nowrap w-[143px] max-md:ml-2.5"
              >
                <button class="text-slate-800">Editar</button>
                <button class="text-slate-500">Remover</button>
              </div>
              <img
                loading="lazy"
                src="../assets/space.svg"
                class="object-contain mt-5 w-full aspect-[500] max-md:max-w-full"
                alt=""
              />
              <div
                class="flex flex-wrap gap-5 justify-between mt-8 text-base leading-none max-md:max-w-full"
              >
                <div class="flex flex-col items-start font-bold text-slate-500">
                  <div>Subtotal:</div>
                  <div class="self-stretch mt-4">Taxa de entrega:</div>
                  <div class="mt-4 text-xl font-black text-slate-800">
                    Total:
                  </div>
                </div>
                <div class="flex flex-col self-start text-right text-slate-800">
                  <div class="flex flex-col px-1">
                    <div>R$ 81,00</div>
                    <div class="self-start mt-4">R$ 3,00</div>
                  </div>
                  <div class="mt-5">R$ 84,00</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "OrderStatus",
  setup() {
    const router = useRouter();

    const navigateToHome = () => {
      router.push("/");
    };

    return {
      navigateToHome,
    };
  },
});
</script>
