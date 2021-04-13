require('dotenv').config()
//once mongo set up switch line3 to env file
const { MONGODBURI } = require('mongoose')
const mongoose = require('mongoose')
const config = { useUnifiedTopology: true, useNewUrlParser: true }
const db = mongoose.connection

mongoose.connect(MONGODBURI, config)
db.on('open', () => console.log('You are connected to Mongo'))
  .on('close', () => console.log('You are disconnected from Mongo'))
  .on('error', () => console.log(err))