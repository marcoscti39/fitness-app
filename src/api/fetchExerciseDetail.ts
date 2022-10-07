import { exerciseType } from "../components/ResultsSection";
import { baseUrl } from "./baseUrl";
import { options } from "./fetchOptions";

export const fetchExerciseDetails = async (id: string) => {
  const response = await fetch(`${baseUrl}/exercises/exercise/${id}`, options);
  const data: exerciseType = await response.json();
  return data;
};
