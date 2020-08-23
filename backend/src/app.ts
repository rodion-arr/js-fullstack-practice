import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import logger from './util/logger';
import cors from 'cors';
import prometheus from 'prom-client';


// Routes
import { ordersRouter } from './routes/orders.router';
import { productsRouter } from './routes/products.router';

// Middleware
import { validationErrorMiddleware, generalErrorMiddleware, notFoundErrorMiddleware, requestLogger } from './middleware';

prometheus.collectDefaultMetrics();

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
app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(requestLogger);

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', prometheus.register.contentType);
        res.end(await prometheus.register.metrics());
    } catch (ex) {
        res.status(500).end(ex);
    }
});

app.use(validationErrorMiddleware);
app.use(notFoundErrorMiddleware);
app.use(generalErrorMiddleware);

export default app;
