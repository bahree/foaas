module.exports = {
  name: 'Everyone',
  url: '/everyone/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/everyone/:from', function (req, res) {
      const message = 'Everyone can go and jump off this flat earth.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
