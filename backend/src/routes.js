const express = require('express');
const routes = express.Router();

const EstoqueController = require('./controllers/EstoqueController');
const PCsController = require('./controllers/PCsController');
const SCsController = require('./controllers/SCsController');
const EmpController = require('./controllers/EmpController');
const OuController = require('./controllers/OuController');
const OPsController = require('./controllers/OPsController');
const RegisterController = require('./controllers/RegisterController');

routes.get('/estoques', EstoqueController.index);
routes.get('/pcs', PCsController.index);
routes.get('/scs', SCsController.index);
routes.get('/emp', EmpController.index);
routes.get('/ou', OuController.index);
routes.get('/ops', OPsController.index);
routes.get('/register', RegisterController.index);

module.exports = routes;