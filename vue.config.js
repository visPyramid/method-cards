module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/method-cards/'
  : '/',
  devServer: {
    host: "localhost"
  },
  transpileDependencies: [
    'vuetify'
  ]
}
