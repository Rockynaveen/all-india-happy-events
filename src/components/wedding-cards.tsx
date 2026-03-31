import type { Wedding } from "../types/wedding-type";

type Props = Wedding;

const WeddingCard = ({ title, location, date, mainImg, gallery }: Props) => {
    return (
        <div className="real-wedding-wrap top-heading">

            <div className="real-wedding">

                {/* HEADER */}
                <div className="head">
                    <h3>
                        <a href="#">{title}</a>
                    </h3>
                    <p>
                        <i className="fa fa-map-marker"></i> {location}
                    </p>
                </div>

                {/* MAIN IMAGE */}
                <div className="img">
                    <div className="overlay">Our Story</div>

                    <a href="#">
                        <img src={mainImg} alt={title} />
                    </a>

                    <div className="date">{date}</div>
                </div>

                {/* GALLERY */}
                <ul className="list-unstyled gallery">
                    {gallery.map((img, i) => (
                        <li key={i}>
                            <a href="#">
                                <img src={img} alt="gallery" />
                            </a>
                        </li>
                    ))}

                    <li>
                        <a href="#">
                            <div className="load-more">
                                Load <br /> More
                            </div>

                            <img src={gallery[2] || gallery[0]} alt="more" />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default WeddingCard;