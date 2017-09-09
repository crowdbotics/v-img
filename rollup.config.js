import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);
const plugins = [
  vue({
    css: true,
  }),
  babel(babelrc()),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(uglify({}, minify));
} else {
  plugins.push(istanbul({
    exclude: ['test/**/*', 'node_modules/**/*'],
  }));
}

export default {
  input: 'lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'vue-img',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins,
  external,
};
