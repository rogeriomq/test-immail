import supertest from 'supertest'
import server from '../../src/server'

const request = supertest(server)

describe('index route(redirect)', () => {
  it('GET /', async (done) => {
    const response = await request.get('/')
    expect(response.status).toBe(302)
    expect(response.header.location).toBe('/games')
    done()
  })
})
