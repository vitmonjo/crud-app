import express from 'express';
import Client from '../models/client.model.js';
const router = express.Router();
import * as api from '../controllers/client.controller.js';


router.get('/', api.getClients)
router.get('/:id', api.getClient)

router.post('/', api.createClient)

router.put('/:id', api.updateClient)

router.delete('/:id', api.deleteClient)

export default router;