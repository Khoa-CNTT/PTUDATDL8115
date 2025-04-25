import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import BlankClient from './layout/wrapper/BlankClient.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("blank-layout", BlankClient);


app.mount("#app")