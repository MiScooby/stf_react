import React from "react";
import { Link } from "react-router-dom";

export function Video() {
  return (
    <>
      <section className="about_section common_sec_padding">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 text-center">
              <div className="about_title mb-3">
                <h2>How to use</h2>
                <div className="header_divider"></div>
              </div>
              <div className="text-part text-center">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                  <br /> Accusamus eligendi provident perspiciatis blanditiis
                  vitae laudantium.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="/video_img.png" width={"100%"} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="main_video">
                <video width="100%" height="340" controls loop autoplay muted>
                  <source src="./satoshifx.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-sm-12 text-center">
              <Link
                className="hny_common_btn me-2"
                target="_blank"
                to="https://crm.satoshifx.com/derivative_demo/index.php?tab=BTC-PERPETUAL"
              >
                Click To Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
