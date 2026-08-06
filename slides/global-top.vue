<script setup lang="ts">
import { computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

const { currentPage } = useNav()
const { $slidev } = useSlideContext()

const deckTitle = computed(() => {
  const globalTitle = $slidev?.configs?.title
  if (typeof globalTitle === 'string' && globalTitle.trim())
    return globalTitle

  return `Deck ${currentPage.value}`
})
</script>

<template>
  <header v-if="currentPage > 1" class="slide-header">
    <span class="slide-header-right">{{ deckTitle }}</span>
  </header>
</template>

<style scoped>
.slide-header {
  position: absolute;
  right: 1rem;
  top: 0.6rem;
  font-size: 0.8rem;
  color: rgba(17, 24, 39, 0.75);
  pointer-events: none;
  z-index: 20;
}

.slide-header-right {
  line-height: 1;
}
</style>
