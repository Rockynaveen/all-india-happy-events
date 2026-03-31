import VendorCategoryCard from "./vendors-card";
import { vendorCategories } from "../data/vendors-data";

const VendorCategories = () => {
    return (
        <section className="wide-tb-120">
            <div className="container">

                {/* TITLE */}
                <div className="section-title text-center">
                    <h1>All Vendor Categories</h1>
                    <p>Your trusted partners across every category</p>
                </div>

                {/* GRID */}
                <div className="vc-grid">
                    {vendorCategories.map((cat, index) => (
                        <VendorCategoryCard key={index} category={cat} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VendorCategories;