import React from "react";
import SliderImages from "./slider";
import sliderImages from "../../data/pre-event-photographer/pre-event-details/slider-data";

type Props = {
  activeTab: string;
};

const VendorContent: React.FC<Props> = ({ activeTab }) => {
  return (
    <section className="vendor-single-slider">

      {activeTab === "slider" && (
        <SliderImages images={sliderImages} />
      )}

      {activeTab === "gallery" && (
        <div className="single-img">Gallery Content</div>
      )}

      {activeTab === "street" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1764565030993"
          width="100%"
          height="450"
        ></iframe>
      )}

      {activeTab === "video" && (
        <div className="slider-frame">
          <iframe
            src="https://www.youtube.com/embed/KJwDhHFMicc"
            title="video"
          ></iframe>
        </div>
      )}

      {activeTab === "map" && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="450"
        ></iframe>
      )}

    </section>
  );
};

export default VendorContent;