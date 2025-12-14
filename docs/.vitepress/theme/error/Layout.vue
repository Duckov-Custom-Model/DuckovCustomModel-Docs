<script setup>
import { onMounted, ref } from 'vue'

const image1 = import.meta.glob('/src/images/酒狐1/**/*.{png,jpg,gif,webp}', { eager: true })
const image2 = import.meta.glob('/src/images/酒狐2/**/*.{png,jpg,gif,webp}', { eager: true })
const touchi = import.meta.glob('/src/images/酒狐1/偷吃示众_06.png', { eager: true })

const customImageUrl = ref('')


const getRandomImage = () => {

  const images1 = Object.values(image1).map(module => module.default)
  const images2 = Object.values(image2).map(module => module.default)

  const allImages = [...images1, ...images2]

  if (allImages.length === 0) {
    console.warn('未找到任何图片')
    return null
  }

  const randomIndex = Math.floor(Math.random() * allImages.length)
  return allImages[randomIndex]
}

onMounted(() => {
  customImageUrl.value = getRandomImage()
  // customImageUrl.value = Object.values(touchi).map(module => module.default)
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
<template>
  <div class="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-8 text-center">
    <div class="flex flex-col items-center gap-8">
      <div>
        <div class="font-bold text-gray-900 dark:text-white text-6xl">404 NOT FOUND</div>
        <div class="mt-4 text-gray-600 dark:text-gray-400 text-2xl">页面被酒狐吃掉了，去别的地方看看吧</div>
      </div>
      <div>
        <img v-if="customImageUrl" :src="customImageUrl" alt="Custom 404 Image"
          class="max-w-[400px] h-auto rounded-md animate-fadeIn" @error="getRandomImage()" />
          <div class="mt-2 text-gray-400 dark:text-gray-500 text-sm">车万女仆和YSM模组的吉祥物酒狐</div>
      </div>
      <a href="/">
        <button
          class="hover:bg-gray-100 dark:hover:bg-zinc-800 px-6 py-2 border border-gray-300 hover:border-gray-800 dark:border-gray-400 border-solid rounded-md font-medium text-gray-700 dark:text-gray-300 transition-all">
          随便逛逛
        </button>
      </a>
    </div>
  </div>
</template>