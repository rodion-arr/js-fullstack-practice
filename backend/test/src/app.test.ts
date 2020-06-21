import mongoose from 'mongoose';
import logger from '../../src/util/logger';

jest.mock('mongoose');
jest.mock('../../src/util/logger');

describe('app.ts', () => {
    it('should log message on mongodb connect success', async (done) => {
        jest.isolateModules(() => {
            const logSpy = jest.spyOn(logger, 'info');
            const connectSpy = jest.spyOn(mongoose, 'connect').mockResolvedValue(mongoose);

            require('../../src/app');

            setImmediate(() => {
                expect(logSpy).toBeCalledWith('MongoDB ready to use.');

                logSpy.mockClear();
                connectSpy.mockClear();
                done();
            });
        });
    });

    it('should log message on mongodb connect error', async (done) => {
        const logSpy = jest.spyOn(logger, 'error');
        const connectSpy = jest.spyOn(mongoose, 'connect').mockRejectedValue('Connection failed in test');

        require('../../src/app');

        setImmediate(() => {
            expect(logSpy).toBeCalledWith(
                'MongoDB connection error. Please make sure MongoDB is running.',
                'Connection failed in test'
            );

            logSpy.mockClear();
            connectSpy.mockClear();
            done();
        });
    });
});
