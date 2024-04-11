import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="SrbHeroSection">
      <div className="container">
        <div className="row ">
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


              <Link type="button" class="hny_common_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Get Whitelisted
              </Link>

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
                    <div className="softcap">Softcap = 2.2M USD</div>
                    <div className="hardcap">Hardcap = 25M USD</div>
                    <div className="range-bar">
                      <div className="range-indicator"></div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-6 col-12">
                <div className="mob-range">
                  <div className="d-flex justify-content-between">
                    <div className="typet">Softcap = 10M USD</div>
                    <div className="typet">Hardcap = 25M USD</div>
                  </div>
                  <div className="typet">PreSale Price 1 NSTF = 0.075$ </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content hny_sty">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Whitelist Now</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form className="whitelist_hny">
                <div className="row">

                  <div className="col-lg-6 col-6">
                    {/* <label for="exampleInputEmail1" class="form-label">Name</label> */}
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Name" />
                  </div>
                  <div className="col-lg-6 col-6">
                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                  </div>
                  <div className="col-lg-6 col-6 mt-2">
                    {/* <label for="exampleInputEmail1" class="form-label">Phone Number</label> */}
                    <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />
                  </div>
                  <div className="col-lg-6 col-6 mt-2">
                    {/* <label for="exampleInputEmail1" class="form-label">Telegram </label> */}
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telegram" />
                  </div>
                  <div className="col-lg-12 col-12 mt-2">
                    {/* <label for="exampleInputEmail1" class="form-label">Solana Wallet ID </label> */}
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Solana Wallet ID" />
                  </div>
                  <div className="col-lg-12 col-12 mt-2 ">
                    <label for="exampleInputEmail1" class="form-label"> How many followers do you have on Discord / Telegram / Twitter? </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Followers" />
                  </div>
                  <div className="col-12 mt-2">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Where did you find us?</option>
                      <option value="partners">Partners</option>
                      <option value="google">Google</option>
                      <option value="email">Email</option>
                      <option value="Facebook">Facebook</option>
                      <option value="tiktok">Tiktok</option>
                      <option value="other">Other</option>
                    </select>
                  </div>




                  <div className="col-lg-12 col-12 mt-2">
                    <div class="form-check hny">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Would you like to participate in promotional activities?
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <div class="form-check hny">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Would you like to partner up with us and monetize your community?

                      </label>
                    </div>
                  </div>


                </div>


                <button type="submit" class="hny_common_btn mt-3 w-50 m-auto ">Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}
