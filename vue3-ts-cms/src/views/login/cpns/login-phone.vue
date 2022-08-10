<template>
  <div>
    <form>
      <div class="inputBox">
        <!-- account永远告诉el-form使其能拿最新的值 -->
        <el-form :rules="rules" :model="phone">
          <!-- 通过:rules="rules来绑定规则" -->
          <el-form-item label="手机号" prop="num" class="elformitem">
            <el-input v-model="phone.num" placeholder="手机号" />
          </el-form-item>
          <div class="elformitem aa">
            <el-form-item label="验证码" prop="code">
              <el-input v-model="phone.code" placeholder="验证码" class="yzm" />
            </el-form-item>
            <!-- 通过prop来绑定具体使用哪个验证规则 -->
            <el-button
              type="primary"
              class="submit"
              @click="handleLoginClick"
              id="yzmbtn"
            >
              获取验证码
            </el-button>
          </div>
        </el-form>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped>
.elformitem {
  margin-top: 40px;
}
.yzm {
  width: 100px;
}
.aa {
  display: flex;
  justify-content: space-between;
}
#yzmbtn {
  width: 85px;
}
</style>
