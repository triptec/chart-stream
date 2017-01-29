const path = require('path')
const http = require('http')
const PassThrough = require('readable-stream').PassThrough
const pump = require('pump')
const ecstatic = require('ecstatic')
const SSE = require('sse-stream')

module.exports = function (cb) {
  const input = new PassThrough()
  const server = http.createServer(ecstatic({ root: path.join(__dirname, 'public') }))
  const sse = SSE('/data')

  sse.install(server)

  sse.on('connection', function (client) {
    pump(input, client)
  })

  server.listen(function () {
    sse.interval.unref()
    cb('http://localhost:' + server.address().port)
  })

  server.unref()

  return input
}
