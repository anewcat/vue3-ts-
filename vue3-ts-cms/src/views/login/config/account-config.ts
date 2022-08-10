// 编写好rules
export const rules = {
  // 每一项验证可能不止一个，所以要写成 数组形式
  name: [
    {
      // required表示必传，message是不传会显示的内容，trigger(触发)：blur表示失去焦点时会做验证，change表示只要修改就会进行验证
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/, //正则表达式
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是三位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
