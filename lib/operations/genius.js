module.exports = {
    name: 'Genius',
    url: '/genuis',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/genius', function (req, res) {
        const message = 'Wow, you are a real genius. Can you explain quantum mechanics next?'
        return output(req, res, message)
      })
    }
  }