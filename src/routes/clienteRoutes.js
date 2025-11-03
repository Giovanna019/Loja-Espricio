const express = require('express')
const router = express.Router()
const { clienteController } = require('../controllers/clienteController')

// rota para buscar todos os clientes cadastrados
router.get('/', clienteController.buscarTodosClientes)

// rota para colocar um novo cliente no banco
router.post('/', clienteController.incluirCliente)

module.exports = router
