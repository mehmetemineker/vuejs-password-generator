import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import { createHead } from "@vueuse/head"
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { messages, defaultLocale } from "./i18n";

const head = createHead()

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages,
})

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(head);

app.mount("#app");
