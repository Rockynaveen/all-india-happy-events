import  type { VendorCategory } from "../types/vendors-type";

/* IMAGE IMPORTS */
import photographers from "../assets/images/slider/venue_photography_breadcrumb.png";
import makeup from "../assets/images/categories/makeup.jpg";
import mehndi from "../assets/images/categories/mehandi.jpg";
import decor from "../assets/images/weddings/flower_decor.png";
import catering from "../assets/images/categories/catering.jpg";
import invites from "../assets/images/categories/invitation.png";
import dj from "../assets/images/categories/dj.jpg";
import pandit from "../assets/images/categories/pandit.png";
import banquet from "../assets/images/categories/banquet.png";
import choreo from "../assets/images/categories/choreographers.png";
import band from "../assets/images/categories/bandbaja.jpg";
import gifting from "../assets/images/categories/gift.jpg";
import jewellery from "../assets/images/fashion/fashion_1.png";

export const vendorCategories: VendorCategory[] = [
  { name: "Photographers", img: photographers, area: "p1", wide: true, link: "Vendors_list.html" },
  { name: "Makeup Artists", img: makeup, area: "m1", wide: true, link: "Vendors_list.html" },
  { name: "Mehendi Artists", img: mehndi, area: "mehndi", wide: false, link: "Vendors_list.html" },
  { name: "Decorators", img: decor, area: "decorators", wide: false, link: "Vendors_list.html" },
  { name: "Caterers", img: catering, area: "caterers", wide: false, link: "Vendors_list.html" },
  { name: "Invitation Cards", img: invites, area: "invites", wide: false, link: "Vendors_list.html" },
  { name: "DJs", img: dj, area: "djs", wide: false, link: "Vendors_list.html" },
  { name: "Pandits", img: pandit, area: "transport", wide: false, link: "Vendors_list.html" },
  { name: "Banquet Halls", img: banquet, area: "anchor", wide: false, link: "Venues_list.html" },
  { name: "Choreographers", img: choreo, area: "choreo", wide: false, link: "Vendors_list.html" },
  { name: "Band / Baaja / Dhol", img: band, area: "band", wide: false, link: "Vendors_list.html" },
  { name: "Gifting", img: gifting, area: "gifting", wide: true, link: "Vendors_list.html" },
  { name: "Jewellery", img: jewellery, area: "jewellery", wide: true, link: "Vendors_list.html" }
];