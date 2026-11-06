<script setup lang="ts">
import { ArrowUpRight, Github } from 'lucide-vue-next'
import { profile } from '../data/site'
</script>
<template><footer class="footer"><div class="footer-top"><div><div class="brand footer-brand"><span class="brand-mark">Z.</span><span class="brand-name">ZH<span class="brand-dot">/</span>SPACE</span></div><p>保持好奇，持续构建。<br/>Stay curious. Keep building.</p></div><a class="social-link" :href="profile.github" target="_blank" rel="noreferrer"><Github :size="17"/> GitHub <ArrowUpRight :size="14"/></a></div><div class="footer-bottom"><span>© {{new Date().getFullYear()}} {{profile.name}} · DIGITAL UNIVERSE</span><span>DESIGNED & BUILT WITH CURIOSITY <i>✳</i></span></div></footer></template>