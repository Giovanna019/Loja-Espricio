const db = require('../config/db')
const clienteModel = {
   // busca todos os clientes cadastrados
  selecionarTodos: () => {
    const sql = 'SELECT * FROM clientes'
    return connection.promise().query(sql)
  },

  // busca cliente pelo CPF
  selecionarPorCpf: (cpfCliente) => {
    const sql = 'SELECT * FROM clientes WHERE cpfCliente = ?'
    return connection.promise().query(sql, [cpfCliente])
  },

  // busca cliente pelo ID
  selecionarPorId: (idCliente) => {
    const sql = 'SELECT * FROM clientes WHERE idCliente = ?'
    return connection.promise().query(sql, [idCliente])
  },

  // insere novo cliente no banco
  inserirCliente: (nomeCliente, cpfCliente) => {
    const sql = 'INSERT INTO clientes (nomeCliente, cpfCliente) VALUES (?, ?)'
    return connection.promise().query(sql, [nomeCliente, cpfCliente])
  },

  // atualiza dados de um cliente existente
  atualizarCliente: (idCliente, nomeCliente, cpfCliente) => {
    const sql = 'UPDATE clientes SET nomeCliente = ?, cpfCliente = ? WHERE idCliente = ?'
    return connection.promise().query(sql, [nomeCliente, cpfCliente, idCliente])
  },

  // exclui um cliente pelo ID
  deletarCliente: (idCliente) => {
    const sql = 'DELETE FROM clientes WHERE idCliente = ?'
    return connection.promise().query(sql, [idCliente])
  }
}

module.exports = { clienteModel }