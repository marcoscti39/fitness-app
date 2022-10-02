import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllExercises } from "../api/fetchAllExercises";

export interface exerciseType {
  bodyPart: "string";
  equipment: "string";
  gifUrl: "string";
  id: "string";
  name: "string";
  target: "string";
}

import { StyledResultsSection } from "../styles/styledResultsSection";

export default function ResultsSection() {
  const [allExercises, setAllExercises] = React.useState<exerciseType[]>([]);
  React.useEffect(() => {
    const getAllExercises = async () => {
      setAllExercises(await fetchAllExercises());
    };
    // getAllExercises();
  }, []);

  const pagNumber = Number(useParams().id) || 0;

  const exercisesSlice = allExercises?.slice(pagNumber * 6, pagNumber * 6 + 6);

  console.log(pagNumber);

  return (
    <StyledResultsSection>
      <h2>Showing Results</h2>

      <div className="results-container">
        {exercisesSlice?.map((exercise, index) => {
          return (
            <Link
              key={index}
              to={`/exercise-details/${exercise.bodyPart}/${exercise.id}`}
            >
              <article>
                <img src={exercise.gifUrl} alt="" className="results-img" />
                <div className="results-body-tag">
                  <span>{exercise.bodyPart}</span>
                  <span>Triceps</span>
                </div>
                <strong className="results-exercise-name">
                  {exercise.name}
                </strong>
              </article>
            </Link>
          );
        })}
      </div>
    </StyledResultsSection>
  );
}
