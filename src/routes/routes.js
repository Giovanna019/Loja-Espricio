const express = require('express');
const router = express.Router();

//referência do arquivo de rotas
const {produtoRoutes} = require('./produtoRoutes');

router.use('/', produtoRoutes);

module.exports = {router}