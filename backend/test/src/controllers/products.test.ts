import request from 'supertest';
import app from '../../../src/app';
import { Product } from '../../../src/models';
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
                throw new Error('error from test');
            });

            request(app).get('/products')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.status).toBe(500);
                    expect(response.body.status).toBe(false);
                    expect(response.body.message).toBe('error from test');
                    productSpy.mockClear();
                    done();
                });
        });
    });

    describe('GET /products/:slug', () => {
        it('should return correct data object', (done) => {
            const productSpy = jest.spyOn(Product, 'findOne').mockResolvedValue(
                (new Product({
                    'shortTitle': 'TestProduct',
                    'previewImage': '/path/to/preview/img',
                    'detailImage': '/path/to/detail/img'
                }))
            );

            request(app).get('/products/test')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.body.status).toBe(true);
                    expect(response.body.message).toBe('Product retrieved successfully');
                    expect(response.body.data.product.shortTitle).toBe('TestProduct');

                    const previewImage = response.body.data.product.previewImage;
                    const detailImage = response.body.data.product.detailImage;
                    expect(previewImage).toContain('/path/to/preview/img');
                    expect(previewImage).toContain('http');
                    expect(detailImage).toContain('/path/to/detail/img');
                    expect(detailImage).toContain('http');

                    productSpy.mockClear();
                    done();
                });
        });

        it('should return correct data object on error', (done) => {
            const productSpy = jest.spyOn(Product, 'findOne').mockImplementation(() => {
                throw new Error('Some error');
            });

            request(app).get('/products/test-product')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.status).toBe(500);
                    expect(response.body.status).toBe(false);
                    expect(response.body.message).toBe('Some error');
                    expect(loggerSpy).toHaveBeenCalledWith('Request to GET /products/test-product FAILED', {'error': 'Some error'});
                    productSpy.mockClear();
                    done();
                });
        });

        it('should return correct data object on not found', (done) => {
            // tslint:disable-next-line:no-null-keyword
            const productSpy = jest.spyOn(Product, 'findOne').mockResolvedValue(null);

            request(app).get('/products/test-product')
                .expect(200)
                .end((err: Error, response) => {
                    expect(response.status).toBe(404);
                    expect(response.body.status).toBe(false);
                    expect(response.body.message).toBe('Product test-product not found');
                    expect(loggerSpy).toHaveBeenCalledWith('Request to GET /products/test-product NOT FOUND', {'message': 'Product test-product not found'});
                    productSpy.mockClear();
                    done();
                });
        });
    });
});
