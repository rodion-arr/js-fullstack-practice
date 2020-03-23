import * as mongoose from 'mongoose';

export type OrderDocument = mongoose.Document & {
    userName: string;
    email: string;
    phone: string | null;
    comment: string | null;
    product: string;
};

const orderSchema = new mongoose.Schema({
    userName: String,
    email: String,
    phone: String,
    comment: String,
    product: String
}, { timestamps: true });

export const Order = mongoose.model<OrderDocument>('Order', orderSchema);
