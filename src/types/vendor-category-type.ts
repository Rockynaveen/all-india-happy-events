export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  vendor_count: number;
  sub_categories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  vendor_count: number;
}