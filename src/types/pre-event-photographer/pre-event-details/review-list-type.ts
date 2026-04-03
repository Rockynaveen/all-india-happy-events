export type ReviewCategory = {
    label: string;
    icon: string;
    rating: number;
    percentage: number;
};

export type ReviewItem = {
    id: string;
    name: string;
    image: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    categories: ReviewCategory[];
    reply?: {
        message: string;
        date: string;
    };
};