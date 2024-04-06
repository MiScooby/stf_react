
import React from 'react'
import { Hero } from './Hero/Hero'
import { About } from './HomeAbout/About'
import { Finance } from "./Finance/Finance";
import RoadmapComponent from "./Roadmap/Roadmap";
import { AboutSatoshi } from './SatoshiFX/AboutSatoshi';
import { Bonus } from './Bonus/Bonus';



export function Home() {
  return (
    <>
      <Hero />
      <About />
      <AboutSatoshi />
      <Finance />
      <RoadmapComponent />
      <Bonus />
    </>
  );
}
