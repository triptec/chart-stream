#!/usr/bin/env node

const pump = require('pump')
const opn = require('opn')
const chart = require('./')

pump(process.stdin, chart(ready), function (err) {
  if (err) throw err
  process.exit()
})

function ready (url) {
  opn(url)
}
