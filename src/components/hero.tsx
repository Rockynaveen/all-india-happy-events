import {
    IconCake,
    IconShirt,
    IconIceCream2,
    IconFlower,
    IconMusic,
    IconDots
} from "@tabler/icons-react";

import SearchBar from "./searchbar";

type HeroProps = {
    onSearch?: (category: string, location: string) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
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
                        <div className="col-xl-10 col-lg-12 mx-auto text-center">

                            <h1>
                                Find Most Trusted Vendors for All Your Celebrations
                            </h1>

                            <p className="lead txt-white">
                                Explore verified venues, photographers, makeup artists, and more —
                                with genuine reviews and transparent pricing.
                            </p>

                            {/* ✅ SEARCH BAR */}
                            <SearchBar onSearch={onSearch} />

                            <p className="lead txt-white mt-4">
                                Or browse featured categories
                            </p>

                            {/* ICONS */}
                            <div className="slider-category d-flex justify-content-center gap-4 mt-3">
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