import partner1 from "../assets/images/partners/partners_img_1.png";
import partner2 from "../assets/images/partners/partners_img_2.png";
import partner3 from "../assets/images/partners/partners_img_3.png";
import partner4 from "../assets/images/partners/partners_img_4.png";
import partner5 from "../assets/images/partners/partners_img_5.png";

const Partners = () => {

    const partners = [
        partner1,
        partner2,
        partner3,
        partner4,
        partner5
    ];

    return (
        <section className="wide-tb-90 bg-light">
            <div className="container">

                {/* TITLE */}
                <div className="section-title text-center">
                    <h1>Our Trusted Partners</h1>
                    <p>Associated with leading brands that power seamless wedding planning</p>
                </div>

                {/* SIMPLE SLIDER / SCROLL */}
                <div className="d-flex overflow-auto gap-4 py-3 partners-slider-wrapper">

                    {partners.map((img, index) => (
                        <div key={index} className="partners-slider flex-shrink-0 mx-2">
                            <img src={img} alt={`partner-${index}`} />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Partners;