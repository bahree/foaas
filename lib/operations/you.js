module.exports = {
  name: 'You',
  url: '/you/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/you/:from', function (req, res) {
      const message = "You! You’re living proof it’s possible to live without a brain."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}

