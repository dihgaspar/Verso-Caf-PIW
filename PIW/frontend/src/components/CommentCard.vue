<template>
  <div class="flex flex-col p-8 mx-auto w-full bg-white aspect-video h-56">
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
      Degustar um prato delicioso enquanto mergulho nas páginas de um livro cria
      uma atmosfera mágica.
    </p>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "CommentCard",
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
