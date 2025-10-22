<script setup lang="ts">
import {useScheduleStore} from "@/components/stores/scheduleStore.ts";

const scheduleStore = useScheduleStore();


function handleChooseMode(mode: string) {
  scheduleStore.viewMode = mode;
}
</script>
<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6">
    <h1 class="text-center text-3xl md:text-4xl font-bold text-indigo-700 dark:text-blue-300 mb-8 max-w-2xl">Добро пожаловать в электронное расписание!</h1>

    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full text-center flex flex-col">
      <p class="mb-6 text-gray-700 dark:text-gray-200">Выберите режим просмотра расписания:</p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-200 mb-4" @click="handleChooseMode('student')">
        Студент
      </button>
      <button class="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-200">
        Преподаватель
      </button>
    </div>
  </div>
</template>
<style scoped>
</style>