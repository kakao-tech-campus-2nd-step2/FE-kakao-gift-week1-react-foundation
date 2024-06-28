module.exports = {
  languageOptions: {
    globals: {
      browser: true,
      es6: true,
      node: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-nested-ternary": 0,
    "import/extensions": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-undef": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
};
