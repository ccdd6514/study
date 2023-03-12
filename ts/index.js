let rules = [
  {
      "type": "email",
      "message": "邮箱格式不正确",
      "trigger": "blur"
  },
  {
      "required": true,
      "message": "邮箱不能为空",
      "trigger": "blur"
  }
]
let isRequired
rules.every((rule) => {
  console.log(rule);
  // 如果当前校验规则中有必填项，则标记出来
  isRequired = rule.required;
});