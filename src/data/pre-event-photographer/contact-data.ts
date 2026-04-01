// src/data/planner.data.ts

import {
    IconMail,
    IconMapPin,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandPinterest,
    IconBrandYoutube,
} from "@tabler/icons-react";

import type { PlannerCard } from "../../types/pre-event-photographer/contact-type";

export const plannerData: PlannerCard[] = [
    {
        type: "contact",
        title: "Talk To Our Team",
        description: "Need help or guidance? Get in touch with us anytime.",
        contacts: [
            {
                label: "Vendors",
                email: "vendors@gmail.com",
                phone: "+91 90000 00001",
                icon: IconMail,
            },
            {
                label: "Users",
                email: "support@gmail.com",
                phone: "+91 90000 00002",
                icon: IconMail,
            },
        ],
        buttonText: "Request a Call Back",
    },

    {
        type: "office",
        title: "Find Our Office",
        description: "Visit us for consultations, demos & assistance.",
        address: `India, Hyderabad, Kavadiguda
100ft Road, Gandhi Nagar
500080`,
        mapIcon: IconMapPin,
        buttonText: "View on Map",
    },

    {
        type: "subscribe",
        title: "Stay Updated",
        description: "Get wedding ideas, tips & inspiration via email.",
        inputPlaceholder: "Enter Your Email",
        buttonText: "Subscribe",
    },

    {
        type: "social",
        title: "Grow With Us",
        description: "Join as a vendor & reach thousands of couples.",
        buttonText: "Register as Vendor",
        socials: [
            { icon: IconBrandFacebook, link: "#" },
            { icon: IconBrandTwitter, link: "#" },
            { icon: IconBrandInstagram, link: "#" },
            { icon: IconBrandPinterest, link: "#" },
            { icon: IconBrandYoutube, link: "#" },
        ],
    },
];