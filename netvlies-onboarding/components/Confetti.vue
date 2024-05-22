<template>
  <div v-if="show" class="confetti-container">
  <canvas ref="canvas"></canvas>
  </div>
  </template>
   
  <script setup>
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  import confetti from 'canvas-confetti';
   
  const props = defineProps({
    show: Boolean,
  });
   
  const canvas = ref(null);
  let confettiInstance;
   
  const startConfetti = () => {
    if (canvas.value) {
      confettiInstance = confetti.create(canvas.value, {
        resize: true,
        useWorker: true,
      });
   
      confettiInstance({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
   
      // You can adjust the settings or trigger more confetti here if needed
    }
  };
   
  const stopConfetti = () => {
    if (confettiInstance) {
      confettiInstance.reset();
    }
  };
   
  watch(() => props.show, (newVal) => {
    if (newVal) {
      startConfetti();
    } else {
      stopConfetti();
    }
  });
   
  onMounted(() => {
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  });
   
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeCanvas);
    stopConfetti();
  });
   
  const resizeCanvas = () => {
    if (canvas.value) {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
    }
  };
  </script>
   
  <style scoped>
  .confetti-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  }
  </style>