const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'

module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
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
