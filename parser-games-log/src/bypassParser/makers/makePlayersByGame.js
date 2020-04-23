
const makePlayersByGame = (line, state) => {
  let extractedPlayerName = line.split('\\t')[0].split('n\\')[1]
    
  if(typeof extractedPlayerName !== 'string'
    && extractedPlayerName.length <= 0
    && state.actualGame.players.indexOf(extractedPlayerName) != -1)
    return

  state.actualGame.players.push(extractedPlayerName)
}

module.exports = makePlayersByGame
