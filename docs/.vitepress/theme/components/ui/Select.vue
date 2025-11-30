<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  value: string
  label: string
}

const props = defineProps<{
  modelValue: string
  options: Option[]
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const dropdownOpen = ref(false)

const selectOption = (value: string) => {
  emit('update:modelValue', value)
  dropdownOpen.value = false
}
</script>

<template>
  <div class="relative">
    <div
      class="w-full bg-[var(--vp-c-bg)] px-3 py-2 border border-[var(--vp-c-divider)] rounded cursor-pointer"
      @click="dropdownOpen = !dropdownOpen"
    >
      <span v-if="modelValue">
        {{ options.find(option => option.value === modelValue)?.label }}
      </span>
      <span v-else class="text-[var(--vp-c-text-3)]">{{ placeholder }}</span>
    </div>
    <ul
      v-if="dropdownOpen"
      class="w-full z-10 absolute bg-[var(--vp-c-bg)] shadow-lg border border-[var(--vp-c-divider)] rounded"
    >
      <li
        v-for="option in options"
        :key="option.value"
        class="hover:bg-[var(--vp-c-bg-soft)] px-3 py-2 cursor-pointer"
        @click="selectOption(option.value)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.vp-doc ul {
    list-style: none;
}
</style>