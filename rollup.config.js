import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/_assets/js/index.js',
    plugins: [
      peerDepsExternal(),
      resolve(), 
      commonjs(),

      replace({
        preventAssignment: true,
        exclude: 'node_modules/**',
        ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
      (process.env.NODE_ENV === 'production' && terser())
    ],
    output: {
        sourcemap: false,
        file: 'src/_includes/assets/bundle.js',
        format: 'cjs'
    },
    
    watch: {
      clearScreen: false,
    },
};