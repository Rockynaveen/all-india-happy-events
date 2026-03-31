import photographers from "../assets/images/slider/venue_photography_breadcrumb.png";
import makeup from "../assets/images/categories/makeup.jpg";
import mehndi from "../assets/images/categories/mehandi.jpg";
import decor from "../assets/images/weddings/flower_decor.png";
import catering from "../assets/images/categories/catering.jpg";
import invites from "../assets/images/categories/invitation.png";
import dj from "../assets/images/categories/dj.jpg";
import pandit from "../assets/images/categories/pandit.png";
import banquet from "../assets/images/categories/banquet.png";
import choreo from "../assets/images/categories/choreographers.png";
import band from "../assets/images/categories/bandbaja.jpg";
import gifting from "../assets/images/categories/gift.jpg";
import jewellery from "../assets/images/fashion/fashion_1.png";

const VendorCategories = () => {

    const categories = [
        { name: "Photographers", img: photographers, area: "p1", wide: true, link: "Vendors_list.html" },
        { name: "Makeup Artists", img: makeup, area: "m1", wide: true, link: "Vendors_list.html" },
        { name: "Mehendi Artists", img: mehndi, area: "mehndi", wide: false, link: "Vendors_list.html" },
        { name: "Decorators", img: decor, area: "decorators", wide: false, link: "Vendors_list.html" },
        { name: "Caterers", img: catering, area: "caterers", wide: false, link: "Vendors_list.html" },
        { name: "Invitation Cards", img: invites, area: "invites", wide: false, link: "Vendors_list.html" },
        { name: "DJs", img: dj, area: "djs", wide: false, link: "Vendors_list.html" },
        { name: "Pandits", img: pandit, area: "transport", wide: false, link: "Vendors_list.html" },
        { name: "Banquet Halls", img: banquet, area: "anchor", wide: false, link: "Venues_list.html" },
        { name: "Choreographers", img: choreo, area: "choreo", wide: false, link: "Vendors_list.html" },
        { name: "Band / Baaja / Dhol", img: band, area: "band", wide: false, link: "Vendors_list.html" },
        { name: "Gifting", img: gifting, area: "gifting", wide: true, link: "Vendors_list.html" },
        { name: "Jewellery", img: jewellery, area: "jewellery", wide: true, link: "Vendors_list.html" }
    ];

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

                    {categories.map((cat, index) => (
                        <a
                            key={index}
                            href={cat.link}
                            className={`vc-item ${cat.wide ? "wide" : ""}`}
                            style={{ gridArea: cat.area }}
                        >
                            <img src={cat.img} alt={cat.name} />
                            <div className="vc-label">{cat.name}</div>
                        </a>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default VendorCategories;