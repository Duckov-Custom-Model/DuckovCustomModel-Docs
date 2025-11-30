<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// Props 定义
interface Option {
  value: string
  label: string
}

interface Props {
  modelValue: string[] // 确保类型为数组
  options: Option[]
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: [], // 默认值为空数组
  placeholder: '请选择',
})

// Emits 定义
const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

// 控制下拉框的展开状态
const dropdownOpen = ref(false)

// 选中标签的显示内容
const selectedLabels = computed(() =>
  Array.isArray(props.modelValue)
    ? props.modelValue
        .map((value) => props.options.find((option) => option.value === value)?.label)
        .filter((label) => label)
        .join(', ')
    : ''
)

// 切换选项
const toggleOption = (value: string) => {
  const newValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  const index = newValue.indexOf(value)
  if (index === -1) {
    newValue.push(value)
  } else {
    newValue.splice(index, 1)
  }
  emit('update:modelValue', newValue)
}

// 判断选项是否被选中
const isSelected = (value: string) => Array.isArray(props.modelValue) && props.modelValue.includes(value)

// 点击外部关闭下拉框
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.multi-select')) {
    dropdownOpen.value = false
  }
}

watch(dropdownOpen, (open) => {
  if (open) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>

<template>
  <div class="relative multi-select">
    <!-- 显示选中内容 -->
    <div
      class="w-full bg-[var(--vp-c-bg)] px-3 py-2 border border-[var(--vp-c-divider)] rounded focus:outline-none focus:ring-[var(--vp-c-brand-1)] focus:ring-2 text-sm cursor-pointer"
      @click="dropdownOpen = !dropdownOpen"
    >
      <span v-if="selectedLabels">
        {{ selectedLabels }}
      </span>
      <span v-else class="text-[var(--vp-c-text-3)]">{{ placeholder }}</span>
    </div>

    <!-- 下拉选项 -->
    <div
      v-if="dropdownOpen"
      class="w-full z-10 absolute bg-[var(--vp-c-bg)] shadow-lg mt-1 border border-[var(--vp-c-divider)] rounded"
    >
      <ul class="max-h-40 overflow-auto">
        <li
          v-for="option in options"
          :key="option.value"
          class="flex items-center hover:bg-[var(--vp-c-bg-soft)] px-3 py-2 text-sm cursor-pointer"
          @click="toggleOption(option.value)"
        >
          <input
            type="checkbox"
            class="mr-2"
            :checked="isSelected(option.value)"
            @change.stop
          />
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.multi-select {
  position: relative;
}
</style>