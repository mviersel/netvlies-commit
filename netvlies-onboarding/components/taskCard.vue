<template>

    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <!-- Icon (replace with your desired icon) -->
        <div class="bg-indigo-500 text-white p-4">
            <img :src="task.icon" alt="task icon" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </img>
        </div>
        <div class="p-8">
            <!-- Title -->
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ task.title }}</h2>
            <!-- Description -->
            <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <!-- Percentage -->
            <div class="relative h-4 bg-gray-200 rounded-full">
                <div class="absolute h-full bg-indigo-500 rounded-full" style="width: 80%;"></div>
            </div>
            <!-- Button -->
            <button class="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full">
                Learn More
            </button>
        </div>
    </div>

</template>

<script setup>

const { task } = defineProps(['tasks']);

</script>

<style lang="scss" scoped></style>
