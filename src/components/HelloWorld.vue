<template>
  <div class="hello">
    <h1>{{helltext}}</h1>
  </div>
</template>

<script setup>
const { onUnmounted, onBeforeUnmount }=require("@vue/runtime-core");

const helltext = "Chào mừng đến với buổi học Vuejs.";

// onBeforeUnmount(() =>{
//   debugger
// console.log("Step7 (beforeUnmount)");
// });

// onUnmounted(() =>{
//   debugger
// console.log("Step8 (onUnmounted)");
// });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
