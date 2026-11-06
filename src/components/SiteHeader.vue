<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'
import { navItems, profile } from '../data/site'
const open = ref(false)
const route = useRoute()
</script>
<template>
<header class="topbar"><div class="topbar-inner">
  <RouterLink to="/" class="brand" @click="open=false"><span class="brand-mark">Z.</span><span class="brand-name">ZH<span class="brand-dot">/</span>SPACE</span></RouterLink>
  <nav class="desktop-nav"><RouterLink v-for="item in navItems" :key="item.to" :to="item.to" :class="{active: route.path===item.to}">{{ item.label }}</RouterLink></nav>
  <a class="header-cta" :href="profile.github" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight :size="14" /></a>
  <button class="mobile-toggle" aria-label="切换导航" @click="open=!open"><X v-if="open"/><Menu v-else/></button>
</div>
<Transition name="drop"><nav v-if="open" class="mobile-nav"><RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="open=false">{{item.label}} <span>{{item.en}}</span></RouterLink></nav></Transition>
</header>
</template>