<script setup lang="ts">
import Header from '@/components/Header.vue';
import Loader from '@/components/ui/Loader.vue';
//@ts-nocheck
</script>

<template>
  <div class="h-dvh">
    <Loader/>
    <Header></Header>
    <router-view></router-view>
  </div>


</template>

<style scoped>

</style>
