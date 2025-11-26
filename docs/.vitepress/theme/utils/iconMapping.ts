import { generateManifest } from 'material-icon-theme'

// 生成图标映射
const manifest = generateManifest()

// 获取文件图标
export function getFileIcon(fileName: string): string {
  const fileExtension = fileName.split('.').pop()?.toLowerCase() || ''
  const fileDefinitions = manifest.fileExtensions
  const fileNames = manifest.fileNames
  
  // 优先匹配完整文件名
  if (fileNames && fileNames[fileName.toLowerCase()]) {
    return `/node_modules/material-icon-theme/icons/${fileNames[fileName.toLowerCase()]}.svg`
  }
  
  // 匹配文件扩展名
  if (fileDefinitions && fileDefinitions[fileExtension]) {
    return `/node_modules/material-icon-theme/icons/${fileDefinitions[fileExtension]}.svg`
  }
  
  // 默认文件图标
  return `/node_modules/material-icon-theme/icons/${manifest.file}.svg`
}

// 获取文件夹图标
export function getFolderIcon(folderName: string, isOpen: boolean = false): string {
  const folderNames = manifest.folderNames
  const folderNamesExpanded = manifest.folderNamesExpanded
  
  if (isOpen && folderNamesExpanded && folderNamesExpanded[folderName.toLowerCase()]) {
    return `/node_modules/material-icon-theme/icons/${folderNamesExpanded[folderName.toLowerCase()]}.svg`
  }
  
  if (folderNames && folderNames[folderName.toLowerCase()]) {
    return `/node_modules/material-icon-theme/icons/${folderNames[folderName.toLowerCase()]}.svg`
  }
  
  // 默认文件夹图标
  return `/node_modules/material-icon-theme/icons/${isOpen ? manifest.folderExpanded : manifest.folder}.svg`
}

// 图标名称映射（简化版本）
export const iconMap: Record<string, string> = {
  // 文件夹
  'folder': manifest.folder || 'folder',
  'folder-open': manifest.folderExpanded || 'folder-open',
  
  // 常见文件
  'json': manifest.fileExtensions?.json || 'json',
  'dll': manifest.fileExtensions?.dll || 'dll',
  'ini': manifest.fileExtensions?.ini || 'settings',
  'png': manifest.fileExtensions?.png || 'image',
  'jpg': manifest.fileExtensions?.jpg || 'image',
  'unity3d': 'unity',
  'assetbundle': 'unity',
  'txt': manifest.fileExtensions?.txt || 'document',
  'wav': manifest.fileExtensions?.wav || 'audio',
  'mp3': manifest.fileExtensions?.mp3 || 'audio',
}