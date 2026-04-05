import  type { NavItemType } from "../types/nav-type";

export const navData: NavItemType[] = [
  {
    name: "Venues",
    megaMenu: [
      {
        title: "By Type",
        links: [
          { label: "Banquet Halls", href: "#" },
          { label: "Marriage Garden / Lawns", href: "#" },
          { label: "Event Resorts", href: "#" },
        ],
      },
      {
        title: "By City",
        links: [
          { label: "Hyderabad", href: "#" },
          { label: "Vijayawada", href: "#" },
          { label: "Vizag", href: "#" },
        ],
      },
      {
        title: "Popular Picks",
        links: [
          { label: "Luxury 5-Star Venues", href: "#" },
          { label: "Beach Venues", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Vendors",
    megaMenu: [
      {
        title: "Photographers",
        links: [
          { label: "Photographers", href: "#" },
          { label: "Videographers", href: "#" },
        ],
      },
      {
        title: "Makeup",
        links: [
          { label: "Bridal Makeup Artists", href: "#" },
          { label: "Family Makeup", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Photos",
    megaMenu: [
      {
        title: "Outfit",
        links: [
          { label: "Bridal Lehenga", href: "#" },
          { label: "Event Sarees", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Real Weddings",
    megaMenu: [
      {
        title: "By City",
        links: [
          { label: "Hyderabad", href: "#" },
          { label: "Vijayawada", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Blog",
    megaMenu: [
      {
        title: "Categories",
        links: [
          { label: "Bridal Makeup", href: "#" },
          { label: "Event Decor", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Services",
    megaMenu: [
      {
        title: "Inhouse",
        links: [
          { label: "Event Management", href: "#" },
          { label: "Virtual Planners", href: "#" },
        ],
      },
    ],
  },
];