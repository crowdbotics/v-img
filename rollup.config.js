import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import istanbul from 'rollup-plugin-istanbul'

const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies)

export default {
  input: 'lib/index.js',
  plugins: [
    vue({
      css: true
    }),
    babel(babelrc()),
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    })
  ],
  external,
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'vue-img',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ]
}
