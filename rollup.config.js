// Install Rollup Plugins
// yarn add rollup @babel/core @rollup/plugin-commonjs @babel/preset-env @rollup/plugin-node-resolve rollup-plugin-minify-html-literals rollup-plugin-summary rollup-plugin-typescript2 rollup-plugin-terser rollup-plugin-import-css @rollup/plugin-node-resolve @rollup/plugin-babel @babel/plugin-proposal-class-properties -D

import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";
import node_resolve from "@rollup/plugin-node-resolve";
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {

  // Specify Source File
  input: './src/index.ts', 

  // Specify Output Formats
  output: [
    {
      file: pkg.main,
      format: 'umd', // the preferred format
      exports: 'default',
      name: 'device'
    },
    {
     file: pkg.module,
     format: 'es' // the preferred format
    }
   ],

  // Add Rollup Plugins
  plugins: [
    commonjs(),
    node_resolve(),
    babel({ babelHelpers: 'bundled', plugins: ["@babel/plugin-proposal-class-properties"] }),
    css(),
    resolve(),
    minifyHTML(),
    terser(),
    summary(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
  //  preserveEntrySignatures: 'strict',
}

export default config