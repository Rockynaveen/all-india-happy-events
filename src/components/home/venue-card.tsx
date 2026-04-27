type Venue = {
  id: number;
  name: string;
  image: string;
  location: string;
  price: string;
};

const VenueCard = ({ venue }: { venue: Venue }) => {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={venue.image}
        alt={venue.name}
        className="card-img-top"
      />

      <div className="card-body">
        <h5>{venue.name}</h5>
        <p className="text-muted">{venue.location}</p>
        <p className="fw-bold">{venue.price}</p>
      </div>

    </div>
  );
};

export default VenueCard;