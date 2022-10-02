import React from "react";
import Header from "../components/Header";

import bodyPartIcon from "../../public/icons/body-part.png";
import equipmentIcon from "../../public/icons/equipment.png";
import targetIcon from "../../public/icons/target.png";

import {
  SectionTitle,
  StyledMain,
  StyledSectionVideos,
} from "../styles/styledExerciseDetail";

export default function ExerciseDetail() {
  return (
    <>
      <Header />
      <StyledMain>
        <img className="exercise-hero-img" src="" alt="" />
        <article>
          <h1>Barbell Arternate Biceps Curl</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum
            ad deserunt. Quos, iure! Pariatur unde reprehenderit placeat quidem
            fugit quia ipsa, soluta dignissimos quo ipsam facere voluptatum
            quaerat ipsum!
          </p>

          <div className="body-target-wrapper">
            <div className="body-target">
              <img className="body-icon" src={bodyPartIcon} />
              <span>Upper Arms</span>
            </div>
            <div className="body-target">
              <img className="body-icon" src={equipmentIcon} />
              <span>Biceps</span>
            </div>
            <div className="body-target">
              <img className="body-icon" src={targetIcon} />
              <span>Barbell</span>
            </div>
          </div>
        </article>
      </StyledMain>

      <StyledSectionVideos>
        <SectionTitle>
          Watch <span>Barbell Alternate Biceps Curl</span> exercise videos
        </SectionTitle>

        <div className="videos-container">
          <a href="#">
            <article className="video-item">
              <img src="" alt="" className="video-thumbnail" />
              <div className="video-description-wrapper">
                <strong>How to: alternating dumbbel curl</strong>
                <span>ScotHermanFitness</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className="video-item">
              <img src="" alt="" className="video-thumbnail" />
              <div className="video-description-wrapper">
                <strong>How to: alternating dumbbel curl</strong>
                <span>ScotHermanFitness</span>
              </div>
            </article>
          </a>
          <a href="#">
            <article className="video-item">
              <img src="" alt="" className="video-thumbnail" />
              <div className="video-description-wrapper">
                <strong>How to: alternating dumbbel curl</strong>
                <span>ScotHermanFitness</span>
              </div>
            </article>
          </a>
        </div>
      </StyledSectionVideos>
    </>
  );
}
