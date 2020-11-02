const express = require('express')
const path = require('path');

const PORT = process.env.PORT || 8888

const app = express()

app.use(express.static(__dirname + '/build'))

app.get('/*', (req, res) => res.sendFile(__dirname + '/build/index.html'))

app.listen(PORT, () => console.log("server is running"))