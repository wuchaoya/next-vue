import { createApp } from 'vue';
import App from './App';
import router from './router';
import './index.css';
import InstantiationStore,{stateSymbol} from './store';


export const app = createApp(App);

app.provide(stateSymbol, InstantiationStore);

app.use(router)

router.isReady().then(() => app.mount('#app'))
