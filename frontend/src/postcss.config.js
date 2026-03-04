export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      unitPrecision: 5,
      minPixelValue: 2,
    }
  }
}