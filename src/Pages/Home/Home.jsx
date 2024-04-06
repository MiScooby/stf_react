import React from "react";
import { Hero } from "./Hero/Hero";
import { About } from "./HomeAbout/About";
import { Finance } from "./Finance/Finance";
import RoadmapComponent from "./Roadmap/Roadmap";

 
export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Finance />

      <RoadmapComponent />
    </>
  );
}
