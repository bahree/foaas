const operation = require('../../lib/operations/shutup')

describe('/shutup', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Shut Up'))

  it('should have the correct url', () => expect(operation.url).toEqual('/shutup/:name/:from'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/shutup/:name/:from', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          name: 'TESTNAME',
          from: 'TESTFROM'
        }
      }

      const message = `Since you know it all ${req.params.name}, you should know when to shut up.`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
