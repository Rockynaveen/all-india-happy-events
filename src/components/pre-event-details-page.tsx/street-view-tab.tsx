const StreetViewTab = () => {
    return (
        <div className="tab-pane" id="pills-streetview">
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1764565030993!6m8!1m7!1sOhO-jgPca6e2eUCNCtg1pg!2m2!1d17.25598142400053!2d78.67845724431658!3f12.114329817183906!4f1.778492374789849!5f0.4000000000000002"
                height="450px"
                width="100%"
            ></iframe>
        </div>
    );
};

export default StreetViewTab;