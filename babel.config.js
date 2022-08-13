module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: '.',
          alias: {
            '@components': './components',
            '@screens': './screens',
            '@navigation': './navigation',
            '@api': './api',
            '@auth': './auth',
            '@utils': './utils'
          }
        }
      ]
    ]
  }
}
