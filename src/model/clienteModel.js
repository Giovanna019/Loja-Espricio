const db = require('../config/db')
const clienteModel = {
  selecionarTodos: () => {
    return db.query('select * from clientes')
  },

  selecionarPorCpf: (cpf) => {
    return db.query('select * from clientes where cpfCliente = ?', [cpf])
  },

  inserirCliente: (nome, cpf) => {
    return db.query('insert into clientes (nomeCliente, cpfCliente) values (?, ?)', [nome, cpf])
  }
}

module.exports = { clienteModel }
