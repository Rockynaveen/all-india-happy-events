// src/types/pre-event-photographer/contact-type.ts

import {
    IconMail,
    IconMapPin,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandPinterest,
    IconBrandYoutube,
} from "@tabler/icons-react";

// ✅ MUST export this
export type ContactCardType =
    | "contact"
    | "office"
    | "subscribe"
    | "social";

// ✅ MUST export this (THIS IS YOUR ERROR FIX)
export interface PlannerCard {
    type: ContactCardType;
    title: string;
    description: string;

    contacts?: {
        label: string;
        email: string;
        phone: string;
        icon: typeof IconMail;
    }[];

    address?: string;
    mapIcon?: typeof IconMapPin;

    inputPlaceholder?: string;
    buttonText?: string;

    socials?: {
        icon:
        | typeof IconBrandFacebook
        | typeof IconBrandTwitter
        | typeof IconBrandInstagram
        | typeof IconBrandPinterest
        | typeof IconBrandYoutube;
        link: string;
    }[];
}