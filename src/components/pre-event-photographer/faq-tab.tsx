import React from "react";
import type { FAQCategory } from "../../types/pre-event-photographer/faq-type";

type Props = {
    tabs: FAQCategory[];
};

const FAQTabs: React.FC<Props> = ({ tabs }) => {
    return (
        <section className="wide-tb-90 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">

                        {/* Tabs Navigation */}
                        <ul className="nav nav-pills mb-3 justify-content-center nav-fill">
                            {tabs.map((tab, index) => (
                                <li className="nav-item" key={tab.id}>
                                    <button
                                        className={`nav-link ${index === 0 ? "active" : ""}`}
                                        data-bs-toggle="pill"
                                        data-bs-target={`#${tab.id}`}
                                        type="button"
                                    >
                                        {tab.title}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Tabs Content */}
                        <div className="tab-content">
                            {tabs.map((tab, tabIndex) => (
                                <div
                                    key={tab.id}
                                    className={`tab-pane fade ${tabIndex === 0 ? "show active" : ""}`}
                                    id={tab.id}
                                >
                                    <h3 className="mt-5 mb-4 text-center fw-bold">
                                        {tab.title}
                                    </h3>

                                    <div className="accordion" id={`accordion-${tab.id}`}>
                                        {tab.faqs.map((item, i) => {
                                            const collapseId = `${tab.id}-${item.id}`;

                                            return (
                                                <div key={item.id} className="mb-2">

                                                    {/* Question */}
                                                    <div className="card-header">
                                                        <button
                                                            className={`btn w-100 text-start ${i !== 0 ? "collapsed" : ""}`}
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${collapseId}`}
                                                            aria-expanded={i === 0 ? "true" : "false"}
                                                        >
                                                            {item.question}
                                                        </button>
                                                    </div>

                                                    {/* Answer */}
                                                    <div
                                                        id={collapseId}
                                                        className={`collapse ${i === 0 ? "show" : ""}`}
                                                        data-bs-parent={`#accordion-${tab.id}`}
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

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQTabs;