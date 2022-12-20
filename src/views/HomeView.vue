<script setup lang="ts">
import { ClipboardDocumentIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <main class="pt-16 flex justify-center">
    <div class="bg-ressd-300 w-2/5 text-center text-gray-700">
      <h1 class="text-6xl font-bold mb-3">Password Generator</h1>
      <p class="text-gray-400">For fast, practical and more secure passwords.</p>

      <div class="relative pt-20">
        <input type="text" readonly
          class="block w-full p-6 pr-20 text-4xl rounded-t-md bg-gray-100 outline-0 border-none focus:ring-0 focus:border-none font-medium	"
          value="deneme" />

        <button type="submit" class="absolute right-2.5 bottom-2.5 p-3 rounded-full">
          <ClipboardDocumentIcon class="h-10" />
        </button>
      </div>

      <div class="bg-gray-200 rounded-full h-1.5 mb-10">
        <div class="bg-primary-600 h-1.5 rounded-full" style="width: 45%"></div>
      </div>


      <div class="grid grid-cols-2 gap-6 mb-20 ">
        <div>
          <span class="text-sm font-semibold">
            30
          </span>
          <input type="range" min="0" max="24" value="5"
            class="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer">
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-lowercase" type="checkbox" value=""
                class="w-6 h-6 text-primary-600 focus:ring-primary-600">
              <label for="checkbox-lowercase" class="ml-2 text-sm font-medium  dark:text-gray-300">Lowercase</label>
            </div>
          </div>
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-uppercase" type="checkbox" value=""
                class="w-6 h-6 text-primary-600 focus:ring-primary-600">
              <label for="checkbox-uppercase" class="ml-2 text-sm font-medium dark:text-gray-300">Uppercase</label>
            </div>
          </div>
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-numbers" type="checkbox" value=""
                class="w-6 h-6 text-primary-600 focus:ring-primary-600">
              <label for="checkbox-numbers" class="ml-2 text-sm font-medium dark:text-gray-300">Numbers</label>
            </div>
          </div>
          <div>
            <div class="flex items-center mr-4">
              <input id="checkbox-symbols" type="checkbox" value=""
                class="w-6 h-6 text-primary-600 focus:ring-primary-600">
              <label for="checkbox-symbols" class="ml-2 text-sm font-medium dark:text-gray-300">Symbols</label>
            </div>
          </div>
        </div>
      </div>

      <button
        class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-8 py-3.5 mr-2 mb-2">Generate
        and Copy</button>
    </div>

  </main>

  <footer
    class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/"
        class="hover:underline">Password Generator</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
      </li>
      <li>
        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
      </li>
      <li>
        <a href="#" class="hover:underline">Contact</a>
      </li>
    </ul>
  </footer>
</template>
