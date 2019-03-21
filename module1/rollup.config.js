import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'index.ts',
  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'esm'
  }],
  plugins: [
    typescript()
  ]
}
