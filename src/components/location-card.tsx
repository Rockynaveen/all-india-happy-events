type Props = {
    name: string;
    listings: string;
    img: string;
};

const LocationCard = ({ name, listings, img }: Props) => {
    return (
        <div className="popular-locations-alternate">

            <div className="overlay-box">
                <div className="mt-auto">
                    <h3>
                        <span>{name}</span>
                        <span>{listings}</span>
                    </h3>
                </div>
            </div>

            <img src={img} alt={name} />

        </div>
    );
};

export default LocationCard;