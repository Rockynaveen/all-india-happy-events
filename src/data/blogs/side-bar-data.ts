import type { Category, PopularPost, Archive, Tag } from "../../types/blog/side-bar-type";

import p1 from "../../assets/images/blogs/blog_standard_img_1.jpg";
import p2 from "../../assets/images/blogs/blog_standard_img_5.jpg";
import p3 from "../../assets/images/blogs/blog_standard_img_3.jpg";

export const categories: Category[] = [
  { id: 1, name: "Photography" },
  { id: 2, name: "Wedding Planning" },
  { id: 3, name: "Flowers" },
  { id: 4, name: "Cakes" },
  { id: 5, name: "Catering" },
];

export const popularPosts: PopularPost[] = [
  { id: 1, title: "Asha & Varun’s Wedding", date: "Sep 27, 2020", image: p1 },
  { id: 2, title: "Destination Wedding Tips", date: "Sep 27, 2020", image: p2 },
  { id: 3, title: "Bridal Wear Guide", date: "Sep 27, 2020", image: p3 },
];

export const archives: Archive[] = [
  { id: 1, month: "September" },
  { id: 2, month: "August" },
  { id: 3, month: "July" },
  { id: 4, month: "June" },
  { id: 5, month: "May" },
];

export const tags: Tag[] = [
  { id: 1, name: "Cake" },
  { id: 2, name: "Decoration" },
  { id: 3, name: "Dress" },
  { id: 4, name: "Restaurants" },
  { id: 5, name: "Venue" },
];