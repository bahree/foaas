module.exports = {
    name: 'Pat',
    url: '/pat',
    // fields: [
    //   { name: 'From', field: 'from' }
    // ],
  
    register (app, output) {
      return app.get('/pat', function (req, res) {
        const message = 'Here is a pat on the back for doing the absolute minimum.'
        return output(req, res, message)
      })
    }
  }