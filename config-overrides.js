const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
   addWebpackAlias({
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/models'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
   }),
)
