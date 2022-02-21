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
    'vue/multi-word-component-names': 0 // 解决文件要取多个大写字符命名的问题
  }
}
