const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

const port = process.env.APP_PORT || 8888

app.listen(port, () => console.log(new Date().toISOString() + ` -> Started at ${port}`))
