module.exports = {
  devServer: {
    disableHostCheck: true
  },
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  }
}
