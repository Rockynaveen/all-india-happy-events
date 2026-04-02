import type { FilterSectionType } from "../../types/pre-event-photographer/filter-type";

type Props = {
    data: FilterSectionType;
};

const FilterCard = ({ data }: Props) => {
    return (
        <div className="widget search-result-toggle">
            <a
                data-toggle="collapse"
                href={`#${data.id}`}
                role="button"
                aria-expanded="true"
                className="link"
            >
                <h3 className="widget-title">
                    {data.title} <i className="fa fa-angle-up"></i>
                </h3>
            </a>

            <div className="collapse show" id={data.id}>
                <div>
                    <div className="inner">

                        {data.inputPlaceholder && (
                            <p>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={data.inputPlaceholder}
                                />
                            </p>
                        )}

                        <ul className="list-unstyled">
                            {data.options.map((option, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type={data.type}
                                            name={data.id}
                                            value={option.value}
                                        />{" "}
                                        {option.label}
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <div className="view-all">
                            <a href="javascript:" className="btn btn-link-default p-0">
                                + View More
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;