<script setup lang="ts">
//@ts-ignore
import { ScheduleDay } from '@/types/scheduleTypes';
import type {PropType} from "vue";


const props = defineProps({
  schedule: {
    type: Object as PropType<ScheduleDay>,
    required: true
  }
});
// Словарь для перевода номера дня в название
const dayNames = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

// Парсим строку в формате "DD-MM-YYYY"
const dateStr = props.schedule.date; // например, "07-04-2025"
const [day, month, year] = dateStr.split('-').map(Number);
const date = new Date(year, month - 1, day);

const dayName = dayNames[date.getDay()];
</script>

<template>
  <div class="w-80 min-h-105 bg-gray-400 flex flex-col items-center justify-start rounded-xl">
    <div class="w-full py-0.5 text-center bg-gray-600 dark:bg-gray-700 text-white overflow-hidden rounded-t-xl">
      {{ dayName }}<br/><span class="bg-blue-500 rounded px-2">{{ props.schedule.date }}</span>
    </div>
    <div class="p-1 w-full">
      <div v-for="lesson in props.schedule.schedule" :key="lesson.number" class="bg-white m-1 p-2 rounded max-h-88">
        <span class="rounded-full bg-blue-500 px-2 text-white">{{ lesson.number }}</span> {{ lesson.lessonName }} ({{ lesson.lessonType === 1 ? 'Лекция' : 'Практика' }})<br>
        Преподаватель: {{ lesson.teacherName }}<br>
        Аудитория: {{ lesson.room }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>