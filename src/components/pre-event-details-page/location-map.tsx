// components/location/LocationMap.tsx

const LocationMap = () => {
    return (
        <div id="map_extended" className="vendor-single-popup-wrap">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34241436512!2d78.24288670790011!3d17.41228073140082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1764328293262!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default LocationMap;