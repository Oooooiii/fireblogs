<template>
  <header>
    <nav class="font-BarlowCondensed flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink mr-6">
        <router-link :to="{ name: 'Home' }" class="text-xl font-semibold tracking-tight">
          <i class="fas fa-terminal"></i> iBrong
        </router-link>
      </div>
      <div class="block sm:hidden">
        <button class="flex items-center px-3 py-2 border rounded border-teal-light" @click="toggle">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="open ? 'block' : 'hidden'" class="w-full sm:flex sm:w-auto">
        <ul class="sm:flex items-center">
          <li>
            <router-link class="text-xs block mt-4 sm:inline-block sm:mt-0 mr-4 uppercase" to="#">Home</router-link>
          </li>
          <li>
            <router-link class="text-xs block mt-4 sm:inline-block sm:mt-0 mr-4 uppercase" to="#">Blogs</router-link>
          </li>
          <li>
            <router-link class="text-xs block mt-4 sm:inline-block sm:mt-0 mr-4 uppercase" to="#"
              >Create Post</router-link
            >
          </li>
          <li>
            <router-link
              class="
                inline-block
                text-xs
                px-4
                py-2
                leading-none
                border
                rounded
                hover:border-transparent
                mt-4
                sm:mt-0
                uppercase
              "
              to="#"
              >Login/Logout</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>
