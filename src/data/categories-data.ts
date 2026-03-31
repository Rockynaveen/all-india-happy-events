import type { Category } from "../types/category-type";

// Images
import venues from "../assets/images/categories/blanket_hall.png";
import photography from "../assets/images/categories/photography.png";
import cake from "../assets/images/categories/categories_3.jpg";
import music from "../assets/images/categories/music.png";
import fashion from "../assets/images/categories/bridal_fashion.png";
import rituals from "../assets/images/categories/rituals.png";

export const categories: Category[] = [
  { id: 1, title: "Venues & Banquet Halls", vendors: 12, image: venues, icon: "weddingdir_venue" },
  { id: 2, title: "Photography & Films", vendors: 32, image: photography, icon: "weddingdir_camera" },
  { id: 3, title: "Cakes & Desserts", vendors: 10, image: cake, icon: "weddingdir_cake" },
  { id: 4, title: "Music & Entertainment", vendors: 10, image: music, icon: "weddingdir_music" },
  { id: 5, title: "Bridal Fashion", vendors: 10, image: fashion, icon: "weddingdir_fashion" },
  { id: 6, title: "Wedding Rituals", vendors: 10, image: rituals, icon: "weddingdir_pheras" },
];