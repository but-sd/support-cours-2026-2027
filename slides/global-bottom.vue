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
  <footer v-if="currentPage > 1" class="slide-footer">
    <span class="slide-footer-left">{{ deckTitle }}</span>
    <span class="slide-footer-right">{{ currentPage }}</span>
  </footer>
</template>

<style scoped>
.slide-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(17, 24, 39, 0.75);
  padding: 0 1rem;
  pointer-events: none;
  z-index: 20;
}

.slide-footer-left,
.slide-footer-right {
  line-height: 1;
}
</style>
