import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import logger from './util/logger';
import cors from 'cors';

// Controllers (route handlers)
import * as productsController from './controllers/products';
import * as ordersController from './controllers/orders';

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = 'mongodb://mongodb:27017/fullStackProject';

(async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        logger.info('MongoDB ready to use.');
    } catch (err) {
        logger.error('MongoDB connection error. Please make sure MongoDB is running.', err);
        app.emit('shutdown');
    }
})();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Product APIs
app.get('/products', productsController.getProducts);
app.get('/products/:slug', productsController.getProductBySlug);

// Order APIs
app.post('/orders', ordersController.postOrders);

export default app;
