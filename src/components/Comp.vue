<script setup lang='jsx'>
import { ref } from "vue"
const counter = ref(0)
const onclick = () => {
  counter.value++
}
export default {
  setup () {
    return () => (
      <>
        <div>comp</div>
        <p onClick={onclick}>{counter.value}</p>
      </>
    )
  }
}
</script>