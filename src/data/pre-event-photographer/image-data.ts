import type { Vendor } from "../../types/pre-event-photographer/image-type";

// ✅ IMPORT IMAGES
import img1 from "../../assets/images/photography/photography_3.jpg";
import img2 from "../../assets/images/photography/photography_4.jpg";
import img3 from "../../assets/images/photography/photography_1.jpg";
import img4 from "../../assets/images/photography/photography_2.jpg";
import img5 from "../../assets/images/photography/photography_5.jpg";
import img6 from "../../assets/images/photography/photography_6.jpg";
import img7 from "../../assets/images/photography/photography_7.jpg";
import img8 from "../../assets/images/photography/photography_8.jpg";

export const vendors: Vendor[] = [
    {
        id: 1,
        image: img1,
        title: "Poetric Pics Photography",
        location: "Gandhi Nagar, Tirupati, India",
        price: "₹50,000",
        tags: "Photo + Video",
        reviews: 22,
        rating: [1, 1, 1, 1, 0],
        handpicked: true,
        verified: true,
    },
    {
        id: 2,
        image: img2,
        title: "Video Crafts",
        location: "Eluru Road, Vijayawada, India",
        price: "₹75,000",
        tags: "Photo + Video",
        reviews: 12,
        rating: [1, 1, 1, 1, 0.5],
        handpicked: true,
        verified: true,
    },
    {
        id: 3,
        image: img3,
        title: "7 Frames Photography",
        location: "Araku Valley Road, Vizag, India",
        price: "₹1,00,000",
        tags: "Photo + Video",
        reviews: 30,
        rating: [1, 1, 1, 1, 1],
        verified: true,
    },
    {
        id: 4,
        image: img4,
        title: "Frozen Memories",
        location: "Hitech, Hyderabad, India",
        price: "₹1,50,000",
        tags: "Photo + Video",
        reviews: 10,
        rating: [1, 1, 1, 1, 0.5],
        handpicked: true,
        verified: true,
    },
    {
        id: 5,
        image: img5,
        title: "Prasad Studio",
        location: "Hunter Road, Warangal, India",
        price: "₹20,000",
        tags: "Photo + Video",
        reviews: 40,
        rating: [1, 1, 1, 0, 0],
        verified: true,
    },
    {
        id: 6,
        image: img6,
        title: "Pragathi Filims",
        location: "Rajahmundry, India",
        price: "₹75,000",
        tags: "Photo + Video",
        reviews: 15,
        rating: [1, 1, 1, 1, 0.5],
        verified: true,
    },
    {
        id: 7,
        image: img7,
        title: "3Knots Photography",
        location: "Hyderabad, India",
        price: "₹25,000",
        tags: "Photo + Video",
        reviews: 42,
        rating: [1, 1, 1, 0.5, 0],
        handpicked: true,
        verified: true,
    },
    {
        id: 8,
        image: img8,
        title: "Vinayakaa Production",
        location: "Tirupati, India",
        price: "₹85,000",
        tags: "Photo + Video",
        reviews: 15,
        rating: [1, 1, 1, 1, 0.5],
        verified: true,
    },
];