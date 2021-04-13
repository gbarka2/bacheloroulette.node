const express = require('express')
require('dotenv').config()
const mongoose = require('./db/connection')
const cors = require('cors')
const corsOptions = require('./configs/cors.js')
const morgan = require('morgan')
const app = express()
const {PORT = 3000, NODE_ENV = 'development'} = process.env

NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

// const DestinationRouter = require('./controllers/Destination')
// app.use('/usernames', DestinationRouter)

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`)
})
