const extractPlayerKilledByWorld = (line) => {
    line.split(' killed ')
  return ''
}

const makeKillsInGameByPlayer = (line, state) => {
  state.actualGame.total_kills++
  // decreases kill when killed by <world>
  if(line.includes('<world>')) {
    let playerName = extractPlayerKilledByWorld(line)
    console.log(playerName)
  }
}

module.exports = makeKillsInGameByPlayer
