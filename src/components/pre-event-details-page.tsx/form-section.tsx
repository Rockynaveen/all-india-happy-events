import { useState } from "react";
import type { VendorFormData } from "../../types/pre-event-photographer/pre-event-details/form-type";

const VendorForm = () => {
    const [form, setForm] = useState<VendorFormData>({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
        contactMethod: "call",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <aside className="sidebar-widgets w-100">

            <div className="sidebar-primary">

                <div className="widget mb-5">
                    <h3 className="widget-title">Message Vendor</h3>

                    <div className="request-quote-form">

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="First and last name"
                                className="form-control"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone Number"
                                className="form-control"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group pos-rel">
                            <input
                                type="text"
                                name="date"
                                className="form-control datepicker"
                                placeholder="Choose Date"
                                value={form.date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                rows={6}
                                name="message"
                                placeholder="Your message"
                                className="form-control"
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <p>
                                <strong>
                                    <small className="txt-orange">
                                        Preferred Contact Method
                                    </small>
                                </strong>
                            </p>

                            <div className="custom-control custom-radio custom-control-inline mb-3">
                                <input
                                    type="radio"
                                    id="customRadioInline1"
                                    name="contactMethod"
                                    value="call"
                                    className="custom-control-input"
                                    checked={form.contactMethod === "call"}
                                    onChange={handleChange}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customRadioInline1"
                                >
                                    Call
                                </label>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline mb-3">
                                <input
                                    type="radio"
                                    id="customRadioInline2"
                                    name="contactMethod"
                                    value="email"
                                    className="custom-control-input"
                                    checked={form.contactMethod === "email"}
                                    onChange={handleChange}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customRadioInline2"
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <small className="form-text text-muted">
                                By clicking{" "}
                                <span className="txt-orange">'Request pricing'</span>, I agree
                                to WeddingDir’s{" "}
                                <a href="#">Privacy Policy</a> and{" "}
                                <a href="#">Terms of Use</a>
                            </small>
                        </div>

                        <button type="button" className="btn btn-primary w-100">
                            Request Pricing
                        </button>

                    </div>
                </div>

            </div>

        </aside>
    );
};

export default VendorForm;