const request = require('request')

module.exports = {
  name: 'ShoutCloud',
  description: '',
  priority: 1,

  applies (req) {
    return (req.query != null) && (req.query.shoutcloud != null)
  },

  process: (req, res, next) => {
    let str = `${req.message}**seperator**${req.subtitle}`

    return request.post({
      headers: { 'content-type': 'application/json' },
      url: 'HTTP://API.SHOUTCLOUD.IO/V1/SHOUT',
      body: `{"INPUT": "${str}"}`
    }, (error, response, body) => {
      if (error != null) { return module.exports.onError(req, res) }
      try {
        str = JSON.parse(body).OUTPUT.split('**SEPERATOR**')
        req.message = str[0]
        req.subtitle = str[1]
        return next(req, res)
      } catch (error1) {
        return module.exports.onError(req, res)
      }
    })
  },

  onError (req, res) {
    res.status(408)
    res.send('408 Bad Gateway - Upstream SHOUTCLOUD.io is down.')
    return res.end()
  }
}
