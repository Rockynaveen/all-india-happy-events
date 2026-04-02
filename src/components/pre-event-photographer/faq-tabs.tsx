import React, { useState } from "react";
import { photographerTabs } from "../../data/pre-event-photographer/faq-data";
import AccordionItem from "../pre-event-photographer/accordion";

const PhotographerTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("general");
    const [openItem, setOpenItem] = useState<string>("");

    const currentTab = photographerTabs.find(
        (tab) => tab.id === activeTab
    );

    return (
        <section className="wide-tb-90 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">

                        {/* Tabs */}
                        <ul className="nav nav-pills mb-3 horizontal-tab-second justify-content-center nav-fill">
                            {photographerTabs.map((tab) => (
                                <li key={tab.id} className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === tab.id ? "active" : ""
                                            }`}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            setOpenItem("");
                                        }}
                                    >
                                        {tab.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Heading */}
                        <h3 className="mt-5 mb-4 fw-7 text-center">
                            {activeTab === "general"
                                ? "Wedding Photography Services & Tips"
                                : "Photographer Questions Might You Have"}
                        </h3>

                        {/* Accordion */}
                        <div className="accordion theme-accordian">
                            {currentTab?.faqs.map((faq) => (
                                <AccordionItem
                                    key={faq.id}
                                    item={faq}
                                    isOpen={openItem === faq.id}
                                    onClick={() =>
                                        setOpenItem(openItem === faq.id ? "" : faq.id)
                                    }
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotographerTabs;