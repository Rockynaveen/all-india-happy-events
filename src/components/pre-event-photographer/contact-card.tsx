// src/components/planner/PlannerCard.tsx

import React from "react";
import type { PlannerCard as PlannerCardType } from "../../types/pre-event-photographer/contact-type";

type Props = {
    data: PlannerCardType;
};

const PlannerCard: React.FC<Props> = ({ data }) => {
    return (
        <div className="info-card">
            <h3>{data.title}</h3>
            <p>{data.description}</p>

            {/* CONTACT */}
            {data.type === "contact" && data.contacts && (
                <div className="contact-dual">
                    {data.contacts.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <div key={i}>
                                <h4>
                                    <Icon size={16} /> {c.label}
                                </h4>
                                <p>{c.email}</p>
                                <p>{c.phone}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* OFFICE */}
            {data.type === "office" && (
                <div className="map-block">
                    {data.mapIcon && <data.mapIcon size={18} />} {data.address}
                </div>
            )}

            {/* SUBSCRIBE */}
            {data.type === "subscribe" && (
                <>
                    <input
                        type="email"
                        placeholder={data.inputPlaceholder}
                        className="subscribe-email"
                    />
                </>
            )}

            {/* SOCIAL */}
            {data.type === "social" && data.socials && (
                <div className="social-icons">
                    {data.socials.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <a href={s.link} key={i}>
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>
            )}

            {/* BUTTON */}
            {data.buttonText && (
                <button className="btn btn-default  mt-3">
                    {data.buttonText}
                </button>
            )}
        </div>
    );
};

export default PlannerCard;