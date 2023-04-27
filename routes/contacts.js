const express = require('express');
const routes = express.Router();
const contactsFunctions = require('../controllers/contacts');

routes.get('/', contactsFunctions.getAll);
routes.get('/:id', contactsFunctions.getSingle);
routes.post('/', contactsFunctions.post_contact);
routes.put('/:id', contactsFunctions.update_contact);
routes.delete('/:id', contactsFunctions.delete_contact);

module.exports = routes;