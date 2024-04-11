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
            <h2>Tokenomics - STFX</h2>
            <div className="header_divider"></div>
          </div>
        </div>
        <div className="row">
          {/* <div className="token_range">
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
          </div> */}
          <p className="stfx_discription mt-4">Tokenomics aimed to make STFX a sustainable token using the infrastructure of the
            SatoshiFX platform. We have spent countless hours in modelling and projecting the tokens
            future and its usage.
          </p>
        </div>

        <div className="projection_area">
          <div className="row align-items-center mt-5">
            <div className="col-lg-2 col-12
            ">
              <div className="left_stfs">
                <h3>STFXProjections</h3>
              </div>
            </div>
            <div className="col-lg-10 col-12">
              <div className="row">
                <div className="col-lg-4 col-4">
                  <div className="proj_card">
                    <h4>Revenue by Y3</h4>
                    <h2>$ 200M</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="proj_card">
                    <h4>Market Cap by Y5</h4>
                    <h2>$ 100 B</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="proj_card">
                    <h4>Private Equity (Series D)</h4>
                    <h2>$ 4 B</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-4">
                  <div className="proj_card">
                    <h4>Transaction Fees</h4>
                    <h2>0.5%</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="proj_card">
                    <h4>Total Circ Supply</h4>
                    <h2>4B STFX</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-4">
                  <div className="proj_card">
                    <h4>Value / Token (Y5)</h4>
                    <h2>$ 25</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="graph-discription">
                <p>We have divided tokenomics into the following areas, using our team of experts who have
                  launched multiple fintech ventures in their careers</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="graph_list">
                <ul>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span> Team</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span> Operations</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span> Listing & Liquidity</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span>  Public Sale</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span>   Private Sale</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span>  Rewards</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span> Advisory</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span> Technology Spend</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span> Marketing Spend</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span> Staking</li>
                  <li><span><img src="./check.png" alt="" width={"20px"} /></span>  Reserved Tokens</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="./stfx-graph.png" width={"100%"} alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
