import {
  IconBuilding,
  IconCamera,
  IconBrush,
  IconDots
} from "@tabler/icons-react";

type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

type HeroData = {
  title?: string;
  subtitle?: string;
  categories?: Category[];
};

type HeroProps = {
  data?: HeroData;
};

// 🔥 Map based on CATEGORY NAME
const iconMap: Record<string, JSX.Element> = {
  venues: <IconBuilding size={28} />,
  "photo & vedio graphers": <IconCamera size={28} />,
  makeup: <IconBrush size={28} />,
};

const getIcon = (name?: string) => {
  if (!name) return <IconDots size={28} />;

  const key = name.toLowerCase().trim();
  return iconMap[key] || <IconDots size={28} />;
};

const Hero = ({ data }: HeroProps) => {

  if (!data) {
    return (
      <section className="slider-wrap style-second">
        <div className="text-center py-5">Loading hero...</div>
      </section>
    );
  }

  return (
    <section className="slider-wrap style-second">
      <div className="slider-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 mx-auto text-center">

              {/* TITLE */}
              <h1>{data.title || "Find Trusted Event Services"}</h1>

              {/* SUBTITLE */}
              <p className="lead txt-white">
                {data.subtitle || "Explore venues, photographers, makeup artists and more"}
              </p>

              <p className="lead txt-white mt-4">
                Browse Categories
              </p>

              {/* 🔥 REAL CATEGORIES */}
              <div className="slider-category d-flex justify-content-center gap-4 mt-3 flex-wrap">

                {data.categories?.map((cat) => (
                  <a key={cat.id} href="#" title={cat.name}>
                    <div>{getIcon(cat.name)}</div>
                    <small>{cat.name}</small>
                  </a>
                ))}

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;