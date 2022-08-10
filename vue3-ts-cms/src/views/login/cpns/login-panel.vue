<template>
  <!-- 登录面板 -->
  <div class="root">
    <!-- 登录框 -->
    <div class="container">
      <el-tabs
        v-model="currentTab"
        model-value="account"
        class="demo-tabs"
        @tab-click="handleClick"
        id="eltabs"
      >
        <el-tab-pane label="账户登录" name="account">
          <login-account ref="accountRef"></login-account>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <login-phone ref="phoneRef"></login-phone>
        </el-tab-pane>
      </el-tabs>
      <div class="bottom">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button
        type="primary"
        class="submit"
        @click="handleLoginClick"
        id="submitbtn"
      >
        立即登录
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginAccount>>()
    const currentTab = ref('account')
    // 获取对象类型的方法，使用这种方法可以拿到LoginAccount导出的类型
    // 拿到组件对象，将其绑定到login-account上
    // 2.定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('phoneRef调用loginAction')
      }
      // 定义accountRef没有传值，所以默认有可能为空，所以用可选链
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      currentTab,
      phoneRef
    }
  }
})
</script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
/* 登录框样式 */

.container {
  width: 400px;
  height: 350px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
#eltabs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#submitbtn {
  width: 250px;
  margin-top: -40px;
}
.bottom {
  width: 230px;
  display: flex;
  justify-content: space-between;
  margin-top: -50px;
}
</style>
