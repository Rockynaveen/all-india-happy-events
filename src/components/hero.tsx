import {
    IconCake,
    IconShirt,
    IconIceCream2,
    IconFlower,
    IconMusic,
    IconDots
} from "@tabler/icons-react";

type HeroProps = {
    onSearch?: (category: string, location: string) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const category = formData.get("category") as string;
        const location = formData.get("location") as string;

        onSearch?.(category, location);
    };

    const categories = [
        { icon: <IconCake size={28} />, label: "Cake" },
        { icon: <IconShirt size={28} />, label: "Fashion" },
        { icon: <IconIceCream2 size={28} />, label: "Desserts" },
        { icon: <IconFlower size={28} />, label: "Flowers" },
        { icon: <IconMusic size={28} />, label: "Music" },
        { icon: <IconDots size={28} />, label: "More" }
    ];

    return (
        <section className="slider-wrap style-second">
            <div className="slider-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 mx-auto">

                            <h1>
                                Find Most Trusted Vendors for All Your Celebrations
                            </h1>

                            <p className="lead txt-white text-center">
                                Explore verified venues, photographers, makeup artists, and more —
                                with genuine reviews, transparent pricing, and real availability.
                            </p>

                            {/* FORM */}
                            <form
                                className="form-bg row align-items-center"
                                onSubmit={handleSubmit}
                            >

                                {/* CATEGORY */}
                                <div className="col-12 col-md-5 select-1">
                                    <select
                                        name="category"
                                        className="form-light-select theme-combo home-select-1 py-2"
                                    >
                                        <option value="">Select Vendor Category</option>
                                        <option value="Wedding Venues">Wedding Venues</option>
                                        <option value="Photographers">Photographers</option>
                                        <option value="Bridal Makeup">Bridal Makeup</option>
                                        <option value="Decor & Planning">Decor & Planning</option>
                                        <option value="Catering Services">Catering Services</option>
                                    </select>
                                </div>

                                {/* LOCATION */}
                                <div className="col-12 col-md-5 select-2">
                                    <div className="px-2 w-100">
                                        <select
                                            name="location"
                                            className="form-light-select theme-combo home-select-2 py-2"
                                        >
                                            <option value="">Select Location</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                            <option value="Vijayawada">Vijayawada</option>
                                            <option value="Chennai">Chennai</option>
                                            <option value="Bengaluru">Bengaluru</option>
                                            <option value="Mumbai">Mumbai</option>
                                        </select>
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <div className="col-12 col-md-2">
                                    <button
                                        type="submit"
                                        className="btn btn-default text-nowrap w-100"
                                    >
                                        Search Now
                                    </button>
                                </div>

                            </form>

                            <p className="lead txt-white text-center">
                                Or browse featured categories
                            </p>

                            {/* ICONS */}
                            <div className="slider-category d-flex justify-content-center gap-4">

                                {categories.map((item, index) => (
                                    <a key={index} href="#">
                                        {item.icon}
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