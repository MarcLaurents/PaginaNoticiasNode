module.exports = function (app) {
  app.get('/noticias', function (req, res) {
    var mysql = require('mysql')

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'portal_noticias'
    })

    connection.query('sekect * from noticias', function (error, result) {
      res.render('noticiais/noticias', { noticias: result })
    })

    // res.render('noticias/noticias')
  })
}
