<script setup lang="ts">
interface Props {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  block: false
})

const variantClasses = {
  default: 'bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-1)] hover:bg-[var(--vp-c-bg-mute)] border border-[var(--vp-c-divider)]',
  primary: 'bg-[var(--vp-c-brand-1)] text-white hover:bg-[var(--vp-c-brand-2)]',
  secondary: 'bg-[var(--vp-c-default-soft)] text-[var(--vp-c-text-1)] hover:bg-[var(--vp-c-default)]',
  outline: 'border border-[var(--vp-c-divider)] bg-transparent hover:bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-1)]',
  ghost: 'bg-transparent hover:bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-1)]',
  destructive: 'bg-red-500 text-white hover:bg-red-600'
}

const sizeClasses = {
  sm: 'h-8 px-3 text-xs rounded-md',
  md: 'h-9 px-4 text-sm rounded-md',
  lg: 'h-11 px-6 text-base rounded-lg'
}
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vp-c-brand-1)] focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      variantClasses[variant],
      sizeClasses[size],
      block && 'w-full'
    ]"
    :disabled="disabled || loading"
  >
    <svg v-if="loading" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
    <slot />
  </button>
</template>