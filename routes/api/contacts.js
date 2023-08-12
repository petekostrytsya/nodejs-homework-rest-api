const express = require('express');

const ctrl = require('../../Controllers/contacts');

const { schemas } = require('../../models/contact');

const router = express.Router();




router.get('/', ctrl.listContacts);

// router.get('/:contactId', ctrl.getContactById);

router.post('/', ctrl.addContact);

// router.delete('/:contactId', ctrl.removeContact);

// router.put('/:contactId', ctrl.updateContact);

module.exports = router
