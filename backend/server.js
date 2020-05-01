const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000

var app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const router = require('./routes/users')
app.use('/users', router)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})