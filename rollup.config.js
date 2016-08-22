import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'source/scripts/main.js',
  format: 'cjs',
  plugins: [babel(), uglify()],
  dest: 'docs/scripts/bundle.js',
}
