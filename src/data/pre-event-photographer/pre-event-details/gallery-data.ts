import type { GalleryData } from "../../../types/pre-event-photographer/pre-event-details/gallery-type";

// ✅ IMPORT IMAGES
import img1 from "../../../assets/images/fashion/fashion_1.png";
import img2 from "../../../assets/images/fashion/fashion_2.png";
import img3 from "../../../assets/images/fashion/fashion_img_2.jpg";
import img4 from "../../../assets/images/fashion/fashion_4.png";
import img5 from "../../../assets/images/fashion/fashion_img_1.jpg";
import img6 from "../../../assets/images/fashion/fashion_img_3.jpg";

export const galleryData: GalleryData = {
  initial: [
    { id: "1", image: img1, title: "Title come here" },
    { id: "2", image: img2, title: "Title come here" },
    { id: "3", image: img3, title: "Title come here" },
    { id: "4", image: img4, title: "Title come here" },
  ],
  more: [
    { id: "5", image: img5, title: "Title come here" },
    { id: "6", image: img6, title: "Title come here" },
  ],
};