module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  // plugins: [
  //   'promise'
  // ],
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    '@typescript-eslint/no-explicit-any': [1, {
      fixToUnknown: false,
      ignoreRestArgs: true
    }],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': [1, {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true
    }]
  }
}
