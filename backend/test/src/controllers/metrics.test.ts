import request from 'supertest';
import app from '../../../src/app';

jest.mock('prom-client', () => {
    return {
        collectDefaultMetrics: jest.fn(),
        register: {
            contentType: 'from test',
            metrics: jest.fn()
            .mockImplementationOnce(() => '')
            .mockImplementationOnce(() => { throw new Error('from test'); })
        }
    };
});

describe('metrics controller', () => {
    describe('GET /metric', () => {
        it('should return metrics', (done) => {
            request(app).get('/metrics')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.status).toBe(200);
                    done();
                });
        });

        it('should handle errors', (done) => {
            request(app).get('/metrics')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.status).toBe(500);
                    done();
                });
        });
    });
});
