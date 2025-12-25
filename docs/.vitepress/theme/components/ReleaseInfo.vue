<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Download, Calendar, Tag } from 'lucide-vue-next'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'

interface DownloadLink {
  name: string
  url: string
}

interface ReleaseInfo {
  version: string
  release_name: string
  published_at: string
  changelog?: string
  download_links?: DownloadLink[]
}

const releaseInfo = ref<ReleaseInfo | null>(null)
const loading = ref(true)
const error = ref(false)

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  breaks: true
})

onMounted(async () => {
  try {
    const response = await fetch('https://duckov-custom-model-release-version.ritsukage.com/')
    if (!response.ok) {
      throw new Error('Failed to fetch release info')
    }
    const data = await response.json()
    releaseInfo.value = data
  } catch (e) {
    console.error('Failed to fetch release info:', e)
    error.value = true
  } finally {
    loading.value = false
  }
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const renderedChangelog = computed(() => {
  if (!releaseInfo.value?.changelog) return ''
  const markdownHtml = md.render(releaseInfo.value.changelog)
  
  // 在浏览器环境中使用 DOMPurify 清理 HTML
  if (typeof window !== 'undefined' && DOMPurify) {
    return DOMPurify.sanitize(markdownHtml, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 's', 'code', 'pre', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'hr', 'blockquote'],
      ALLOWED_ATTR: ['href', 'title', 'target', 'rel'],
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    })
  }
  
  // SSR 环境：返回未清理的 HTML（VitePress 会在客户端重新渲染）
  return markdownHtml
})
</script>

<template>
  <div class="release-info">
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <span>加载版本信息中...</span>
    </div>
    
    <div v-else-if="error" class="error-state">
      <span>无法获取版本信息</span>
    </div>
    
    <div v-else-if="releaseInfo" class="release-content">
      <div class="release-header">
        <div class="version-section">
          <Tag :size="20" class="icon" />
          <div class="version-info">
            <span class="version-label">当前版本</span>
            <span class="version-value">{{ releaseInfo.release_name }}</span>
          </div>
        </div>
        
        <div class="date-section">
          <Calendar :size="20" class="icon" />
          <span class="date-text">{{ formatDate(releaseInfo.published_at) }}</span>
        </div>
      </div>
      
      <div v-if="releaseInfo.changelog" class="changelog-section">
        <h4 class="section-title">更新日志</h4>
        <div class="changelog-content" v-html="renderedChangelog"></div>
      </div>
      
      <div v-if="releaseInfo.download_links && releaseInfo.download_links.length > 0" class="download-section">
        <h4 class="section-title">下载链接</h4>
        <div class="download-links">
          <a
            v-for="(link, index) in releaseInfo.download_links"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="download-link"
          >
            <Download :size="16" />
            <span>{{ link.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.release-info {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.release-info:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.loading-state,
.error-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  color: var(--vp-c-text-2);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-state {
  color: var(--vp-c-danger-1);
}

.release-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.release-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.version-section,
.date-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
  opacity: 0.9;
}

.version-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.version-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.version-value {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.date-text {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.section-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-title::before {
  content: '';
  width: 3px;
  height: 1rem;
  background: var(--vp-c-brand-1);
  border-radius: 2px;
}

.changelog-section {
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.changelog-content {
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
  background: var(--vp-c-bg);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-divider) transparent;
}

.changelog-content::-webkit-scrollbar {
  width: 6px;
}

.changelog-content::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

.changelog-content::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 3px;
}

.changelog-content::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-brand-1);
}

.changelog-content :deep(h1),
.changelog-content :deep(h2),
.changelog-content :deep(h3),
.changelog-content :deep(h4),
.changelog-content :deep(h5),
.changelog-content :deep(h6) {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.changelog-content :deep(h1) { font-size: 1.5rem; }
.changelog-content :deep(h2) { font-size: 1.25rem; }
.changelog-content :deep(h3) { font-size: 1.1rem; }

.changelog-content :deep(p) {
  margin: 0.5rem 0;
}

.changelog-content :deep(ul),
.changelog-content :deep(ol) {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.changelog-content :deep(li) {
  margin: 0.25rem 0;
}

.changelog-content :deep(li > ul),
.changelog-content :deep(li > ol) {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.changelog-content :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.changelog-content :deep(a:hover) {
  text-decoration: underline;
}

.changelog-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin: 1rem 0;
}

.changelog-content :deep(strong) {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.changelog-content :deep(code) {
  padding: 0.125rem 0.375rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 0.85em;
  font-family: 'Courier New', monospace;
  color: var(--vp-c-brand-1);
}

.changelog-content :deep(pre) {
  padding: 0.75rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow-x: auto;
  margin: 0.75rem 0;
}

.changelog-content :deep(pre code) {
  padding: 0;
  background: transparent;
}

.download-section {
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.download-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.download-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.download-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.download-link:hover {
  background: var(--vp-c-brand-2);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.download-link:hover::before {
  opacity: 1;
}

.download-link:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.download-link svg {
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.download-link span {
  position: relative;
  z-index: 1;
}

@media (min-width: 640px) {
  .release-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
