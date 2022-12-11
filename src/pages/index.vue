<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Password Generator</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        For fast, practical and more secure passwords.
      </p>

      <TheInput v-model="name" placeholder="What's your name?" autocomplete="false" @keydown.enter="go" />
      <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

      <div>
        <button btn m-3 text-sm :disabled="!name" @click="go">
          {{ t('button.go') }}
        </button>
      </div>
    </div>
  </div>
</template>