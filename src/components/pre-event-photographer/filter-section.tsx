import FilterCard from "./filter-card";
import type { FilterSectionType } from "../../types/pre-event-photographer/filter-type";

type Props = {
    filters: FilterSectionType[];
};

const FilterSection = ({ filters }: Props) => {
    return (
        <div className="row">

            {/* Sidebar Primary */}
            <div className="sidebar-primary col-lg-12 col-md-6">
                {filters.slice(0, 2).map((item) => (
                    <FilterCard key={item.id} data={item} />
                ))}
            </div>

            {/* Sidebar Secondary */}
            <div className="sidebar-secondary col-lg-12 col-md-6">
                {filters.slice(2).map((item) => (
                    <FilterCard key={item.id} data={item} />
                ))}
            </div>

        </div>
    );
};

export default FilterSection;