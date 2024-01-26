module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'unused-imports'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    eqeqeq: 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-vars': [
      'off',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-native/no-inline-styles': 0,
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'react/no-unstable-nested-components': [
      'off' | 'warn' | 'error',
      {
        allowAsProps: true | false,
        customValidators: [] /* optional array of validators used for propTypes validation */,
      },
    ],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'always'],
  },
  ignorePatterns: ['.*.js', 'metro.config.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
