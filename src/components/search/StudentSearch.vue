<script setup lang="ts">
//@ts-nocheck
import {FwbAutocomplete, FwbSelect} from 'flowbite-vue'
//@ts-ignore
import {useScheduleStore} from "@/stores/scheduleStore.ts";
import {computed, watch} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {useRouter} from "vue-router";

const scheduleStore = useScheduleStore();
const filteredGroups = computed(() => {
  //@ts-ignore
  return scheduleStore.groupList.filter((a) => a.name[0] === scheduleStore.choosenYear)
})
const router = useRouter();
watch(scheduleStore.choosenYear, () => {
  if (scheduleStore.currentGroup) {
    scheduleStore.currentGroup = null;
  }
})


function handleSearch() {
  if (scheduleStore.choosenYear && scheduleStore.currentGroup && scheduleStore.choosenDate) {
    try {
      scheduleStore.getSchedule();
    }
    catch (error) {

    }
    finally {
      router.push({
        path: '/schedule',
        query: {
          year: scheduleStore.choosenYear,
          group: scheduleStore.currentGroup,
          date: scheduleStore.choosenDate
        }
      });
    }

  }
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-xl p-3 dark:bg-gray-800 dark:text-white">
    <h1 class="text-center mb-6 font-bold text-xl ">Просмотр расписания</h1>
    <div class="grid grid-cols-2 gap-4">
      <fwb-select
          v-model="scheduleStore.choosenYear"
          :options="scheduleStore.years"
          label="Выберите курс"
          placeholder="Выберите курс"
      />

      <fwb-autocomplete
          v-model="scheduleStore.currentGroup"
          :options="filteredGroups"
          :search-fields="['name']"
          display="name"
          label="Выберите группу"
          placeholder="Поиск по названию"
          class="max-w-1/2"
          :disabled="scheduleStore.choosenYear === '0' || filteredGroups.length === 0"
      />
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Период</label>
        <VueDatePicker v-model="scheduleStore.choosenDate" locale="ru" :range="{ autoRange: 5 }" select-text="Выбрать"
                       cancel-text="Отмена" :enable-time-picker="false"/>
      </div>

    </div>
    <button @click="handleSearch" class="bg-blue-500 text-white p-2 rounded-lg mt-5 w-full cursor-pointer hover:shadow-md transition" >Поиск</button>
  </div>
</template>

<style scoped>

</style>