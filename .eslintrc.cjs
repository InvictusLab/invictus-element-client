/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    // Vue语法的ESLint插件
    'plugin:vue/vue3-recommended',
    // 继承Vue官方提供的ESLint标准配置，ESLint+TypeScript、Lint+Vue、Lint三个插件的集合与配置
    '@vue/eslint-config-standard-with-typescript',
    // 继承Vue官方提供的ESLintPrettier标准配置
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
