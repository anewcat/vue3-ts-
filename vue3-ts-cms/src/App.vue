<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-button.css'
export default defineComponent({
  // 使用defineComponent函数会对对象进行类型的推导
  name: 'App'
})
</script>

<style lang="less"></style>
