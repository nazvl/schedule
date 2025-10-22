<script setup lang="ts">
//@ts-nocheck
import {useScheduleStore} from "@/stores/scheduleStore.ts";
import StudentSearch from "@/components/search/StudentSearch.vue";

const scheduleStore = useScheduleStore();


function handleChooseMode(mode: string) {
  scheduleStore.viewMode = mode;
}
</script>
<template>
  <div class="min-h-screen flex flex-col items-center justify-center ">
    <div class="relative">
      <div @click="scheduleStore.viewMode = ''"
          class="absolute top-1 right-2 rounded-sm p-1 py-0.5 text-black dark:text-white hover:text-red-600 hover:shadow-xs hover:shadow-red-500 transition cursor-pointer">
        ✕
      </div>
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full text-center flex flex-col" v-if="scheduleStore.viewMode !== 'student' && scheduleStore.viewMode !== 'teacher'">
        <p class="mb-6 text-gray-700 dark:text-gray-200">Выберите режим просмотра расписания:</p>
        <div class="inline-flex rounded-md shadow-xs w-full" role="group">
          <button type="button"
                  @click="handleChooseMode('student')"
                  class="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-green-500 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Студент
          </button>
          <button type="button"
                  @click="handleChooseMode('teacher')"
                  class="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:text-white">
            Преподаватель
          </button>
        </div>
      </div>
      <StudentSearch v-else-if="scheduleStore.viewMode === 'student'"/>
    </div>
    </div>


</template>
<style scoped>
</style>