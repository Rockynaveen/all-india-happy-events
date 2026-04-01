// src/components/planner/PlannerSection.tsx

import React from "react";
import PlannerCard from "../pre-event-photographer/contact-card";
import { plannerData } from "../../data/pre-event-photographer/contact-data"

const PlannerSection: React.FC = () => {
  return (
    <section className="wedding-contact-modern">
      <div className="container">
        <div className="intro-box">
          <h2>Our Personal Wedding Planner</h2>
          <p className="desc">
            Explore inspiration, compare vendors, plan events, and craft the
            unforgettable celebration you dream of.
          </p>
        </div>

        <div className="content-grid">
          {plannerData.map((card, index) => (
            <PlannerCard key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlannerSection;