import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import logger from './util/logger';
import cors from 'cors';

// Routes
import { ordersRouter } from './routes/orders.router';
import { productsRouter } from './routes/products.router';

// Middleware
import { requestLogger } from './middleware/log.middleware';
import { validationErrorMiddleware, generalErrorMiddleware, notFoundErrorMiddleware } from './middleware/error.middleware';

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

app.use(requestLogger);

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.use(validationErrorMiddleware);
app.use(notFoundErrorMiddleware);
app.use(generalErrorMiddleware);

export default app;
