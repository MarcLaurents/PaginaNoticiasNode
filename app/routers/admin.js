module.exports = function (application) {
  application.get('/formulario_inclusao_noticia', function (req, res) {
    res.render('admin/form_add_noticia')
  })

  application.post('/noticias/salvar', function (req, res) {
    var noticia = req.body

    // assert(inputId, message)
    req.assert('titulo', 'Favor preencher titulo da noticia!').notEmpty()
    req
      .assert(
        'resumo',
        'Favor preencher resumo da noticia! (Max 100 caracteres)'
      )
      .notEmpty()
      .len(10, 100)
    req
      .assert('autor', 'Favor preencher autor da noticia! (Max 30 caracteres)')
      .notEmpty()
      .len(1, 30)
    req
      .assert('data', 'Favor preencher data da noticia! (YYYY-MM-DD)')
      .notEmpty()
      .isDate({ format: 'YYYY-MM-DD' })
    req.assert('noticia', 'Favor informar a noticia!').notEmpty()

    var error = req.validationErrors()

    if (error) {
      res.render('admin/form_add_noticiaS', { validation: error })
      return
    }

    var connection = application.config.dbConnection()
    var NoticiasDAO = application.app.models.NoticiasDAO(connection)

    NoticiasDAO.salvarNoticia(noticia, function (error, result) {
      res.redirect('/noticias')
    })
  })
}
