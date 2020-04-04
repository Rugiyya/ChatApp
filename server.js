var express = require('express');
var bodyParser = require("body-parser")
var app = express()
var http = require("http").Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var messages = [
  { name: "Rugi", message: "Hi" },
  { name: "Ali", message: "Hello" },
]

app.get("/messages", (req, res) => {
  res.send(messages)
})

app.post("/messages", (req, res) => {
  messages.push(req.body)
  res.sendStatus(200)
})

var server = http.listen(3000, () => {
  console.log('server is lising on port', server.address().port)
})


