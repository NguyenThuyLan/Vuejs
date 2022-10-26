<template>
  <button 
        class="normal"
        :class="type"
        @click="callback($event)"
      >
        <slot></slot>
    </button>
</template>

<script>
import { defineComponent} from '@vue/runtime-core'
export default defineComponent({
    props: {
        type: String
    },
    methods: {
        callback: function(e) {
        this.$emit('click', e);
        }
    }

});
    
</script>

<style lang="scss" scoped>
    button {
        padding: 10px 20px;
        border: 1px solid #ddd;
        color: #333;
        background-color:#fff;
        border-radius: 4px;
        font-size: 14px;
        font-family: '微软雅黑',arail;
        cursor: pointer;
    &.danger {
        background-color: #ff4949;
        color: #fff;
    }
    &.success {
        background-color: #13ce66;
        color: #fff;
    }
    &.info {
        background-color: #50bfff;
        color: #fff;
    }
}
</style>
