// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不检查分号
    'semi': 0,
    // 不检查文件末尾空行
    'eol-last': 0,
    // 缩进检查
    'indent': 0,
    // 没有参数的方法括号前不需要空格
    "space-before-function-paren": ["error", "never"],
    // 关闭多行空行报错检测
    "no-multiple-empty-lines": 0,
    // 单双引号
    "quotes": 0,
    //
    "no-trailing-spaces": 0,
    // 关闭 promise 参数名必须是 resolve, reject 的检测
    "promise/param-names": 0,
    // 可以使用下划线的变量名, 如 _id
    "vue/no-reservered-keys": 0
  },
  globals: {
    '$': true
  }
}
