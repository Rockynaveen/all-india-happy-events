export type FeaturedListing = {
  id: number;
  title: string;
  image: string;
  price: string;
  category: string;
  location: string;
  reviews: number;
  isFeatured?: boolean;
};