import { exerciseType } from "../components/ResultsSection";
import { baseUrl } from "./baseUrl";
import { options } from "./fetchOptions";

export const fetchAllExercises = async () => {
  const response = await fetch(`${baseUrl}/exercises`, options);
  const data: exerciseType[] = await response.json();
  return data;
};
