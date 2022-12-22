<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { computed, onMounted, ref, watch } from 'vue'
import { ClipboardDocumentIcon, CheckIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import passwordMeter from "vue-simple-password-meter"
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isDark = useDark();
const toggleDark = useToggle(isDark);

const isCheckedUppercase = ref(true)
const isCheckedLowercase = ref(true)
const isCheckedNumbers = ref(true)
const isCheckedSymbols = ref(true)
const passwordLength = ref(8)
const password = ref("")
const isVisibleToast = ref(false)

const uppercases = "abcdefghijklmnopqrstuvwxyz"
const lowercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const sympbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

const characters = computed(() => {
  let characters = ""

  if (isCheckedUppercase.value) {
    characters += uppercases
  }

  if (isCheckedLowercase.value) {
    characters += lowercases
  }

  if (isCheckedNumbers.value) {
    characters += numbers
  }

  if (isCheckedSymbols.value) {
    characters += sympbols
  }

  return characters
})

const generate = () => {
  let generatedPassword = ""

  for (let i = 0; i < passwordLength.value; i++) {
    generatedPassword += characters.value.charAt(Math.floor(Math.random() * characters.value.length))
  }

  password.value = generatedPassword
}

const copy = () => {
  if (password.value) {
    navigator.clipboard.writeText(password.value)
    showToast()
  }
}

const showToast = () => {
  isVisibleToast.value = true

  setTimeout(() => {
    isVisibleToast.value = false
  }, 3000);
}

watch([passwordLength, characters], () => {
  generate()
})

onMounted(() => {
  generate()

})
</script>

<template>
  <main class="pt-8 md:pt-16 flex justify-center">
    <div class="bg-resdd-300 mx-6 text-center text-gray-700 dark:text-gray-300">
      <h1 class="text-4xl md:text-6xl font-bold mb-3">{{ t("app-name") }}</h1>
      <p class="text-sm md:text-lg text-gray-400 dark:text-gray-500">{{ t("slogan") }}</p>

      <div class="relative mt-10 md:mt-20">
        <input type="text" readonly
          class="block w-full p-6 pr-20 text-3xl md:text-4xl rounded-t-md bg-gray-100 outline-0 border-none focus:ring-0 focus:border-none font-medium dark:bg-gray-700"
          v-model="password" ref="input" @focus="($refs.input as any).select()" />

        <button type="submit" class="absolute right-2.5 bottom-2.5 p-3 rounded-full" @click="copy">
          <ClipboardDocumentIcon class="h-10" />
        </button>
      </div>

      <div class="bg-gray-200 dark:bg-gray-600 rounded-b h-1.5 mb-10">
        <password-meter :password="password" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 ">
        <div>
          <span class="text-sm font-semibold">
            {{ passwordLength }}
          </span>
          <input type="range" min="1" max="24" v-model="passwordLength"
            class="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer dark:bg-gray-700">
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-lowercase" type="checkbox" v-model="isCheckedUppercase"
                class="w-6 h-6 text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-lowercase" class="ml-2 text-sm font-medium  dark:text-gray-300">{{ t("lowercase")
              }}</label>
            </div>
          </div>
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-uppercase" type="checkbox" v-model="isCheckedLowercase"
                class="w-6 h-6 text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-uppercase" class="ml-2 text-sm font-medium dark:text-gray-300">{{ t("uppercase")
              }}</label>
            </div>
          </div>
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-numbers" type="checkbox" v-model="isCheckedNumbers"
                class="w-6 h-6 text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-numbers" class="ml-2 text-sm font-medium dark:text-gray-300">{{ t("numbers")
              }}</label>
            </div>
          </div>
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-symbols" type="checkbox" v-model="isCheckedSymbols"
                class="w-6 h-6 text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-symbols" class="ml-2 text-sm font-medium dark:text-gray-300">{{ t("symbols")
              }}</label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button @click="generate"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2">{{
              t("button-generate")
          }}</button>
      </div>

      <div>
        <button type="submit" class="p-3 rounded-full" @click="toggleDark()">
          <SunIcon class="h-6" v-if="isDark" />
          <MoonIcon class="h-6" v-else="isDark" />
        </button>
      </div>
      
      <p class="text-xs text-gray-400 dark:text-slate-600">Version 1.0</p>
    </div>
  </main>

  <Transition>
    <div class="fixed inset-0 flex items-start justify-end px-4 py-6 pointer-events-none " v-if="isVisibleToast">
      <div
        class="flex items-center p-4 w-full max-w-sm text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert">
        <div
          class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-600 dark:text-green-200">
          <CheckIcon class="h-5" />
        </div>
        <div class="ml-3 text-sm font-normal">{{ t("copy-message") }}</div>
      </div>
    </div>
  </Transition>
</template>
