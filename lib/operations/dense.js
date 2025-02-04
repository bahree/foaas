module.exports = {
  name: 'Dense',
  url: '/dense/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/dense/:from', function (req, res) {
      const message = 'You are disingenuously dense today!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
