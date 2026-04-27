import { Link } from "react-router-dom";

const RealWeddingCard = ({ wedding }: any) => {
  if (!wedding) return null;

  return (
    <Link
      to={`/real-weddings/${wedding.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }} // ✅ IMPORTANT FIX
    >
      <div className="card shadow-sm h-100" style={{ cursor: "pointer" }}>

        <img
          src={wedding.thumbnail}
          alt={wedding.title}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5>{wedding.title}</h5>
          <p className="text-muted">{wedding.city}</p>
          <small>{wedding.wedding_date}</small>
        </div>

        <div className="row p-2">
          {wedding.galleries?.map((img: string, i: number) => (
            <div key={i} className="col-4">
              <img
                src={img}
                className="img-fluid rounded"
                style={{ height: "60px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

      </div>
    </Link>
  );
};

export default RealWeddingCard;