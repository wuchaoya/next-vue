import {defineComponent} from 'vue';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

const TestUseEventListener = defineComponent({
  
  setup() {
  
    const styles = {
      position: 'fixed',
      height: '10vh',
      width: '10vw',
      background: '#000',
      color: '#fff',
      overflow: 'scroll'
    }
  
    useLockBodyScroll()
    
    return () => (
      <div style={{height: '100vh', width: '100%', backgroundColor: 'red',position: 'fixed',}}>
        <div style={styles}>
    
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
          <p>测试</p>
  
        </div>
      </div>
    )
   
  }
})

export default TestUseEventListener;
