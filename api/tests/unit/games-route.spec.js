import supertest from 'supertest'
import server from '../../src/server'

const request = supertest(server)

describe('games (get all)', () => {
  it('GET /games', async (done) => {
    const response = await request.get('/games')
    expect(response.status).toBe(200)
    expect(typeof response.body).toBe('object')
    done()
  })
})
