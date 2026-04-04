import type { BlogDetailsContent } from "../../../types/blog/blog-details-type/content-type";
import img from "../../../assets/images/author_img.png"

export const blogDetailsContentData: BlogDetailsContent = {
  intro: [
    "Planning a Telugu wedding comes with beautiful rituals like Pellikuthuru, Pellikoothuru, Snanam, Jeelakarra Bellam, and the main Muhurtham.",
    "From choosing the right venue to coordinating outfits, preparation helps you enjoy every moment."
  ],

  quote:
    "A well-planned wedding lets you enjoy rituals deeply—especially moments like Jeelakarra Bellam and Mangalsutram.",

  sections: [
    {
      heading: "1. Choose the Right Venue & Muhurtham",
      image: "assets/images/categories/rituals.png",
      content: [
        "Start by finalizing your Muhurtham from a family priest or panchangam.",
        "Ensure the mandapam is spacious for ceremonies like Jeelakarra Bellam and Saptapadi.",
        "Choose halls in Hyderabad, Vijayawada, Vizag or Warangal with good facilities."
      ]
    },
    {
      heading: "2. Outfit Tips for Bride & Groom",
      content: [
        "Brides can plan pattu sarees for each ritual.",
        "Grooms can wear dhoti, kurta, or sherwani.",
        "Choose breathable fabrics and keep backup outfits."
      ]
    }
  ],

  tags: ["Wedding Tips", "Telugu Wedding", "Bride & Groom"],

  author: {
    name: "Admin",
    role: "AUTHOR",
    description:
      "This guide is curated to help Telugu brides and grooms enjoy their big day with ease.",
    image: "img"
  },

  comments: [
    {
      name: "Ananya Reddy",
      date: "17 Aug 2020",
      text: "Super helpful! Muhurtham tips are great."
    },
    {
      name: "Vivek Chandra",
      date: "17 Aug 2020",
      text: "Good breakdown of rituals.",
      replies: [
        {
          name: "Sravya Kolanu",
          date: "17 Aug 2020",
          text: "Loved the décor suggestions!"
        }
      ]
    }
  ]
};