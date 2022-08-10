// 编写好rules
export const rules = {
  // 每一项验证可能不止一个，所以要写成 数组形式
  phonenum: [
    {
      // required表示必传，message是不传会显示的内容，trigger(触发)：blur表示失去焦点时会做验证，change表示只要修改就会进行验证
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9] {11}$/, //正则表达式
      message: '请输入11位手机号',
      trigger: 'blur'
    }
  ],
  hhh: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '验证码错误',
      trigger: 'blur'
    }
  ]
}
