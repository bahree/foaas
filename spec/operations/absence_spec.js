const operation = require('../../lib/operations/absence')

describe('/dumb', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Absence'))

  it('should have the correct url', () => expect(operation.url).toEqual('/absence/:from'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/absence/:from', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          from: 'TESTFROM'
        }
      }

      const message = 'Your absence is required.'
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})