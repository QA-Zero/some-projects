import { createApp } from 'vue'
import { createI18n } from 'vue-i18n/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import enLocale from 'element-plus/lib/locale/lang/en'
import ruLocale from 'element-plus/lib/locale/lang/ru'
import uaLocale from 'element-plus/lib/locale/lang/uk'
import enLang from './lang/en'
import ruLang from './lang/ru'
import uaLang from './lang/ua'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      ...enLang,
      ...enLocale
    },
    ua: {
      ...uaLang,
      ...uaLocale
    },
    ru: {
      ...ruLang,
      ...ruLocale
    },
  },
})

const app = createApp(App);

app.config.globalProperties.$locale = {
  change(language) {
    i18n.global.locale = language
  },
  current() {
    return i18n.global.locale
  },
}

app.use(ElementPlus)
app.use(i18n)

app.mount('#app');
