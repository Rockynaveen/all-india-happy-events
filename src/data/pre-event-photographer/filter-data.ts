import type { FilterSectionType } from "../../types/pre-event-photographer/filter-type";

export const filterData: FilterSectionType[] = [
    {
        id: "categoriestypes",
        title: "No. Of Days",
        type: "radio",
        inputPlaceholder: "Enter Number Of Days",
        options: [
            { label: "1 day", value: "1" },
            { label: "2 days", value: "2" },
            { label: "3 days", value: "3" },
            { label: "4 days", value: "4" },
        ],
    },
    {
        id: "city",
        title: "Services",
        type: "radio",
        options: [
            { label: "Photo + Video", value: "photo" },
            { label: "Photo Package", value: "package" },
        ],
    },
    {
        id: "capacity",
        title: "Price",
        type: "checkbox",
        inputPlaceholder: "Enter Your Price Range",
        options: [
            { label: "< ₹40,000", value: "40000" },
            { label: "₹40,000 - ₹80,000", value: "80000" },
            { label: "₹80,000 - ₹1,20,000", value: "120000" },
            { label: "₹1,20,000 - ₹1,60,000", value: "160000" },
            { label: "> ₹1,60,000", value: "160000+" },
        ],
    },
    {
        id: "settings",
        title: "Rating",
        type: "radio",
        options: [
            { label: "All Ratings", value: "all" },
            { label: "Rated < 4", value: "lt4" },
            { label: "Rated 4+", value: "4plus" },
            { label: "Rated 4.5+", value: "4.5plus" },
            { label: "Rated 4.8+", value: "4.8plus" },
        ],
    },
    {
        id: "amenities",
        title: "Review Count",
        type: "radio",
        options: [
            { label: "< 5 reviews", value: "lt5" },
            { label: "5+ reviews", value: "5plus" },
            { label: "15+ reviews", value: "15plus" },
            { label: "30+ reviews", value: "30plus" },
        ],
    },
];