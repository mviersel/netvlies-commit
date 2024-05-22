<template>
  <div>
    <header class="bg-rose-600 text-white">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/">
          <div>
            <div>
              <img src="/assets/img/logo-netvlies-logo-white 1.png" alt="Netvlies logo wit" />
            </div>
          </div>
        </NuxtLink>
        <ul class="flex space-x-5">
          <li>
            <NuxtLink to="/onboarder">Onboarder</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/buddy">Buddy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/account">Account</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
img {
  height: 40px;
  padding-block: 4px;
}
</style>
