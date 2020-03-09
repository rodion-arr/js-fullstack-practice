export interface Product {
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
}
