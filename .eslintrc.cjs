module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'operator-linebreak': ['error', 'before'],
    'max-depth': ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
