import { requestLogger } from '../../../src/middleware/log.middleware';
import * as httpMock from 'node-mocks-http';

describe('logger middleware', () => {
    it('should log request and response', async () => {
        const nextSpy = jest.fn();
        const res = httpMock.createResponse();
        const req = httpMock.createRequest({
            url: '/some-test-url',
            method: 'GET',
            query: {getParam: ''},
            body: {postParam: ''}
        });

        requestLogger(req, res, nextSpy);

        expect(nextSpy).toHaveBeenCalledTimes(1);
    });
});
