import { onMounted, ref, watchEffect } from 'vue';

export default function useEventListener (eventName: string, handler, element = window) {
  
  const savedHandler = ref();
  
  watchEffect(() => {
    savedHandler.value = handler;
  })

  onMounted(() => {
    
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
  
    const eventListener = event => savedHandler.value(event);
  
    element.addEventListener(eventName, eventListener);
  
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
    
  })

}
