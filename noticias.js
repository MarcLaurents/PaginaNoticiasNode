var http = require('http')

// Metodo para criar um servidor createServer()
// Espera um argumento
var server = http.createServer(function (req, res) {
  // Resposta para o servidor
  if (categoria === '/tecnologia') {
    res.end('<html><body> Tecnologia </body></html>')
  } else if (categoria === '/moda') {
    res.end('<html><body> Moda </body></html>')
  } else if (categoria === '/beleza') {
    res.end('<html><body> Beleza </body></html>')
  } else {
    res.end('<html><body>Portal de noticias</body></html>')
  }
})

server.listen(3000)
