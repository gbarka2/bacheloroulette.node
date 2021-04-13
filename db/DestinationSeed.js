const mongoose = require('../db/connection')
const Destination = require('../models/Destination')
const db = mongoose.connection
const manyDestinations = require('./DestinationSeed.json')