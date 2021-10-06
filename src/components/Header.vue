<template>
  <header class="fixed w-full mx-auto bg-white shadow z-50">
    <nav class="container max-w-7xl flex items-center justify-between p-3.5">
      <div class="flex items-center">
        <router-link :to="{ name: 'Home' }" class="text-xl flex items-center hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          iBrong
        </router-link>
      </div>
      <div class="block sm:hidden">
        <button class="flex items-center p-1" @click="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div :class="open ? 'flex absolute top-12 left-0 right-0 px-4 pb-4 bg-white shadow' : 'hidden'" class="w-full sm:flex sm:w-auto">
        <ul class="sm:flex items-center w-full">
          <li>
            <router-link class="text-md block mt-4 mr-0 pl-1 hover:text-gray-600 sm:inline-block sm:mt-0 sm:mr-12 sm:pl-0  " :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link class="text-md block mt-4 mr-0 pl-1 hover:text-gray-600 sm:inline-block sm:mt-0 sm:mr-12 sm:pl-0  " :to="{ name: 'Blogs' }"
              >Blogs</router-link
            >
          </li>
          <li>
            <router-link class="text-md block mt-4 mr-0 pl-1 hover:text-gray-600 sm:inline-block sm:mt-0 sm:mr-12 sm:pl-0  " to="#"
              >Works</router-link
            >
          </li>
          <li>
            <router-link class="text-md flex items-center mt-4 mr-0 pl-1 hover:text-gray-600 sm:mt-0 sm:pl-0 " to="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span class="ml-1">
                Login/Logout
              </span>
            </router-link>
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
