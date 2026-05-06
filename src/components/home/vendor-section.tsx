import { useEffect, useState } from "react";
import { getVendors, type Vendor } from "../../services/vendors-home-service";
import { Link } from "react-router";

const VendorsSection = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getVendors();
      setVendors(data);
      setLoading(false);
    };

    load();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>Top Wedding Vendors</h1>
          <p>Handpicked professionals trusted by thousands of Indian couples</p>
        </div>

        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">

          {vendors.map((vendor) => (
            <div className="col" key={vendor.id}>
              <div className="vendor-wrap-alt">

                {/* IMG SECTION */}
                <div className="img">
                  <img src={vendor.thumbnail} alt="" />

                  <div className="img-content">
                    <span className="rating">
                      {vendor.rating}
                    </span>

                    <a href="javascript:" className="favorite">
                      <i className="fa-regular fa-heart"></i>                    </a>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="content">
                  <div className="vendor-heading">
                    <h3>
                      <i className="weddingdir_camera"></i>
                      <Link to={`/vendors/${vendor.slug}`}>
                        {vendor.brand_name}
                      </Link>
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default VendorsSection;