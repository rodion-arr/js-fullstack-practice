import request from 'supertest';
import app from '../../../src/app';
import { Order } from '../../../src/models/Order';
import logger from '../../../src/util/logger';
import SpyInstance = jest.SpyInstance;

jest.mock('../../../src/util/logger');

describe('products controller', () => {
    let loggerSpy: SpyInstance;

    beforeEach(() => {
        loggerSpy = jest.spyOn(logger, 'error');
    });

    afterEach(() => {
        loggerSpy.mockClear();
    });

    describe('POST /orders', () => {
        it('should return correct data object', (done) => {
            const requestBody = {
                'userName': 'Test',
                'email': 'mail@qwe.com',
                'phone': '+380630000000',
                'comment': 'String',
                'product': 'viva'
            };

            const orderSpy = jest.spyOn(Order.prototype, 'save').mockResolvedValue(requestBody);

            request(app).post('/orders')
                .send(requestBody)
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.body.status).toBe(true);
                    expect(response.body.message).toBe('Order added successfully');
                    expect(response.body.data.order.userName).toBe('Test');

                    orderSpy.mockClear();
                    done();
                });
        });

        it('should log errors', (done) => {
            const requestBody = {
                'userName': 'Test',
                'email': 'mail@qwe.com',
                'phone': '+380630000000',
                'comment': 'String',
                'product': 'viva'
            };

            const orderSpy = jest.spyOn(Order.prototype, 'save').mockImplementation(() => {
                throw new Error('error from test');
            });

            request(app).post('/orders')
                .send(requestBody)
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.body.status).toBe(false);
                    expect(response.body.message).toBe('Failed to add order');
                    expect(logger.error).toHaveBeenCalledWith('POST /orders request error', {
                        error: 'error from test'
                    });

                    orderSpy.mockClear();
                    done();
                });
        });

        it('should validate request', (done) => {
            const orderSpy = jest.spyOn(Order.prototype, 'save').mockResolvedValue({});

            request(app).post('/orders')
                .send({})
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.body.status).toBe(false);
                    expect(response.body.message).toBe('Failed to add order');
                    expect(orderSpy).toHaveBeenCalledTimes(0);

                    orderSpy.mockClear();
                    done();
                });
        });
    });
});
