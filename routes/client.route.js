const express = require('express');
const Client = require('../models/client.model.js');
const router = express.Router();
const {getClients, getClient, createClient, updateClient, deleteClient} = require('../controllers/client.controller.js');


router.get('/', getClients)
router.get('/:id', getClient)

router.post('/', createClient)

router.put('/:id', updateClient)

router.delete('/:id', deleteClient)

module.exports = router;