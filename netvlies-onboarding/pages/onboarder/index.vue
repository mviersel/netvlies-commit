<template>
  <div>
    <div class="flex items-center justify-center pt-12 gap-6">
      <div class="flex flex-col">
        <ProgressBar />
        <div class="flex flex-row gap-5">
          <ul v-for="task in tasks" :key="task.id">
            <div class="flex">
              <ProgressCircle :title="task.title" />
            </div>
          </ul>
        </div>
      </div>
      <ButtonSet />
    </div>
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
