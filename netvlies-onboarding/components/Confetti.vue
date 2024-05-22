<template>
  <div></div>
</template>

<script>
import confetti from 'canvas-confetti';

export default {
  name: 'Confetti',
  methods: {
    showConfetti() {
      var duration = 3 * 1000; // Show confetti for 7 seconds
      var end = Date.now() + duration;
      var colors = ['#bb0000', '#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ff7e', '#00fff9', '#002aff', '#7e00ff', '#ff00ea']; // Add more colors

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  }
};
</script>

<style scoped>
</style>
