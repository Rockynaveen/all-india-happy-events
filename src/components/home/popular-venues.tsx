import VenueCard from "./venue-card";

type Venue = {
  id: number;
  name: string;
  image: string;
  location: string;
  price: string;
};

const PopularVenues = ({ venues }: { venues?: Venue[] }) => {
  if (!venues || venues.length === 0) return null;

  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center mb-4">Popular Venues</h2>

        <div className="row">
          {venues.slice(0, 6).map((venue) => (
            <div key={venue.id} className="col-md-4 mb-4">
              <VenueCard venue={venue} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularVenues;