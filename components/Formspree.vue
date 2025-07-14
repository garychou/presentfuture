<!-- Formspree.vue -->
 <template>
  <div class="max-w-md mx-auto">
   
    <form v-if="!submitted" @submit.prevent="submitForm" class="space-y-4">
      <div>
        <input
          v-model="form.name"
          type="text"
          placeholder="Your Name"
          required
          class=" text-sm md:text-base w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-900"
        />
      </div>
      
      <div>
        <input
          v-model="form.email"
          type="email"
          placeholder="Your Email"
          required
          class=" text-sm md:text-base w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-900"
        />
      </div>
      
      <div>
        <textarea
          v-model="form.message"
          placeholder="Tell us about your work"
          rows="4"
          required
          class=" text-sm md:text-base w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none resize-none text-gray-900"
        ></textarea>
      </div>
      
      <button
        type="submit"
        :disabled="loading"
        class=" text-sm md:text-base w-full py-3 px-6 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
      >
        {{ loading ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
    
    <div v-else class="text-center py-8">
      <div class="text-5xl mb-4">✓</div>
      <h2 class="text-lg font-bold mb-2">Message Sent!</h2>
      <p class="opacity-80 text-base">We'll get back to you soon.</p>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const submitted = ref(false)

const submitForm = async () => {
  loading.value = true
  
  try {
    const response = await fetch('https://formspree.io/f/mldlrwvr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })
    
    if (response.ok) {
      submitted.value = true
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    alert('Something went wrong. Please try again or email us directly at hello@presentfuture.org')
  } finally {
    loading.value = false
  }
}
</script>