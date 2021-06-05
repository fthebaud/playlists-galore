module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    quotes: ['error', 'single', 'avoid-escape'], // prevent the use of backtick when it's not necessary

    /* **************
     * PLUGIN RULES
     *************** */

    // typescript
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // import
    'import/extensions': ['error', 'never'],
    'import/no-duplicates': 'error',

    // react
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
};
