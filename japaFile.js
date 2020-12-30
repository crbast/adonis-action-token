/* eslint-disable @typescript-eslint/no-var-requires */
require('@adonisjs/require-ts/build/register')

const { configure } = require('japa')
configure({
  files: ['test/**/*.spec.ts'],
})
