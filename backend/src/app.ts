import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import logger from './util/logger';

// Controllers (route handlers)
import * as productsController from './controllers/products';

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = 'mongodb://mongodb:27017/fullStackProject';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    logger.error('MongoDB connection error. Please make sure MongoDB is running.', err);
});

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

/**
 * API examples routes.
 */
app.get('/products', productsController.getProducts);

export default app;
