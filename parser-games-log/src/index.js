const fs = require('fs')
const readline = require('readline')
const stream = require('stream')
const bypassParser  = require('./bypassParser')

const optionsReadStream = {
  encoding: 'latin1',
  autoClose: true
}

const relativePathFile = 'games.log'

const inputStream = fs.createReadStream(relativePathFile, optionsReadStream)

const outputStream = new stream()

const readingLine = readline.createInterface(inputStream, outputStream)

const bypass = bypassParser()


readingLine
  .on('line', (line) => {
    bypass.parseLine(line)
  })
  .on('close', () => {
    console.log('End read file...:')
    console.log(JSON.stringify(bypass.get(), null, 2))
  })