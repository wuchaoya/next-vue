import {defineComponent, reactive} from 'vue';
import {useState, StoreProps} from '../store';
import { Input } from '../components';
import router from '../router';

interface HomeProps {

}

const Home = defineComponent({
  
  setup(props: HomeProps, context) {
    
    const store: StoreProps = reactive({...useState()});
    
    const handleChangeAccount = (e) => store.setAccount(e.target.value);
    const handleChangePassword = (e) => store.setPassword(e.target.value);
    
    const handleSignin = () => {
      router.push('/404');
    }
  
    return () => (
      <div >
        <Input value={store.state.account} onChange={handleChangeAccount} placeholder='账号' />
        <Input value={store.state.password} type='password' onChange={handleChangePassword} placeholder='密码' />
        
        <button onClick={handleSignin}>登录</button>
        
      </div>
    )
  }
})

export default Home;
