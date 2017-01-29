const opn = require('opn')
const chart = require('../index')
const csvWriter = require('csv-write-stream')
const memoryUsage = require('memory-usage')

memoryUsage(2000)
  .pipe(csvWriter())
  .pipe(chart(opn))
