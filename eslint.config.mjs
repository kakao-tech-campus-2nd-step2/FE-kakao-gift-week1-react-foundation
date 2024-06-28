import { Linter } from 'eslint';

const config = /** @type {Linter.Config} */ ({
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
    ],
    parserOptions: {
        project: './tsconfig.json'
    }
});

export default config;