// RoadmapComponent.js

import React from "react";
import "./RoadmapComponent.css"; // Import your CSS file

const Milestone = ({ title, date, description, completed }) => (
  <div className={`milestone ${completed ? "completed" : ""}`}>
    <div className="_road_map_card d-flex">
      <div className="date">
        <p> {date}</p>
        <h3>{title}</h3>
      </div>
      <div className="hny_creative">
        <div className="round_sr"></div>
        <div className="bott_line_sr"></div>
      </div>
      <div className="rigt_dis">
        <div className="description">
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  </div>
);

const RoadmapComponent = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="about_title">
            <h2>What stage we are at ?</h2>
            <div className="header_divider"></div>
          </div>
        </div>
        <div className="row">
          <div className="roadmap">
            <div className="milestones">
              <Milestone
                title="Stealth Mode"
                date="December 2020"
                description="Ideation, Platform development, MVP, Regulatory compliance, team and advisory
          board."
                completed={true}
              />
              <Milestone
                title="Fundraise - 5M$"
                date="July 2021"
                description="Commencement of Marketing - 10k  Community"
                completed={true}
              />
              <Milestone
                title="Minimum Viable Product"
                date="Jan 2022"
                description="20k Community, MetaTrader 5 based CEX, Marketing & Partnerships"
                completed={true}
              />
              <Milestone
                title="Minimum Billable Product"
                date="April 2023"
                description="Derivatives Exchange, DEX, Blockchain, Tokenomics"
                completed={true}
              />
              <Milestone
                title="Fundraise - 10M$"
                date="January 2024"
                description="Blockchain Development, SatoshiFX Payment system"
                completed={true}
              />
              <Milestone
                title="Beta Testing"
                date="March 2024"
                description="Private Round - Token Offering NSTF"
                completed={true}
              />
              <Milestone
                title="Public Round"
                date="August 2024"
                description="Release of CEX, DEX and Derivatives"
                completed={false}
              />
              <Milestone
                title="SatoshiFX Payments"
                date="January 2025"
                description="Mastercard with Apple Pay, IBAN Numbers, Banking accounts"
                completed={false}
              />
              <Milestone
                title="$25M Market Cap"
                date="July 2025"
                description="SatoshiFX Blockchain, DAPPS, Fork of Token, Developer ecosystem"
                completed={false}
              />
              <Milestone
                title="Degoogled Android Phones"
                date="January 2026"
                description="SatoshiPhone with Dapp store for taxi, food, rentals, jobs etc."
                completed={false}
              />
              <Milestone
                title="$100M Market Cap"
                date="October 2026"
                description="100k Community, usage, maturity and scaling of products."
                completed={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapComponent;
