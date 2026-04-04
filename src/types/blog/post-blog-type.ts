export type Blog = {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  isSticky?: boolean;
};