<script setup lang="ts">
import { ScheduleDay } from '@/types/scheduleTypes';
import type {PropType} from "vue";


const props = defineProps({
  schedule: {
    type: Object as PropType<ScheduleDay>,
    required: true
  }
});

</script>

<template>
  <div class="w-80 min-h-80 bg-gray-400 flex flex-col items-center justify-start rounded-xl">
    <div class="w-full text-center bg-gray-600 text-white overflow-hidden rounded-t-xl">
      {{ props.schedule.date }}
    </div>
    <div class="p-2 w-full">
      <div v-for="lesson in props.schedule.schedule" :key="lesson.number" class="bg-white m-1 p-2 rounded">
        {{ lesson.number }}. {{ lesson.lessonName }} ({{ lesson.lessonType === 1 ? 'Лекция' : 'Практика' }})<br>
        Преподаватель: {{ lesson.teacherName }}<br>
        Аудитория: {{ lesson.room }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>