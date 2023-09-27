'use strict'

const fetchImpl = require('./lib').fetch

module.exports.fetch = async function fetch (resource, init = undefined) {
  try {
    return await fetchImpl(resource, init)
  } catch (err) {
    Error.captureStackTrace(err, this)
    throw err
  }
}
module.exports.FormData = require('./lib/formdata').FormData
module.exports.Headers = require('./lib/headers').Headers
module.exports.Response = require('./lib/response').Response
module.exports.Request = require('./lib/request').Request
module.exports.WebSocket = require('./lib/websocket/websocket').WebSocket
