<!-- app.vue -->
 <template>
  <div ref="scrollContainer"
  class="h-screen overflow-y-scroll snap-y snap-mandatory  focus:outline-none"
      tabindex="0"
      >
    <!-- Hero Section -->
   <section 
      ref="heroSection"
      class="h-screen snap-start bg-gradient-to-r from-blue-500 to-purple-600 px-5"
    >
      <div class="h-full flex items-center justify-center text-lg md:text-3xl ">
        <div 
          class="prose prose-invert lg:prose-2xl text-left mx-auto transition-all duration-1000 transform"
          :class="heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'"
        >
          <ContentRenderer v-if="hero" :value="hero" />
        </div>
      </div>
    </section>


    <!-- Funder Section -->
    <section 
      ref="fundersSection"
      class="h-screen snap-start bg-red-50 px-5"
    >
      <div class="h-full flex items-center justify-center prose prose-lg lg:prose-2xl  max-w-3xl mx-auto">
        <div 
          class="transition-all duration-1000 transform"
          :class="fundersVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <ContentRenderer v-if="funders" :value="funders" />
        </div>
      </div>
    </section>

    <!-- How Section -->
    <section 
      ref="howSection"
      class="h-screen snap-start bg-green-50 px-5">
      <div class="h-full flex items-center justify-center prose prose-lg lg:prose-2xl  max-w-3xl mx-auto">
        <div 
          class="transition-all duration-1000 transform"
          :class="howVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <ContentRenderer v-if="how" :value="how" />
        </div>
      </div>
    </section>

    <!-- Author Bios Side by Side -->
    <section 
      ref="aboutSection"
      class="min-h-screen snap-start bg-gray-100"
    >
       

    <div class="flex items-center justify-center py-24">
      <div class="flex flex-col w-full"> 
      <div class="prose prose-lg lg:prose-2xl max-w-3xl mx-auto text-left mb-16">
        <h1>Who We Are</h1>
        </div>  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 max-w-4xl mx-auto px-5">
          <div 
            class="prose transition-all duration-1000 delay-200 transform"
            :class="aboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'"
          >
            <ContentRenderer v-if="karin" :value="karin" />
          </div>
          <div 
            class="prose transition-all duration-1000 delay-400 transform"
            :class="aboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
          >
            <ContentRenderer v-if="gary" :value="gary" />
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section 
      ref="contactSection"
      class="min-h-screen snap-start bg-black text-white px-4 md:px-8"
    >
      <div class="h-full flex items-center justify-center flex-col  py-24">
        <div 
          class="prose prose-invert prose-lg lg:prose-2xl text-left mx-auto transition-all duration-1000 transform"
          :class="contactVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'"
        >
          <ContentRenderer v-if="contact" :value="contact" />

        </div>

          <div 
    class="w-full my-12 max-w-md mx-auto transition-all duration-1000 delay-300 transform"
    :class="contactVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'"
  >
    <Formspree />
  </div>
      </div>


    </section>


</div>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import Formspree from '~/components/Formspree.vue'
// Query each content file specifically
const { data: hero } = await useAsyncData('hero', () =>
  queryCollection('content').path('/01-hero').first()
)
const { data: funders } = await useAsyncData('funders', () =>
  queryCollection('content').path('/02-funders').first()
)
const { data: how } = await useAsyncData('how', () =>
  queryCollection('content').path('/03-how').first()
)
const { data: karin } = await useAsyncData('karin', () =>
  queryCollection('content').path('/04-karin').first()
)
const { data: gary } = await useAsyncData('gary', () =>
  queryCollection('content').path('/04-gary').first()
)
const { data: contact } = await useAsyncData('contact', () =>
  queryCollection('content').path('/05-contact').first()
)

// Create refs for each section
const scrollContainer = ref(null)
const heroSection = ref(null)
const fundersSection = ref(null)
const howSection = ref(null)
const aboutSection = ref(null)
const contactSection = ref(null)

// Create visibility state for each section
const heroVisible = ref(false)
const fundersVisible = ref(false)
const howVisible = ref(false)
const aboutVisible = ref(false)
const contactVisible = ref(false)

// Set up intersection observers for each section
useIntersectionObserver(
  heroSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting) heroVisible.value = true
  },
  { threshold: 0.3 }
)

useIntersectionObserver(
  fundersSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting) fundersVisible.value = true
  },
  { threshold: 0.3 }
)

useIntersectionObserver(
  howSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting) howVisible.value = true
  },
  { threshold: 0.3 }
)

useIntersectionObserver(
  aboutSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting) aboutVisible.value = true
  },
  { threshold: 0.3 }
)

useIntersectionObserver(
  contactSection,
  ([{ isIntersecting }]) => {
    if (isIntersecting) contactVisible.value = true
  },
  { threshold: 0.3 }
)

// Auto-focus the scroll container when mounted
onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.focus()
  }
})
</script>