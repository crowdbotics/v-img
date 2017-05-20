import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'lib/index.js',
  plugins: [
    vue({
      css: true,
    }),
    babel(babelrc()),
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*'],
    }),
  ],
  external: external,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'vue-img',
      sourceMap: true,
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true,
    },
  ],
};
