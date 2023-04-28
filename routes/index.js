const express = require('express');
const routes = express.Router();
const functions = require('../controllers/');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.get('/', functions.get_name);
routes.use('/contacts', require('./contacts'));
var options = {
    explorer: true
  };
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));



module.exports = routes;