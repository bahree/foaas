module.exports = {
    name: 'Pat',
    url: '/pat/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/pat/:from', function (req, res) {
        const message = 'Here is a pat on the back for doing the absolute minimum.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }