import React from 'react'

export function Video() {
    return (
        <>
            <section className='about_section common_sec_padding'>
                <div className="container">
                    {/* <div className="row">
                        <div className="col-12">
                            <div className="about_title">
                                <h2>What is NSTF Coin?</h2>
                                <div className='header_divider'></div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/video_img.png" width={"100%"} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className='main_video' >
                                <video width="100%" height="340" loop autoplay muted>
                                    <source src="./satoshifx.mp4" type="video/mp4" />
                                </video>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
