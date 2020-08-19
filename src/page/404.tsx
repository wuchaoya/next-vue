import { defineComponent,reactive } from 'vue';
import {StoreProps, useState} from '../store';

interface Props404 {

}
export default defineComponent({
  
  setup(props: Props404) {
  
    const userInfo: StoreProps = reactive({...useState()});
  
    return () => (
      <div>
        {`账号:${userInfo.state.account},密码:${userInfo.state.password}`}
      </div>
    )
  }
})
