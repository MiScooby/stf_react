import { Link } from "react-router-dom";
import './finance.css'
export function Finance() {
  return (
    <section className="bank">
      <div className="container">
        <div className="row">
          <div className="about_title">
            <h2>The Crypto NEO Bank</h2>
            <div className="header_divider"></div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-5 text-center">
            <img src="./Home/graph_11.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <div className="text-part">
              <p>
                At SatoshiFX we have already invested close to $11 Million in
                building our products and solutions to be a seamless cross
                border financial ecosystem.
              </p>
              <p>
                Our final goal is to become the biggest and most reliable home
                for everything in the crypto finance ecosystem.
              </p>
            </div>
            <div className="hero-utils">
               
              <Link className="hny_common_btn" to="">
                Join Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
