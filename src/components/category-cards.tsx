

type Props = {
  category: {
    title: string;
    vendors: number;
    image: string;
    icon: string;
  };
};

export default function CategoryCard({ category }: Props) {
  return (
    <div className="item">
      <div className="popular-categories">
        <img src={category.image} alt={category.title} />

        <div className="content-wrap">
          <div className="content">
            <div className="mt-auto d-flex align-items-center w-100 justify-content-between">
              
              <div className="catlinks">
                <a href="#">
                  <h3>{category.title}</h3>
                </a>
                <a href="#">
                  <span className="count-listings">
                    {category.vendors} vendors
                  </span>
                </a>
              </div>

              <a href="#" className="icon">
                <i className={category.icon}></i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}