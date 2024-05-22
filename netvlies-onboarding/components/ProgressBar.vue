<template>
  <div class="container mx-auto my-4">
    <Confetti ref="confetti" />
    <div class="bg-pink-500 p-5">
      <div class="flex items-center bg-white rounded-3xl p-2">
        <div class="text-gray-400 font-bold px-5">Start</div>

        <!-- Progress bar and markers -->
        <div class="flex-1 relative timeline-container">
          <!-- Progress bar -->
          <div class="bg-gray-400 rounded-full h-1.5 relative">
            <div :style="{ width: progressTwo + '%', backgroundColor: progressTwo > 0 ? '#FF0A53' : '#D9D9D9' }" 
                 class="h-full rounded-full transition-all duration-500"></div>
          </div>
          <!-- Progress markers -->
          <div v-for="marker in [0, 20, 40, 60, 80, 100]" :key="`marker-${marker}`" class="absolute top-1/2"
               :style="{ left: `${marker}%`, transform: 'translateX(-50%) translateY(-50%)' }">
            <div :class="{'bg-pink-500': progressTwo >= marker, 'bg-gray-400': progressTwo < marker }"
                 class="w-6 h-6 rounded-full marker transition-all duration-500"></div>
          </div>
        </div>
        <div class="text-gray-400 font-bold px-5">Eind</div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="mt-4 flex justify-center space-x-2">
      <button v-for="value in buttonValuesTwo" :key="`btn-${value}`" @click="increaseProgressTwo(value)"
        class="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
        +{{ value }}%
      </button>
      <button @click="resetProgressTwo" class="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import Confetti from './Confetti.vue'; // Adjust the path to where your Confetti component is located

export default {
  components: {
    Confetti,
  },
  data() {
    return {
      progressTwo: 0,
      confettiShown: false,
      buttonValuesTwo: [5, 10, 20, 30, 40], // Added 5 to the button values
    };
  },
  mounted() {
    this.loadProgress();
  },
  methods: {
    increaseProgressTwo(value) {
      let newProgress = this.progressTwo + value;
      this.progressTwo = newProgress > 100 ? 100 : newProgress;
      if (this.progressTwo === 100 && !this.confettiShown) {
        this.$refs.confetti.showConfetti(); // Show confetti when progress is 100%
        this.confettiShown = true;
      }
      this.saveProgress();
    },
    resetProgressTwo() {
      this.progressTwo = 0;
      this.confettiShown = false;
      this.saveProgress();
    },
    saveProgress() {
      localStorage.setItem('progressTwo', this.progressTwo);
      localStorage.setItem('confettiShown', this.confettiShown);
    },
    loadProgress() {
      const savedProgress = localStorage.getItem('progressTwo');
      const savedConfettiShown = localStorage.getItem('confettiShown');
      if (savedProgress !== null) {
        this.progressTwo = parseInt(savedProgress);
      }
      if (savedConfettiShown !== null) {
        this.confettiShown = savedConfettiShown === 'true';
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px; /* Increase the container width */
}

.timeline-container {
  width: 90%; /* Adjust the width of the timeline container */
}

.bg-pink-500 {
  background-color: #FF0A53; /* Vibrant pink color for the outer container and filled markers */
}
.bg-orange-500 {
  background-color: #FFA500; /* Orange color for the reset button */
}
.text-gray-400 {
  color: #D9D9D9; /* Gray color for the Start and Eind text */
}
.bg-white {
  background-color: #FFFFFF; /* White background for the progression elements */
}
.border-gray-400 {
  border-color: #D9D9D9; /* Gray border for unfilled markers */
}
.rounded-3xl {
  border-radius: 1.5rem; /* Rounded corners for both inner and outer containers */
}
.transition-all {
  transition: all 0.5s ease-in-out; /* Smooth transition for the progress bar */
}
.marker {
  transition: background-color 0.5s ease-in-out; /* Smooth transition for the markers */
}
</style>
