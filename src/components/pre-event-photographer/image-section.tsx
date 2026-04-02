import VendorCard from "./image-card";
import type { Vendor } from "../../types/pre-event-photographer/image-type";

type Props = {
    vendors: Vendor[];
};

const VendorImageSection = ({ vendors }: Props) => {
    return (
        <>
            <div className="row">
                {vendors.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                ))}
            </div>

            {/* Pagination */}
            <div className="theme-pagination">
                <nav>
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">
                                <i className="fa fa-angle-left"></i>
                            </a>
                        </li>

                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>

                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>

                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>

                        <li className="page-item">
                            <a className="page-link" href="#">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default VendorImageSection;