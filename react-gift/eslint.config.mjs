import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import prettier from "eslint-plugin-prettier";
import airbnb from "eslint-config-airbnb";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReactConfig,
      reactHooks: require("eslint-plugin-react-hooks"),
      ts: tseslint,
      jsxA11y: require("eslint-plugin-jsx-a11y"),
      import: require("eslint-plugin-import"),
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "import/no-unresolved": "off",
      "import/extensions": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  airbnb,
  prettier.configs.recommended,
];
