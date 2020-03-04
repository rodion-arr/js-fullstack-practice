import * as mongoose from "mongoose";

export type ProductDocument = mongoose.Document & {
    isActive: boolean;
    sort: number;
    shortTitle: string;
    fullTitle: string;
    detailSubtitle: string | null;
    previewImage: string;
    detailImage: string;
    detailImageSecondary: string | null;
    detailText: string;
    slug: string;
    slogan: string;
    presentationLink: string | null;
    price: string | null;
    seoDescription: string | null;
    youtubeLink: string | null;
};

const productSchema = new mongoose.Schema({
    isActive: Boolean,
    sort: Number,
    shortTitle: String,
    fullTitle: String,
    detailSubtitle: String,
    previewImage: String,
    detailImage: String,
    detailImageSecondary: String,
    detailText: String,
    slug: String,
    slogan: String,
    presentationLink: String,
    price: String,
    seoDescription: String,
    youtubeLink: String
}, { timestamps: true });

export const Product = mongoose.model<ProductDocument>("Product", productSchema);
