export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type CategoriesResponse = {
  success: boolean;
  message: string;
  data: Category[];
}
