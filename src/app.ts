import type { App } from 'vue'
// import 'uno.css' // Not required for astro unocss integration
import '@/assets/css/tailwind.css'
import 'prismjs/themes/prism-tomorrow.css'

import pinia from '@/plugins/pinia'
import head from '@/plugins/head'

export default (app: App) => {
  app.use(pinia)
  app.use(head)
}
