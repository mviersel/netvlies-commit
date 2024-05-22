<template>
  <div>
    <p>Onboarder pagina</p>

    <div class="bg-white rounded-lg shadow-md p-4">
      <ul class="space-y-4">
        <li v-for="task in tasks" :key="task.id" class="flex items-center space-x-4">
          <img :src="task.icon" alt="Product Icon" class="w-8 h-8" />
          <div>
            <h2 class="text-lg font-semibold">{{ task.title }}</h2>
            <p class="text-gray-600">{{ task.description }}</p>
            <p class="text-sm text-gray-400">Status: {{ task.status }}</p>
          </div>
          <div class="ml-auto space-x-2">
            <button @click="" class="text-blue-500 hover:underline">Edit</button>
            <button @click="removeTask" class="text-red-500 hover:underline">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- <button @click="fetchItems">button</button> -->
  </div>

  <div class="flex flex-col items-center min-h-screen">
    <ProgressBar />
  </div>
</template>

<script setup>
import ProgressBar from '@/components/ProgressBar.vue'; 

import { ref, onMounted } from "vue";
import useFirestore from "~/composables/useFirestore";

const { getItems, addItem, updateItem, deleteItem } = useFirestore();

const items = ref([]);
const tasks = ref([])
const newItem = ref({ name: "" });
const newTask = ref({ name: "" });

const fetchItems = async () => {
  tasks.value = await getItems();
};

onMounted(fetchItems);
</script>

<style lang="css" scoped></style>
