<template>
  <div 
    ref="scrollContainer"
    class="h-screen overflow-y-scroll snap-y snap-mandatory bg-gray-50 focus:outline-none"
    tabindex="0"
  >
    <div v-if="pending" class="h-screen flex items-center justify-center">
      <div class="text-xl">Loading...</div>
    </div>
    <div v-else-if="error" class="h-screen flex items-center justify-center">
      <div class="text-xl text-red-600">Error: {{ error }}</div>
    </div>
    <div v-else>
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="h-screen flex flex-col justify-center items-center px-8 snap-start bg-white border-b border-gray-100"
      >
        <div class="prose prose-lg text-center max-w-4xl">
          <ContentRenderer :value="slide" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollContainer = ref(null)

const { data, pending, error } = await useAsyncData('slides', () => {
  return queryCollection('content').path('/slides').first()
})

// Auto-focus the scroll container when mounted
onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.focus()
  }
})

// Split the content into individual slides based on HR separators
const slides = computed(() => {
  if (!data.value?.body?.value) return []
  
  const slides = []
  let currentSlideContent = []
  
  for (const item of data.value.body.value) {
    if (Array.isArray(item) && item[0] === 'hr') {
      // Found a separator, create a slide if we have content
      if (currentSlideContent.length > 0) {
        slides.push({
          ...data.value,
          body: {
            type: 'minimark',
            value: currentSlideContent
          }
        })
        currentSlideContent = []
      }
    } else {
      // Add content to current slide
      currentSlideContent.push(item)
    }
  }
  
  // Add the last slide if it has content
  if (currentSlideContent.length > 0) {
    slides.push({
      ...data.value,
      body: {
        type: 'minimark',
        value: currentSlideContent
      }
    })
  }
  
  return slides
})
</script>