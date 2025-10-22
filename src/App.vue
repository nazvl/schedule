<script setup lang="ts">
import Header from '@/components/Header.vue';
import Loader from '@/components/ui/Loader.vue';
</script>

<template>
  <Loader/>
  <Header></Header>
<router-view></router-view>

</template>

<style scoped>

</style>
