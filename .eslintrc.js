module.exports = {
  // 限制 eslint 为根目录
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],
  // eslint 启用的环境
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': [2, 'never'],
    'space-before-function-paren': 'off', // 解决 eslint 和 prettier 的空格冲突问题
    'vue/multi-word-component-names': 0, // 解决文件要取多个大写字符命名的问题
    'vue/max-attributes-per-line': 0, // 一行可写多个属性
    'vue/singleline-html-element-content-newline': 0, // 一行可有多个html元素
    'vue/require-prop-types': 0, // props接收的属性不需要声明type
    'vue/html-self-closing': 0 // html元素可以使用/关闭
  }
}
