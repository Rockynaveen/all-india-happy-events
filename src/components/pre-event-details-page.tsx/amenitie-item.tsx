import type { AmenityItem } from "../../types/pre-event-photographer/pre-event-details/amenities-type";

type Props = {
    item: AmenityItem;
};

const AmenityItem = ({ item }: Props) => {
    return (
        <div className="col-md-3 col-6">
            <div className="icon-box-style-3">
                <i className={item.icon}></i> {item.label}
            </div>
        </div>
    );
};

export default AmenityItem;