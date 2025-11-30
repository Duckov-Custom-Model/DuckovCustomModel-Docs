<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  type?: string
  placeholder?: string
  modelValue?: string | number
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  modelValue: '',
  disabled: false,
  readonly: false,
  error: false,
  size: 'md'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const attrs = useAttrs()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-8 px-2.5 text-xs'
    case 'lg':
      return 'h-12 px-4 text-base'
    default:
      return 'h-10 px-3 text-sm'
  }
})

const inputClasses = computed(() => {
  return [
    // 基础样式
    'flex w-full rounded-md border',
    'ring-offset-background',
    'file:border-0 file:text-sm file:font-medium file:text-foreground',
    'placeholder:text-muted-foreground',
    'transition-colors duration-200',
    
    // 尺寸
    sizeClasses.value,
    
    // 焦点状态
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    
    // 条件样式
    props.error
      ? 'border-red-500 focus-visible:ring-red-500/50'
      : 'border-[var(--vp-c-divider)] focus-visible:ring-[var(--vp-c-brand-1)]',
    
    // 禁用状态
    props.disabled && 'cursor-not-allowed opacity-50',
    
    // 只读状态
    props.readonly && 'cursor-default'
  ]
})
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :class="inputClasses"
    v-bind="attrs"
    @input="handleInput"
  />
</template>

<style scoped>
input {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

input::placeholder {
  color: var(--vp-c-text-3);
}

input:disabled {
  background-color: var(--vp-c-bg-soft);
}
</style>