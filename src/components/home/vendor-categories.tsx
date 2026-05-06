import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/hero-servie";

const VendorCategories = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <p>Loading...</p>;

  // Flatten subcategories
  const subCategories = data.flatMap((cat: any) => cat.sub_categories || []);

  const getImage = (img: string) => {
    // API is sometimes returning invalid image like /storage
    if (!img || img.includes("/storage") && !img.includes(".jpg") && !img.includes(".png")) {
      return "/assets/images/placeholder.jpg";
    }
    return img;
  };

  const gridMap: any = {
    p1: subCategories[0],
    m1: subCategories[1],
    mehndi: subCategories[2],
    decorators: subCategories[3],
    caterers: subCategories[4],
    invites: subCategories[5],
    djs: subCategories[6],
    transport: subCategories[7],
    anchor: subCategories[8],
    choreo: subCategories[9],
    band: subCategories[10],
    gifting: subCategories[11],
    jewellery: subCategories[12],
  };

  const renderItem = (item: any, area: string, wide = false) => {
    if (!item) return null;

    return (
      <a
        href={`/vendors/${item.slug}`}
        className={wide ? "vc-item wide" : "vc-item"}
        style={{ gridArea: area }}
      >
        <img
          src={getImage(item.image)}
          alt={item.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.jpg";
          }}
        />
        <div className="vc-label">{item.name}</div>
      </a>
    );
  };

  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>All Vendor Categories</h1>
          <p>Your trusted partners across every category</p>
        </div>

        <div className="vc-grid">
          {renderItem(gridMap.p1, "p1", true)}
          {renderItem(gridMap.m1, "m1", true)}

          {renderItem(gridMap.mehndi, "mehndi")}
          {renderItem(gridMap.decorators, "decorators")}
          {renderItem(gridMap.caterers, "caterers")}

          {renderItem(gridMap.invites, "invites")}
          {renderItem(gridMap.djs, "djs")}
          {renderItem(gridMap.transport, "transport")}

          {renderItem(gridMap.anchor, "anchor")}
          {renderItem(gridMap.choreo, "choreo")}
          {renderItem(gridMap.band, "band")}

          {renderItem(gridMap.gifting, "gifting", true)}
          {renderItem(gridMap.jewellery, "jewellery", true)}
        </div>
      </div>
    </section>
  );
};

export default VendorCategories;