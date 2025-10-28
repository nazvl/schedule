<script setup lang="ts">
//@ts-ignore
import {useScheduleStore} from "@/stores/scheduleStore";
import {watch} from "vue";
import router from "../../router";

const scheduleStore = useScheduleStore();

watch(scheduleStore.currentGroup, () => {
  if (!scheduleStore.currentGroup) {
    router.push("/");
  }
})
</script>

<template>
<div class="w-full h-full flex flex-col items-center gap-3 my-6">
  <h1 class="text-2xl font-bold">Расписание</h1>
  <p>Здесь будет расписание для группы {{scheduleStore.currentGroup.name}} для периода {{scheduleStore.choosenDate[0].toLocaleDateString()}} - {{scheduleStore.choosenDate[1].toLocaleString()}}</p>

  <button>
    <router-link @click="scheduleStore.clearAllData()" to="/" class="bg-red-500 rounded p-3 my-6">Назад</router-link>
  </button>
</div>
</template>

<style scoped>

</style>