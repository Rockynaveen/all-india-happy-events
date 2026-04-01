import React from "react";
import type { FAQTab } from "../../types/pre-event-photographer/faq-type";

type Props = {
    tabs: FAQTab[];
};

const FAQTabs: React.FC<Props> = ({ tabs }) => {
    return (
        <>
            {/* Tabs */}
            <ul className="nav nav-pills mb-3 horizontal-tab-second justify-content-center nav-fill">
                {tabs.map((tab, index) => (
                    <li className="nav-item" key={tab.id}>
                        <button
                            className={`nav-link ${index === 0 ? "active" : ""}`}
                            data-bs-toggle="pill"
                            data-bs-target={`#${tab.id}`}
                        >
                            {tab.title}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {tabs.map((tab, tabIndex) => (
                    <div
                        key={tab.id}
                        className={`tab-pane fade ${tabIndex === 0 ? "show active" : ""
                            }`}
                        id={tab.id}
                    >
                        <h3 className="mt-5 mb-4 fw-7 text-center">
                            {tab.heading}
                        </h3>

                        <div className="accordion">
                            {tab.items.map((item, i) => {
                                const collapseId = `${tab.id}-collapse-${i}`;

                                return (
                                    <div key={i}>
                                        <div className="card-header">
                                            <button
                                                className="btn btn-link"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${collapseId}`}
                                            >
                                                {item.question}
                                            </button>
                                        </div>

                                        <div
                                            id={collapseId}
                                            className={`collapse ${i === 0 ? "show" : ""}`}
                                        >
                                            <div className="card-body">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQTabs;