const makeShutdownGame = (line, state) => {
  // Add game
  state.games[state.actualGameKey] = state.actualGame
  
  // reset for next game
  state.startingGame = false
  state.actualGameKey = ''
}

module.exports = makeShutdownGame
