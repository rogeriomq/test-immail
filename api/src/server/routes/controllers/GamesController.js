import { Games } from '../../model'

export default {
  index: async (request, response) => {
    const games = await Games.find().sort({ _id: -1 })
    return response.json(games)
  }
}
