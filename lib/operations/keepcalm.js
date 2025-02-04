module.exports = {
  name: 'Keep Calm',
  url: '/keepcalm/:reaction/:from',
  fields: [
    { name: 'Reaction', field: 'reaction' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/keepcalm/:reaction/:from', function (req, res) {
      const message = `Keep the fork calm and ${req.params.reaction}!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
