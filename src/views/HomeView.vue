<script setup lang="ts">
import { ClipboardDocumentIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <main class="pt-16">

    <div class="grid place-items-center">
      <h1 class="text-6xl font-bold mb-3">Password Generator</h1>
      <p class="text-gray-400">Use this tool to instantly create secure, random passwords.</p>

      <div class="relative pt-20 w-2/5">
        <input type="text" readonly
          class="block w-full p-6 pr-20 text-4xl text-gray-900 rounded-t-md bg-zinc-100 outline-0 font-medium	"
          value="deneme" />
        <button type="submit" class="absolute right-2.5 bottom-2.5 p-3 rounded-full">
          <ClipboardDocumentIcon class="h-10 text-black" />
        </button>
      </div>

      <div class="w-2/5 bg-gray-200 rounded-full h-1.5 mb-10">
        <div class="bg-blue-600 h-1.5 rounded-full" style="width: 45%"></div>
      </div>

      <div class="w-1/4 mb-6">
        <input type="range" min="0" max="24" value="5"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
      </div>

      <div class="flex mb-14">
        <div class="flex items-center mr-4">
          <input id="checkbox-lowercase" type="checkbox" value="" class="w-6 h-6">
          <label for="checkbox-lowercase"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lowercase</label>
        </div>
        <div class="flex items-center mr-4">
          <input id="checkbox-uppercase" type="checkbox" value="" class="w-6 h-6">
          <label for="checkbox-uppercase"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Uppercase</label>
        </div>
        <div class="flex items-center mr-4">
          <input id="checkbox-numbers" type="checkbox" value="" class="w-6 h-6">
          <label for="checkbox-numbers"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numbers</label>
        </div>
        <div class="flex items-center mr-4">
          <input id="checkbox-symbols" type="checkbox" value="" class="w-6 h-6">
          <label for="checkbox-symbols"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Symbols</label>
        </div>
      </div>

      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Generate
        Password</button>
    </div>

  </main>
</template>
