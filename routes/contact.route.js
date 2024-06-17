import express from 'express';
import Contact from '../models/contact.model.js';
const router = express.Router();
import * as api from '../controllers/contact.controller.js';


router.get('/', api.getContacts)
router.get('/:id', api.getContact)
router.get('/client/:clientId', api.getClientContacts);

router.post('/', api.createContact)

router.put('/:id', api.updateContact)

router.delete('/:id', api.deleteContact)

export default router;