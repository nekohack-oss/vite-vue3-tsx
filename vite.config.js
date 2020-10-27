const path = require('path')

const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr)
}

module.exports = {
  outDir: 'out',
  alias: {
    '/@/': pathResolve('./src')
  }
}
