const db = require('./db')

const Schema = db.Schema

const GamesSchema = new Schema({
  _id: String,
  total_kills: Number,
  players: [String],
  kills: Object,
  kills_by_means: Object
})

const Games = db.model('Games', GamesSchema)

module.exports = {
  Games
}