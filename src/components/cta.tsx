const CalloutSection = () => {
    return (
        <section className="call-out-bg">

            {/* Overlay */}
            <div className="overlay"></div>

            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT TEXT */}
                    <div className="col-lg-6">
                        <h1 className="mb-md-0 txt-white">
                            Planning Your Big Day? Find Trusted Wedding Vendors Instantly
                        </h1>
                    </div>

                    {/* RIGHT BUTTONS */}
                    <div className="col-lg-6 text-lg-right mt-lg-0 mt-md-4">

                        <a href="#" className="btn btn-default btn-rounded btn-lg mr-3 mb-3">
                            Get Started
                        </a>

                        <a href="#" className="btn btn-outline-default btn-rounded btn-lg mb-3">
                            Explore Services
                        </a>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default CalloutSection;