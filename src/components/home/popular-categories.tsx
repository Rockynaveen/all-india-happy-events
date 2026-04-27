import { useCategories } from "../../hooks/use-categories";

const CategorySlider = () => {
  const { data, isLoading } = useCategories();

  const categories = data?.data?.categories || [];

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="wide-tb-120">
      <div className="container">

        {/* TITLE */}
        <div className="section-title text-center">
          <h1>Popular Wedding Categories</h1>
          <p>Browse trusted vendors across India for venues, photography, bridal fashion, décor and more.</p>
        </div>

        {/* CAROUSEL */}
        <div className="owl-carousel owl-theme dots-black" id="slider-categories">

          {categories.map((cat: any) => (
            <div className="item" key={cat.id}>

              <div className="popular-categories">

                {/* IMAGE */}
                <img src={cat.image} alt={cat.name} />

                <div className="content-wrap">
                  <div className="content">

                    <div className="mt-auto d-flex align-items-center w-100 justify-content-between">

                      <div className="catlinks">

                        <a href={`/categories/${cat.slug}`}>
                          <h3>{cat.name}</h3>
                        </a>

                        <a href={`/categories/${cat.slug}`}>
                          <span className="count-listings">
                            {cat.vendor_count} vendors
                          </span>
                        </a>

                      </div>

                      {/* ICON */}
                      <a href={`/categories/${cat.slug}`} className="icon">
                        <i className={cat.icon || "weddingdir_venue"}></i>
                      </a>

                    </div>

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

export default CategorySlider;