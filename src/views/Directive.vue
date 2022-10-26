<template>
  <div>
    <h1>Directive</h1>

    <!----------------------------------------V-if/ V-show------------------------------------------------------>
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Chúc bạn học vui vẻ!</h1>
    <h1 v-else>Bài học lâu quá!</h1>
    
    <h3 v-show="!awesome">Dòng DOM này luôn render</h3>

    <!----------------------------------------V-for------------------------------------------------------>
    <!-- <div class="wrap">
        <ul>
            <li v-for="item in items">
            {{ item.message }}
            </li>
        </ul>

        <ul>
            <li v-for="(item, index) in items">
            {{ index }} - {{ item.message }}
            </li>
        </ul>

        <ul>
            <li v-for="value in myObject">
                {{ value }}
            </li>

             <li v-for="(value, key) in myObject">
            {{ key }}: {{ value }}
            </li>

            <li v-for="(value, key, index) in myObject">
            {{ index }}. {{ key }}: {{ value }}
            </li>

        </ul>

    </div>
     -->
    <!----------------------------------------V-model------------------------------------------------------>
    <!-- <div>Xin chào {{text}}</div>
    <input
    :value="text"
    @input="event => text = event.target.value">

    <input v-model="text">

    <div>
        <select v-model="text">
            <option>Hoa</option>
            <option>Hùng</option>
            <option>Cường</option>
        </select>
    </div> -->

    <!----------------------------------------Event------------------------------------------------------>
    <!-- <button @click="say('hello')">Say hello</button>

    <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
    </button> -->

  </div>
</template>

<script setup>

import { reactive,ref } from 'vue';

const awesome = ref(true);
//---------------------------------------

const items = ref([{ message: 'Táo' }, { message: 'Chuối' }])

const myObject = reactive({
  title: 'VueJS cơ bản',
  author: 'Hoa',
  publishedAt: '2016-04-10'
})
//---------------------------------------
const text = ref("Thùy Lan");

//--------------------------------------
function say(message){
    alert(message);
}

function warn(message, event) {

  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>


<style scoped>
.wrap{
    text-align: left;
}
</style>
