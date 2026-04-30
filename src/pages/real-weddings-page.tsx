import { useRealWeddings } from "../hooks/real-weddings";
const RealWeddingsPage = () => {
  const { data = [], isLoading, error } = useRealWeddings();

  if (isLoading) {
    return (
      <>
        <p className="text-center py-5">Loading...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p className="text-center py-5">Error loading weddings</p>
      </>
    );
  }

  return (
    <>

      <section className="wide-tb-90 wedding_padding">
        <div className="container">
          <div className="row">

            {data?.length > 0 ? (
              data.map((wedding: any) => {
                const images = wedding.galleries || [];

                return (
                  <div className="col-lg-4 col-md-6" key={wedding.slug}>
                    <div className="real-wedding-wrap">

                      {/* CARD */}
                      <div className="real-wedding">

                        {/* MAIN IMAGE */}
                        <div className="img">
                          <div className="overlay">
                            <i className="weddingdir_heart_double_alt"></i>
                            Our Story
                          </div>

                          <a href={`/real-weddings/${wedding.slug}`}>
                            <img
                              src={wedding.thumbnail}
                              alt={wedding.title}
                            />
                          </a>

                          <div className="date">
                            {wedding.wedding_date}
                          </div>
                        </div>

                        {/* GALLERY */}
                        <ul className="list-unstyled gallery">
                          {images.slice(0, 3).map((img: string, i: number) => (
                            <li key={i}>
                              <a href={`/real-weddings/${wedding.slug}`}>
                                <img src={img} alt="gallery" />
                              </a>
                            </li>
                          ))}

                          {images.length > 3 && (
                            <li>
                              <a href={`/real-weddings/${wedding.slug}`}>
                                <div className="load-more">
                                  Load <br />More
                                </div>
                                <img src={images[3]} alt="more" />
                              </a>
                            </li>
                          )}
                        </ul>

                      </div>

                      {/* TITLE */}
                      <h3>
                        <a href={`/real-weddings/${wedding.slug}`}>
                          {wedding.title}
                        </a>
                      </h3>

                      {/* LOCATION */}
                      <p>
                        <i className="fa fa-map-marker"></i>{" "}
                        {wedding.city}
                      </p>

                    </div>
                  </div>
                );
              })
            ) : (
              <p>No weddings found</p>
            )}

          </div>

        
          </div>

      </section>

    </>
  );
};

export default RealWeddingsPage;