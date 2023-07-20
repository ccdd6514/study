 
import { ref,defineComponent } from 'vue'

 
const renderDom = defineComponent({
  setup() {

    const flag = ref(true)
    return () => (<div v-show={ flag.value }>testxy</div>)
  }
})
 
export default renderDom