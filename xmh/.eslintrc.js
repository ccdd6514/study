module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 0,
    'no-extend-native': 'off',
    'no-prototype-builtins': 'off',
    'prefer-promise-reject-errors': 'off',
    'func-call-spacing': 'off',
    'no-unexpected-multiline': 'off'
  }
}
