require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 4000

const connect = require('./config/db')
connect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/user', require('./components/routes/user'))
app.use('/project', require('./components/routes/project') )


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})