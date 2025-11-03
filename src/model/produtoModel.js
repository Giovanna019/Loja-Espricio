const pool = require ('../config/db');

const produtoModel={
/**
 * seleciona todos os produtos cadastrados na tabela
 * @async
 * @function selecionarTodos
 * 
 * @returns retorna o resultado com um array de objetos, cada objeto representra um registro de tabela
 * 
 * @example
 * const produtos = await produtoModel.selecionarTodos();
 * console.log(produtos);
 * //saida esperada
 * [
 * {id_produto: 1, descricao: 'Teclado', valor: 150.00},
 * {id_produto: 2, descricao: 'Mouse', valor: 399.99}
 * ]
 * 
 */
    //Selecionar todos os produtos

    selecionarTodos: async()=>{
        const sql= 'SELECT * FROM produtos;';
        const [rows] = await pool.query(sql);
        return rows;
    },
    /**
     * seleciona um produto de acordo com o id_produto especificado
     * @async
     * @param {number} id indentificador que deve ser pesquisado no banco de dados 
     * @returns {promise<Array<Object>>}
     * 
     * @example
     * const produto = await produtoModel.selecionarPorId(1);
     * console.log(produto);
     * //saida esperada
     * [
     * {id_produto: 1, descricao: 'Teclado', valor: 150.00}
     * ]
     */
    selecionarPorId: async(id)=>{
        const sql = 'SELECT * FROM produtos WHERE id_produto = ?';
        values = [id];
        const [rows] = await pool.query(sql, values);
        return rows;
    },
    /**
     * Inclui um item novo no banco de dados
     * @param {string} pDescricao 
     * @param {number} pValor
     * @returns {Promise<object>} Retorna um objeto contendo propriedades que representam as informações do comando executado
     * @example
     * const produtos = await produtoModel.inserirProduto('Produto teste', 16.99);
     * //Saída
     * "result": {
     *      "fieldCount": 0,
     *      "affectedRows": 1,
     *      "insertId": 11,
     *      "info": "",
     *      "serverStatus": 2,
     *      "warningStatus": 0,
     *      "changedRows": 0
     * }
     */
    inserirProduto: async (pDescricao, pValor) => {
        const sql = 'INSERT INTO produtos (descricao, valor) VALUES (?,?)';
        const values = [pDescricao, pValor];
        const[rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },
    
     /**
     * Altera um item existente no banco de dados
     * @param {number} pId
     * @param {string} pDescricao 
     * @param {number} pValor
     * @returns {Promise<object>} Retorna um objeto contendo propriedades que representam as informações do comando executado
     * @example
     * const produtos = await produtoModel.inserirProduto(1, 'Produto teste', 16.99);
     * //Saída
     * "result": {
     *      "fieldCount": 0,
     *      "affectedRows": 1,
     *      "insertId": 0,
     *      "info": "",
     *      "serverStatus": 2,
     *      "warningStatus": 0,
     *      "changedRows": 1
     * }
     */
    alterarProduto: async (pDescricao, pValor, pId) => {
        const sql = 'UPDATE produtos SET descricao=?, valor=?  WHERE id_produto=?;';
        const values = [pDescricao, pValor, pId];
        const [rows] = await pool.query(sql, values);
        return rows;
    },

    deleteProduto: async (pId) => {
        const sql = "DELETE FROM produtos WHERE id_produto = ?;"
        const values = [pId];
        const [rows] = await pool.query(sql, values);
        return rows;
    }
};

module.exports = {produtoModel}