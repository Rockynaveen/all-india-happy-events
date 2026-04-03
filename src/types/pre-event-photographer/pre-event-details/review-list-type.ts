export type Review = {
    id: number;
    name: string;
    image: string;
    rating: number;
    title: string;
    description: string;
    date: string;
    reply?: {
        image: string;
        date: string;
        message: string;
    };
};