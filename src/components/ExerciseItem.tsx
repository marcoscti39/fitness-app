import React from "react";
import { exerciseType } from "./ResultsSection";
import { StyledExerciseItem } from "../styles/styledExerciseItem";

const ExerciseItem: React.FC<exerciseType> = ({
  gifUrl,
  bodyPart,
  name,
  target,
}) => {
  return (
    <StyledExerciseItem>
      <img src={gifUrl} alt="" className="results-img" />
      <div className="results-body-tag">
        <span>{bodyPart}</span>
        <span>{target}</span>
      </div>
      <strong className="results-exercise-name">{name}</strong>
    </StyledExerciseItem>
  );
};

// const ExerciseItem = () => {
//   return (
//     <StyledExerciseItem>
//       <img src="" alt="" className="results-img" />
//       <div className="results-body-tag">
//         <span>oba</span>
//         <span>Triceps</span>
//       </div>
//       <strong className="results-exercise-name">aoba</strong>
//     </StyledExerciseItem>
//   );
// };
export default ExerciseItem;
