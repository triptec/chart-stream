const test = require('tape')
const chart = require('./')

test('call callback', t =>
  chart(url => {
    t.ok(/^http:\/\/localhost:\d+/.test(url))
    t.end()
  }))
