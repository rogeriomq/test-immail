const makeInitGame = require('./makeInitGame')
const makeShutdownGame = require('./makeShutdownGame')
const makePlayersByGame = require('./makePlayersByGame')
const makeKillsInGameByPlayer = require('./makeKillsInGameByPlayer')

const whatLineToMake = (line, state) => {
  const expressionIdentifierLine = {
    START: 'InitGame',
    END: 'ShutdownGame',
    KILL: 'Kill',
    USER: 'ClientUserinfoChanged'
  }

  let func = (line, state) => {}
  if(line.includes(expressionIdentifierLine.START) && !state.startingGame)
    func = makeInitGame
  if(line.includes(expressionIdentifierLine.END))
    func = makeShutdownGame
  if(line.includes(expressionIdentifierLine.USER))
    func = makePlayersByGame
  if(line.includes(expressionIdentifierLine.KILL))
    func = makeKillsInGameByPlayer

  return () => func(line, state)
}

module.exports = {
  whatLineToMake
}