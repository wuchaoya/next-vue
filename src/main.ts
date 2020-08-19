import { createApp } from 'vue';
import App from './App';
import router from './router';
import { stateSymbol, createState } from './store';
import './index.css';

const app = createApp(App);

app.provide(stateSymbol, createState());

app.use(router)

router.isReady().then(() => app.mount('#app'))
