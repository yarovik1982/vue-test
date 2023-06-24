import { createApp } from 'vue'
import App from './App.vue'
// import components from '@/components/UI/'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

// components.forEach(component => {
//    app.component(component.name, component)
// })

app.mount('#app')
