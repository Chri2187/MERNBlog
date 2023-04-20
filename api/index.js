require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3002

const routes = require('./routes/routes')

// middleware
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => res.json('Hello World!'))

app.use('/api', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))