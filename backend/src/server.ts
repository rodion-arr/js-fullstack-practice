import app from './app';
import mongoose from 'mongoose';

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    console.log(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );
    console.log('  Press CTRL-C to stop\n');
});

/**
 * Graceful shutdown. Stop the server and disconnect from DB
 */
function shutdown() {
    server.close((err: Error) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log('Server closed');

        mongoose.connection.close(() => {
            console.log('Mongoose connection disconnected');
            process.exit(0);
        }).catch(err => {
            console.error('Mongoose connection close error', err);
            process.exit(1);
        });
    });
}

app.on('shutdown', () => {
    shutdown();
});

process.on('SIGINT', () => {
    console.log('Signal is SIGINT');
    shutdown();
});

process.on('SIGTERM', () => {
    console.log('Signal is SIGTERM');
    shutdown();
});

// Custom signal for process relaunch in cluster mode
process.on('SIGUSR2', () => {
    console.log('Signal is SIGUSR2');
    server.close(() => {
        process.exit(1);
    });
});

process.on('uncaughtException', (error: Error) => {
    console.error(error);
    shutdown();
});

process.on('unhandledRejection', (promise, reason) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

export default server;
