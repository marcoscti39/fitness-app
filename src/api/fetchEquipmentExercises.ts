import { exerciseType } from "../components/ResultsSection";
import { baseUrl } from "./baseUrl";
import { options } from "./fetchOptions";

export const fetchEquimentExercises = async (equipment: string) => {
  const response = await fetch(
    `${baseUrl}/exercises/equipment/${equipment}`,
    options
  );
  const data: exerciseType[] = await response.json();
  return data;
};
