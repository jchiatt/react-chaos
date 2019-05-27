module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactChaos',
      externals: {
        react: 'React'
      }
    }
  }
}
