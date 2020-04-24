const extractPlayerKilledByWorld = (line) => {
  const [playerName, killByMean] = line.split(' killed ')[1].split(' by ')

  return [playerName, killByMean]
}

const extractPlayerNameKiller = (line) => {
  const lineSplited = line.split(' killed ')
  const playerName = lineSplited[0].split(': ')[2]
  const killByMean = lineSplited[1].split(' by ')[1]

  return [playerName, killByMean]
}

const makeKillsInGameByPlayer = (line, state) => {
  state.actualGame.total_kills++
  // decreases kill when killed by <world>
  if(line.includes('<world>')) {
    const [playerName, killByMean] = extractPlayerKilledByWorld(line)
    // counter minus one kill.
    state.actualGame.kills[playerName] = (state.actualGame.kills[playerName] || 0) - 1
    state.actualGame.kills_by_means[killByMean] = (state.actualGame.kills_by_means[killByMean] || 0) + 1
    return
  }

  const [playerName, killByMean] = extractPlayerNameKiller(line)
  state.actualGame.kills[playerName] = (state.actualGame.kills[playerName] || 0) + 1
  state.actualGame.kills_by_means[killByMean] = (state.actualGame.kills_by_means[killByMean] || 0) + 1
}

module.exports = makeKillsInGameByPlayer
