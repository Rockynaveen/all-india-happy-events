import logo from "../assets/images/logo_all_happy_events.png";

import {
    IconBrandFacebook,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandInstagram,
} from "@tabler/icons-react";

const Footer = () => {
    return (
        <footer>

            <div className="rr-footer-2-main p-relative fix px-4">

                {/* FOOTER AREA */}
                <div className="rr-footer-2-area pt-85 py-3 p-relative fix">
                    <div className="container-fluid">

                        <div className="rr-footer-2-border">
                            <div className="row gx-30">

                                {/* LOGO + ABOUT */}
                                <div className="col-12 col-md-6 col-lg-4 mb-50">
                                    <div className="rr-footer-2-widget footer-cols-1">

                                        <div className="rr-footer-2-logo pb-20">
                                            <a href="#">
                                                <img
                                                    src={logo}
                                                    className="Footer_logo"
                                                    alt="logo"
                                                />
                                            </a>
                                        </div>

                                        <div className="rr-footer-2-widget-content mb-25">
                                            <p>
                                                Your trusted partner for matrimony services and event planning,
                                                offering seamless coordination, personalized support, and memorable experiences for every celebration.
                                            </p>
                                        </div>

                                        {/* SOCIAL */}
                                        <div className="rr-footer-2-social d-flex align-items-center gap-3">
                                            <span>Follow Us :</span>

                                            <a href="#"><IconBrandFacebook size={22} /></a>
                                            <a href="#"><IconBrandLinkedin size={22} /></a>
                                            <a href="#"><IconBrandTwitter size={22} /></a>
                                            <a href="#"><IconBrandInstagram size={22} /></a>
                                        </div>

                                    </div>
                                </div>

                                {/* INFORMATION */}
                                <div className="col-12 col-md-6 col-lg-4 mb-50">
                                    <div className="rr-footer-2-widget footer-cols-2">

                                        <h4 className="rr-footer-2-title">Information</h4>

                                        <ul className="p-0">
                                            <li><a href="Venues_list.html">Venues</a></li>
                                            <li><a href="Vendors_list.html">Vendors</a></li>
                                            <li><a href="photos.html">Photos</a></li>
                                            <li><a href="real_wedding.html">Real Weddings</a></li>
                                            <li><a href="blogs_list.html">Blog</a></li>
                                        </ul>

                                    </div>
                                </div>

                                {/* CONTACT */}
                                <div className="col-12 col-md-6 col-lg-4 mb-50">
                                    <div className="rr-footer-2-widget footer-cols-1">

                                        <h4 className="rr-footer-2-title">Contact</h4>

                                        <div className="rr-footer-2-widget-content mb-25">
                                            <p>
                                                Would you have any enquiries. Please feel free to contact us
                                            </p>

                                            <div className="rr-footer-2-widget-content-item">
                                                <span>Email:</span>
                                                <a href="#">allhappyevents@gmail.com</a>
                                            </div>

                                            <div className="rr-footer-2-widget-content-item">
                                                <span>Phone:</span>
                                                <a href="#">+91 987 654 3210</a>
                                            </div>

                                            <div className="rr-footer-2-widget-content-item">
                                                <span>Location:</span>
                                                <a href="#">Hyderabad - India</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="rr-copyright-2-area p-relative">
                <div className="container rr-copyright-2-broder rr-copyright-2-space">

                    <div className="row text-center">
                        <div className="col-12">
                            <p>
                                © 2025 <a href="#">All Happy Events</a> All Rights Reserved.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;