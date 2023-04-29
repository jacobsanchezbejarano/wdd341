
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const functions = require('../controllers/');

routes.use('/', require('./swagger'));
routes.use(bodyParser.json());
routes.get('/', functions.get_name);
routes.use('/contacts', require('./contacts'));



module.exports = routes;