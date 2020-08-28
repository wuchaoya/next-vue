import {ref, computed, Ref, UnwrapRef} from 'vue';

export type UseStateProps = <T>(v:T) => [Ref<UnwrapRef<T>>, (value: UnwrapRef<T>) => void]

const useState: UseStateProps = <T>(v: T) => {
  
  const count:  Ref<UnwrapRef<T>> = ref(v);
  
  const state = computed({
    get: () => count.value,
    set: (value: UnwrapRef<T>) => count.value = value
  })
  
  const setValue = (value) =>  state.value = value;
  
  return [state, setValue]
  
}

export default useState;
