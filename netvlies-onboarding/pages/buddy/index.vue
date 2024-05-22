<template>
  <div>
    <p>Buddy pagina</p>

    <div class="p-4 space-y-4">
      <input v-model="newTask.title" placeholder="New task title" class="border rounded p-2 w-full" />
      <input v-model="newTask.description" placeholder="New task description" class="border rounded p-2 w-full" />
      <input v-model="newTask.icon" placeholder="New task icon" class="border rounded p-2 w-full" />
      <button @click="addTaskHandler" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded p-2 w-full">
        Add Item
      </button>
    </div>



    <div class="h-8"></div>

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

    <div>
      <ul v-for="task in tasks" :key="task.id">
        <div class="flex">
          <ProgressCircle :title="task.title"/>
        </div>
      </ul>
    </div>



  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProgressCircle from "~/components/ProgressCircle.vue";
import useFirestore from "~/composables/useFirestore";

const { getItems, addItem, updateItem, deleteItem } = useFirestore();

const tasks = ref([])
const newTask = ref({ title: "" });

const fetchItems = async () => {
  tasks.value = await getItems();
};

// Hieronder herschrijven

const addTaskHandler = async () => {
  if (newTask.value.title.trim() && newTask.value.icon.trim() && newTask.value.description()) {
    await addTask({ title: newTask.value.title, description: newTask.value.description, icon: newTask.value.icon, status: "0" })
    newTask.value.title = "";
    fetchItems();
  }
};

const editItem = async (task) => {
  const updatedName = prompt("Enter new name", task.name);
  if (updatedName && updatedName.trim() !== task.name) {
    await updateItem(task.id, { name: updatedName });
    fetchItems();
  }
};


const removeTask = async (id) => {
  await deleteItem(id);
  fetchItems();
};

onMounted(fetchItems);
</script>

<style lang="css" scoped></style>
