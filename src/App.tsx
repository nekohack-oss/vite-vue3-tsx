import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src="@/assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Vite" />
      </>
    )
  }
})
