import React from 'react'
import './about.css'

export function About() {
    return (
        <>
            <section className='about_section common_sec_padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about_title">
                                <h2>What is NSTF Coin?</h2>
                                <div className='header_divider'></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-6 col-12">
                            <div className="about_img">
                                <img src="/about.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="right_sec">
                                <h6>NSTF or SatoshiFX token is a Solana based SPL token that is being used as the core of our
                                    fundraising and community building efforts. NSTF will be used to provide massive discounts on
                                    our platforms trading fees, minting fees, liquidity pool creation, launchpad and various other
                                    transactional benefits.</h6>
                                <p>NSTF coin remains as a cornerstone of the SatoshiFX platform, by providing a stabilized,
                                    sustainable business model to grow in value as the ecosystem grows.</p>
                                <div className='about_bot_card'>
                                    <p><img src="/check.png" alt="" /> <span>Transactional Fees - Trading / Gas / Pools and More</span></p>
                                    <p><img src="/check.png" alt="" /><span> Fork to Own EVMOS Blockchain</span></p>
                                    <p><img src="/check.png" alt="" /> <span>Currency & Storage of Value</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
