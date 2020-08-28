import {watchEffect} from 'vue';

export default function useLockBodyScroll() {
  
  watchEffect(
    (onInvalidate) => {
      
      const originalStyle = window.getComputedStyle(document.body).overflow;
  
      document.body.style.overflow = 'hidden';
  
      onInvalidate(() => {
        document.body.style.overflow = originalStyle;
      })
  
    },
    {
      flush: 'sync',
    }
  )
  
}
