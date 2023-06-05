var app = require('./config/server')

// var rotaHome = require('./app/routers/home')(app)
// var rotaFormularioInclusaoNoticia = require('./app/routers/formulario_inclusao_noticia')(app)
// var rotaNoticias = require('./app/routers/noticias')(app)

// Sobe o servidor
app.listen(3000, function () {
  console.log('Servidor rodando com Express.')
})

console.log('Server ON')
