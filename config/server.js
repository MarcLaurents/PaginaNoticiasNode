var Express = require('express')
var Consign = require('consign')
var BodyParser = require('body-parser')
var ExpressValidator = require('express-validator')

var app = Express()

app.set('view engine', 'ejs')
app.set('views', './app/views')
app.use(BodyParser.urlencoded({ extended: true })) // Midalar Body-Parser
app.use(ExpressValidator())

// chamada | scan | ponteiro
Consign()
  .include('app/routers')
  .then('config/dbConnection.js') // necessario apontar extensao (tipo do arquivo)
  .then('app/models')
  .then('app/controllers')
  .into(app)

module.exports = app
