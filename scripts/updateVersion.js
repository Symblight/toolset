/* eslint-disable no-undef */
const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

// eslint-disable-next-line no-undef
const root = path.join(__dirname, '..')

const packageJson = fs.readFileSync(path.join(root, 'package.json')).toString()
const version = JSON.parse(packageJson).version

const indexjs = path.join(root, 'src', 'index.ts')

shell.sed(
  '-i',
  /(export const version = ").*";/,
  '$1' + version + '";',
  indexjs
)

console.log('updated version to', version)
