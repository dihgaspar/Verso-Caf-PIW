<template>
  <section
    id="comments"
    class="flex flex-col items-center px-16 pt-10 pb-10 w-full background"
  >
    <h2 class="text-4xl font-bold mb-10">Comentários</h2>
    <div class="flex gap-5">
      <article
        class="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full bg-white shadow-lg rounded-lg"
      >
        <div
          class="flex flex-col px-8 pt-6 pb-10 mx-auto w-full bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full"
        >
          <div class="flex gap-4 items-center mb-4">
            <img
              loading="lazy"
              src="../assets/person.svg"
              alt="Foto de perfil de Marcia Santana"
              class="object-cover rounded-full w-[61px] h-[61px]"
            />
            <div class="flex flex-col">
              <h3 class="text-2xl font-bold text-slate-800">Marcia Santana</h3>

              <div class="flex gap-1.5 mt-2">
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
              </div>
            </div>
          </div>

          <p class="text-xl font-light leading-relaxed text-slate-800">
            Degustar um prato delicioso enquanto mergulho nas páginas de um
            livro cria uma atmosfera mágica.
          </p>
        </div>
      </article>

      <article
        class="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full bg-white shadow-lg rounded-lg"
      >
        <div
          class="flex flex-col px-8 pt-6 pb-10 mx-auto w-full bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full"
        >
          <div class="flex gap-4 items-center mb-4">
            <img
              loading="lazy"
              src="../assets/person.svg"
              alt="Foto de perfil de Marcia Santana"
              class="object-cover rounded-full w-[61px] h-[61px]"
            />
            <div class="flex flex-col">
              <h3 class="text-2xl font-bold text-slate-800">Marcia Santana</h3>

              <div class="flex gap-1.5 mt-2">
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
              </div>
            </div>
          </div>

          <p class="text-xl font-light leading-relaxed text-slate-800">
            Degustar um prato delicioso enquanto mergulho nas páginas de um
            livro cria uma atmosfera mágica.
          </p>
        </div>
      </article>

      <article
        class="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full bg-white shadow-lg rounded-lg"
      >
        <div
          class="flex flex-col px-8 pt-6 pb-10 mx-auto w-full bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full"
        >
          <div class="flex gap-4 items-center mb-4">
            <img
              loading="lazy"
              src="../assets/person.svg"
              alt="Foto de perfil de Marcia Santana"
              class="object-cover rounded-full w-[61px] h-[61px]"
            />
            <div class="flex flex-col">
              <h3 class="text-2xl font-bold text-slate-800">Marcia Santana</h3>

              <div class="flex gap-1.5 mt-2">
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
                <img
                  loading="lazy"
                  src="../assets/star.svg"
                  alt="Classificação por estrela"
                  class="w-[15px]"
                />
              </div>
            </div>
          </div>

          <p class="text-xl font-light leading-relaxed text-slate-800">
            Degustar um prato delicioso enquanto mergulho nas páginas de um
            livro cria uma atmosfera mágica.
          </p>
        </div>
      </article>
    </div>
    <img
      src="../assets/more.svg"
      alt="Logo da Empresa"
      class="w-32 h-32 cursor-pointer mt-10"
      @click="goToComments"
    />
  </section>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "CommentSection",
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
.background {
  background: linear-gradient(180deg, #7a8595 50%, #ebb463 50%);
}
</style>
