import { createApp } from 'vue'
import App from '@/App.vue'
import PlatformTop from '@/components/platform_top/index.vue'

const app = createApp(App)

app.component('PlatformTop', PlatformTop)

app.mount('#app')
