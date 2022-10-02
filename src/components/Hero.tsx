import React from "react";

import { SectionHero, MainHero } from "../styles/styledHero";

import heroImg from "../../public/images/banner.png";

export default function Hero() {
  return (
    <MainHero>
      <SectionHero>
        <strong>Fitness Club</strong>
        <h1>Sweat, Smile And Repeat</h1>

        <span>Check out the most effective Exercises</span>

        <button>Explore Exercises</button>
      </SectionHero>
      <img className="hero-img" src={heroImg} alt="" />
      <div className="exercise-text">Exercise</div>
    </MainHero>
  );
}
