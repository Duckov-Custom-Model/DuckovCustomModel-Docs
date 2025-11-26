<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TreeItem, TreeRoot } from 'reka-ui'

interface TreeNode {
  title: string
  icon: string
  description?: string
  required?: boolean
  children?: TreeNode[]
}

const items: TreeNode[] = [
  {
    title: 'ModelMod',
    icon: 'mdi:folder',
    description: '模组根目录',
    children: [
      {
        title: 'Models',
        icon: 'mdi:folder',
        description: '模型包文件夹',
        children: [
          {
            title: 'ModelPack',
            icon: 'mdi:folder',
            description: '模型包（可以随意取名）',
            children: [
              {
                title: 'bundleinfo.json',
                icon: 'mdi:code-json',
                description: '模型包配置文件',
                required: true
              },
              {
                title: 'modelbundle.unity3d',
                icon: 'mdi:unity',
                description: 'AssetBundle 文件',
                required: true
              },
              {
                title: 'thumbnail.png',
                icon: 'mdi:image',
                description: '模型缩略图'
              },
              {
                title: 'sounds',
                icon: 'mdi:folder',
                description: '音频文件夹（可选）',
                children: [
                  {
                    title: 'normal1.ogg',
                    icon: 'mdi:music',
                    description: '普通音效'
                  },
                  {
                    title: 'surprise.ogg',
                    icon: 'mdi:music',
                    description: '警戒音效'
                  },
                  {
                    title: 'idle.ogg',
                    icon: 'mdi:music',
                    description: '待机音效'
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'mod.dll',
        icon: 'mdi:file-cog',
        description: '模组 DLL',
        required: true
      },
      {
        title: 'info.ini',
        icon: 'mdi:file-document',
        description: '模组信息配置',
        required: true
      },
      {
        title: 'preview.png',
        icon: 'mdi:image',
        description: '模组预览图',
        required: true
      }
    ]
  }
]
</script>

<template>
  <TreeRoot v-slot="{ flattenItems }" class="tree-root" :items="items" :get-key="(item) => item.title"
    :default-expanded="['ModelMod', 'Models','sounds']">
    <h3 class="tree-header">
      模组目录结构
    </h3>
    <TreeItem v-for="item in flattenItems" v-slot="{ isExpanded }" :key="item._id"
      :style="{ 'padding-left': `${item.level - 0.5}rem` }" v-bind="item.bind" class="tree-item">
      <template v-if="item.hasChildren">
        <Icon v-if="!isExpanded" icon="mdi:folder" class="icon" />
        <Icon v-else icon="mdi:folder-open" class="icon" />
      </template>
      <Icon v-else :icon="item.value.icon" class="icon" />
      <div class="item-text">
        <span class="item-title">{{ item.value.title }}</span>
        <span v-if="item.value.required" class="required">必需</span>
        <span v-if="item.value.description" class="description">{{ item.value.description }}</span>
      </div>
    </TreeItem>
  </TreeRoot>
</template>

<style scoped>
.tree-root {
  list-style: none;
  user-select: none;
  width: 100%;
  max-width: 600px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  margin: 1.5rem 0;
  font-size: 14px;
  font-weight: 500;
}

.tree-header {
  font-weight: 600;
  font-size: 16px;
  color: var(--vp-c-text-2);
  padding: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.75rem;
  margin: 0;
}

.tree-item {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  margin: 0.125rem 0;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.15s;
}

.tree-item:hover {
  background: var(--vp-c-default-soft);
}

.tree-item:focus-visible {
  ring: 2px;
  ring-color: var(--vp-c-brand-1);
}

.tree-item[data-selected] {
  background: var(--vp-c-brand-soft);
}

.icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

.item-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
}

.item-title {
  color: var(--vp-c-text-1);
}

.required {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.375rem;
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px solid var(--vp-c-text-1);
  border-radius: 3px;
  line-height: 1;
}

.description {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 400;
  margin-left: auto;
  padding-left: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .tree-root {
    max-width: 100%;
  }

  .description {
    display: none;
  }
}
</style>