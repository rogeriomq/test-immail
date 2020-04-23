const { resetActualGame } = require('../helpers')

const makeInitGame = (line, state) => {
  state.startingGame = true
  state.actualGameKey = `game_${Object.keys(state.games).length + 1}`
  state.actualGame = resetActualGame()
  // console.log('makeInitGame', state)
}

module.exports = makeInitGame