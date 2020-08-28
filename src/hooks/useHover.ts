/**
 * 检测鼠标是否将鼠标悬停在元素上
 */
import {ref,  watchEffect} from 'vue';

export default function useHover() {
  
  const state = ref(false);
  
  const refDom = ref(null);
  
  const handleMouseOver = () => state.value = true;
  
  const handleMouseOut = () => state.value = false;
  
  watchEffect((onInvalidate) => {
    
    const node: any = refDom.value;
  
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      onInvalidate(() => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      })
    }
    
  })
  
  return [refDom, state]
  
}
