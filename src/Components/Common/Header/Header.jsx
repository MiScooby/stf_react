import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { languages } from "../../../../utils/LanguageList";
import Cookies from "js-cookie";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  const handleLanguageChange = (language) => {
    Cookies.remove("googtrans");
    Cookies.set("googtrans", `/en/${language}`);
    window.location.reload();
  };
  const selectedLanguage = Cookies.get("googtrans");

  return (
    <>
      <header className="main_header">
        <nav
          className={`navbar navbar-expand-lg bg-body-dark ${
            isOpen ? "open " : ""
          }`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" width="150px" alt="" />
            </Link>
            <button
              onClick={handleButtonClick}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    {" "}
                    Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About NSTF
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    SatoshiFX
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Token
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Roadmap
                  </Link>
                </li>
              </ul>
              <div className="d-flex right_header gap-20 align-items-center">
                <div className="log_innd">
                  <Link
                    className="hny_common_btn"
                    to="https://crm.satoshifx.com/login"
                    target="_blank"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="hny_dividers"></div>
                <div className="white_list_lang">
                  <div className="white_lsst">
                    <Link to="/">
                      <img src="/whitelist.png" width={"32px"} alt="" />
                    </Link>
                    <Link to="/">
                      <img src="/world.png" width={"30px"} alt="" />
                    </Link>

                    <div className="language">
                      <select
                        onChange={(e) => {
                          handleLanguageChange(e.target.value);
                        }}
                        class="form-select srb-select"
                        translate="no"
                        placeholder={``}
                      >
                        {languages &&
                          languages?.map((language, index) => (
                            <option
                              selected={
                                selectedLanguage == `/en/${language.abbr}`
                                  ? true
                                  : false
                              }
                              key={index}
                              value={language.abbr}
                            >
                              {language.language}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
