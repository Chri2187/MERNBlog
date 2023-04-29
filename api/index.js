require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3002
const mongoConn = require('./config/db/mongoConnect')
const routes = require('./routes/routes')
const app = express()
//middleware
app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    res.send('ok')
})

app.use('/api', routes)

app.listen(port, () => { console.log(`Server running on port ${port}`); })