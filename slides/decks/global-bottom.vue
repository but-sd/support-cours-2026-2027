<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentPage } = useNav()
</script>

<template>
  <footer v-if="currentPage > 1" class="slide-footer">
    <span class="slide-footer-right">{{ currentPage }}</span>
  </footer>
</template>

<style scoped>
.slide-footer {
  position: absolute;
  right: 1rem;
  bottom: 0.4rem;
  font-size: 0.8rem;
  color: rgba(17, 24, 39, 0.75);
  pointer-events: none;
  z-index: 20;
}

.slide-footer-right {
  line-height: 1;
}
</style>
