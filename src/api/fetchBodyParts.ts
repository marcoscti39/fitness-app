import { baseUrl } from "./baseUrl";
import { options } from "./fetchOptions";

export const fetchBodyParts = async () => {
  const response = await fetch(`${baseUrl}/exercises/bodyPartList`, options);
  const data: string[] = await response.json();
  return data;
};
