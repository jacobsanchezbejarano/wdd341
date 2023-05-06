const express = require('express');
const routes = express.Router();
const contactsFunctions = require('../controllers/contacts');
const { userValidationRules, validate } = require('../helpers/validator.js')

routes.get('/', contactsFunctions.getAll);
routes.get('/:id', contactsFunctions.getSingle);
routes.post('/',userValidationRules(), validate, contactsFunctions.post_contact);
routes.put('/:id', contactsFunctions.update_contact);
routes.delete('/:id', contactsFunctions.delete_contact);

module.exports = routes;