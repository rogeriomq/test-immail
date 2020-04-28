import dotenv from 'dotenv'
import server from './server'

dotenv.config()

const port = process.env.SERVER_PORT || 3333

server.listen(port, () =>
  console.log(`🚀 Restfull API listening http://localhost:${port}`)
)
