const mongoose = require('mongoose')
require('dotenv').config()

const CONNECTION_URL = process.env.CONNECTION_URL

const connectDb = () => {
    mongoose.connect(CONNECTION_URL)
    mongoose.connection.on("connected", () => {
        console.log('MongoDb connected successfully!')
    })
    mongoose.connection.on('error', (err) => {
        console.log(`Unable to connect to mongoDb: ${err}`)
    })
}

module.exports = connectDb