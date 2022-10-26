<template>
  <div>
    <h1>Computed và watcher</h1>

    <p><strong>Câu hỏi:</strong> {{author.name}} đã có số sách nhiều hơn 0 bao gồm: <span>{{author.books}} phải không?</span></p>
    <span><b>Câu trả lời</b>: {{ author.books.length > 0 ? 'Đúng' : 'Không' }}</span>

    <!-- <div v-if="isShow">
        <span>{{ publishedBooksMessage }}</span>
        <span>{{ calculateBooksMessage() }}</span>
    </div> -->
    

    <!---------------------------------------------->
    <!-- <button @click="addBook">Thêm sách</button>
    <button @click="toogle">Toggle</button> -->

    <!-------------------------------------------------------------------------------------Watcher --------------------------------------------------------------------------->
    <!-- <div>Tọa độ của x = {{x}}, tọa độ của y = {{y}}</div>
    <button @click="changexy">Đổi tọa độ</button> -->
  </div>
</template>

<script setup>

import { reactive,ref, computed, watch, watchEffect } from 'vue';

const author = reactive({
  name: 'Hoa',
  books: [
    'Vue 2',
    'Vue 3',
    'Vue 4'
  ]
});

//-------------------------------------------------------------------------
const publishedBooksMessage = computed(() => {
    //debugger
  return author.books.length > 0 ? 'Đúng' : 'Sai'
})
//-------------------------------------------------------------------------
function calculateBooksMessage() {
    //debugger
  return author.books.length > 0 ? 'Đúng' : 'Sai'
}
//-------------------------------------------------------------------------
let count = 5;
function addBook(){
    author.books.push('Vue  '+count);
}
//-------------------------------------------------------------------------
const isShow = ref(true);
function toogle(){
    isShow.value = isShow.value == true ? false : true;
}

//-------------------------------------------------------------------------Watcher------------------------------------------------------------------------
const x = ref(0);
const y = ref(0);

function changexy(){
    x.value ++;
    y.value ++;
};

// single ref
// watch(x, (newX) => {
//   console.log(`x is ${newX}`)
// })

//--------------------------------------------------------------------------
// getter
// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum of x + y is: ${sum}`)
//   }
// )

//--------------------------------------------------------------------------
// array of multiple sources
// watch([x, () => y.value + 1], ([newX, newY]) => {
//   console.log(`x is ${newX} and y is ${newY}`)
// });
//--------------------------------------------------------------------------
// const obj = reactive({ count: 0 })

// watch(obj.count, (count) => {
//   console.log(`count is: ${count}`)
// });
//--------------------------------------------------------------------------
// watchEffect(() => {
//   console.log(`x is ${x.value}`)
// })
</script>
