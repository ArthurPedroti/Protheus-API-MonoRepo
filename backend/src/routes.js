const express = require('express');
const routes = express.Router();

const EstoqueController = require('./controllers/EstoqueController');
const PCsController = require('./controllers/PCsController');
const SCsController = require('./controllers/SCsController');

routes.get('/estoques', EstoqueController.index);
routes.get('/pcs', PCsController.index);
routes.get('/scs', SCsController.index);

module.exports = routes;