const express = require('express')

const router = express.Router();

const FuncionarioController = require('../controllers/funcionarioController')

router.post('/funcionario', FuncionarioController.inserir)
router.get('/funcionario', FuncionarioController.buscar)

module.exports = router;
