const express = require('express');
const Contact = require('../models/contact.model.js');
const router = express.Router();
const {getContacts, getContact, getClientContacts, createContact, updateContact, deleteContact} = require('../controllers/contact.controller.js');


router.get('/', getContacts)
router.get('/:id', getContact)
router.get('/client/:clientId', getClientContacts);

router.post('/', createContact)

router.put('/:id', updateContact)

router.delete('/:id', deleteContact)

module.exports = router;