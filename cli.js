#!/usr/bin/env node

const pump = require('pump')
const opn = require('opn')
const chart = require('./')

pump(process.stdin, chart(ready), err => {
  if (err) throw err
  console.log("woot")
  process.exit()
})

function ready (url) {
  console.log("ready")
  let res = opn(url)
  console.log(res)
}
