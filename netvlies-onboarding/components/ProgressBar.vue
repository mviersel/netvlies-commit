<template>
  <div class="container mx-auto my-4">
    <Confetti :show="confettiShown" />
    <div class="bg-pink-500 p-5">
      <div class="flex items-center bg-white rounded-3xl p-2">
        <div class="text-gray-400 font-bold px-5">Start</div>

        <div class="flex-1 relative timeline-container">
          <div class="bg-gray-400 rounded-full h-1.5 relative">
            <div :style="{ width: progress + '%', backgroundColor: progress > 0 ? '#FF0A53' : '#D9D9D9' }"
              class="h-full rounded-full transition-all duration-500"></div>
          </div>
          <div v-for="marker in [0, 20, 40, 60, 80, 100]" :key="`marker-${marker}`" class="absolute top-1/2"
            :style="{ left: `${marker}%`, transform: 'translateX(-50%) translateY(-50%)' }">
            <div :class="{ 'bg-pink-500': progress >= marker, 'bg-gray-400': progress < marker }"
              class="w-6 h-6 rounded-full marker transition-all duration-500"></div>
          </div>
        </div>
        <div class="text-gray-400 font-bold px-5">Eind</div>
      </div>
    </div>

    <div class="mt-4 flex justify-center space-x-2">
      <button v-for="value in buttonValues" :key="`btn-${value}`" @click="increaseProgress(value)"
        class="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
        +{{ value }}%
      </button>
      <button @click="resetProgress" class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Confetti from './Confetti.vue';

const progress = ref(0);
const confettiShown = ref(false);
const buttonValues = [5, 10, 20, 30, 40];

const increaseProgress = (value) => {
  let newProgress = progress.value + value;
  progress.value = newProgress > 100 ? 100 : newProgress;
  if (progress.value === 100 && !confettiShown.value) {
    confettiShown.value = true;
  }
  saveProgress();
};

const resetProgress = () => {
  progress.value = 0;
  confettiShown.value = false;
  saveProgress();
};

const saveProgress = () => {
  localStorage.setItem('progress', progress.value);
  localStorage.setItem('confettiShown', confettiShown.value);
};

const loadProgress = () => {
  const savedProgress = localStorage.getItem('progress');
  const savedConfettiShown = localStorage.getItem('confettiShown');
  if (savedProgress !== null) {
    progress.value = parseInt(savedProgress);
  }
  if (savedConfettiShown !== null) {
    confettiShown.value = savedConfettiShown === 'true';
  }
};

onMounted(() => {
  loadProgress();
});
</script>

<style scoped>
.container {
  max-width: 1000px;
}

.timeline-container {
  width: 90%;
}

.bg-pink-500 {
  background-color: #FF0A53;
}

.bg-orange-500 {
  background-color: #FFA500;
}

.text-gray-400 {
  color: #D9D9D9;
}

.bg-white {
  background-color: #FFFFFF;
}

.border-gray-400 {
  border-color: #D9D9D9;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.transition-all {
  transition: all 0.5s ease-in-out;
}

.marker {
  transition: background-color 0.5s ease-in-out;
}
</style>