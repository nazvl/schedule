<script setup lang="ts">
//@ts-ignore
import {useScheduleStore} from "@/stores/scheduleStore";
import {watch} from "vue";
import router from "../../router";
import DaySchedule from "../ui/DaySchedule/DaySchedule.vue";
const scheduleStore = useScheduleStore();

watch(scheduleStore.currentGroup, () => {
  if (!scheduleStore.currentGroup) {
    router.push("/");
  }
})
</script>

<template>
<div class="w-full h-full flex flex-col items-center gap-3 my-6">
  <h1 class="text-2xl font-bold dark:text-white">Расписание</h1>
  <p class="dark:text-white text-center">Здесь будет расписание для группы {{scheduleStore.currentGroup.name}} для периода {{scheduleStore.choosenDate[0].toLocaleDateString()}} - {{scheduleStore.choosenDate[1].toLocaleDateString()}}</p>
  <div class="w-full max-w-6xl mx-auto flex flex-row items-center gap-3 flex-wrap justify-center">
    <div class="max-w-min" v-for="dailySchedule in scheduleStore.schedule">
      <DaySchedule :schedule="dailySchedule" />
    </div>
  </div>
    <router-link @click="scheduleStore.clearAllData()" to="/" class="bg-red-500 rounded p-3 my-6">Назад</router-link>
</div>
</template>

<style scoped>

</style>