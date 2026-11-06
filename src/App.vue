<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
onMounted(() => document.documentElement.classList.add('ready'))
</script>
<template>
  <div class="site-shell"><SiteHeader /><main class="main-content"><RouterView v-slot="{ Component }"><Transition name="page" mode="out-in"><component :is="Component" /></Transition></RouterView></main><SiteFooter /></div>
</template>