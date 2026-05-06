import { useEffect, useState } from "react";
import { getPopularCategories } from "../../services/category-service";
import type { PopularCategory } from "../../services/category-service";

const CategoriesSection = () => {
  const [categories, setCategories] = useState<PopularCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getPopularCategories();
        setCategories(data.slice(0, 3)); // only 3
      } catch (err) {
        console.error("Categories error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <section className="wide-tb-120">
      <div className="container-fluid">
        <div className="section-title text-center">
          <h1>All Vendor Categories</h1>
          <p>Your trusted partners across every category</p>
        </div>

        {/* ✅ ROW START */}
        <div className="row">
          {categories.map((cat) => (
            <div className="col-lg-6 col-md-6 mb-4" key={cat.id}>
              <a
                href={
                  cat.slug === "venues"
                    ? "/venues-list"
                    : `/vendors-list/${cat.slug}`
                }
                className="vc-item"
              >
                <img
                  src={cat.image || "/assets/images/default-category.png"}
                  alt={cat.name}
                />
                <div className="vc-label">{cat.name}</div>
              </a>
            </div>
          ))}
        </div>
        {/* ✅ ROW END */}

      </div>
    </section>
  );
};

export default CategoriesSection;