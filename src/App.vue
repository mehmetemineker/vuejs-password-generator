<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t("app-name"),
  meta: [
    { name: 'description', content: t("slogan") },

  ],
})
</script>

<template>
  <RouterView />
</template>