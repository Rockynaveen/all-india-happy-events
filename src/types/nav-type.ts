export interface NavLink {
    label: string;
    href: string;
}

export interface MegaColumn {
    title: string;
    links: NavLink[];
}

export interface NavItemType {
    name: string;
    megaMenu?: MegaColumn[];
}