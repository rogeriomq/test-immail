const fs = require('fs')
const readline = require('readline')
const stream = require('stream')
const bypassParser  = require('./bypassParser')

const {Games} = require('./model')

const optionsReadStream = {
  encoding: 'latin1',
  autoClose: true
}

const relativePathFile = 'games.log'

const inputStream = fs.createReadStream(relativePathFile, optionsReadStream)

const outputStream = new stream()

const readingLine = readline.createInterface(inputStream, outputStream)

const bypass = bypassParser()

const saveInDatabase = (gamesObject) => {
  const keys = Object.keys(gamesObject)
  keys.map(async key => {
    const games = new Games()
    const game = bypass.get()[key]
    
    games._id = key
    games.total_kills = game.total_kills || 0
    games.players = game.players || []
    games.kills = game.kills || {}
    games.kills_by_means = game.kills_by_means || {}
    try {
      await games.save()
    } catch(error) {
      console.log('##> ', error)
    }
  })
}

readingLine
  .on('line', (line) => {
    bypass.parseLine(line)
  })
  .on('close', async () => {    
    await saveInDatabase(bypass.get())
    console.log('End of save collection in mogodb')
  })