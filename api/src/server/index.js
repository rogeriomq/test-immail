import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import routes from './routes'
const server = express()

server.use(cors())

server.use(bodyParser.json())

server.use(routes)

export default server
