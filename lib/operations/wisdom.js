module.exports = {
  name: 'Wisdom',
  url: '/wisdom/:name',
  fields: [
    { name: 'Name', field: 'name' }
  ],

  register (app, output) {
    return app.get('/wisdom/:name', function (req, res) {
      const message = `Your wisdom knows bounds, ${req.params.name}.`
      return output(req, res, message)
    })
  }
}
