import request from 'supertest';
import app from '../../../src/app';
import { Product, ProductDocument } from '../../../src/models/Product';

describe('products controller', () => {
    describe('GET /products', () => {
        it('should return correct data object', (done) => {
            const productSpy = jest.spyOn(Product, 'find').mockResolvedValue([
                new Product({
                    'shortTitle': 'TestProduct'
                })
            ]);

            request(app).get('/products')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.body.status).toBe(true);
                    expect(response.body.message).toBe('Product list retrieved successfully');
                    expect(response.body.data.products[0].shortTitle).toBe('TestProduct');
                    productSpy.mockClear();
                    done();
                });
        });

        it('should return correct data object on error', (done) => {
            const productSpy = jest.spyOn(Product, 'find').mockImplementation(() => {
                throw new Error();
            });

            request(app).get('/products')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.body.status).toBe(false);
                    expect(response.body.message).toBe('Failed to get Product list');
                    productSpy.mockClear();
                    done();
                });
        });
    });
});
