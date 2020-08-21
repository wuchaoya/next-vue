import { computed, inject } from 'vue';
import InstantiationStore,{StorePropsType} from '../store';

export default function useStore() {
  const store = computed(() => InstantiationStore);
  return store;
}


