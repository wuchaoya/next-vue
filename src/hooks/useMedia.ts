import { watchEffect,UnwrapRef } from 'vue';
import useState from './useState';

const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
  
  const mediaQueryLists = queries.map(q => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
  
    return values?.[index] || defaultValue
    
  };
  
  const [state, setState] = useState<any>(getValue());
  
  watchEffect(() => {
  
    const handler = () => setState(getValue());
  
    mediaQueryLists.forEach(mql => mql.addListener(handler));
  
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    
  })
  
  return state;
  
}
