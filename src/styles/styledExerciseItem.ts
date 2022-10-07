import styled from "styled-components";

export const StyledExerciseItem = styled.article`
  display: flex;
  flex-direction: column;
  border-top: 5px rgb(161, 0, 0) solid;
  background-color: white;
  color: black;
  width: 400px;
  gap: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  color: black;
  text-decoration: none;
  transition: 200ms transform;
  &:hover {
    transform: scale(1.06);
  }

  .results-img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  .results-body-tag {
    display: flex;
    gap: 1rem;

    span {
      display: block;
      padding: 0.7rem;
      border-radius: 1rem;
      background-color: rgb(255, 204, 37);
      font-weight: 600;
      color: white;
    }
  }
  .results-exercise-name {
    font-size: 1.6rem;
    font-weight: 600;
    margin-left: 1rem;
    text-transform: capitalize;
  }
`;
