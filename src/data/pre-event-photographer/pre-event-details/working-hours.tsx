import { workingHoursData } from "../../../data/pre-event-photographer/pre-event-details/working-hours-data";

const WorkingHours = () => {
    return (
        <div className="sidebar-secondary col-lg-12 col-md-6">
            <div className="widget mb-5">
                <h3 className="widget-title">Working Hours</h3>

                {workingHoursData.map((item, index) => (
                    <div
                        key={index}
                        className={`d-flex align-items-center justify-content-between ${index !== workingHoursData.length - 1 ? "mb-3" : ""
                            }`}
                    >
                        <span>{item.day}</span>
                        <span className="badge border rounded p-2">
                            {item.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingHours;