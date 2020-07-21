export class ValidationError extends Error {
    constructor(message: string, private validationErrors: any[]) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

    getValidationErrors(): any[] {
        return this.validationErrors;
    }
}
