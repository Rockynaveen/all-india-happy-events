import type { Blog } from "../../types/blog/post-blog-type";

import img1 from "../../assets/images/categories/rituals.png";
import img2 from "../../assets/images/categories/photography.png";
import img3 from "../../assets/images/categories/bridal_fashion.png";
import img4 from "../../assets/images/categories/blanket_hall.png";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Top Telugu Wedding Tips for Bride & Groom",
    date: "July 12, 2020",
    category: "Wedding",
    description:
      "Planning a Telugu wedding? From Pellikuthuru rituals to Muhurtham decor, these simple tips help you stay organized and look stunning on your big day. Discover must-know ideas for outfits, photography, and traditional setups.",
    image: img1,
    isSticky: true,
  },
  {
    id: 2,
    title: "How Photography Enhances Wedding Moments",
    date: "July 12, 2020",
    category: "Wedding",
    description:
      "From the emotional Pellikuthuru ceremony to the vibrant Muhurtham rituals, great photography brings Telugu weddings to life. Learn how lighting, angles, and candid shots elevate every special moment and make your album unforgettable.",
    image: img2,
  },
  {
    id: 3,
    title: "Bridal Sarees & Makeup Kits",
    date: "July 12, 2020",
    category: "Wedding",
    description:
      "From Kanchi pattu sarees to flawless bridal makeup kits, every bride deserves the perfect essentials for her big day. Explore how to choose the right shades, jewelry, and traditional attire to elevate your Pellikuthuru, Haldi, and Muhurtham looks.",
    image: img3,
  },
  {
    id: 4,
    title: "Wedding Decoration Ideas",
    date: "July 12, 2020",
    category: "Wedding",
    description:
      "From traditional mango leaf torans to grand pelli mandapam setups, Telugu weddings shine with vibrant décor. Explore simple and elegant decoration tips to enhance Haldi, Pellikuthuru, and Muhurtham events without losing the cultural charm.",
    image: img4,
  },
];