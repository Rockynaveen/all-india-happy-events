import type {Blog} from "../types/blog-type"

// Images
import blog1 from "../assets/images/blogs/blog_1.jpg";
import blog2 from "../assets/images/blogs/blog_2.jpg";
import blog3 from "../assets/images/blogs/blog_3.jpg";
import blog4 from "../assets/images/blogs/blog_4.jpg";

 const blogs: Blog[] = [
  {
    id: 1,
    title: "Bridal Exhibitions",
    description:
      "As grand weddings return, bridal exhibitions are back too—here’s the best of upcoming bridal expos in one list.",
    image: blog1,
    updated: "Feb 2025",
  },
  {
    id: 2,
    title: "The Best Facials",
    description:
      "Wedding planning stress? Discover finest facials to rejuvenate your skin and give you a serene, ethereal glow.",
    image: blog2,
    updated: "Sep 2025",
  },
  {
    id: 3,
    title: "Real Brides Reveal",
    description:
      "Wondering where to shop your bridal outfit? Real brides reveal unique stores beyond the usual names.",
    image: blog3,
    updated: "Jul 2025",
  },
  {
    id: 4,
    title: "Hiring a Planner",
    description:
      "Planning a wedding can feel like a whirlwind of choices and decisions—so many vendors and so many options!",
    image: blog4,
    updated: "Nov 2025",
  },
];
export {blogs}