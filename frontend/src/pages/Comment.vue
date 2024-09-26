<template>
  <main
    class="flex w-[100vw] flex-col justify-between bg-blue-custom min-h-screen"
  >
    <section class="flex w-full items-center justify-between px-16">
      <img src="/img/coments_image1.png" alt="comment" class="w-2/6" />
      <div class="flex flex-col gap-8">
        <h2 class="text-5xl font-extrabold text-slate-800">Comentários</h2>
        <div class="flex">
          <div class="grid grid-cols-2 content-center gap-4">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
          <div class="carousel-controls">
            <button class="carousel-control">
              <i class="pi pi-angle-up"></i>
            </button>
            <button class="carousel-control-plus">
              <i class="pi pi-plus"></i>
            </button>

            <button class="carousel-control">
              <i class="pi pi-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="flex w-full items-center justify-between px-16">
      <div class="flex flex-col gap-8">
        <h2 class="text-5xl font-extrabold text-slate-800">Comentários</h2>
        <div class="flex">
          <div class="flex flex-col gap-8">
            <NavTabs section="Cardapio" />
            <div class="grid grid-cols-2 content-center gap-4">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
          <div class="carousel-controls">
            <button class="carousel-control">
              <i class="pi pi-angle-up"></i>
            </button>
            <button class="carousel-control-plus">
              <i class="pi pi-plus"></i>
            </button>

            <button class="carousel-control">
              <i class="pi pi-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
      <img src="/img/coments_image2.png" alt="comment" class="w-2/6" />
    </section>
    <section class="flex w-full items-center justify-between px-16">
      <img src="/img/coments_image3.png" alt="comment" class="w-2/6" />
      <div class="flex flex-col gap-8">
        <h2 class="text-5xl font-extrabold text-slate-800">Comentários</h2>
        <div class="flex">
          <div class="flex flex-col gap-8">
            <NavTabs section="Biblioteca" />
            <div class="grid grid-cols-2 content-center gap-4">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
          <div class="carousel-controls">
            <button class="carousel-control">
              <i class="pi pi-angle-up"></i>
            </button>
            <button class="carousel-control-plus">
              <i class="pi pi-plus"></i>
            </button>

            <button class="carousel-control">
              <i class="pi pi-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex w-full items-center justify-center bg-orange-custom px-16 py-16"
    >
      <a
        class="bg-dark-blue-custom color-custom-orange p-4 rounded-full"
        @click.prevent="handleLogout"
      >
        <i class="text-5xl pi pi-sign-out"></i>
      </a>
    </section>
  </main>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import CommentCard from "../components/CommentCard.vue";
import NavTabs from "../components/NavTabs.vue";

export default {
  name: "Comment",
  components: {
    CommentCard,
    NavTabs,
  },
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem("token");
      router.push("/login");
    };

    return {
      handleLogout,
    };
  },
};
</script>

<style scoped>
.bg-blue-custom {
  background-color: #7a8595;
}

.bg-dark-blue-custom {
  background-color: #1f2b3f;
}

.bg-orange-custom {
  background-color: #ebb463;
}

.color-custom-orange {
  color: #ebb463;
}

.carousel-controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  margin-left: 15px;
  width: 40px;
}

.carousel-control {
  background-color: #1f2b3f;
  color: #fff;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.carousel-control-plus {
  background-color: #ebb463;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
