import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <section className="community-sec padding-top-50 padding-bottom-50 foot">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="logo">
                <Link href="index.php">
                  <img
                    width={"150px"}
                    className="img-responsive"
                    src="./logo.png"
                    alt=""
                  />
                </Link>
              </div>
              <p className="mt-4">
              With a centralized crypto exchange, a decentralized exchange, a crypto-backed derivatives exchange, and over 2000+ liquidity-backed CFDs, SatoshiFX offers unparalleled opportunities for growth and investment. Join us as we embark on this transformative journey together. Join SatoshiFX—the future of money.
              </p>
              <div className="sm-intro mt-4">
                <h2>Join our community</h2>
                <ul className="socials">
                  <li>
                    <Link
                      to="https://www.facebook.com/Satoshifx-104004878827302/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/Satoshifx6" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://t.me/satoshifx" target="_blank">
                      <i className="fab fa-telegram-plane"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.reddit.com/user/satoshifx6"
                      target="_blank"
                    >
                      <i className="fab fa-reddit-alien" target="_blank"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/satoshifx6/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/satoshifxofficial/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.youtube.com/channel/UCAZsOOGl8sjL22T0ZvjBDig"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h2>Quick Links</h2>
              <ul className="links">
                <li>
                  <Link href="index.php">Overview</Link>
                </li>
                <li>
                  <Link href="index.php">About NSTF</Link>
                </li>
                <li>
                  <Link href="index.php">SatoshiFX</Link>
                </li>
                <li>
                  <Link href="index.php">Token</Link>
                </li>
                <li>
                  <Link href="index.php">Roadmap</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h2>Get in touch</h2>
              <p>
                <i className="fas fa-phone"></i>&nbsp;{" "}
                <Link href="tel:+44 20 38075111">+44 20 38075111</Link>
              </p>
              <p>
                <i className="fas fa-envelope"></i>&nbsp;{" "}
                <Link href="mailto:info@satoshifx.io">info@satoshifx.io</Link>
              </p>
              <p>
                <i className="fas fa-home"></i>&nbsp; <b>Satoshi FX LLC</b>{" "}
                <br /> Suite 305, Griffith corporate centre, Beachmont,
                Kingstown, St Vincent and the Grenadines.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>© Copyright 2024 SatoshiFX. All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
}
