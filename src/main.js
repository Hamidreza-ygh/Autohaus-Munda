import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import veeValidatePlugin from './includes/validation'

import './assets/tailwind.css'
import ElementPlus from "element-plus";
// import 'element-plus/dist/index.css';

const app = createApp(App);

// new WaveUI(app, {
//   // Some Wave UI options.
// });

app.use(store).use(ElementPlus).use(router).use(veeValidatePlugin).mount("#app");

// createApp(App).use(store).use(router).mount('#app')
