<script setup lang="ts">
//@ts-ignore
import config from "@/config/configuration";
import {ref} from "vue";

const isOpen = ref(false)

function toggleNavbar() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 border-b-1 z-1000">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="items-center space-x-3 rtl:space-x-reverse flex flex-col">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ config.name }}</span>
        <span class="text-xs dark:text-gray-400">{{ config.worktime }}</span>
      </RouterLink>
      <button @click=toggleNavbar data-collapse-toggle="navbar-default" type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Открыть меню</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="rounded-md shadow-xs hidden md:inline-flex">
        <RouterLink to="/"
                    class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
          Расписание
        </RouterLink>
        <a :href="config.website"
           class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
          Главная
        </a>
      </div>

    </div>
  </nav>
  <div class="md:hidden flex flex-col w-full absolute z-1000 bg-white dark:bg-gray-900" v-if="isOpen">
    <RouterLink to="/"
                class="border-b-1 dark:text-gray-200 border-gray-200 py-3 px-3">
      Расписание
    </RouterLink>
    <a :href="config.website"
       class="border-b-1 dark:text-gray-200 border-gray-200 py-3 px-3">
      Главная
    </a>
  </div>

</template>

<style scoped>

</style>