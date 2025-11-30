<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'reka-ui'

import MultiSelect from './ui/MultiSelect.vue'
import Select from './ui/Select.vue'
import AICharacters from './AICharacters.json'

interface CustomSound {
  SoundType: string
  SoundEvent: string
  AudioClips: string[]
}

interface BundleInfo {
  BundleName: string
  DisplayName: string
  Author: string
  Description: string
  Version: string
  Target: ['Character' | 'AICharacter' | 'Pet']
  SupportedAICharacters: []
  CustomSounds: CustomSound[]
}

const formData = ref<BundleInfo>({
  BundleName: '',
  DisplayName: '',
  Author: '',
  Description: '',
  Version: '1.0.0',
  Target: ['Character'],
  SupportedAICharacters: [],
  CustomSounds: []
})

// 音效类型选项
const soundTypeOptions = [
  { value: 'normal', label: '普通音效' },
  { value: 'surprise', label: '警戒音效' },
  { value: 'idle', label: '待机音效' },
  { value: 'trigger_on_hurt', label: '受伤触发音效' },
  { value: 'trigger_on_death', label: '死亡触发音效' },
  { value: 'trigger_on_hit_target', label: '命中目标触发音效' },
  { value: 'trigger_on_kill_target', label: '击杀目标触发音效' },
  { value: 'trigger_on_crit_hurt', label: '暴击受伤触发音效' },
  { value: 'trigger_on_crit_dead', label: '暴击死亡触发音效' },
  { value: 'trigger_on_crit_hit_target', label: '暴击命中目标触发音效' },
  { value: 'trigger_on_crit_kill_target', label: '暴击击杀目标触发音效' },
  { value: 'search_found_item_quality_none', label: '搜索到品质为 none 的物品' },
  { value: 'search_found_item_quality_white', label: '搜索到品质为 white 的物品' },
  { value: 'search_found_item_quality_green', label: '搜索到品质为 green 的物品' },
  { value: 'search_found_item_quality_blue', label: '搜索到品质为 blue 的物品' },
  { value: 'search_found_item_quality_purple', label: '搜索到品质为 purple 的物品' },
  { value: 'search_found_item_quality_orange', label: '搜索到品质为 orange 的物品' },
  { value: 'search_found_item_quality_red', label: '搜索到品质为 red 的物品' },
  { value: 'footstep_organic_walk_light', label: '有机材质轻步行脚步声' },
  { value: 'footstep_mech_walk_light', label: '机械材质轻步行脚步声' },
  { value: 'footstep_danger_walk_light', label: '危险材质轻步行脚步声' },
  { value: 'footstep_nosound_walk_light', label: '无声材质轻步行脚步声' }
]

// 目标类型选项
const targetOptions = [
  { value: 'Character', label: 'Character (角色)' },
  { value: 'AICharacter', label: 'AICharacter (AI角色)' },
  { value: 'Pet', label: 'Pet (宠物)' },
]

const aiIdsInput = ref('')

const newSound = ref({
  Path: '',
  Tags: []
})

const aiCharacterOptions = Object.entries(AICharacters).map(([key, value]) => ({
  value: key,
  label: value,
}))

const handleAICharacterSelect = (selectedValues: string[]) => {
  formData.value.SupportedAICharacters = selectedValues
}

// 添加音效
const addSound = () => {
  if (!newSound.value.Path.trim()) {
    alert('请填写音效路径')
    return
  }
  if (newSound.value.Tags.length === 0) {
    alert('请选择至少一个音效类型')
    return
  }

  formData.value.CustomSounds.push({ ...newSound.value })
  newSound.value = { Path: '', Tags: [] }
}


// 移除音效
const removeSound = (index: number) => {
  formData.value.CustomSounds.splice(index, 1)
}

// 生成 JSON
const generatedJson = computed(() => {
  return JSON.stringify(formData.value, null, 2)
})

