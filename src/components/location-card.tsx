type Props = {
    name: string;
    listings: string;
    image: string;
};

export default function LocationCard({ name, listings, image }: Props) {
    return (
        <div className="col-md-6 col-lg-3 col-xl-4">
            <div className="popular-locations-alternate">
                <div className="overlay-box">
                    <div className="mt-auto">
                        <h3>
                            <a href="#">{name}</a>
                            <span>{listings}</span>
                        </h3>
                    </div>
                </div>
                <img src={image} alt={name} />
            </div>
        </div>
    );
}