export interface BlogSectionItem {
  heading: string;
  image?: string;
  content: string[];
}

export interface Blog {
  id: number;
  title: string;
  date: string;
  category: string;
  intro: string[];
  quote: string;
  sections: BlogSectionItem[];
}