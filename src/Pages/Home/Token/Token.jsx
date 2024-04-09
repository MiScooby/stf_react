import React from "react";
import "./token.css";
const Range = ({ value, range, color, title }) => {
  return (
    <div className="rangeWrapper" style={{ width: range }}>
      <div className="range" style={{ backgroundColor: color }}>
        {value}
      </div>
      <span>{title}</span>
    </div>
  );
};

export default function Token() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="about_title">
            <h2>NSTF Token Structure</h2>
            <div className="header_divider"></div>
          </div>
        </div>
        <div className="row">
          <div className="token_range">
            <Range
              value="90%"
              range="70%"
              color="#a515af"
              title="Distributed to community"
            />
            <Range
              value="15%"
              range="15%"
              color="#590ec6"
              title="Reserved Funding"
            />
            <Range
              value="9%"
              range="20%"
              color="#003dff"
              title="Founders and team"
            />
            <Range value="3%" range="15%" color="#00a1ff" title="Advisors" />
            <Range
              value="3%"
              range="15%"
              color="#00c4ff"
              title="Bounty Campaign"
            />
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-sm-8">
            <div className="row borb-bottom">
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Pre Sale</h5>
                  <p>
                    17th of December 2017/2PM UTC to 5th of may 2018 / 2PM UTC
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Pre Sale</h5>
                  <p>
                    17th of December 2017/2PM UTC to 5th of may 2018 / 2PM UTC
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Supply</h5>
                  <p>
                    500,000,000
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Accepted Currency</h5>
                  <p>
                    ETH, BTC, and Write Transfer
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Price</h5>
                  <p>
                    500,000,000
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Token Distribution Date</h5>
                  <p>
                   5th August 2018
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Maximum</h5>
                  <p>
                    Hard cap : $47,000,000
                    SOft cap : $1,000,000
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="inodo">
                  <h5>Emission Rate</h5>
                  <p>
                   No new tokens will be
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="sideEp">
                <img src="./Home/unicorn.svg" width={'50px'} className="mb-3" alt="" />
                <h4>ICO Participants</h4>
                <p>310,000+</p>
            </div>
            <div className="sideEp bg2srb">
            <img src="./Home/unicorn.svg" width={'50px'} className="mb-3" alt="" />
                <h4>ICO Participants</h4>
                <p>310,000+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
