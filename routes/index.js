const express = require('express');
const routes = express.Router();
const functions = require('../controllers/');

routes.get('/', functions.get_name);
routes.use('/contacts', require('./contacts'));

module.exports = routes;