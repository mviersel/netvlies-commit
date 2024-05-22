<!-- pages/index.vue -->
<template>
    <div>
        <h1>Items List</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <button @click="editItem(item)">Edit</button>
                <button @click="removeItem(item.id)">Delete</button>
            </li>
        </ul>
        <h1>Add Item</h1>
        <input v-model="newItem.name" placeholder="New Item Name" />
        <button @click="addItemHandler">Add Item</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useFirestore from "~/composables/useFirestore";

const { getItems, addItem, updateItem, deleteItem } = useFirestore();

const items = ref([]);
const newItem = ref({ name: "" });

const fetchItems = async () => {
    items.value = await getItems();
};

const addItemHandler = async () => {
    if (newItem.value.name.trim()) {
        await addItem({ name: newItem.value.name, description: "", icon: "", status: "" });
        newItem.value.name = "";
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


const removeItem = async (id) => {
    await deleteItem(id);
    fetchItems();
};

onMounted(fetchItems);
</script>