// 下载 JSON
const downloadJson = () => {
  const blob = new Blob([generatedJson.value], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'bundleinfo.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// 复制到剪贴板
const copyToClipboard = () => {
  navigator.clipboard.writeText(generatedJson.value).then(() => {
    alert('已复制到剪贴板！')
  })
}

// 重置表单
const resetForm = () => {
  {
    formData.value = {
      BundleName: '',
      DisplayName: '',
      Author: '',
      Description: '',
      Version: '1.0.0',
      Target: 'Character',
      SupportedAICharacters: [],
      CustomSounds: []
    }
    aiIdsInput.value = ''
  }
}
</script>

<template>
  <div class="my-8">
    <div class="max-w-7xl gap-8 grid grid-cols-1 mx-auto">
      <!-- 左侧表单 -->
      <div class="bg-[var(--vp-c-bg-soft)] p-6 border border-[var(--vp-c-divider)] rounded-xl">
        <!-- 基础信息 -->
        <div class="space-y-5">
          <div>
            <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">
              Bundle 名称 <span class="text-red-500">*</span>
            </label>
            <input v-model="formData.BundleName" type="text"
              class="w-full bg-[var(--vp-c-bg)] px-3.5 py-2.5 border border-[var(--vp-c-divider)] focus:border-transparent rounded-md focus:outline-none focus:ring-[var(--vp-c-brand-1)] focus:ring-2 text-[var(--vp-c-text-1)] text-sm transition-all"
              placeholder="和Bundle name一致" />
          </div>

          <div>
            <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">
              显示名称 <span class="text-red-500">*</span>
            </label>
            <input v-model="formData.DisplayName" type="text"
              class="w-full bg-[var(--vp-c-bg)] px-3.5 py-2.5 border border-[var(--vp-c-divider)] focus:border-transparent rounded-md focus:outline-none focus:ring-[var(--vp-c-brand-1)] focus:ring-2 text-[var(--vp-c-text-1)] text-sm transition-all"
              placeholder="例如: 我的角色" />
          </div>

          <div>
            <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">
              作者 <span class="text-red-500">*</span>
            </label>
            <input v-model="formData.Author" type="text"
              class="w-full bg-[var(--vp-c-bg)] px-3.5 py-2.5 border border-[var(--vp-c-divider)] focus:border-transparent rounded-md focus:outline-none focus:ring-[var(--vp-c-brand-1)] focus:ring-2 text-[var(--vp-c-text-1)] text-sm transition-all"
              placeholder="你的名字" />
          </div>

          <div>
            <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">描述</label>
            <textarea v-model="formData.Description"
              class="w-full bg-[var(--vp-c-bg)] px-3.5 py-2.5 border border-[var(--vp-c-divider)] focus:border-transparent rounded-md focus:outline-none focus:ring-[var(--vp-c-brand-1)] focus:ring-2 text-[var(--vp-c-text-1)] text-sm transition-all resize-y"
              placeholder="描述你的模型..." rows="3" />
          </div>

          <div class="gap-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">版本</label>
              <input v-model="formData.Version" type="text"
                class="w-full bg-[var(--vp-c-bg)] px-3.5 py-2.5 border border-[var(--vp-c-divider)] focus:border-transparent rounded-md focus:outline-none focus:ring-[var(--vp-c-brand-1)] focus:ring-2 text-[var(--vp-c-text-1)] text-sm transition-all"
                placeholder="1.0.0" />
            </div>

            <div>
              <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">
                目标类型 <span class="text-red-500">*</span>
              </label>
              <MultiSelect v-model="formData.Target" :options="targetOptions" placeholder="请选择目标类型" />
            </div>
          </div>

          <!-- 支持的 AI 角色 -->
          <div v-if="formData.Target.includes('AICharacter')">
            <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">
              支持的 AI 角色
            </label>
            <MultiSelect v-model="formData.SupportedAICharacters" :options="aiCharacterOptions"
              placeholder="请选择支持的 AI 角色" />
            <div v-if="formData.SupportedAICharacters.length > 0" class="flex flex-wrap gap-2 mt-3">
              <span v-for="id in formData.SupportedAICharacters" :key="id"
                class="inline-block bg-[var(--vp-c-brand-soft)] px-2.5 py-1 rounded font-medium text-[var(--vp-c-brand-1)] text-sm">
                {{aiCharacterOptions.find(option => option.value === id)?.label || id}}
              </span>
            </div>
          </div>

          <!-- 自定义音效 -->
          <div class="space-y-6">
            <!-- 已添加的音效列表 -->
            <div v-if="formData.CustomSounds?.length > 0" class="space-y-4">
              <div v-for="(sound, index) in formData.CustomSounds" :key="index"
                class="flex items-start gap-4 bg-[var(--vp-c-bg-soft)] p-4 border-[var(--vp-c-brand-1)] border-2 dark:border-white border-solid rounded-lg">
                <div class="flex-1">
                  <div class="font-medium text-[var(--vp-c-text-1)]">{{ sound.Path }}</div>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="tag in sound.Tags" :key="tag"
                      class="bg-[var(--vp-c-brand-soft)] px-2 py-1 rounded text-[var(--vp-c-brand-1)] text-sm">
                      {{soundTypeOptions.find(option => option.value === tag)?.label || tag}}
                    </span>
                  </div>
                </div>
                <button class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white text-sm"
                  @click="removeSound(index)">
                  删除
                </button>
              </div>
            </div>

            <!-- 添加新音效 -->
            <div class="bg-[var(--vp-c-bg-soft)] border border-[var(--vp-c-divider)] rounded-lg">
              <div class="space-y-4">
                <div>
                  <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">音效路径</label>
                  <input v-model="newSound.Path" type="text"
                    class="w-full bg-[var(--vp-c-bg)] px-3 py-2 border border-[var(--vp-c-divider)] rounded focus:outline-none focus:ring-[var(--vp-c-brand-1)] focus:ring-2 text-sm"
                    placeholder="请输入音效路径" />
                </div>

                <div>
                  <label class="block mb-2 font-medium text-[var(--vp-c-text-1)] text-sm">音效类型</label>
                  <MultiSelect v-model="newSound.Tags" :options="soundTypeOptions" placeholder="请选择音效类型" />
                </div>

                <button
                  class="w-full bg-[var(--vp-c-brand-1)] hover:bg-[var(--vp-c-brand-2)] px-4 py-2 rounded text-white text-sm"
                  @click="addSound">
                  添加音效
                </button>
              </div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="gap-3 grid grid-cols-1 md:grid-cols-3 pt-6 border-[var(--vp-c-divider)] border-t">
            <AlertDialogRoot>
              <AlertDialogTrigger
                class="bg-[var(--vp-c-brand-1)] hover:bg-[var(--vp-c-brand-2)] px-4 py-2.5 rounded-md font-medium text-white text-sm transition-all">
                重置
              </AlertDialogTrigger>
              <AlertDialogPortal>
                <AlertDialogOverlay
                  class="z-30 fixed inset-0 bg-white/90 dark:bg-black/90 data-[state=open]:animate-overlayShow" />
                <AlertDialogContent
                  class="w-[90vw] max-w-[500px] max-h-[85vh] top-[50%] left-[50%] z-[100] fixed bg-white dark:bg-zinc-800 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[25px] rounded-lg focus:outline-none text-sm translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-contentShow">
                  <AlertDialogTitle class="m-0 font-semibold text-[17px] text-mauve12">
                    确认重置
                  </AlertDialogTitle>
                  <AlertDialogDescription class="mt-4 mb-5 text-mauve11 text-sm leading-normal">
                    确认后无法撤回。
                  </AlertDialogDescription>
                  <div class="flex justify-end gap-4">
                    <AlertDialogCancel
                      class="h-[35px] inline-flex justify-center items-center bg-white hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-800 focus:shadow-[0_0_0_2px] focus:shadow-mauve7 px-[15px] rounded-md outline-none font-semibold text-mauve11 leading-none">
                      取消
                    </AlertDialogCancel>
                    <AlertDialogAction
                      class="h-[35px] inline-flex justify-center items-center bg-red-300 hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-800 focus:shadow-[0_0_0_2px] focus:shadow-red7 px-[15px] rounded-md outline-none font-semibold text-red11 leading-none"
                      @click="resetForm">
                      确认重置
                    </AlertDialogAction>
                  </div>
                </AlertDialogContent>
              </AlertDialogPortal>
            </AlertDialogRoot>
            <button
              class="bg-[var(--vp-c-brand-1)] hover:bg-[var(--vp-c-brand-2)] px-4 py-2.5 rounded-md font-medium text-[var(--vp-c-brand-1)] text-white text-sm transition-colors"
              @click="copyToClipboard">
              复制
            </button>
            <button
              class="bg-[var(--vp-c-brand-1)] hover:bg-[var(--vp-c-brand-2)] px-4 py-2.5 rounded-md font-medium text-white text-sm transition-colors"
              @click="downloadJson">
              下载 JSON
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧预览 -->
      <div class="bg-[var(--vp-c-bg-soft)] p-6 border border-[var(--vp-c-divider)] rounded-xl">
        <h3 class="mb-6 pb-3 border-[var(--vp-c-divider)] border-b-2 font-semibold text-[var(--vp-c-text-1)] text-xl">
          JSON 预览
        </h3>
        <pre
          class="max-h-[600px] overflow-x-auto overflow-y-auto bg-[var(--vp-c-bg)] p-4 border border-[var(--vp-c-divider)] rounded-md"><code class="font-mono text-[var(--vp-c-text-1)] text-sm leading-relaxed">{{ generatedJson }}</code></pre>
      </div>
    </div>
  </div>
</template>