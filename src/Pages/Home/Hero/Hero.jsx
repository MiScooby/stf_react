import React from "react";
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="SrbHeroSection">
      <div className="container">
        <div className="row">
          <div className="top-hero-head">
            <div className="section-head">
              <h2>Neext generation security</h2>
            </div>
            <div className="text-part" style={{width:'50%'}}>
              <p>
                STMX is a network of independent nodes that provide a
                decentralized encrypted databaser service.
              </p>
            </div>
            <Link className='hny_common_btn' to=''>Get Whitelisted</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
