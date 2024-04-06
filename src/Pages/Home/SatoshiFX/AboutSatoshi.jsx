import React from 'react'
import './absatoshi.css'
import { Link } from 'react-router-dom'

export function AboutSatoshi() {
    return (
        <>

            <section className='about_satoshifx common_sec_padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about_title">
                                <h2>What is SatoshiFX?</h2>
                                <div className='header_divider'></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="right_sec">
                                <div className="text-part">
                                    <p>SatoshiFX is a seamless ecosystem of our CEX - DEX and Derivatives platform coupled with
                                        our own payment gateway and end to end blockchain services allowing users to access blazing
                                        fast speeds in exploring multiple opportunities in the crypto space.
                                    </p>
                                </div>
                                <div className='about_satoshi'>
                                    <h4>How does NSTF work with SatoshiFX?</h4>
                                    <ul className='list_satohifx'>
                                        <li><img src="/check-mark.png" alt="" /> <span> NSTF provides upto 100% discount on most transactional fees on the platform.</span></li>
                                        <li><img src="/check-mark.png" alt="" /><span> NSFT works as a referral + reward system for influencers, KOL marketeers and affiliates.</span></li>
                                        <li><img src="/check-mark.png" alt="" /><span> Upon reaching $25M Marketcap, NSTF will be forked on our own Layer 1 EVMOS blockchain, where we will be building an ecosystem of DAPP Store for Degoogled Android Phones.</span> </li>
                                        <li><img src="/check-mark.png" alt="" /><span> NSTF is designed to provide investors with raw value over a period of time.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about_fx_img">
                                <img src="/ab_satoshifx.png" width={"100%"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-12 mt-2">
                            <div className="fx_card">
                                <div className='rati_strip'>SatoshiFX</div>
                                <h5>Explore SatoshiFX <br /> CEX</h5>
                                <Link to="javascript:;" className="hny_common_btn ">CRM Login</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 mt-2">
                            <div className="fx_card">
                                <div className='rati_strip'>SatoshiFX</div>
                                <h5>Explore SatoshiFX  <br /> DEX</h5>
                                <Link to="javascript:;" className="hny_common_btn ">Coming Soon</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 mt-2">
                            <div className="fx_card">
                                <div className='rati_strip'>SatoshiFX</div>
                                <h5>Explore SatoshiFX  <br /> Derivatives</h5>
                                <Link to="javascript:;" className="hny_common_btn ">CRM Login</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 mt-2">
                            <div className="fx_card">
                            <div className='rati_strip'>SatoshiFX</div>
                                <h5>Explore <br /> SatoshiChain</h5>
                                <Link to="javascript:;" className="hny_common_btn ">Coming Soon</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
