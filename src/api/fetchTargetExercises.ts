import { exerciseType } from "../components/ResultsSection";
import { baseUrl } from "./baseUrl";
import { options } from "./fetchOptions";

export const fetchTargetExercises = async (target: string) => {
  const response = await fetch(
    `${baseUrl}/exercises/target/${target}`,
    options
  );
  const data: exerciseType[] = await response.json();
  return data;
};
