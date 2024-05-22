<template>
   <button
      class="inline-flex items-center bg-white outline outline-1 outline-black outline-style: solid text-black text-sm min-h-[50px] px-3 py-0.5 font-semibold hover:bg-gray-50"
      style="font-size: 20px; width: 250px; height: 60px; gap: 10px;">
      <!-- <Icon name="grommet-icons:task" color="black" size="40px" /> -->
      <ListBulletIcon class="h-10 w-10 text-black-100 stroke-0" />
      <slot />
   </button>
</template>

<script setup>
   import { ListBulletIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
   .stroke-0 {
      stroke-width: 0.5px;
   }
</style>