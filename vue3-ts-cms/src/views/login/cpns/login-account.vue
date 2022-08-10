<template>
  <div>
    <form>
      <div class="inputBox">
        <!-- account永远告诉el-form使其能拿最新的值 -->
        <el-form :rules="rules" :model="account" ref="formRef">
          <!-- 通过:rules="rules来绑定规则" -->
          <el-form-item label="账号" prop="name" class="elformitem">
            <el-input v-model="account.name" placeholder="账号" />
          </el-form-item>
          <el-form-item label="密码" prop="password" class="elformitem">
            <el-input
              v-model="account.password"
              placeholder="密码"
              type="password"
            />
          </el-form-item>
          <!-- 通过prop来绑定具体使用哪个验证规则 -->
        </el-form>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
// 为了使用ElForm类型所以要导入
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存localstorage
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
.elformitem {
  margin-top: 40px;
}
</style>
