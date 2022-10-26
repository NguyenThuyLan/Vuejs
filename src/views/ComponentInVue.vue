<template>
  <div>
    <h1>Components trong Vue</h1>

    <MyButton type="success">success</MyButton>
    
  </div>
</template>

<script>
import { defineComponent} from '@vue/runtime-core'
import MyButton from '@/components/MyButton.vue';
export default defineComponent({
  
  components: {
    MyButton
  },
});
</script>
