import React from "react";
import "./bonus.css";
export function Bonus() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="about_title">
              <h2>Bonus Sturcture</h2>
              <div className="header_divider"></div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="cardSrb">
                <h4>Private Sale</h4>
                <p>
                  <img src="./check.svg" alt="" />
                  50% discount on purchase amounts above 50,000$
                </p>
              </div>
            </div>
             <div className="col-md-12 col-lg-6">
              <div className="cardSrb">
                <h4>Pre Sale</h4>
                <p>
                  <img src="./check.svg" alt="" />
                  30% discount on purchase amounts above 10,000$
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
