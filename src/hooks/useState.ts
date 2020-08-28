import {ref, computed, Ref, UnwrapRef} from 'vue';

export type UseStateProps = <T>(v:T) => [Ref<UnwrapRef<T>>, (value: UnwrapRef<T>) => void]

const useState: UseStateProps = <T>(v: T) => {
  
  const count:  Ref<UnwrapRef<T>> = ref(v);
  
  const setValue = function (value){
    count.value = value;
  }
  
  const state = computed({
    get: () => count.value,
    set: setValue
  })
  
  const validator = {
    get: function(obj, prop) {
      return prop in obj ? obj[prop] : undefined;
    },
    set: function() {
      return true
    }
  };
  
  const externalState = new Proxy(Object.freeze(state),validator)
  
  return [externalState, setValue]
  
}

export default useState;
