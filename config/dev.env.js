'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// http://192.168.5.37/xinNiuBa/public
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: 'http://xnb.siweiquanjing.com'
})
