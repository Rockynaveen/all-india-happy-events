import { useParams } from "react-router-dom";
import { useRealWeddingDetails } from "../hooks/use-real-wedding-details";
import "../assets/css/style.css";

const RealWeddingDetailsPage = () => {
  const { slug } = useParams();
  const { data: wedding, isLoading, error } = useRealWeddingDetails(slug!);

  if (isLoading)
    return <div className="text-center wide-tb-90">Loading...</div>;

  if (error || !wedding)
    return <div className="text-center wide-tb-90">Wedding not found</div>;

  return (
    <>
      {/* HERO SECTION */}
      <section className="real-wedding-single-wrap">

        <div
          className="real-wedding-single-img"
          style={{
            backgroundImage: `url(${wedding.thumbnail})`,
          }}
        ></div>

        <div className="real-wedding-single">
          <div className="container h-100">
            <div className="row align-items-lg-end d-flex h-100 align-items-center">

              {/* LEFT */}
              <div className="col-lg-5">
                <div className="name">

                  <div className="ring">
                    <i className="weddingdir_heart_ring"></i>
                  </div>

                  <div>
                    <h2>{wedding.title}</h2>

                    <span>
                      <i className="fa fa-map-marker"></i> {wedding.city}
                    </span>

                    <span>
                      <i className="fa fa-calendar"></i> {wedding.wedding_date}
                    </span>
                  </div>

                </div>
              </div>

              {/* RIGHT */}
              <div className="col-lg-7 text-lg-right">
                <div className="links">

                  <a href="#" className="btn btn-outline-white">
                    <i className="fa fa-heart-o"></i> Favorite
                  </a>

                  <a href="#" className="btn btn-outline-white">
                    <i className="fa fa-share-alt"></i> Share
                  </a>

                  <a href="#" className="btn btn-default">
                    <i className="fa fa-check"></i> Request Pricing
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="wide-tb-90">
        <div className="container">

          {/* OUR STORY */}
          <div className="card-shadow pos-rel">

            <div className="card-shadow-header">
              <h3>
                <i className="fa fa-file-text"></i> Our Story
              </h3>
            </div>

            <div className="card-shadow-body">

              {/* IMPORTANT: API uses HTML string */}
              <div
                dangerouslySetInnerHTML={{
                  __html: wedding.description,
                }}
              />

            </div>

          </div>

          {/* PHOTO GALLERY */}
          <div className="card-shadow pos-rel mt-4">

            <div className="card-shadow-header">
              <h3>
                <i className="fa fa-image"></i> Photo Gallery
              </h3>
            </div>

            <div className="card-shadow-body">
              <div className="row">

                {wedding.galleries?.map((img: string, i: number) => (
                  <div key={i} className="col-lg-4 col-md-6 col-12">

                    <div className="vendor-gallery">
                      <a href={img}>
                        <img
                          src={img}
                          className="rounded img-fluid"
                          alt=""
                        />
                      </a>
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* TAGGED VENDORS (FROM API) */}
          <div className="card-shadow pos-rel mt-4">

            <div className="card-shadow-header">
              <h3>
                <i className="fa fa-tags"></i> Tagged Vendors
              </h3>
            </div>

            <div className="card-shadow-body">
              <div className="row">

                {wedding.tagged_vendors?.map((vendor: any, i: number) => (
                  <div key={i} className="col-lg-3 col-md-6">

                    <div className="tagged-vendors">

                      <h3>{vendor.brand_name}</h3>

                      <p>{vendor.category}</p>

                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default RealWeddingDetailsPage;