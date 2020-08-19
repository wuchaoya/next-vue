import { defineComponent } from 'vue';
import { InputProps } from './Props';
import './style/index.less';

const Input = defineComponent({
  
  setup(props: InputProps) {
    return () => (
      <input class='input-style' {...props} />
    )
  }
  
})

export default Input;
