import { useState, useEffect } from "react";
import NavItem from "./nav";
import { navItems } from "../../data/pre-event-photographer/pre-event-details/nav-data";

const VendorNav = () => {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            navItems.forEach((item) => {
                const section = document.getElementById(item.id);

                if (section) {
                    const top = section.offsetTop - 100;
                    const bottom = top + section.offsetHeight;

                    if (window.scrollY >= top && window.scrollY < bottom) {
                        setActive(item.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container vendor-nav-sticky">
            <div className="vendor-nav">
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        icon={item.icon}
                        isActive={active === item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default VendorNav;