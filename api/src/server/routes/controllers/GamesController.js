import { Games } from '../../model'

export default {
  index: async (request, response) => {
    const games = await Games.find({}, ['_id', 'players']).sort({ _id: -1 })
    console.log(games)
    return response.json(games)
  }
}
