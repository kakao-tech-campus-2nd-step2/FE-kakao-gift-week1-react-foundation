import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "webpackFinal": config => {
    return {
      ...config,
      plugins: config.plugins.filter(plugin => {
        if (plugin.constructor.name === 'ESLintWebpackPlugin') {
          return false
        }
        return true
      }),
    }
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;