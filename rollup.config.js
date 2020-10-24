import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import license from 'rollup-plugin-license'

import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'

import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'

import Package from './package.json'
import version from './versions.json'

const extensions = ['.ts', '.tsx', '.json']

export default {
  input: 'src',
  output: [
    {
      file: 'dist/common.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(Package.dependencies || {}),
    ...Object.keys(Package.peerDependencies || {}),
  ],
  plugins: [
    alias({
      entries: {
        '~': './src',
      },
      resolve: extensions,
    }),
    eslint({ exclude: /node_modules/ }),
    typescript({ rollupCommonJSResolveHack: true, clean: true }),
    babel({
      extensions,
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions,
    }),
    copy({
      targets: [
        { src: './README.md', dest: 'dist' },
        { src: './LICENSE', dest: 'dist' },
      ],
    }),
    generatePackageJson({
      baseContents: (pkg) => {
        return {
          ...pkg,
          version: version.toolset,
          name: '@symblight/toolset',
          main: 'dist/common.js',
          module: 'dist/index.js',
          types: 'dist/index.d.ts',
          private: true,
          keywords: ['library'],
          engines: {
            node: '>=8.0.0',
          },
        }
      },
    }),
    license({
      thirdParty: {
        allow: {
          test: 'MIT', // Or a function that should returns `true` or `false`
          failOnUnlicensed: true, // Fail if a dependency does not specify any licenses, default is `false`
          failOnViolation: true, // Fail if a dependency specify a license that does not match given requirement, default is `false`
        },
      },
    }),
    commonjs(),
    terser(),
    json(),
  ],
}
