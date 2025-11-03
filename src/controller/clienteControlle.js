const { clienteModel } = require('../models/clienteModel')
const clienteController = {
  // busca todos os clientes e retorna os dados
  buscarTodosClientes: async (req, res) => {
    try {
      // chama o modelo que faz a consulta no banco
      const [dados] = await clienteModel.selecionarTodos()

      // mostra a mensagem se nenhum cliente estiver cadastrado
      if (dados.length === 0) {
        return res.status(200).json({ message: 'nenhum cliente cadastrado' })
      }

      // se tiver dados envia a lista de clientes
      res.status(200).json({ message: 'clientes encontrados', data: dados })
    } catch (error) {
      // caso dê erro no  servidor mostra a mensagem
      res.status(500).json({ message: 'erro no servidor', error: error.message })
    }
  },

  // cria um novo cliente no banco de dados
  incluirCliente: async (req, res) => {
    try {
      // pega o nome e cpf que vem no corpo 
      const { nomeCliente, cpfCliente } = req.body

      // verifica se foram preenchidos
      if (!nomeCliente || !cpfCliente) {
        return res.status(400).json({ message: 'informe nome e cpf' })
      }

      // procura no banco pra ver se o cpf já existe
      const [existe] = await clienteModel.selecionarPorCpf(cpfCliente)
      if (existe.length > 0) {
        return res.status(409).json({ message: 'cpf já cadastrado' })
      }

      // se o cpf não existir cria o cliente no banco
      const [resultado] = await clienteModel.inserirCliente(nomeCliente, cpfCliente)

      // resposta
      if (resultado.affectedRows === 1) {
        res.status(201).json({ message: 'cliente criado com sucesso', idCliente: resultado.insertId })
      } else {
        res.status(400).json({ message: 'erro ao criar cliente' })
      }
    } catch (error) {
      // erro  do servidor
      res.status(500).json({ message: 'erro no servidor', error: error.message })
    }
  }
}

module.exports = { clienteController }
