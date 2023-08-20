const express = require('express');

const ctrl = require('../../Controllers/contacts');

const { validateBody, isValidId, authentificate } = require('../../middlewares');

const { schemas } = require('../../models/contact');

const router = express.Router();




router.get('/', authentificate, ctrl.listContacts);

router.get('/:contactId', authentificate, isValidId, ctrl.getContactById);

router.post('/', authentificate, validateBody(schemas.addSchema), ctrl.addContact);

router.delete('/:contactId', authentificate, isValidId, ctrl.removeContact);

router.put('/:contactId', authentificate, isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch('/:contactId/favorite', authentificate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router
