// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import your models and routes
import Client from './models/client.model.js';
import clientsRoute from './routes/client.route.js';
import Contact from './models/contact.model.js';
import contactsRoute from './routes/contact.route.js';

// Initialize dotenv to use environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
  .catch((error) => {
    console.log('Connection failed!', error);
  });

export default app;
