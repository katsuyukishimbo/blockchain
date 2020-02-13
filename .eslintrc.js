module.exports = {
    env: {
      browser: false,
      es6: true
    },
    extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    rules: {},
    env: {
      node: true,
      es6: true,
      jest: true
    }
  }