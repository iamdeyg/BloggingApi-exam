const express = require('express')
const cors = require('cors')
const passport = require('passport')
const authRoutes = require('./routes/authRoute')
const postRoutes = require('./routes/postRoute')
const connectDb = require('./utils/db')
const userRoutes = require('./routes/userRoute')
validateToken = require('./middlewares/validateToken')
require('dotenv').config()


const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(passport.initialize())
app.use(cors())
connectDb()

app.get('/api', (req, res) => {
    res.status(200).json({message: "Welcome to BloggingAPI"})
})
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/user', validateToken, userRoutes)


app.listen(PORT, () => {
    console.log(`APP is listening on port:${PORT}`)
})