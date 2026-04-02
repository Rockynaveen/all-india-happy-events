export type FilterOption = {
    label: string;
    value: string;
};

export type FilterSectionType = {
    id: string;
    title: string;
    type: "radio" | "checkbox";
    inputPlaceholder?: string;
    options: FilterOption[];
};