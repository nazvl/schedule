import { defineStore } from 'pinia'
import { ref } from "vue";


export const useLoaderStore = defineStore('loader', () => {

    const status = ref<boolean>(false)
    return { status }
})