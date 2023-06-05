'use strict';

import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

const dir = 'build';
const tsconfig = {
  paths: {
    "@ui/*": ["src/ui/*"],
  }
};

export default {
  input: 'src/index.ts',
  output: {
    dir: dir + '/scripts',
    entryFileNames: 'bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(tsconfig),
  ],
};
