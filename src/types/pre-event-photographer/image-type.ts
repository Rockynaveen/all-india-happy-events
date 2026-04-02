export type Vendor = {
    id: number;
    image: string;
    title: string;
    location: string;
    price?: string;
    tags?: string;
    reviews: number;
    rating: number[]; // using array to render stars
    featured?: boolean;
    handpicked?: boolean;
    verified?: boolean;
};