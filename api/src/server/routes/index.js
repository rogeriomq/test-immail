import { Router } from 'express'
import GameController from './controllers/GamesController'

const routes = Router()

routes.get('/', (request, response) => {
  return response.redirect('/games')
})

routes.get('/games', GameController.index)

export default routes
