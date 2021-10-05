<template>
  <app-header />

  <router-view v-slot="{Component}">
    <transition name='fade' mode='out-in'>
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script setup>
import AppHeader from '/src/components/Header.vue'
import AppFooter from '/src/components/Footer.vue'

</script>
