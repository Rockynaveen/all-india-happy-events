import type  { Wedding } from "../types/wedding-type";

/* IMAGE IMPORTS */
import wedding1_1 from "../assets/images/realwedding/wedding_1_1.jpg";
import wedding1_2 from "../assets/images/realwedding/wedding_1_2.jpg";
import wedding1_3 from "../assets/images/realwedding/wedding_1_3.jpg";
import wedding1_4 from "../assets/images/realwedding/wedding_1_4.jpg";

import wedding2_1 from "../assets/images/realwedding/wedding_2_1.jpg";
import wedding2_2 from "../assets/images/realwedding/wedding_2_2.jpg";
import wedding2_3 from "../assets/images/realwedding/wedding_2_3.jpg";
import wedding2_4 from "../assets/images/realwedding/wedding_2_4.jpg";

import wedding3_1 from "../assets/images/realwedding/wedding_3_1.jpg";
import wedding3_2 from "../assets/images/realwedding/wedding_3_2.jpg";
import wedding3_3 from "../assets/images/realwedding/wedding_3_3.jpg";
import wedding3_4 from "../assets/images/realwedding/wedding_3_4.jpg";

export const weddings: Wedding[] = [
    {
        title: "Aaradhya Weds Karthik",
        location: "Hyderabad, Telangana",
        date: "March 12, 2023",
        mainImg: wedding1_1,
        gallery: [wedding1_2, wedding1_3, wedding1_4],
    },
    {
        title: "Meera Weds Raghav",
        location: "Bengaluru, Karnataka",
        date: "November 02, 2022",
        mainImg: wedding2_1,
        gallery: [wedding2_2, wedding2_3, wedding2_4],
    },
    {
        title: "Ishita Weds Arjun",
        location: "Chennai, Tamil Nadu",
        date: "January 18, 2024",
        mainImg: wedding3_1,
        gallery: [wedding3_2, wedding3_3, wedding3_4],
    },
];