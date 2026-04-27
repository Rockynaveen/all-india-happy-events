import WeddingCard from "./wedding-cards";
<<<<<<< HEAD
import { weddings } from "../data/wedding-data";
=======
// import { weddings } from "../data/wedding-data";
>>>>>>> cb3e55f (final commit)

const RealWeddings = () => {
    return (
        <section className="wide-tb-120">
            <div className="container">

                {/* TITLE */}
                <div className="section-title text-center">
                    <h1>Real Weddings</h1>
                    <p>Beautiful love stories from couples across India</p>
                </div>

                {/* CARDS */}
                <div className="row">
                    {weddings.map((wedding, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <WeddingCard {...wedding} />
                        </div>
                    ))}
                </div>

                {/* BUTTON */}
                <div className="text-center">
                    <a href="#" className="btn btn-default btn-rounded btn-lg">
                        View More Real Weddings
                    </a>
                </div>

            </div>
        </section>
    );
};

export default RealWeddings;