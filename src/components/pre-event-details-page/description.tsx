import { descriptionData } from "../../data/pre-event-photographer/pre-event-details/description-data";

const DescriptionSection = () => {
    return (
        <div className="card-shadow pos-rel">

            <a id="description" className="anchor-fake"></a>

            <div className="card-shadow-header">
                <h3>
                    <i className="fa fa-file-text"></i> Description
                </h3>
            </div>

            <div className="card-shadow-body">
                {descriptionData.paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>

        </div>
    );
};

export default DescriptionSection;