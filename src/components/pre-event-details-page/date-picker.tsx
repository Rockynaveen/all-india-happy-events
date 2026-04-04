import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Availability = () => {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="widget mb-5">
            <h3 className="widget-title">Availability</h3>

            <div className="datepicker-inline">
                <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    inline
                />
            </div>
        </div>
    );
};

export default Availability;