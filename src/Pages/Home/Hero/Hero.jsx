import React from "react";
import './hero.css'
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="SrbHeroSection">
      <div className="container">
        <div className="row">
          <div className="top-hero-head">
            <div className="section-head">
              <h2>World’s Smartest Crypto Backed Financial Ecosystem.</h2>
            </div>
            <div className="text-part">
              <p>
                SatoshiFX is an ecosystem of financial products including a CEX,
                DEX and Derivatives trading platform allowing users to
                seamlessly access thousands of financial assets using the ease
                and speed of crypto.
              </p>
            </div>
            <div className="hero-utils">
              <Link className="hny_common_btn light me-2" to="">
                Download Whitepaper
              </Link>
              <Link className="hny_common_btn" to="">
                Get Whitelisted
              </Link>
              <div className="youTubbtn">
                <img src="./Home/play.svg" alt="" />
                <span>Watch Now</span>
              </div>
            </div>
          </div>
          <div className="btm-hero-part">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h4>Pre-Sale Starting in:</h4>
                <p>3 Months</p>
              </div>
              <div className="col-sm-6">
                <div className="srb-range">
                  <div className="static-range-container">
                    <div className="softcap">Softcap = 10M USD</div>
                    <div className="hardcap">Hardcap = 25M USD</div>
                    <div className="range-bar">
                      <div
                        className="range-indicator" 
                      > 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
