const express = require('express')
const router = express.Router()
const { clienteController } = require('../controllers/clienteController')

// rota para listar todos os clientes
router.get('/', clienteController.buscarTodosClientes)

// rota para buscar cliente por ID (query parameter /clientes/id?id=1)
router.get('/id', clienteController.buscarClientePorId)

// rota para criar um novo cliente
router.post('/', clienteController.incluirCliente)

// rota para editar cliente (usando o id na URL  /clientes/1)
router.put('/:idCliente', clienteController.editarCliente)

// rota para excluir cliente (usando o id na URL  /clientes/1)
router.delete('/:idCliente', clienteController.excluirCliente)

module.exports = router
