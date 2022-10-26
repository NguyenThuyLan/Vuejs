<template>
  <div>
    <h1>Reactivity System</h1>

    <div>Giá trị của state: {{state.count}}</div>
    <div><button @click="increment">Click</button></div>


    <!-- <div>Giá trị của state: {{state2.count}}</div>
    <div><button @click="increment2">Click</button></div> -->

    <!-- <div><button @click="incrementDOM">Click</button></div> -->

    <!-- <div>Giá trị của nested: {{obj.nested.count}}</div>
    <div>Giá trị của mảng nested: {{obj.arr}}</div>
    <div><button @click="mutateDeeply">Click</button></div> -->

    <!-- <div>Giá trị của mảng raw: {{raw}}</div>
    <div><button @click="changeRaw">changeRaw</button></div> -->

    <!-- <div>Giá trị của count: {{count}}</div>
    <div><button @click="changeCount">changeCount</button></div> -->
  </div>
</template>

<script setup>

import { reactive, ref, nextTick } from 'vue';

const state = reactive({count: 0});
function increment() {
      state.count++;
    };
//----------------------------------------------------------------------------------------
const state2 = {count: 0};
function increment2() {
      state2.count++;
      //console.log(state2.count);
    };
//----------------------------------------------------------------------------------------
function incrementDOM() {
  state.count++;
  state.count++;
  nextTick(() => {
    //debugger
    // access updated DOM
  });
};
//----------------------------------------------------------------------------------------
const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
});

function mutateDeeply() {
  obj.nested.count++
  obj.arr.push('baz')
};
//----------------------------------------------------------------------------------------
const raw = reactive({count: 123});
const rawNew = raw;
function changeRaw() {
  raw = "abc";
  //raw.count = "abc";

  //rawNew.count = "xyz";
};
//----------------------------------------------------------------------------------------
const count = ref(0);
//const count2= reactive(0);
function changeCount() {
  count.value++;

  //count.value = "xxxxxxxx";
};
</script>
