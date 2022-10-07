import { exerciseType } from "../components/ResultsSection";
import { baseUrl } from "./baseUrl";
import { options } from "./fetchOptions";

export const fetchByBodyParts = async (bodyPart: string) => {
  const response = await fetch(
    `${baseUrl}/exercises/bodyPart/${bodyPart}`,
    options
  );
  const data: exerciseType[] = await response.json();
  return data;
};
