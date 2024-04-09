import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  return (
    <>
      <header className='main_header'>
      <nav className={`navbar navbar-expand-lg bg-body-dark ${isOpen ? 'open ' : ''}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src="/logo.png" width="150px" alt="" /></Link>
            <button onClick={handleButtonClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/"> Overview</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">About NSTF</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">SatoshiFX</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Token</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Roadmap</Link>
                </li>

              </ul>
              <div className="d-flex right_header gap-20 align-items-center">
                <div className="log_innd"> 
                  <Link className='hny_common_btn' to="https://crm.satoshifx.com/login" target="_blank">Sign Up</Link>
                </div>
                <div className='hny_dividers'></div>
                <div className="white_list_lang">
                  <div className="white_lsst">
                    <Link to="/"><img src="/whitelist.png" width={"32px"} alt="" /></Link>
                    <Link to="/"><img src="/world.png" width={"30px"} alt="" /></Link>

                  </div>
                  {/* <div className="language">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select Language</option>
                      <option value="English">English</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Thai">Thai</option>
                      <option value="Malay">Malay</option>
                      <option value="Bahasa">Bahasa</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Urdu">Urdu</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
