const operation = require('../../lib/operations/anyway')

describe('/anyway', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Who the hell are you anyway'))

  it('should have the correct url', () => expect(operation.url).toEqual('/anyway/:company/:from'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'Company', field: 'company' },
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/anyway/:company/:from', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          company: 'TESTCOMPANY',
          from: 'TESTFROM'
        }
      }

      const message = `Who the hell are you anyway, ${req.params.company}, why are you stirring up so much trouble, and, who pays you?`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
