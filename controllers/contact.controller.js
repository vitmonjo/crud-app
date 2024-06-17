import Contact from '../models/contact.model.js'

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({})
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getClientContacts = async (req, res) => {
    try {
        const { clientId } = req.params;
        const contacts = await Contact.find({ clientId });
        
        if (contacts.length === 0) {
            return res.status(404).json({ message: `No contacts found for this clientId ${clientId}` });
        }
        
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateContact = async (req, res) => {
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndUpdate(id, req.body);

        if (!contact) {
            return res.status(404).json({message: 'Contact not found'});
        }

        const updatedContact = await Contact.findById(id);
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteContact = async (req, res) => {
    try {
        const {id} = req.params;

        const contact = await Contact.findByIdAndDelete(id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found'})
        }

        res.status(200).json({ message: 'Contact deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}