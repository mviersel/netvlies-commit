<template>
    <div class="RadialProgressContainer">
      <div class="RadialProgress"
        role="progressbar"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
        <div class="TextContainer">
          <div class="TextRectangle">
          <p class="BigText">{{ title }}</p>
          <p>Datum: 07-07-2024</p>
          </div>
        </div>
      <input type="range" value="25" min="0" max="100" />
    </div>
</template>
  
  <script setup>
    import { onMounted } from 'vue';

    const { title } = defineProps(['title']);
  
    onMounted(() => {
      const controller = document.querySelector('input[type=range]');
      const radialProgress = document.querySelector('.RadialProgress');
  
      // Functie om het percentage op te slaan in de localStorage
      const saveProgress = (progress) => {
        localStorage.setItem('lastProgress', progress);
      }
  
      // Functie om het opgeslagen percentage op te halen uit de localStorage
      const getLastProgress = () => {
        return localStorage.getItem('lastProgress') || '0'; // Als er geen opgeslagen percentage is, standaard naar 0 gaan
      }
  
      // Functie om de voortgang in te stellen en op te slaan
      const setProgress = (progress) => {
        const value = `${progress}%`;
        radialProgress.style.setProperty('--progress', value);
        radialProgress.setAttribute('aria-valuenow', value);
        controller.value = progress; // Stel ook de waarde van de input-range in
        saveProgress(progress); // Sla de progressie op in localStorage
      }
  
      // Haal het laatst opgeslagen percentage op en stel het in
      setProgress(getLastProgress());
  
      // Wanneer de gebruiker de input-range wijzigt, werk de voortgang bij en sla het op
      controller.oninput = () => {
        setProgress(controller.value);
      }
    });
  </script>
  
  <style scoped>
    .RadialProgressContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .RadialProgress {
      --hue: 340;
      --holesize: 58%;
      --track-bg: hsl(270, 2%, 20%);
      --icon-size: 200px;
  
      block-size: 150px;
      inline-size: 150px;
      min-inline-size: 100px;
      min-block-size: 100px;
      display: grid;
      place-items: center;
      position: relative;
      font-size: max(10vmin, 1.4rem);
      margin-bottom: 20px;
      z-index: 1;
  
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        z-index: -1;
        background: conic-gradient(
          hsl(var(--hue) 100% 70%),
          hsl(var(--hue) 100% 40%),
          hsl(var(--hue) 100% 70%) var(--progress, 0%),
          var(--track-bg) var(--progress, 0%) 100%
        );
        
        mask-image: radial-gradient(
          transparent var(--holesize),
          black calc(var(--holesize) + 0.5px)
        );
      }
  
      /* Stijl voor het icoon */
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: var(--icon-size);
        height: var(--icon-size);
        background-image: url('/bookiconpink.png');
        background-size: 85px;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
      }
    }
    
    .TextContainer {
      text-align: center;
    }

    .TextRectangle {
        border: 1.5px solid #333234;
        padding-top: 100px;
        padding-left: 40px;
        padding-right: 40px;
        position: relative;
        top: -100px;
        z-index: 0;
    }

    .TextRectangle::before{
        content: "";
        position: absolute;
        top: -4px;
        left: 50%;
        width: 140px;
        height: 4px;
        background-color: white;
        transform: translateX(-50%);
        z-index: 1;
    }
  
    .TextContainer p {
      margin: 0;
    }

    .TextContainer p + p {
        margin-top: 14px;
        margin-bottom: 10px;
    }
  
    .Text {
      margin-top: 20px;
      font-size: 18px;
      color: #333;
    }

    .BigText {
    font-weight: bold;
    font-size: 25px;
    }
  </style>