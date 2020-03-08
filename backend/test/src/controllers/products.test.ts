import request from 'supertest';
import app from '../../../src/app';
import { Product } from '../../../src/models/Product';

describe('products controller', () => {
    describe('GET /products', () => {
        it('should return correct data object', (done) => {
            const productSpy = jest.spyOn(Product, 'find').mockResolvedValue([
                new Product({
                    'shortTitle': 'TestProduct',
                    'previewImage': '/path/to/preview/img',
                    'detailImage': '/path/to/detail/img'
                })
            ]);

            request(app).get('/products')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.body.status).toBe(true);
                    expect(response.body.message).toBe('Product list retrieved successfully');
                    expect(response.body.data.products[0].shortTitle).toBe('TestProduct');

                    const previewImage = response.body.data.products[0].previewImage;
                    const detailImage = response.body.data.products[0].detailImage;
                    expect(previewImage).toContain('/path/to/preview/img');
                    expect(previewImage).toContain('http');
                    expect(detailImage).toContain('/path/to/detail/img');
                    expect(detailImage).toContain('http');

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
