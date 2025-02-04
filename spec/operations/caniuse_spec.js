const operation = require('../../lib/operations/caniuse')

describe('/caniuse', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Can I Use'))

  it('should have the correct url', () => expect(operation.url).toEqual('/caniuse/:tool/:from'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'Tool', field: 'tool' },
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/caniuse/:tool/:from', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          tool: 'TESTNAME',
          from: 'TESTFROM'
        }
      }

      const message = `Can you use ${req.params.tool}? Holy Moly no!`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
