import  GalleryItem from "./gallery-item";
import { galleryData } from "../../data/pre-event-photographer/pre-event-details/gallery-data";

const GallerySection = () => {
    return (
        <div className="card-shadow pos-rel">

            <a id="gallery" className="anchor-fake"></a>

            <div className="card-shadow-header">
                <h3>
                    <i className="fa fa-image"></i> Gallery
                </h3>
            </div>

            <div className="card-shadow-body">

                {/* Initial Images */}
                <div className="row vendor-img-gallery">
                    {galleryData.initial.map((item) => (
                        <GalleryItem key={item.id} item={item} />
                    ))}
                </div>

                {/* Collapsible Images */}
                <div id="vendor-img-gallery" className="collapse">
                    <div className="row vendor-img-gallery">
                        {galleryData.more.map((item) => (
                            <GalleryItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* Button */}
                <div className="gallery-btn">
                    <a
                        data-toggle="collapse"
                        href="#vendor-img-gallery"
                        role="button"
                        aria-expanded="false"
                        className="collapsed"
                    >
                        <i className="fa fa-angle-down"></i>
                        <span>View More</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default GallerySection;