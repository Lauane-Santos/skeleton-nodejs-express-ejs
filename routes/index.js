var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar()
  res.json(autores.rows);
  /*res.render('index', { title: 'Express' });*/
});

router.post('/inserir', async function(req, res, next) {
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});

router.get('/atualizar', async function(req, res, next) {
  let autor = {
    nome: "Moisés",
    sobrenome: "Antonio",
    data_nascimento: "2015-07-01"
  };
  
  const autores = await Autor.atualizar(autor, 3);
  res.json(autores.rows);
});

module.exports = router;
