const webpack = require('../lib/index.js')
const config = require('./webpack.config.js')

const compiler = webpack(config)

compiler.run((err, stats) => {
  if (err) {
    config.error('webpack error====>', err)
  } else {
    console.log(stats)
  }
})
