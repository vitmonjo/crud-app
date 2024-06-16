const express = require('express');
const mongoose = require('mongoose');
const Client = require('./models/client.model.js');
const clientsRoute = require('./routes/client.route.js');
const Contact = require('./models/contact.model.js');
const contactsRoute = require('./routes/contact.route.js');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({ origin: `http://localhost:${process.env.NEXT_JS_PORT}` }));

// Routes
app.use('/api/clients', clientsRoute);
app.use('/api/contacts', contactsRoute);

app.listen(process.env.NODE_PORT, () => {
    console.log(`Server is running on port ${process.env.NODE_PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});

mongoose.connect(`mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@backenddb.q58j8jj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`)
.then(() => {
    console.log('Connected to database!');
})
.catch(() => {
    console.log('Connection failed!');
});