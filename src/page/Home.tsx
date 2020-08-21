import {defineComponent, reactive} from 'vue';
import { Input } from '../components';
import router from '../router';
import {useState, StorePropsType} from '../store';

interface HomeProps {

}

const Home = defineComponent({
  
  setup(props: HomeProps, context) {
    
    const store = useState();
    
    const handlePush = () => {
      store.setProperty({name: 'li',age: 10})
      router.push('/404');
    }
  
    return () => (
      <div >
        {`姓名:${store.name},年龄:${store.age}`}
        <button onClick={handlePush}>跳转</button>
        
      </div>
    )
  }
})

export default Home;
