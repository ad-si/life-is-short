import babel from "rollup-plugin-babel"
import { uglify } from "rollup-plugin-uglify"

export default {
  input: "source/scripts/main.js",
  output: {
    file: "docs/scripts/bundle.js",
    format: "cjs",
  },
  plugins: [babel(), uglify()],
}
