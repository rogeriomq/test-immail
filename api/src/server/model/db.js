require('dotenv').config()
const db = require('mongoose')

const conf = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  pass: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  authSource: process.env.DB_AUTH_SOURCE,
  dbName: process.env.DB_NAME
}

const url = `mongodb://${conf.user}:${conf.pass}@${conf.host}:${conf.port}/${conf.dbName}`

try {
  db.connect(url, {
    auth: { authSource: conf.authSource },
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
} catch (error) {
  console.log(error)
}

module.exports = db
