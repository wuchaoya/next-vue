import { defineComponent,reactive } from 'vue';
import {useState} from '../store';

interface Props404 {

}
export default defineComponent({
  
  setup(props: Props404) {
  
    const store = useState();
  
  
    return () => (
      <div>
        {`姓名:${store.name},年龄:${store.age}`}
      </div>
    )
  }
})
