<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = $ref(user.savedName)
const mv = ref(true)
const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <h1 class="text-[44px]">Password Generator</h1>

      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        For fast, practical and more secure passwords.
      </p>

      <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default
          checkbox</label>
      </div>
      <div class="flex items-center">
        <input checked id="checked-checkbox" type="checkbox" value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked
          state</label>
      </div>

      <div class="relative m-10">
        <div class="absolute top-4 left-3">
          <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
        </div>

        <input type="text" class="h-14 w-96 pl-10 pr-20 rounded border-1 z-0 focus:shadow focus:outline-none"
          placeholder="Search anything...">
        <div class="absolute top-2 right-2">

          <button class="icon-btn h-10 w-10 !outline-none" :title="t('button.toggle_dark')">
            <div i="carbon-copy" />
          </button>
        </div>
      </div>

      <TheFooter />

    </div>
  </div>
</template>