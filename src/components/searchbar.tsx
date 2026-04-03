import { useState } from "react";

type Props = {
    onSearch?: (category: string, location: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        if (!category || !location) {
            alert("Please select category and location");
            return;
        }

        onSearch?.(category, location);
    };

    return (
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

            {/* BUTTON */}
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
    );
};

export default SearchBar;