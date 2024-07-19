module.exports = {
    name: 'Genius',
    url: '/genius/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/genius/:from', function (req, res) {
        const message = 'Wow, you are a real genius. Can you please explain quantum mechanics next?'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }