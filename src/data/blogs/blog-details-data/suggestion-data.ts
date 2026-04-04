import type { Blog } from "../../../types/blog/blog-details-type/blog-content";

export const blogData: Blog[] = [
  {
    id: 1,
    title: "Top Telugu Wedding Tips for Bride & Groom",
    date: "July 12, 2020",
    category: "Wedding",

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
          "Start by finalizing your Muhurtham from a family priest or panchangam. Telugu weddings often start early in the morning, so pick a venue that can accommodate both rituals and guest movement.",

          "Ensure the mandapam is spacious for ceremonies like Jeelakarra Bellam, Panigrahanam, and Saptapadi. Adding South Indian décor brings authenticity.",

          "If you expect large crowds, choose halls in Hyderabad, Vijayawada, Guntur, Vizag, or Warangal with good parking and dining space."
        ]
      },
      {
        heading: "2. Outfit Tips for Bride & Groom",
        content: [
          "Brides can plan pattu sarees for each ritual—yellow for Pellikuthuru, bright shades for Muhurtham, soft tones for reception.",

          "Grooms can coordinate with dhoti, kurta, or sherwani depending on the event.",

          "Comfort matters since Telugu weddings are long—choose breathable fabrics and keep backup outfits ready."
        ]
      }
    ]
  }
];