import {name} from '../package.json'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const file = type => `dist/${name}.${type}.js`
export default {
  input:'src/main.js',
  output:{
    name,
    file:file('es'),
    format:'es'
  },
  plugins:[
    nodeResolve(),
    vue({css:false}),
    css({ output: 'bundle333.css' }),
  ]

}