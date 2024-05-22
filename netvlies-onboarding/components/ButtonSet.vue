<template>
   <div class="m-3">
      <div class="flex">
         <div class="flex justify-end">
            <ul>
               <li class="mb-2.5">
                  <NuxtLink to="/">
                     <ButtonHome>Home</ButtonHome>
                  </NuxtLink>
               </li>
               <li class="mb-2.5">
                  <NuxtLink to="/onboarder">
                     <ButtonOnboarders>Onboarders</ButtonOnboarders>
                  </NuxtLink>
               </li>
               <li class="mb-2.5">
                  <NuxtLink to="/taken">
                     <ButtonTaken>Taken</ButtonTaken>
                  </NuxtLink>
               </li>
               <li class="mb-2.5">
                  <NuxtLink to="/settings">
                     <ButtonSettings>Settings</ButtonSettings>
                  </NuxtLink>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script setup>

</script>

<style scoped></style>