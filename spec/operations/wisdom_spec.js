const operation = require('../../lib/operations/wisdom')

describe('/wisdom', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Wisdom'))

  it('should have the correct url', () => expect(operation.url).toEqual('/wisdom/:name'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name' },
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/Wisdom/:name', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          name: 'TESTNAME'        }
      }

      const message = `Your wisdom knows bounds ${req.params.name}.`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message)
    })
  })
})
