const path = require('path');
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { 
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ]
};
