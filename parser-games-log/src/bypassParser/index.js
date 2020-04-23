const { resetActualGame } = require('./helpers')

const keys = {
  START: 'InitGame',
  END: 'ShutdownGame',
  KILL: 'Kill',
  USER: 'ClientUserinfoChanged'
}

const bypassParser = () => {
  const state = {
    games: {},
    actualGameKey: '',
    actualGame: resetActualGame(),
    startingGame: false
  }

  /** 
   * param
  */
  const buildInitGame = isValid => {
    if(!isValid) return

    state.startingGame = true
    state.actualGameKey = `game_${Object.keys(state.games).length + 1}`
    state.actualGame = resetActualGame()
  }

  const buildShutdownGame = isValid => {
    if(!isValid) return
    // Add game
    state.games[state.actualGameKey] = state.actualGame
    
    // reset actual values
    state.startingGame = false
    state.actualGameKey = ''
  }

  /* game_1: {
    total_kills: 45;
    players: ["Dono da bola", "Isgalamido", "Zeh"]
    kills: {
      "Dono da bola": 5,
      "Isgalamido": 18,
      "Zeh": 20
    }
  } */
  const buildPlayersGame = (isValid, line) => {
    if(!isValid) return
    
    let extractedPlayerName = line.split('\\t')[0].split('n\\')[1]
    
    if(typeof extractedPlayerName !== 'string'
      && extractedPlayerName.length <= 0
      && state.actualGame.players.indexOf(extractedPlayerName) != -1) return

    state.actualGame.players.push(extractedPlayerName)
  }

  const parseLine = line => { 
    // Create a new and actual game
    buildInitGame(line.includes(keys.START) && !state.startingGame)
    buildShutdownGame(line.includes(keys.END))
    buildPlayersGame(line.includes(keys.USER), line)
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