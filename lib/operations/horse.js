module.exports = {
  name: 'fork you and the horse you rode in on',
  url: '/horse/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/horse/:from', function (req, res) {
      const message = 'fork you and the horse you rode in on.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
