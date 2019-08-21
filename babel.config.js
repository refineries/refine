require('./global')

module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false,
      },
    ],
  ],
  plugins: [__DEV__ && 'react-hot-loader/babel'].filter(Boolean),
}
