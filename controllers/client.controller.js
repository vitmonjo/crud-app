import Client from '../models/client.model.js'

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find({})
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findById(id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateClient = async (req, res) => {
    try {
        const {id} = req.params;
        const client = await Client.findByIdAndUpdate(id, req.body);

        if (!client) {
            return res.status(404).json({message: 'Client not found'});
        }

        const updatedClient = await Client.findById(id);
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteClient = async (req, res) => {
    try {
        const {id} = req.params;

        const client = await Client.findByIdAndDelete(id);

        if (!client) {
            return res.status(404).json({ message: 'Client not found'})
        }

        res.status(200).json({ message: 'Client deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}