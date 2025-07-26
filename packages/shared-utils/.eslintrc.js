module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'prefer-const': 'error'
  },
  ignorePatterns: ['dist/', 'node_modules/']
};