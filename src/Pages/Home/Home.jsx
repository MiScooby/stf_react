import React from 'react'
import { Hero } from './Hero/Hero'
import { About } from './HomeAbout/About'
import { AboutSatoshi } from './SatoshiFX/AboutSatoshi'


export function Home() {
  return (
    <>
      <Hero />
      <About />
      <AboutSatoshi />

    </>
  )
}
