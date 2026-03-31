import type { VendorCategory } from "../types/vendors-type";

type Props = {
    category: VendorCategory;
};

export default function VendorCategoryCard({ category }: Props) {
    return (
        <a
            href={category.link}
            className={`vc-item ${category.wide ? "wide" : ""}`}
            style={{ gridArea: category.area }}
        >
            <img src={category.img} alt={category.name} />
            <div className="vc-label">{category.name}</div>
        </a>
    );
}