const express = require('express');
const routes = express.Router();
const contactsFunctions = require('../controllers/contacts');

routes.get('/', contactsFunctions.getAll);
routes.get('/:id', contactsFunctions.getSingle);

module.exports = routes;