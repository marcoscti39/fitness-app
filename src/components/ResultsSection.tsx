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
import ExerciseItem from "./ExerciseItem";

export default function ResultsSection({
  exercises,
}: {
  exercises: exerciseType[];
}) {
  const pagNumber = Number(useParams().id) || 0;

  const exercisesSlice = exercises?.slice(pagNumber * 6, pagNumber * 6 + 6);

  return (
    <StyledResultsSection>
      <h2>Showing Results</h2>

      <div className="results-container">
        {exercisesSlice?.map((exercise, index) => {
          return (
            <Link
              key={index}
              to={`/exercise-details/${exercise.target}/${exercise.equipment}/${exercise.name}/${exercise.id}`}
            >
              <ExerciseItem {...exercise} />
            </Link>
          );
        })}
      </div>
    </StyledResultsSection>
  );
}
