import { Router } from 'express'
import GameController from './controllers/GamesController'

const routes = Router()

routes.get('/games', GameController.index)

routes.get('/', (request, response) => {
  return response.send('PQP')
})

export default routes
