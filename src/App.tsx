import { defineComponent } from 'vue';
import { RouterView, RouterLink } from "vue-router"
interface APPProps {

}
const APP = defineComponent({
  
  setup(props: APPProps) {
    return () => (
      <div>
        <RouterLink  to={{ name: 'home' }}>
        home
       </RouterLink>
        |
        <RouterLink  to={{ name: '404' }}>
          404
        </RouterLink>
        <RouterView />
      </div>
    )
  }
  
})

export default APP
