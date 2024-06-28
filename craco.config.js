const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: '.',
        aliases: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    }
  ]
}