import { useQuery } from "@tanstack/react-query";
import { getRealWeddings } from "../../services/real-wedding-service";

const RealWeddings = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["real-weddings"],
    queryFn: getRealWeddings,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>Real Weddings</h1>
          <p>Beautiful love stories from couples across India</p>
        </div>

        <div className="row">
          {data.map((item: any, index: number) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
            >
              <div className="real-wedding-wrap top-heading">
                <div className="real-wedding">

                  {/* HEAD */}
                  <div className="head">
                    <h3>
                      <a href={`/real-weddings/${item.slug}`}>
                        {item.title}
                      </a>
                    </h3>
                    <p>
                      <i className="fa fa-map-marker"></i>{" "}
                      {item.city}
                    </p>
                  </div>

                  {/* MAIN IMAGE */}
                  <div className="img">
                    <div className="overlay">
                      <i className="weddingdir_heart_double_alt"></i>
                      Our Story
                    </div>

                    <a href={`/real-weddings/${item.slug}`}>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                      />
                    </a>

                    <div className="date">{item.wedding_date}</div>
                  </div>

                  {/* GALLERY */}
                  <ul className="list-unstyled gallery">
                    {item.galleries?.slice(0, 3).map((img: string, i: number) => (
                      <li key={i}>
                        <a href={`/real-weddings/${item.slug}`}>
                          {i === 2 && (
                            <div className="load-more">
                              Load <br /> More
                            </div>
                          )}
                          <img src={img} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/real-weddings" className="btn btn-default btn-rounded btn-lg">
            View More Real Weddings
          </a>
        </div>
      </div>
    </section>
  );
};

export default RealWeddings;