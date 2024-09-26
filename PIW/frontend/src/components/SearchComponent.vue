<template>
  <div
    class="flex px-5 text-x bg-white rounded-lg border border-solid border-slate-800 h-full w-5/12 font-semibold"
  >
    <input
      type="text"
      placeholder="Digite aqui seu item..."
      class="flex-grow border-none outline-none pl-2 text-gray-500 text-lg placeholder-gray-500"
    />
    <button class="bg-none border-none cursor-pointer">
      <img
        loading="lazy"
        src="../assets/search-icon.png"
        class="object-contain shrink-0 aspect-[1.05] w-[42px]"
        alt="Search icon"
      />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "SearchComponent",
};
</script>
