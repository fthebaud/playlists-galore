module.exports = {
  env: {
    browser: true,
    es2021: true,
    serviceworker: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['sw.js'],
      rules: {
        'no-restricted-globals': 'off',
        'no-console': 'off',
      },
    },
  ],
};
