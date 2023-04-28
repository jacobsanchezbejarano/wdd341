
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const express = require('express');
const routes = express.Router();
const functions = require('../controllers/');

routes.get('/', functions.get_name);
routes.use('/contacts', require('./contacts'));
routes.use('/', require('./swagger'));



module.exports = routes;