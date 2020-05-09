import app from './app';

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

process.on('SIGINT', () => {
    console.log('Signal is SIGINT');
    server.close(() => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('Signal is SIGTERM');
    server.close(() => {
        process.exit(0);
    });
});

process.on('SIGUSR2', () => {
    console.log('Signal is SIGUSR2');
    server.close(() => {
        process.exit(1);
    });
});

export default server;
