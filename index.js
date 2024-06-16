const express = require('express');
const mongoose = require('mongoose');
const Client = require('./models/client.model.js');
const clientsRoute = require('./routes/client.route.js');
const Contact = require('./models/contact.model.js');
const contactsRoute = require('./routes/contact.route.js');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({ origin: 'http://localhost:3000' }));

// Routes
app.use('/api/clients', clientsRoute);
app.use('/api/contacts', contactsRoute);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});

mongoose.connect('mongodb+srv://vitmonjo:c8jFH7054eIWbaoZ@backenddb.q58j8jj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected to database!');
})
.catch(() => {
    console.log('Connection failed!');
});