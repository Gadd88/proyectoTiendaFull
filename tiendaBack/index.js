const express = require('express')
const server = express()
const dotenv = require('dotenv')

dotenv.config()
const SERVER_PORT = process.env.SERVER_PORT

server.get('/', (req, res) => {
    console.log(req)
    res.send("<h1>Api Tienda Full</h1>")
})




server.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
})
