export type GalleryItem = {
    id: string;
    image: string;
    title: string;
};

export type GalleryData = {
    initial: GalleryItem[];
    more: GalleryItem[];
};