import cluster from 'cluster';
import os from 'os';
import express from 'express';
import prometheus from 'prom-client';

const pid = process.pid;
const aggregatorRegistry = new prometheus.AggregatorRegistry();
const metricsServer = express();

if (cluster.isMaster) {
    const cpusCount = os.cpus().length;
    console.log(`CPUs: ${cpusCount}`);
    console.log(`Master started. Pid: ${pid}`);
    for (let i = 0; i < cpusCount - 1; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code) => {
        console.log(`Worker died! Pid: ${worker.process.pid}. Code ${code}`);
        if (code === 1) {
            cluster.fork();
        }
    });

    metricsServer.get('/metrics', async (req, res) => {
        try {
            const metrics = await aggregatorRegistry.clusterMetrics();
            res.set('Content-Type', aggregatorRegistry.contentType);
            res.send(metrics);
        } catch (ex) {
            res.statusCode = 500;
            res.send(ex);
        }
    });

    metricsServer.listen(3001);
    console.log('Cluster metrics server listening to 3001');
} else {
    require('./server');
}
