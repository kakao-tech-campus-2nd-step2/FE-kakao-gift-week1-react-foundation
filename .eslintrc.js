module.exports = {
  "env" : {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": ['airbnb', 'plugin:storybook/recommended'],
  "rules": {
    'react/jsx-one-expression-per-line': 'off',
    "react/jsx-filename-extension":["warn",{"extensions":[".tsx"]}],
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "**/*.stories.*",
            "**/.storybook/**/*.*"
          ],
          "peerDependencies": true
        }
      ]
  },
  "settings": {
    "import/resolver" : {
      "typescript": {
        "directory": "./src",
        "alias": {
          "@/components": "./src/components/*",
          "@/styles": "./src/styles/*"
        }
      }
    }
  }
};

