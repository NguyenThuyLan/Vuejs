<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="isShow">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <!-- <div><button @click="toggle">Toggle</button></div> -->
    

    <h2>{{text}}</h2>
    <div><button @click="changeText">Click</button></div>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, onMounted, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup(){

    const viewName = "Home page view";
    const text = ref("Chúc bạn một ngày tốt lành!");
    let count = 1;
    const isShow = ref(true);

    console.log("Step1 (Setup): Khởi tạo dữ liệu cho trang "+ viewName);
    //debugger

    //thay đổi text (test update / before updade)
    function changeText(){
      text.value = "Chào buổi chiều lần " + (count ++ ); 
    };

    //ẩn
    function toggle(){
      isShow.value = isShow.value == true ? false : true;
    };

    // onMounted(() => {
    //   console.log("onmounted trong setup")
    // });

    return{
      text,
      changeText,
      isShow,
      toggle
    }

  },

  // beforeCreate(){
  //   //debugger
  //   console.log("Step2 (beforeCreate)");
  // },

  // created(){
  //   //debugger
  //   console.log("Step3 (created)");
  // },

  // beforeMount(){
  //   //debugger
  //   console.log("Step4 (beforeMount)");
  // },
  
  // mounted(){
  //   //debugger
  //   console.log("Step5 (mounted)");
  // },

  // beforeUpdate(){
  //   //debugger
  //   console.log("Step6 (beforeUpdate)");
  // },

  // updated(){
  //   //debugger
  //   console.log("Step6 (updated)");
  // },
  
  // beforeUnmount(){
  //   console.log("Step7 (beforeUnmount)");
  // }
});
</script>
