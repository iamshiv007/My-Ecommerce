const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require("express-fileupload")

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(cors({
    origin: [process.env.ORIGIN],
    credentials: true
}))
app.use(fileUpload())

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to Uncaught Exception')
    process.exit(1)
})

/** Database connection */
const connect = require('./Database')
connect()

/** Routes import */
const router = require('./routes/Router')
app.use('/api/v1', router)

// Middleware for error handling
const errroMiddleware = require('./middleware/Error')
app.use(errroMiddleware)

const port = process.env.PORT || 7000

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to Unhandled Promise Rejection')

    server.close(() => {
        process.exit(1)
    })
})

// text server
app.get('/', (req, res) => {
    res.send("Server Tested")
})

