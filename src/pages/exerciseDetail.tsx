import React, { useState } from "react";
import Header from "../components/Header";

import bodyPartIcon from "../../public/icons/body-part.png";
import equipmentIcon from "../../public/icons/equipment.png";
import targetIcon from "../../public/icons/target.png";

import {
  SectionTitle,
  StyledMain,
  StyledSectionVideos,
  StyledCarouselSection,
} from "../styles/styledExerciseDetail";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import ExerciseItem from "../components/ExerciseItem";
import { exerciseType } from "../components/ResultsSection";
import { fetchExerciseDetails } from "../api/fetchExerciseDetail";
import { Link, useParams } from "react-router-dom";
import { fetchTargetExercises } from "../api/fetchTargetExercises";
import { fetchEquimentExercises } from "../api/fetchEquipmentExercises";
import Footer from "../components/Footer";
import { content, fetchYoutube } from "../api/fetchYoutubeRecomendations";

export default function ExerciseDetail() {
  const { bodyTarget, exerciseEquipment, exerciseId, exerciseName } =
    useParams();
  const [youtubeVideos, setYoutubeVideos] = useState<content[]>([]);
  const [exerciseDetail, setExerciseDetail] = useState<exerciseType | null>(
    null
  );

  const [exercisesEquipment, setExercisesEquipment] = useState<exerciseType[]>(
    []
  );

  const [exercisesTarget, setExercisesTarget] = useState<exerciseType[]>([]);

  const carouselItemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log("render");
    const getExerciseData = async () => {
      const exerciseData = await fetchExerciseDetails(exerciseId!);
      const exerciseTargetData = await fetchTargetExercises(bodyTarget!);
      const exerciseEquipmentData = await fetchEquimentExercises(
        exerciseEquipment!
      );
      setExerciseDetail(exerciseData);
      setExercisesTarget(exerciseTargetData);
      setExercisesEquipment(exerciseEquipmentData);
    };

    const getYoutubeRecomendations = async () => {
      const youtubeData = await fetchYoutube(exerciseName!);
      setYoutubeVideos(youtubeData.contents);
    };

    getExerciseData();
    getYoutubeRecomendations();
  }, []);
  return (
    <>
      <Header />
      <StyledMain>
        <img
          className="exercise-hero-img"
          src={exerciseDetail?.gifUrl}
          alt=""
        />
        <article>
          <h1>{exerciseDetail?.name}</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum
            ad deserunt. Quos, iure! Pariatur unde reprehenderit placeat quidem
            fugit quia ipsa, soluta dignissimos quo ipsam facere voluptatum
            quaerat ipsum!
          </p>

          <div className="body-target-wrapper">
            <div className="body-target">
              <img className="body-icon" src={bodyPartIcon} />
              <span>{exerciseDetail?.target}</span>
            </div>
            <div className="body-target">
              <img className="body-icon" src={equipmentIcon} />
              <span>{exerciseDetail?.bodyPart}</span>
            </div>
            <div className="body-target">
              <img className="body-icon" src={targetIcon} />
              <span>{exerciseDetail?.equipment}</span>
            </div>
          </div>
        </article>
      </StyledMain>

      <StyledSectionVideos>
        <SectionTitle>
          Watch <span>{exerciseDetail?.name}</span> exercise videos
        </SectionTitle>

        <div className="videos-container">
          {youtubeVideos.slice(0, 3).map(({ video }, index) => (
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              key={index}
            >
              <article className="video-item">
                <img
                  src={video.thumbnails[0].url}
                  alt=""
                  className="video-thumbnail"
                />
                <div className="video-description-wrapper">
                  <strong>{video.title}</strong>
                  <span>{video.channelName}</span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </StyledSectionVideos>

      <StyledCarouselSection>
        <SectionTitle>
          Similar <span>Target Muscle</span> exercises
        </SectionTitle>
        <Carousel
          carouselItemRef={carouselItemRef}
          carouselLength={exercisesTarget.length}
          forceRender={exerciseDetail}
        >
          {exercisesTarget?.map((exercise, index) => (
            <CarouselItem key={index} ref={carouselItemRef}>
              <Link
                to={`/exercise-details/${exercise.target}/${exercise.equipment}/${exercise.id}`}
                reloadDocument
              >
                <ExerciseItem {...exercise} />
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </StyledCarouselSection>

      <StyledCarouselSection>
        <SectionTitle>
          Similar <span>Equipment</span> exercises
        </SectionTitle>
        <Carousel
          carouselItemRef={carouselItemRef}
          carouselLength={exercisesEquipment.length}
          forceRender={exerciseDetail}
        >
          {exercisesEquipment?.map((exercise, index) => (
            <CarouselItem key={index} ref={carouselItemRef}>
              <Link
                to={`/exercise-details/${exercise.target}/${exercise.equipment}/${exercise.id}`}
                reloadDocument
              >
                <ExerciseItem {...exercise} />
              </Link>
            </CarouselItem>
          ))}
        </Carousel>
      </StyledCarouselSection>
      <Footer />
    </>
  );
}
