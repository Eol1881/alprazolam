<script setup lang="ts">
import { ref, onMounted } from 'vue'

const quote = ref('')
const isLoading = ref(false)

const quotes = [
  'Насрал — убери.',
  'Будь тем, кто смотрит в завтрашний день.',
  'Сложности делают жизнь интересной.',
  'Делай сегодня то, что другие не хотят.',
  'Людей ебут.',
  'Кто не падал — тот не поднимался',
]

const fetchQuote = async () => {
  isLoading.value = true

  const availableQuotes = quotes.filter((q) => q !== quote.value)

  await new Promise((res) => setTimeout(() => res(null), Math.random() * 1000 + 300))

  const randomIndex = Math.floor(Math.random() * availableQuotes.length)
  quote.value = availableQuotes[randomIndex]
  isLoading.value = false
}

onMounted(fetchQuote)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4 text-[#00bd7e]">Quote of the day</h1>
    <div class="bg-gray-100 p-4 rounded shadow text-black">
      <p class="italic">{{ isLoading ? 'Loading...' : `"${quote}"` }}</p>
    </div>
    <button
      @click="fetchQuote"
      class="bg-[#00bd7e] hover:bg-[#236d54] transition-all text-white px-4 py-2 rounded mt-4"
    >
      Refresh
    </button>
  </div>
</template>
