import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from 'vue-i18n'

import App from "./App.vue";

import router from "./router";

import "./assets/main.css";

import { messages, defaultLocale } from "./i18n";

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages,
})

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
