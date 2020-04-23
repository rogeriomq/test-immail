const { resetActualGame } = require('./helpers')
const { whatLineToMake } = require('./makers')

const bypassParser = () => {
  const state = {
    games: {},
    actualGameKey: '',
    actualGame: resetActualGame(),
    startingGame: false
  }

  const parseLine = line => { 
    const maker = whatLineToMake(line, state)
    maker.call()
    return this
  }

  const get = () => {
    const {games} = state
    return games
  }

  return {
    parseLine,
    get
  }
}

module.exports = bypassParser