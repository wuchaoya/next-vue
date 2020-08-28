import {defineComponent} from 'vue';
import useState from '../hooks/useState';

const TestUseEventListener = defineComponent({
  
  setup() {
  
  
    const [state, setState] = useState<number>(0);
  
    setState(2)
    state.value = 10
    console.log(state.value)
    console.log(Object.isFrozen(state));
    console.log(Object.isSealed(state));
    return {
      state
    }
  
  }
})

export default TestUseEventListener;
