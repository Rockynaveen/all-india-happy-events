import {
    IconCake,
    IconShirt,
    IconIceCream2,
    IconFlower,
    IconMusic,
    IconDots
} from "@tabler/icons-react";

import { useState } from "react";

type HeroProps = {
    onSearch?: (category: string, location: string) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        if (!category || !location) {
            alert("Please select category and location");
            return;
        }

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

                            {/* FORM STYLE DIV (same as your HTML) */}
                            <div className="form-bg row no-gutters align-items-center">

                                {/* CATEGORY */}
                                <div className="col-12 col-md-5">
                                    <select
                                        className="form-light-select theme-combo home-select-1 py-2"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
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
                                <div className="col-12 col-md-5">
                                    <div className="px-2 w-100">
                                        <select
                                            className="form-light-select theme-combo home-select-2 py-2"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
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

                                <div className="col-12 col-md-2">
                                    <button
                                        type="button"
                                        onClick={handleSearch}
                                        className="btn btn-default text-nowrap btn-block w-100"
                                    >
                                        Search Now
                                    </button>
                                </div>

                            </div>

                            <p className="lead txt-white text-center">
                                Or browse featured categories
                            </p>

                            {/* ICONS */}
                            <div className="slider-category d-flex justify-content-center gap-4">

                                {categories.map((item, index) => (
                                    <a key={index} href="#" title={item.label}>
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